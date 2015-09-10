Meteor.publish('parties', function () {
  return Parties.find();
});