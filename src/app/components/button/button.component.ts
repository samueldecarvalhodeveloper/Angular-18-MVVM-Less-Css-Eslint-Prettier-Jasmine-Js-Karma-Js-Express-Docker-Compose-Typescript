import { Component, Input } from "@angular/core";

@Component({
  selector: "calculator-button",
  standalone: true,
  templateUrl: "./template.html",
  styleUrl: "./styles.less",
})
class Button {
  @Input() class = "";

  @Input() character = "";
}

export default Button;
