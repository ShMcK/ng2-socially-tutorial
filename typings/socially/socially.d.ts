declare var Parties:Mongo.Collection;

interface IParty {
  _id?: string;
  name: string;
  description: string;
}