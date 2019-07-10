import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output
} from 'angular-ts-decorators';
import * as moment from 'moment';

@Component({
  selector: 'mc-dates',
  template: require('./date-interval.component.html'),
  styles: [require('./date-interval.component.scss')]
})
export class DateIntervalComponent implements OnInit, OnChanges {
  @Input() private dateFrom: string;
  private pickFrom: Date;
  @Input() dateTo: string;
  pickTo: Date;

  @Output() mcChange: () => any;

  /*@ngInject*/
  constructor() {}

  ngOnInit() {
    // this.pickFrom = this.parseDate(this.dateFrom);
    // this.pickTo = this.parseDate(this.dateTo);
  }
  ngOnChanges(
    changes: import('angular-ts-decorators').SimpleChanges<any>
  ): void {
    if (
      changes.dateFrom &&
      changes.dateFrom.previousValue !== changes.dateFrom.currentValue
    ) {
      this.pickFrom = this.parseDate(changes.dateFrom.currentValue);
    }

    if (
      changes.dateTo &&
      changes.dateTo.previousValue !== changes.dateTo.currentValue
    ) {
      this.pickTo = this.parseDate(changes.dateTo.currentValue);
    }
  }

  onDatesChanged() {
    const newFrom = this.formatDate(this.pickFrom);
    const newTo = this.formatDate(this.pickTo);
    if (newFrom !== this.dateFrom || newTo !== this.dateTo) {
      this.dateFrom = newFrom;
      this.dateTo = newTo;
      if (this.mcChange) {
        this.mcChange();
      }
    }
  }
  onPredefinedClick(daysFrom: number, monthsFrom: number, daysTo: number) {
    if (daysFrom !== null) {
      this.pickFrom = moment()
        .subtract(daysFrom, 'days')
        .subtract(monthsFrom, 'months')
        .startOf('day')
        .toDate();
      this.pickTo = moment()
        .subtract(daysTo, 'days')
        .endOf('day')
        .toDate();
    } else {
      this.pickFrom = null;
      this.pickTo = null;
    }
    this.onDatesChanged();
  }

  formatDate(date) {
    return date ? moment(date).format('YYYY-MM-DD') : '';
  }
  parseDate(dateString) {
    const m = moment(dateString, 'YYYY-MM-DD');
    return m.isValid() ? m.toDate() : null;
  }
}
