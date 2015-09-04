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
  partiesForm: ControlGroup;
  constructor() {
    this.partiesForm = new ControlGroup({
      name: new Control('', Validators.required),
      description: new Control('', Validators.required)
    });
  }
  add(party:IParty) {
    // validate if the form is valid
    if (this.partiesForm.valid) {

      // insert parties (insecure way)
      Parties.insert({
        name: party.name,
        description: party.description,
        owner: Meteor.userId()
      });

      //reset input values to empty strings
      this.partiesForm.controls.name.updateValue('');
      this.partiesForm.controls.description.updateValue('');
    }
  }
}