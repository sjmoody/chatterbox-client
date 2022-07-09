// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    var text = $('#message').val();
    var message = {
      roomname: App.roomname,
      text: text,
      username: App.username
    };

    event.preventDefault();

    //Messages.sanitizeAndPush(message);
    Parse.create(message, function() { App.startSpinner(); App.fetch(App.stopSpinner); });
    //Parse.create(message, function() { MessagesView.render(); });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};