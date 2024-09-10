import { Routes } from "@angular/router";
import CalculatorScreen from "./screens/calculator/calculator_screen.component";

const routes: Routes = [{ path: "**", component: CalculatorScreen }];

export default routes;
