// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var text = $('#message').val();
    var message = {
      roomname: 'superLobby',
      text: text,
      username: App.username
    };

    console.log(message);
    //Parse.create(message, function() { console.log('submit was handled in formView'); });
    //Parse.create(message, function() { App.fetch(); });
    // Messages._data.push(message);
    Messages.sanitizeAndPush(message);
    Parse.create(message, function() { App.startSpinner(); App.fetch(App.stopSpinner); });
    //Parse.create(message, function() { App.initialize(); });
    //Parse.create(message, function() { MessagesView.renderMessage(message); });
    //App.startSpinner();
    //App.fetch(App.stopSpinner);
    // After we create message on server we want to
      // get all new messages from server
      // render all messages
    //setTimeout(App.initialize(), 1000);
      // App.fetch();
    MessagesView.render();

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};