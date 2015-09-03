import {Component, View, NgFor, bootstrap} from 'angular2/angular2';
import {ROUTER_BINDINGS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {PartiesForm} from 'client/parties-form/parties-form';

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'client/index.ng.html',
  directives: [NgFor, PartiesForm, ROUTER_DIRECTIVES]
})
@RouteConfig()
class Socially {
  constructor () {
    Tracker.autorun(zone.bind(() => {
      this.parties = Parties.find().fetch();
    }));
  }
  remove(party) {
    Parties.remove(party._id);
  }
}

bootstrap(Socially, [ROUTER_BINDINGS]);