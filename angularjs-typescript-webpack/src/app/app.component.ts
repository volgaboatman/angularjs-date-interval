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

  constructor(private $timeout: ng.ITimeoutService) {
    this.date1 = '2019-01-01';
    this.date2 = '2019-09-09';
    this.changes = [];
  }

  changeDates() {
    const self = this;
    this.$timeout(() => {
      const logline = `${self.changes.length + 1}: от ${self.date1} до ${
        self.date2
      }`;
      self.changes.push(logline);
      console.log(logline);
    }, 1);
  }
}
