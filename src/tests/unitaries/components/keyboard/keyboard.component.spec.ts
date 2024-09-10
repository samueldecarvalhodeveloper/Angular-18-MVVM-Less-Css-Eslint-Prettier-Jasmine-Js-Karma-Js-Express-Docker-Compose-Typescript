import { ComponentFixture, TestBed } from "@angular/core/testing";
import Keyboard from "../../../../app/components/keyboard/keyboard.component";
import { CALCULATOR_KEYBOARD_HTML_ELEMENT } from "../../../../app/constants/user_interface_constants";

describe('Test Component "Keyboard" Behavior', () => {
  let fixture: ComponentFixture<Keyboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Keyboard],
    }).compileComponents();

    fixture = TestBed.createComponent(Keyboard);
  });

  it("Test If Component Is Rendered", () => {
    const compiledComponent = fixture.nativeElement as HTMLElement;

    expect(
      compiledComponent.querySelector(CALCULATOR_KEYBOARD_HTML_ELEMENT),
    ).toBeTruthy();
  });
});
