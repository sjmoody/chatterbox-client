// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

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
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      //console.log(data); // data is an array
      // iterate through data and push to _data
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        Messages._data.push(data[i]);
      }

      MessagesView.render();
      // console.log(Messages._data);


      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
    callback();
    //or do we add callback here?
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true); //what is this doing?
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false); //what is this doing?
  }
};
