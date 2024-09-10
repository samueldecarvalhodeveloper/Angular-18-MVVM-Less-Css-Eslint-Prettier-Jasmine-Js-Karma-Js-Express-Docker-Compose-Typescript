import CalculationExpression from "../../../app/domains/calculator/calculation_expression";
import CalculationExpressionActiveRecord from "../../../app/domains/calculator/calculation_expression_active_record";
import CalculationExpressionActiveRecordDecorator from "../../../app/domains/calculator/calculation_expression_active_record_decorator";
import CalculationExpressionRegister from "../../../app/domains/calculator/calculation_expression_register";
import Calculator from "../../../app/domains/calculator/calculator";
import CalculatorCharacters from "../../../app/domains/calculator/calculator_characters";
import LastSessionCalculationExpressionStore from "../../../app/infrastructure/anticorruption_layer/last_session_calculation_expression_store";
import CalculatorViewModel from "../../../app/view_models/calculator_view_model";

describe('Test Class "CalculatorViewModel" Behavior', () => {
  let calculatorViewModel: CalculatorViewModel;
  let calculator: Calculator;

  beforeAll(() => {
    const calculationExpression: CalculationExpression =
      new CalculationExpression("");
    const calculationExpressionRegister: CalculationExpressionRegister =
      new CalculationExpressionRegister(calculationExpression);
    const calculationExpressionActiveRecord: CalculationExpressionActiveRecord =
      new CalculationExpressionActiveRecordDecorator(
        calculationExpressionRegister,
      );
    calculator = new Calculator(calculationExpressionActiveRecord);

    calculatorViewModel = new CalculatorViewModel(calculator);
  });

  beforeEach(() => {
    calculator.clean();
    LastSessionCalculationExpressionStore.setExpression("");
  });

  it('Test If Method "getCalculationExpression" Returns The Current Calculation Expression', () => {
    calculator.addCharacter(CalculatorCharacters.ONE);
    calculator.addCharacter(CalculatorCharacters.ADDITION);
    calculator.addCharacter(CalculatorCharacters.ONE);

    const currentCalculationExpression: string =
      calculatorViewModel.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );
  });

  it('Test If Method "addCharacterToCalculationExpression" Add Chose Character To Calculator Calculation Expression And On KeyValueStore', () => {
    calculatorViewModel.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    const currentCalculationExpression: string = calculator.getExpression();
    const storedOnKeyValueStoreCalculationExpression =
      LastSessionCalculationExpressionStore.getExpression();

    expect(currentCalculationExpression).toEqual(CalculatorCharacters.ONE);
    expect(storedOnKeyValueStoreCalculationExpression).toEqual(
      CalculatorCharacters.ONE,
    );
  });

  it('Test If Method "backspaceCalculationExpression" Backspaces Calculator Calculation Expression And On KeyValueStore', () => {
    calculator.addCharacter(CalculatorCharacters.ONE);
    calculator.addCharacter(CalculatorCharacters.ONE);

    calculatorViewModel.backspaceCalculationExpression();

    const currentCalculationExpression: string = calculator.getExpression();
    const storedOnKeyValueStoreCalculationExpression =
      LastSessionCalculationExpressionStore.getExpression();

    expect(currentCalculationExpression).toEqual(CalculatorCharacters.ONE);
    expect(storedOnKeyValueStoreCalculationExpression).toEqual(
      CalculatorCharacters.ONE,
    );
  });

  it('Test If Method "cleanCalculationExpression" Cleans Calculator Calculation Expression And On KeyValueStore', () => {
    calculator.addCharacter(CalculatorCharacters.ONE);
    calculator.addCharacter(CalculatorCharacters.ONE);

    calculatorViewModel.cleanCalculationExpression();

    const currentCalculationExpression: string = calculator.getExpression();
    const storedOnKeyValueStoreCalculationExpression =
      LastSessionCalculationExpressionStore.getExpression();

    expect(currentCalculationExpression).toEqual("");
    expect(storedOnKeyValueStoreCalculationExpression).toEqual("");
  });

  it('Test If Method "evaluateCalculationExpression" Evaluates Calculator Calculation Expression And On KeyValueStore', () => {
    calculator.addCharacter(CalculatorCharacters.ONE);
    calculator.addCharacter(CalculatorCharacters.ADDITION);
    calculator.addCharacter(CalculatorCharacters.ONE);

    calculatorViewModel.evaluateCalculationExpression();

    const currentCalculationExpression: string = calculator.getExpression();
    const storedOnKeyValueStoreCalculationExpression =
      LastSessionCalculationExpressionStore.getExpression();

    expect(currentCalculationExpression).toEqual(CalculatorCharacters.TWO);
    expect(storedOnKeyValueStoreCalculationExpression).toEqual(
      CalculatorCharacters.TWO,
    );
  });
});
