import { Component } from 'angular-ts-decorators';

@Component({
  selector: 'app-root',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')]
})
export class AppComponent {
  private date1: string;
  private date2: string;
  private changes: string[];

  constructor() {
    this.date1 = '2019-01-01';
    this.date2 = '2019-09-09';
    this.changes = [];
  }

  changeDates(changes: any) {
    this.date1 = changes.from;
    this.date2 = changes.to;
    const logline = `${this.changes.length + 1}: от ${this.date1} до ${
      this.date2
    }`;
    this.changes.push(logline);
    console.log(logline);
  }
}
