// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),
  // $chatUsers: $('#chats #username'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // Probably MessagesView.render()
    //MessagesView.render(); // this doesn't make sense. As we don't have any data in array initially
    MessagesView.$chats.on('click', MessagesView.handleClick);
    // MessagesView.$chatUsers.on('click', MessagesView.handleClick);
  },

  render: function() {

    MessagesView.$chats.empty();
    var messages = Messages.getRoomMessages();
    for (var i = 0; i < messages.length; i++) {
      MessagesView.renderMessage(messages[i]);
    }
  },

  renderMessage: function(message) {
    var html = '';
    if (Friends.isFriend(message.username)) {
      html += MessageView.renderFriend(message);
    } else {
      html += MessageView.render(message);
    }
    MessagesView.$chats.append(html);

  },

  handleClick: function(event) {

    if (event.target.className === 'username') {
      var user = event.target.innerText;
      Friends.toggleStatus(user);
      MessagesView.render();
    }
  }

};