import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Items = new Mongo.Collection('items');

if (Meteor.isServer) {
  Items.remove({});

  for (let i = 0; i <= 10; i++) {
    Items.insert({value: i});
  }
}
