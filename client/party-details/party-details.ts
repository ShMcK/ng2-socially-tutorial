import {Component, View, Inject} from 'angular2/angular2';
import {RouteParams, RouterLink} from 'angular2/router';
import {FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'party-details'
})
@View({
  templateUrl: 'client/party-details/party-details.ng.html',
  directives: [RouterLink, FORM_DIRECTIVES]
})
export class PartyDetails {
  constructor(@Inject(RouteParams) routeParams:RouteParams) {
    this.partyId = routeParams.params.partyId;
  }
  save(event) {
    event.preventDefault();
    var party = this.party;

    if (_.isString(party.name) && party.name.length &&
      _.isString(party.description) && party.description.length) {
      Parties.update(party._id, {
        name: party.name,
        description: party.description
      });
    }
  }
  onActivate() {
    this.party = Parties.find(this.partyId).fetch()[0];
    if (this.party) {
      return true;
    }
  }
}