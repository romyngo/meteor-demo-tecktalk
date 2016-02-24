'use strict';

Template.body.onCreated(function() {
  this.autorun(() => {
    this.subscribe('allPosts');
  });
});

Template.body.helpers({
  posts() {
    return Posts.find({}, {
      sort: {
        created: -1,
      },
    });
  },

  getMomentFromNow(timestamp) {
    return moment(timestamp).fromNow();
  },
});

Template.body.events({
  'submit form': function(event) {
    event.preventDefault();

    Posts.insert({
      name:     event.target.name.value,
      content:  event.target.question.value,
      created:  new Date(),
    });

    event.target.question.value = '';
  },
});