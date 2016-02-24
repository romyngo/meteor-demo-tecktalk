'use strict';

Meteor.publish('allPosts', function() {
  return Posts.find();
});

Posts.allow({
  insert: function (userId, doc) {
    return true;
  },
});