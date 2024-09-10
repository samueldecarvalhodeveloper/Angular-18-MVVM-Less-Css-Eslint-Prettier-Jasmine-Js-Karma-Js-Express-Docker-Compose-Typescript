import { ComponentFixture, TestBed } from "@angular/core/testing";
import Calculator from "../../../../app/components/calculator/calculator.component";
import {
  CALCULATOR_TITLE_HTML_ELEMENT,
  CALCULATOR_TITLE_INNER_TEXT,
  CALCULATOR_VALUE_HTML_ELEMENT,
  SIMPLE_CALCULATOR_CALCULATION_EXPRESSION,
} from "../../../../app/constants/user_interface_constants";

describe('Test Component "Calculator" Behavior', () => {
  let fixture: ComponentFixture<Calculator>;
  let component: Calculator;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculator],
    }).compileComponents();

    fixture = TestBed.createComponent(Calculator);
    component = fixture.componentInstance;
  });

  it("Test If Component Is Rendered", () => {
    component.value = SIMPLE_CALCULATOR_CALCULATION_EXPRESSION;

    fixture.detectChanges();

    const compiledComponent = fixture.nativeElement as HTMLElement;

    expect(
      compiledComponent.querySelector(CALCULATOR_TITLE_HTML_ELEMENT)?.innerText,
    ).toEqual(CALCULATOR_TITLE_INNER_TEXT);

    expect(
      compiledComponent.querySelector(CALCULATOR_VALUE_HTML_ELEMENT)?.innerText,
    ).toContain(SIMPLE_CALCULATOR_CALCULATION_EXPRESSION);
  });
});
