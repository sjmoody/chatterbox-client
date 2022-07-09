// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {

  renderFriend: _.template(`
  <div class="chat">
    <div class="username friend">
      <%= username %>
    </div>
    <div>
    <%= text %>


    </div>
    <div></div>
  </div>
`),

  render: _.template(`
      <div class="chat">
        <div class="username">
          <%= username %>
        </div>
        <div>
        <%= text %>


        </div>
        <div></div>
      </div>
    `)
};