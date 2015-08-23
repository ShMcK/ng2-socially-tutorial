import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'app'
})
@View({
  template: "<p>Hello World!</p>"
})
class Socially {}

bootstrap(Socially);