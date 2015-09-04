export class PartyService {
  add(party:IParty) {
    Parties.insert(this.getPartyObject(party));
  }
  update (party:IParty) {
    Parties.update(party._id, this.getPartyObject(party));
  }
  remove(partyId:string) {
    Parties.remove(partyId);
  }
  getPartyObject(party:IParty) {
    return {
      name: party.name,
      description: party.description,
      user: Meteor.userId()
    };
  }
}