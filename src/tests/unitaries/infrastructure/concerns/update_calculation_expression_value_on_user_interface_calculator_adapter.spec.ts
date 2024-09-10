import CalculationExpression from "../../../../app/domains/calculator/calculation_expression";
import CalculationExpressionActiveRecord from "../../../../app/domains/calculator/calculation_expression_active_record";
import CalculationExpressionActiveRecordDecorator from "../../../../app/domains/calculator/calculation_expression_active_record_decorator";
import CalculationExpressionRegister from "../../../../app/domains/calculator/calculation_expression_register";
import Calculator from "../../../../app/domains/calculator/calculator";
import CalculatorCharacters from "../../../../app/domains/calculator/calculator_characters";
import UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter from "../../../../app/infrastructure/concerns/update_calculation_expression_value_on_user_interface_calculator_adapter";
import CalculatorScreen from "../../../../app/screens/calculator/calculator_screen.component";
import CalculatorViewModel from "../../../../app/view_models/calculator_view_model";

describe('Test Class "UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter" Behavior', () => {
  let calculatorScreen: CalculatorScreen;
  let calculatorViewModel: CalculatorViewModel;

  beforeAll(() => {
    const calculationExpression: CalculationExpression =
      new CalculationExpression("");
    const calculationExpressionRegister: CalculationExpressionRegister =
      new CalculationExpressionRegister(calculationExpression);
    const calculationExpressionActiveRecord: CalculationExpressionActiveRecord =
      new CalculationExpressionActiveRecordDecorator(
        calculationExpressionRegister,
      );
    const calculator = new Calculator(calculationExpressionActiveRecord);

    calculatorViewModel = new CalculatorViewModel(calculator);

    calculatorScreen = new CalculatorScreen(calculatorViewModel);
  });

  it('Test If Method "updateCalculationExpressionValueOnUserInterfaceCalculatorComponent" Updates Calculator Screen Value With Current Calculator View Model Calculator Calculation Expression', () => {
    calculatorViewModel.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );
    calculatorViewModel.addCharacterToCalculationExpression(
      CalculatorCharacters.ADDITION,
    );
    calculatorViewModel.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    UpdateCalculationExpressionValueOnUserInterfaceCalculatorAdapter.updateCalculationExpressionValueOnUserInterfaceCalculatorComponent(
      calculatorScreen,
      calculatorViewModel,
    );

    expect(calculatorScreen.calculatorValue).toEqual(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );
  });
});
