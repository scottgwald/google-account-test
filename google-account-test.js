if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to google-account-test.";
  };

  Meteor.subscribe("allAccounts");

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.publish("allAccounts", function () {
    return Meteor.users.find({});
  });
}
