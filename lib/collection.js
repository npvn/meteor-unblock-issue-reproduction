import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Responses = new Mongo.Collection('responses');
Comments = new Mongo.Collection('comments');

// Seed data 
if (Meteor.isServer) {
  Responses.remove({});
  Comments.remove({});

  for (let i = 0; i <= 100; i++) {
    Responses.insert({value: i});
    Comments.insert({value: i});
  }
}
