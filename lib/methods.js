Meteor.methods({
  insertNewResponse: function() {
    this.unblock();

    Responses.insert({value: Math.random()});

    Meteor._sleepForMs && Meteor._sleepForMs(5000);
  },
  
  insertNewResponseOnServer: function() {
    this.unblock();

    if (Meteor.isServer)
      Responses.insert({value: Math.random()});

    Meteor._sleepForMs && Meteor._sleepForMs(5000);
  }
});
