Parties = new Mongo.Collection('parties');

Parties.allow({
  insert: function (party:IParty) {
    var userId = Meteor.userId();
    return userId && party.owner === userId;
  },
  update: function (party:IParty, fields, modifier) {
    var userId = Meteor.userId();
    return userId && party.owner === userId;
  },
  remove: function (party:IParty) {
    var userId = Meteor.userId();
    return userId && party.owner === userId;
  }
});