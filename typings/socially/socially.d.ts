declare var Parties:Mongo.Collection<IParty>;
declare var _;
declare var zone;

interface IParty {
  _id?: string;
  name: string;
  description: string;
  owner: string;
}