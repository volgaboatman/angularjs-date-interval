"use strict";
import moment from "moment";

export class DateIntervalComponent {
  // Define our user-details component's name
  static componentName: string = "mcDates";

  // Define our user-details component's component config
  static componentConfig: ng.IComponentOptions = {
    bindings: {
      dateFrom: "=",
      dateTo: "=",
      onChange: "&mcChange"
    },
    templateUrl: "src/components/date-interval/date-interval.component.html",
    controller: class DateIntervalController {
      private dateFrom: string;
      private pickFrom: Date;
      private dateTo: string;
      private pickTo: Date;

      private onChange: () => any;

      constructor($scope) {
        $scope.$watch(
          () => this.dateFrom,
          (newValue, oldValue) => {
            if (newValue === oldValue) return;
            this.pickFrom = this.parseDate(newValue);
          }
        );
        $scope.$watch(
          () => this.dateTo,
          (newValue, oldValue) => {
            if (newValue === oldValue) return;
            this.pickTo = this.parseDate(newValue);
          }
        );
      }

      $onInit() {
        this.pickFrom = this.parseDate(this.dateFrom);
        this.pickTo = this.parseDate(this.dateTo);
      }

      onDatesChanged() {
        let newFrom = this.formatDate(this.pickFrom);
        let newTo = this.formatDate(this.pickTo);
        if (newFrom !== this.dateFrom || newTo !== this.dateTo) {
          this.dateFrom = newFrom;
          this.dateTo = newTo;
          if (this.onChange) this.onChange();
        }
      }
      onPredefinedClick(daysFrom: number, monthsFrom: number, daysTo: number) {
        if (daysFrom !== null) {
          this.pickFrom = moment()
            .subtract(daysFrom, "days")
            .subtract(monthsFrom, "months")
            .startOf("day")
            .toDate();
          this.pickTo = moment()
            .subtract(daysTo, "days")
            .endOf("day")
            .toDate();
        } else {
          this.pickFrom = null;
          this.pickTo = null;
        }
        this.onDatesChanged();
      }

      formatDate(date) {
        return date ? moment(date).format("YYYY-MM-DD") : "";
      }
      parseDate(dateString) {
        var m = moment(dateString, "YYYY-MM-DD");
        return m.isValid() ? m.toDate() : null;
      }
    }
  };
}
