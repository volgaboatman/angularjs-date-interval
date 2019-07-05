/**
 * @ngInject
 */
export class AppComponent {
  static componentName: string = "msApp";

  static componentConfig: ng.IComponentOptions = {
    bindings: {},
    controller: AppComponent,
    templateUrl: "src/components/start-app/start-app.component.html"
  };

  private date1: string;
  private date2: string;
  private changes: string[];

  constructor() {
    this.date1 = "2019-01-01";
    this.date2 = "2019-09-09";
    this.changes = [];
  }

  changeDates() {
    let logline = `${this.changes.length + 1}: от ${this.date1}  до ${
      this.date2
    }`;
    this.changes.push(logline);
    console.log(logline);
  }
}
