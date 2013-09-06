if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to Business.";
  };

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
}

Template.hello.events({
    'change #attachment': function(evt){
        console.log(evt.files);
    }
});

Meteor.startup( function() {
    filepicker.setKey("AeiqhaoDUTtyzaAvt33z6z");
});