Meteor.publish('parties', function () {
  return Parties.find({
    $or:[
      {$and:[
        {"isPublic": true},
        {"isPublic": {$exists: true}}
      ]},
      {$and:[
        {owner: this.userId},
        {owner: {$exists: true}}
      ]}
    ]});
});