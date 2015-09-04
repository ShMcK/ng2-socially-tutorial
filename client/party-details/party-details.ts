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
  partyId: string;
  party: IParty;
  resetToParty: IParty;
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
        description: party.description,
        owner: Meteor.userId()
      });
      this.resetToParty = _.clone(party);
    }
  }
  reset(event) {
    event.preventDefault();
    this.party = this.resetToParty;
  }
  onActivate() {
    this.party = Parties.find(this.partyId).fetch()[0];
    if (this.party) {
      console.log('loading...');
      this.resetToParty = _.clone(this.party);
      return true;
    }
  }
  canDeactivate() {
    if (!_.isEqual(this.party, this.resetToParty)) {
      return confirm('Are you sure you want to leave without saving?');
    }
  }
}