import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../../app/constants/domains/calculator_constants";
import CalculationExpression from "../../../../app/domains/calculator/calculation_expression";
import CalculationExpressionActiveRecordDecorator from "../../../../app/domains/calculator/calculation_expression_active_record_decorator";
import CalculationExpressionRegister from "../../../../app/domains/calculator/calculation_expression_register";
import CalculatorCharacters from "../../../../app/domains/calculator/calculator_characters";

describe('Test Class "CalculationExpressionActiveRecordDecorator" Behavior', () => {
  let calculationExpressionRegister: CalculationExpressionRegister;
  let calculationExpressionActiveRecordDecorator: CalculationExpressionActiveRecordDecorator;

  beforeAll(() => {
    const calculationExpression = new CalculationExpression("");
    calculationExpressionRegister = new CalculationExpressionRegister(
      calculationExpression,
    );
    calculationExpressionActiveRecordDecorator =
      new CalculationExpressionActiveRecordDecorator(
        calculationExpressionRegister,
      );
  });

  it('Test If Method "addCharacterToCalculationExpression" Turns Expression Empty If Expression Is Equal To Not Valid Expression Exception Message', () => {
    calculationExpressionRegister.setCalculationExpression(
      NOT_VALID_EXPRESSION_ERROR_MESSAGE,
    );

    calculationExpressionActiveRecordDecorator.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  it('Test If Method "addCharacterToCalculationExpression" Turns Expression Empty If Expression Is Equal To Infinity', () => {
    calculationExpressionRegister.setCalculationExpression(Infinity.toString());

    calculationExpressionActiveRecordDecorator.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  it('Test If Method "addCharacterToCalculationExpression" Adds Chose Character', () => {
    calculationExpressionRegister.setCalculationExpression("");

    calculationExpressionActiveRecordDecorator.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(CalculatorCharacters.ONE);
  });

  it('Test If Method "removeLastCharacterFromCalculationExpression" Turns Expression Empty If It Is Equal To Not Valid Expression Exception Message', () => {
    calculationExpressionRegister.setCalculationExpression(
      NOT_VALID_EXPRESSION_ERROR_MESSAGE,
    );

    calculationExpressionActiveRecordDecorator.removeLastCharacterFromCalculationExpression();

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  it('Test If Method "removeLastCharacterFromCalculationExpression" Turns Expression Empty If It Is Equal To Infinity', () => {
    calculationExpressionRegister.setCalculationExpression(Infinity.toString());

    calculationExpressionActiveRecordDecorator.removeLastCharacterFromCalculationExpression();

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  it('Test If Method "removeLastCharacterFromCalculationExpression" Keeps Expression Empty If It Is Empty', () => {
    calculationExpressionRegister.setCalculationExpression("");

    calculationExpressionActiveRecordDecorator.removeLastCharacterFromCalculationExpression();

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  it('Test If Method "removeLastCharacterFromCalculationExpression" Removes Last Character From Expression', () => {
    calculationExpressionRegister.setCalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    calculationExpressionActiveRecordDecorator.removeLastCharacterFromCalculationExpression();

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(
      CalculatorCharacters.ONE + CalculatorCharacters.ADDITION,
    );
  });

  it('Test If Method "evaluateCalculationResultExpression" Turns Expression Empty If It Is Equal To Not Valid Expression Exception Message', () => {
    calculationExpressionRegister.setCalculationExpression(
      NOT_VALID_EXPRESSION_ERROR_MESSAGE,
    );

    calculationExpressionActiveRecordDecorator.evaluateCalculationExpression();

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  it('Test If Method "evaluateCalculationResultExpression" Turns Expression Empty If It Is Equal To Infinity', () => {
    calculationExpressionRegister.setCalculationExpression(Infinity.toString());

    calculationExpressionActiveRecordDecorator.evaluateCalculationExpression();

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  it('Test If Method "evaluateCalculationResultExpression" Keeps Expression Empty If Expression Is Already Empty', () => {
    calculationExpressionRegister.setCalculationExpression("");

    calculationExpressionActiveRecordDecorator.evaluateCalculationExpression();

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual("");
  });

  it('Test If Method "evaluateCalculationResultExpression" Evaluates Expression', () => {
    calculationExpressionRegister.setCalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    calculationExpressionActiveRecordDecorator.evaluateCalculationExpression();

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).toEqual(CalculatorCharacters.TWO);
  });
});
