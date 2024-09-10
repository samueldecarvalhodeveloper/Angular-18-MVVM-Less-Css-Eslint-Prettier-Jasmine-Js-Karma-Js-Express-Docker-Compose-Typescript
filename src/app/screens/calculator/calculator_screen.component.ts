import { Component } from "@angular/core";
import Button from "../../components/button/button.component";
import Keyboard from "../../components/keyboard/keyboard.component";
import CalculatorFrame from "../../components/calculator/calculator.component";
import CalculatorViewModel from "../../view_models/calculator_view_model";
import CalculatorCharacters from "../../domains/calculator/calculator_characters";
import UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter from "../../infrastructure/concerns/update_calculation_expression_value_on_user_interface_calculator_adapter";

@Component({
  selector: "calculator-screen",
  standalone: true,
  imports: [CalculatorFrame, Keyboard, Button],
  templateUrl: "./template.html",
  styleUrl: "./styles.less",
})
class CalculatorScreen {
  private calculatorViewModel: CalculatorViewModel;

  public calculatorValue!: string;

  public constructor(calculatorViewModel: CalculatorViewModel) {
    this.calculatorViewModel = calculatorViewModel;
  }

  public ngOnInit() {
    this.calculatorValue = this.calculatorViewModel.getCalculationExpression();
  }

  public handleCleanButtonClickEvent(): void {
    this.calculatorViewModel.cleanCalculationExpression();

    UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter.updateCalculationExpressionValueOnUserInterfaceCalculatorComponent(
      this,
      this.calculatorViewModel,
    );
  }

  public handleBackspaceButtonClickEvent(): void {
    this.calculatorViewModel.backspaceCalculationExpression();

    UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter.updateCalculationExpressionValueOnUserInterfaceCalculatorComponent(
      this,
      this.calculatorViewModel,
    );
  }

  public handleEvaluateButtonClickEvent(): void {
    this.calculatorViewModel.evaluateCalculationExpression();

    UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter.updateCalculationExpressionValueOnUserInterfaceCalculatorComponent(
      this,
      this.calculatorViewModel,
    );
  }

  public handleDivisionButtonClickEvent(): void {
    this.calculatorViewModel.addCharacterToCalculationExpression(
      CalculatorCharacters.DIVISION,
    );

    UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter.updateCalculationExpressionValueOnUserInterfaceCalculatorComponent(
      this,
      this.calculatorViewModel,
    );
  }

  public handleMultiplicationButtonClickEvent(): void {
    this.calculatorViewModel.addCharacterToCalculationExpression(
      CalculatorCharacters.MULTIPLICATION,
    );

    UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter.updateCalculationExpressionValueOnUserInterfaceCalculatorComponent(
      this,
      this.calculatorViewModel,
    );
  }

  public handleSevenButtonClickEvent(): void {
    this.calculatorViewModel.addCharacterToCalculationExpression(
      CalculatorCharacters.SEVEN,
    );

    UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter.updateCalculationExpressionValueOnUserInterfaceCalculatorComponent(
      this,
      this.calculatorViewModel,
    );
  }

  public handleEightButtonClickEvent(): void {
    this.calculatorViewModel.addCharacterToCalculationExpression(
      CalculatorCharacters.EIGHT,
    );

    UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter.updateCalculationExpressionValueOnUserInterfaceCalculatorComponent(
      this,
      this.calculatorViewModel,
    );
  }

  public handleNineButtonClickEvent(): void {
    this.calculatorViewModel.addCharacterToCalculationExpression(
      CalculatorCharacters.NINE,
    );

    UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter.updateCalculationExpressionValueOnUserInterfaceCalculatorComponent(
      this,
      this.calculatorViewModel,
    );
  }

  public handleAdditionButtonClickEvent(): void {
    this.calculatorViewModel.addCharacterToCalculationExpression(
      CalculatorCharacters.ADDITION,
    );

    UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter.updateCalculationExpressionValueOnUserInterfaceCalculatorComponent(
      this,
      this.calculatorViewModel,
    );
  }

  public handleFourButtonClickEvent(): void {
    this.calculatorViewModel.addCharacterToCalculationExpression(
      CalculatorCharacters.FOUR,
    );

    UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter.updateCalculationExpressionValueOnUserInterfaceCalculatorComponent(
      this,
      this.calculatorViewModel,
    );
  }

  public handleFiveButtonClickEvent(): void {
    this.calculatorViewModel.addCharacterToCalculationExpression(
      CalculatorCharacters.FIVE,
    );

    UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter.updateCalculationExpressionValueOnUserInterfaceCalculatorComponent(
      this,
      this.calculatorViewModel,
    );
  }

  public handleSixButtonClickEvent(): void {
    this.calculatorViewModel.addCharacterToCalculationExpression(
      CalculatorCharacters.SIX,
    );

    UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter.updateCalculationExpressionValueOnUserInterfaceCalculatorComponent(
      this,
      this.calculatorViewModel,
    );
  }

  public handleSubtractionButtonClickEvent(): void {
    this.calculatorViewModel.addCharacterToCalculationExpression(
      CalculatorCharacters.SUBTRACTION,
    );

    UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter.updateCalculationExpressionValueOnUserInterfaceCalculatorComponent(
      this,
      this.calculatorViewModel,
    );
  }

  public handleOneButtonClickEvent(): void {
    this.calculatorViewModel.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter.updateCalculationExpressionValueOnUserInterfaceCalculatorComponent(
      this,
      this.calculatorViewModel,
    );
  }

  public handleTwoButtonClickEvent(): void {
    this.calculatorViewModel.addCharacterToCalculationExpression(
      CalculatorCharacters.TWO,
    );

    UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter.updateCalculationExpressionValueOnUserInterfaceCalculatorComponent(
      this,
      this.calculatorViewModel,
    );
  }

  public handleThreeButtonClickEvent(): void {
    this.calculatorViewModel.addCharacterToCalculationExpression(
      CalculatorCharacters.THREE,
    );

    UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter.updateCalculationExpressionValueOnUserInterfaceCalculatorComponent(
      this,
      this.calculatorViewModel,
    );
  }

  public handleZeroButtonClickEvent(): void {
    this.calculatorViewModel.addCharacterToCalculationExpression(
      CalculatorCharacters.ZERO,
    );

    UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter.updateCalculationExpressionValueOnUserInterfaceCalculatorComponent(
      this,
      this.calculatorViewModel,
    );
  }

  public handlePointButtonClickEvent(): void {
    this.calculatorViewModel.addCharacterToCalculationExpression(
      CalculatorCharacters.POINT,
    );

    UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter.updateCalculationExpressionValueOnUserInterfaceCalculatorComponent(
      this,
      this.calculatorViewModel,
    );
  }
}

export default CalculatorScreen;
