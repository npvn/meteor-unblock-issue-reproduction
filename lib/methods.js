Meteor.methods({
  insertNewItem: function() {
    this.unblock();

    Items.insert({value: Math.random()});

    Meteor._sleepForMs && Meteor._sleepForMs(3000);
  },

  insertNewItemOnServer: function() {
    this.unblock();

    if (Meteor.isServer)
      Items.insert({value: Math.random()});

    Meteor._sleepForMs && Meteor._sleepForMs(3000);
  }
});
