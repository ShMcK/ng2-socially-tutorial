import {Component, View} from 'angular2/angular2';
import {FORM_DIRECTIVES, Control, ControlGroup, Validators} from 'angular2/angular2';

@Component({
  selector: 'parties-form'
})
@View({
  templateUrl: 'client/parties-form/parties-form.ng.html',
  directives: [FORM_DIRECTIVES]
})
export class PartiesForm {
  constructor() {
    this.partiesForm = new ControlGroup({
      name: new Control(''),
      description: new Control('')
    });
  }
}