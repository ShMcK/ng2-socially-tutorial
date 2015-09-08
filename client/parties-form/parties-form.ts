import {Component, View, Inject} from 'angular2/angular2';
import {FORM_DIRECTIVES, Control, ControlGroup, Validators} from 'angular2/angular2';
import {PartyService} from 'client/lib/party-service';

@Component({
  selector: 'parties-form'
})
@View({
  templateUrl: 'client/parties-form/parties-form.ng.html',
  directives: [FORM_DIRECTIVES]
})
export class PartiesForm {
  partiesForm: ControlGroup;
  partyService: PartyService;
  constructor(@Inject(PartyService) partyService:PartyService) {
    this.partyService = partyService;
    this.partiesForm = new ControlGroup({
      name: new Control('', Validators.required),
      description: new Control('', Validators.required)
    });
  }
  add(party:IParty) {
    // validate if the form is valid
    if (this.partiesForm.valid) {

      // insert parties (insecure way)
     this.partyService.add(party);

      //reset input values to empty strings
      this.partiesForm.controls.name.updateValue('');
      this.partiesForm.controls.description.updateValue('');
    }
  }
}