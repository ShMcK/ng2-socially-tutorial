import {Component, View, NgFor, bootstrap} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {PartiesForm} from 'client/parties-form/parties-form';

@Component({
  selector: 'parties-list'
})
@View({
  templateUrl: 'client/parties-list/parties-list.ng.html',
  directives: [NgFor, PartiesForm, RouterLink]
})
export class PartiesList {
  parties: IParty[];
  constructor () {
    Tracker.autorun(zone.bind(() => {
      this.parties = Parties.find().fetch();
    }));
  }
  remove(party:IParty) {
    Parties.remove(party._id);
  }
}