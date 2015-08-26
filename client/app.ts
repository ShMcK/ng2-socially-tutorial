import {Component, View, bootstrap} from 'angular2/angular2';
import {routerInjectables, RouterOutlet, RouterLink, RouteConfig} from 'angular2/router';

@Component({
  selector: 'app'
})
@View({
  template: '<router-outlet></router-outlet>',
  directives: [RouterOutlet, RouterLink]
})
@RouteConfig()
class Socially {}

bootstrap(Socially, [routerInjectables]);