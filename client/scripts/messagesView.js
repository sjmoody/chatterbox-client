// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // Probably MessagesView.render()
    //MessagesView.render(); // this doesn't make sense. As we don't have any data in array initially

  },

  render: function() {
    // TODO: Render _all_ the messages.
    // iterate through data and for each message, rendermessage

    // TODO: get messages from messages.js based on room name. Then iterate through this shallow array and render messages
    var messages = Messages.getRoomMessages();

    console.log("rendering MessagesView");
    console.log(messages);
    // console.log(Messages._data.length);
    for (var i = 0; i < messages.length; i++) {
      MessagesView.renderMessage(messages[i]);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    console.log("rendering Message");
    // if message doesn't have messageid then add one - used for debugging
    if (!message.message_id) {
      message.message_id = 99999999999;
    }
    // console.log(message);

    var html = '';
    html += MessageView.render(message);
    MessagesView.$chats.append(html);

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    console.log(event);
  }

};