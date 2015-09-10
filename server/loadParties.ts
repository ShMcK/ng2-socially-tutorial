Meteor.startup(function () {
  if (Parties.find().count() === 0) {

    var parties:IParty[] = [{
      name: 'Dubstep-Free Zone',
      description: 'Can we please just for an evening not listen to dubstep.',
      owner: 'anonymous',
      isPublic: true
    }, {
      name: 'All dubstep all the time',
      description: 'Get it on!',
      owner: 'anonymous',
      isPublic: true
    }, {
      name: 'Savage lounging',
      description: 'Leisure suit required. And only fiercest manners.',
      owner: 'anonymous',
      isPublic: false
    }];

    for (var i = 0; i < parties.length; i++)
      Parties.insert(parties[i]);
  }
});