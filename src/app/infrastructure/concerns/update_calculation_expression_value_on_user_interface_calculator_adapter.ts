import CalculatorScreen from "../../screens/calculator/calculator_screen.component";
import CalculatorViewModel from "../../view_models/calculator_view_model";

class UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter {
  private constructor() {}

  public static updateCalculationExpressionValueOnUserInterfaceCalculatorComponent(
    calculatorScreen: CalculatorScreen,
    calculatorViewModel: CalculatorViewModel,
  ): void {
    calculatorScreen.calculatorValue =
      calculatorViewModel.getCalculationExpression();
  }
}

export default UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter;
