// Models
Outings = new Meteor.Collection('events');

if (Meteor.is_client) {
    Template.outings.outings = Outings.find({});
}

if (Meteor.is_server) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
