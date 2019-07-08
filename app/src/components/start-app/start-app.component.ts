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

  constructor(private $timeout: ng.ITimeoutService) {
    this.date1 = "2019-01-01";
    this.date2 = "2019-09-09";
    this.changes = [];
  }

  changeDates() {
    let self = this;
    this.$timeout(function() {
      let logline = `${self.changes.length + 1}: от ${self.date1}  до ${
        self.date2
      }`;
      self.changes.push(logline);
      console.log(logline);
    }, 1);
  }
}
