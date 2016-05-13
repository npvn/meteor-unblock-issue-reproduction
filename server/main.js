import { Meteor } from 'meteor/meteor';

Meteor.publish('responses', function() {
  return Responses.find();
});

Meteor.publish('comments', function() {
  return Comments.find();
});
