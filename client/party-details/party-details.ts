import {Component, View, Inject} from 'angular2/angular2';
import {RouteParams, RouterLink} from 'angular2/router';

@Component({
  selector: 'party-details'
})
@View({
  templateUrl: 'client/party-details/party-details.ng.html',
  directives: [RouterLink]
})
export class PartyDetails {
  constructor(@Inject(RouteParams) routeParams:RouteParams) {
    this.partyId = routeParams.params.partyId;

    Tracker.autorun(zone.bind(() => {
      this.party = Parties.find(this.partyId).fetch()[0];
    }));
  }
}