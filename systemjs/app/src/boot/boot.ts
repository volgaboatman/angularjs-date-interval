/// <reference path="../../../typings/index.d.ts" />

// Import our Angular dependencies
import * as angular from "angular";
import "angular-animate";
import "angular-aria";
import "angular-material";
import "angular-messages";
import "angular-sanitize";
import moment from "moment";

import { AppComponent } from "../components/start-app/start-app.component.ts";

import { DateIntervalComponent } from "../components/date-interval/date-interval.component.ts";

module MaterialStart {
  "use strict";

  // Register our module and it's dependencies
  angular
    .module("MaterialStart", ["ngMaterial", "ngSanitize"])
    .config(function(
      $mdThemingProvider: angular.material.IThemingProvider,
      $mdDateLocaleProvider: angular.material.IDateLocaleProvider
    ) {
      $mdDateLocaleProvider.formatDate = function(date) {
        return date ? moment(date).format("DD.MM.YYYY") : "";
      };

      $mdThemingProvider
        .theme("default")
        .primaryPalette("brown")
        .accentPalette("red");
    })

    // Register all of our components
    .component(AppComponent.componentName, AppComponent.componentConfig)
    .component(
      DateIntervalComponent.componentName,
      new DateIntervalComponent()
    );
}
