import { Meteor } from 'meteor/meteor';

Meteor.publish('items', function() {
  return Items.find();
});
