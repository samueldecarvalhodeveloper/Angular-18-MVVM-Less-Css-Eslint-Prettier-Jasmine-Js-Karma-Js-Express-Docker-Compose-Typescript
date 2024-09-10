import { Component, Input } from "@angular/core";

@Component({
  selector: "calculator",
  standalone: true,
  templateUrl: "./template.html",
  styleUrl: "./styles.less",
})
class Calculator {
  @Input() value = "";
}

export default Calculator;
