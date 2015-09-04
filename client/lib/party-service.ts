export class PartyService {
  add(party:IParty) { }
  update (party:IParty) { }
  remove(partyId:string) { }
  getPartyObject(party:IParty) {
    return {
      name: party.name,
      description: party.description,
      user: Meteor.userId()
    };
  }
}