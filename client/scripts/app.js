// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  roomname: null,

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    //setTimeout(function() { App.initialize(); }, 10000);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        Messages.sanitizeAndPush(data[i]);
        Rooms.sanitizeAndPush(data[i]);
      }

      MessagesView.render();
      RoomsView.render();

      // console.log(Messages._data);
      // cb fn stops spinner
      //callback();
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
    callback();
    //or do we add callback here?
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
