import {Component, View, NgFor, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'client/index.ng.html',
  directives: [NgFor]
})
class Socially {}

bootstrap(Socially);