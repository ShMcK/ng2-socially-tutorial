import {Component, View, Inject} from 'angular2/angular2';
import {RouteParams, RouterLink} from 'angular2/router';
import {FORM_DIRECTIVES} from 'angular2/angular2';
import {PartyService} from 'client/lib/party-service';

@Component({
  selector: 'party-details',
  viewBindings: [PartyService]
})
@View({
  templateUrl: 'client/party-details/party-details.ng.html',
  directives: [RouterLink, FORM_DIRECTIVES]
})
export class PartyDetails {
  partyId: string;
  party: IParty;
  resetToParty: IParty;
  partyService:PartyService;
  constructor(@Inject(RouteParams) routeParams:RouteParams,
  @Inject(PartyService) partyService:PartyService) {
    this.partyService = partyService;
    this.partyId = routeParams.params.partyId;
  }
  save(event) {
    event.preventDefault();
    var party = this.party;

    if (_.isString(party.name) && party.name.length &&
      _.isString(party.description) && party.description.length) {
      this.partyService.update(party);
      this.resetToParty = _.clone(party);
    }
  }
  reset(event) {
    event.preventDefault();
    this.party = this.resetToParty;
  }
  canActivate() {
    if (!Meteor.userId()) {
      alert('Please login first');
      return false;
    }
    return Meteor.userId();
  }
  onActivate() {
    Meteor.subscribe('parties', this.partyId);
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