import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CALCULATOR_BUTTON_HTML_ELEMENT } from "../../../../app/constants/user_interface_constants";
import Button from "../../../../app/components/button/button.component";
import CalculatorCharacters from "../../../../app/domains/calculator/calculator_characters";

describe('Test Component "Button" Behavior', () => {
  let fixture: ComponentFixture<Button>;
  let component: Button;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button],
    }).compileComponents();

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
  });

  it("Test If Component Is Rendered", () => {
    component.character = CalculatorCharacters.ONE;

    fixture.detectChanges();

    const compiledComponent = fixture.nativeElement as HTMLElement;

    expect(
      compiledComponent.querySelector(CALCULATOR_BUTTON_HTML_ELEMENT)
        ?.innerText,
    ).toEqual(CalculatorCharacters.ONE);
  });
});
