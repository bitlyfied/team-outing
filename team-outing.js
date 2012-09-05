// Models
Outings = new Meteor.Collection('events');

if (Meteor.is_client) {

    // load all the records from the collection
    Template.outings.outings = Outings.find({});

    Template.outings.events({
        'keyup #new-outing' : function(e){
            if(e.keyCode == 13){
                var input = $(e.target);
                Outings.insert({name: input.val()});
                input.val("");
            }
        }
    });
}

if (Meteor.is_server) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
