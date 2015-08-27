import {Component, View, bootstrap} from 'angular2/angular2';
import {routerInjectables, RouterOutlet, RouterLink, RouteConfig} from 'angular2/router';

// Components
import {PartiesList} from 'client/parties-list/parties-list';
import {PartyDetails} from 'client/party-details/party-details';

@Component({
  selector: 'app'
})
@View({
  template: '<router-outlet></router-outlet>',
  directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
  {path: '/', redirectTo: '/parties'},
  {path: '/parties',  as: 'parties-list', component: PartiesList},
  {path: '/party/:partyId', as: 'party-details', component: PartyDetails}
])
class Socially {}

bootstrap(Socially, [routerInjectables]);