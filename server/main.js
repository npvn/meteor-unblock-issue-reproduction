import { Meteor } from 'meteor/meteor';

Meteor.publish('items', function() {
  return Items.find();
});

Meteor.publish('products', function() {
  return Products.find();
});
