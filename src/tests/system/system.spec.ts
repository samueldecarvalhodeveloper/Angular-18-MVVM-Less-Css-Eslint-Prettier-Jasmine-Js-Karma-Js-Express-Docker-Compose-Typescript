import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import CalculationExpression from "../../app/domains/calculator/calculation_expression";
import CalculationExpressionActiveRecord from "../../app/domains/calculator/calculation_expression_active_record";
import CalculationExpressionActiveRecordDecorator from "../../app/domains/calculator/calculation_expression_active_record_decorator";
import CalculationExpressionRegister from "../../app/domains/calculator/calculation_expression_register";
import Calculator from "../../app/domains/calculator/calculator";
import CalculatorCharacters from "../../app/domains/calculator/calculator_characters";
import CalculatorScreen from "../../app/screens/calculator/calculator_screen.component";
import CalculatorViewModel from "../../app/view_models/calculator_view_model";
import LastSessionCalculationExpressionStore from "../../app/infrastructure/anticorruption_layer/last_session_calculation_expression_store";
import {
  ADDITION_BUTTON_TEST_ID,
  CALCULATOR_VALUE_TEST_ID,
  CLICK_EVENT,
  DATA_TEST_ID_CSS_SELECTOR,
  EVALUATE_BUTTON_TEST_ID,
  ONE_BUTTON_TEST_ID,
} from "../../app/constants/user_interface_constants";

describe("Test System Behavior", () => {
  let fixture: ComponentFixture<CalculatorScreen>;
  let debugComponent: DebugElement;

  beforeEach(async () => {
    LastSessionCalculationExpressionStore.setExpression("");

    await TestBed.configureTestingModule({
      providers: [
        {
          provide: CalculationExpression,
          useFactory: () => {
            const storedCalculationExpressionFromLastSession =
              LastSessionCalculationExpressionStore.getExpression();
            return new CalculationExpression(
              storedCalculationExpressionFromLastSession,
            );
          },
        },
        {
          provide: CalculationExpressionRegister,
          deps: [CalculationExpression],
          useFactory: (calculationExpression: CalculationExpression) =>
            new CalculationExpressionRegister(calculationExpression),
        },
        {
          provide: CalculationExpressionActiveRecord,
          deps: [CalculationExpressionRegister],
          useFactory: (
            calculationExpressionRegister: CalculationExpressionRegister,
          ) =>
            new CalculationExpressionActiveRecordDecorator(
              calculationExpressionRegister,
            ),
        },
        {
          provide: Calculator,
          deps: [CalculationExpressionActiveRecord],
          useFactory: (
            calculationExpressionActiveRecord: CalculationExpressionActiveRecord,
          ) => new Calculator(calculationExpressionActiveRecord),
        },
        {
          provide: CalculatorViewModel,
          deps: [Calculator],
          useFactory: (calculator: Calculator) =>
            new CalculatorViewModel(calculator),
        },
      ],
      imports: [CalculatorScreen],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorScreen);
    debugComponent = fixture.debugElement;
  });

  it("Test If System Executes A Calculation On User Interface", () => {
    const calculatorValueElement = debugComponent.query(
      By.css(DATA_TEST_ID_CSS_SELECTOR(CALCULATOR_VALUE_TEST_ID)),
    ).nativeElement as HTMLElement;

    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(ONE_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(ADDITION_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(ONE_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(EVALUATE_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);

    fixture.detectChanges();

    expect(calculatorValueElement.innerText).toEqual(CalculatorCharacters.TWO);
  });

  it("Test If System Stores Last Session Calculation Expression To The Next Session", () => {
    const calculatorValueElement = debugComponent.query(
      By.css(DATA_TEST_ID_CSS_SELECTOR(CALCULATOR_VALUE_TEST_ID)),
    ).nativeElement as HTMLElement;

    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(ONE_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(ADDITION_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(ONE_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);

    fixture.detectChanges();

    const storedCalculationExpressionToNextSession =
      LastSessionCalculationExpressionStore.getExpression();

    expect(storedCalculationExpressionToNextSession).toEqual(
      calculatorValueElement.innerText,
    );
  });
});
