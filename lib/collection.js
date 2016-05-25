import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Items = new Mongo.Collection('items');
Products = new Mongo.Collection('products');

if (Meteor.isServer) {
  Items.remove({});
  Products.remove({});

  for (let i = 0; i <= 10; i++) {
    Items.insert({value: i});
    Products.insert({value: i});
  }
}
