import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import CalculatorViewModel from "./view_models/calculator_view_model";
import CalculationExpression from "./domains/calculator/calculation_expression";
import CalculationExpressionRegister from "./domains/calculator/calculation_expression_register";
import CalculationExpressionActiveRecord from "./domains/calculator/calculation_expression_active_record";
import CalculationExpressionActiveRecordDecorator from "./domains/calculator/calculation_expression_active_record_decorator";
import Calculator from "./domains/calculator/calculator";
import { SITE_TITLE } from "./constants/user_interface_constants";
import LastSessionCalculationExpressionStore from "./infrastructure/anticorruption_layer/last_session_calculation_expression_store";

@Component({
  selector: "app-root",
  standalone: true,
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
  imports: [RouterOutlet],
  template: "<router-outlet />",
})
class AppComponent {
  title = SITE_TITLE;
}

export default AppComponent;
