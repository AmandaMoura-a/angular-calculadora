import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  input = '';
  display = '';
  history: string[] = [];

  addToInput(value: string) {
    this.input += value;
    this.display = this.input;
  }

  clear() {
    this.input = '';
    this.display = '';
  }

  calculate() {
    try {
      this.input = eval(this.input);
      this.display = this.input;
      this.history.push(this.input);
    } catch (e) {
      this.display = 'Erro';
    }
  }
}
