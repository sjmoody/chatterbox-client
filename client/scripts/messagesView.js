// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // Probably MessagesView.render()
    MessagesView.render();

  },

  render: function() {
    // TODO: Render _all_ the messages.
    // iterate through data and for each message, rendermessage

    console.log("rendering MessagesView");
    for (var i = 0; i < Messages._data.length; i++) {
      MessagesView.renderMessage(Messages._data[i]);
    }
    // MessagesView.$chats.append(html);
    // console.log(html);

  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var html = "";
    html += MessageView.render(message);
    MessagesView.$chats.append(html);
    console.log(html);
    //return MessageView.render(message);

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    console.log(event);
  }

};