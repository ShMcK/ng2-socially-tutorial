import {Component, View, NgFor, bootstrap} from 'angular2/angular2';
import {ROUTER_BINDINGS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {PartiesForm} from 'client/parties-form/parties-form';

// Components
import {PartiesList} from 'client/parties-list/parties-list';
import {PartyDetails} from 'client/party-details/party-details';

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'client/index.ng.html',
  directives: [NgFor, PartiesForm, ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', redirectTo: '/parties'},
  {path: '/parties',  as: 'parties-list', component: PartiesList},
  {path: '/party/:partyId', as: 'party-details', component: PartyDetails}
])
class Socially {}

bootstrap(Socially, [ROUTER_BINDINGS]);