// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
//   render: _.template(`
//   &lt;div class="chat"&gt;
//   &lt;div class="username"&gt;
//   &lt;%= username %&gt;:
//   &lt;/div&gt;
//   &lt;div&gt;
//   &lt;%= text %&gt;
//   &lt;/div&gt;
//   &lt;div&gt;&lt;/div&gt;
//   &lt;/div&gt;
// `)
  render: _.template(`
      <div class="chat">
        <div class="username">
          <%= username %>:
        </div>
        <div>
        <%= text %>
        <%= message_id %>

        </div>
        <div></div>
      </div>
    `)
};