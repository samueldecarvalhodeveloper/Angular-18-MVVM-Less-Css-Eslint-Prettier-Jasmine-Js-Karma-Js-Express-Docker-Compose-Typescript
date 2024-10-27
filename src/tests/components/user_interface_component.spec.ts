import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import CalculatorScreen from "../../app/screens/calculator/calculator_screen.component";
import CalculationExpressionActiveRecordDecorator from "../../app/domains/calculator/calculation_expression_active_record_decorator";
import CalculationExpressionActiveRecord from "../../app/domains/calculator/calculation_expression_active_record";
import CalculatorViewModel from "../../app/view_models/calculator_view_model";
import CalculationExpressionRegister from "../../app/domains/calculator/calculation_expression_register";
import CalculationExpression from "../../app/domains/calculator/calculation_expression";
import LastSessionCalculationExpressionStore from "../../app/infrastructure/anticorruption_layer/last_session_calculation_expression_store";
import Calculator from "../../app/domains/calculator/calculator";
import {
  ADDITION_BUTTON_TEST_ID,
  BACKSPACE_BUTTON_TEST_ID,
  CALCULATOR_TITLE_HTML_ELEMENT,
  CALCULATOR_TITLE_INNER_TEXT,
  CALCULATOR_VALUE_HTML_ELEMENT,
  CALCULATOR_VALUE_TEST_ID,
  CLEAN_BUTTON_TEST_ID,
  CLICK_EVENT,
  DATA_TEST_ID_CSS_SELECTOR,
  DIVISION_BUTTON_TEST_ID,
  EIGHT_BUTTON_TEST_ID,
  EVALUATE_BUTTON_TEST_ID,
  FIVE_BUTTON_TEST_ID,
  FOUR_BUTTON_TEST_ID,
  MULTIPLICATION_BUTTON_TEST_ID,
  NINE_BUTTON_TEST_ID,
  ONE_BUTTON_TEST_ID,
  POINT_BUTTON_TEST_ID,
  SEVEN_BUTTON_TEST_ID,
  SIX_BUTTON_TEST_ID,
  SUBTRACTION_BUTTON_TEST_ID,
  THREE_BUTTON_TEST_ID,
  TWO_BUTTON_TEST_ID,
  ZERO_BUTTON_TEST_ID,
} from "../../app/constants/user_interface_constants";
import CalculatorCharacters from "../../app/domains/calculator/calculator_characters";

describe('Test Component "Calculator" Behavior', () => {
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

  it("Components Rendering", () => {
    const compiledComponent = fixture.nativeElement as HTMLElement;

    expect(
      compiledComponent.querySelector(CALCULATOR_TITLE_HTML_ELEMENT)?.innerText,
    ).toEqual(CALCULATOR_TITLE_INNER_TEXT);

    expect(
      compiledComponent.querySelector(CALCULATOR_VALUE_HTML_ELEMENT)?.innerText,
    ).toBeFalsy();
  });

  it("Test Button Handlers Doing Their Role And Update Calculator Value On User Interface", () => {
    const calculatorValueElement = debugComponent.query(
      By.css(DATA_TEST_ID_CSS_SELECTOR(CALCULATOR_VALUE_TEST_ID)),
    ).nativeElement as HTMLElement;

    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(ZERO_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(ONE_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(TWO_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(THREE_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(FOUR_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(FIVE_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(SIX_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(SEVEN_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(EIGHT_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(NINE_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(ADDITION_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(SUBTRACTION_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(MULTIPLICATION_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(DIVISION_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(POINT_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);

    fixture.detectChanges();

    expect(calculatorValueElement.innerText).toEqual(
      CalculatorCharacters.ZERO +
        CalculatorCharacters.ONE +
        CalculatorCharacters.TWO +
        CalculatorCharacters.THREE +
        CalculatorCharacters.FOUR +
        CalculatorCharacters.FIVE +
        CalculatorCharacters.SIX +
        CalculatorCharacters.SEVEN +
        CalculatorCharacters.EIGHT +
        CalculatorCharacters.NINE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.SUBTRACTION +
        CalculatorCharacters.MULTIPLICATION +
        CalculatorCharacters.DIVISION +
        CalculatorCharacters.POINT,
    );
  });

  it("Test Evaluate Button Evaluating Calculation Expression", () => {
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

  it("Test Clean Button Cleaning Calculation Expression", () => {
    const calculatorValueElement = debugComponent.query(
      By.css(DATA_TEST_ID_CSS_SELECTOR(CALCULATOR_VALUE_TEST_ID)),
    ).nativeElement as HTMLElement;

    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(ONE_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(ONE_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(CLEAN_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);

    fixture.detectChanges();

    expect(calculatorValueElement.innerText).toEqual("");
  });

  it("Test Backspace Button Backspacing Calculation Expression", () => {
    const calculatorValueElement = debugComponent.query(
      By.css(DATA_TEST_ID_CSS_SELECTOR(CALCULATOR_VALUE_TEST_ID)),
    ).nativeElement as HTMLElement;

    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(ONE_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(ONE_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);
    debugComponent
      .query(By.css(DATA_TEST_ID_CSS_SELECTOR(BACKSPACE_BUTTON_TEST_ID)))
      .triggerEventHandler(CLICK_EVENT);

    fixture.detectChanges();

    expect(calculatorValueElement.innerText).toEqual(CalculatorCharacters.ONE);
  });
});
