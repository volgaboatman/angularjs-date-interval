import * as material from 'angular-material';
import * as messages from 'angular-messages';
import { NgModule } from 'angular-ts-decorators';
import * as moment from 'moment';
import '../../node_modules/angular-material/angular-material.min.css';
import { AppComponent } from './app.component';
import { DateIntervalComponent } from './date-interval/date-interval.component';
import './styles.css';

@NgModule({
  id: 'AppModule',
  imports: [material, messages],
  declarations: [AppComponent, DateIntervalComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {
  static config($mdDateLocaleProvider: angular.material.IDateLocaleProvider) {
    'ngInject';
    $mdDateLocaleProvider.formatDate = date => {
      return date ? moment(date).format('DD.MM.YYYY') : '';
    };
    $mdDateLocaleProvider.parseDate = dateString => {
      const m = moment(dateString, 'DD.MM.YYYY', true);
      return m.isValid() ? m.toDate() : new Date(NaN);
    };
  }
}
