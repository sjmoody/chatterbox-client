// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();
    RoomsView.$select.on('click', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    console.log("rendering RoomsView");
    for (var i = 0; i < Rooms._data.length; i++) {
      RoomsView.renderRoom(Rooms._data[i]);
    }

  },

  renderRoom: function(roomname = "no room here") {
    //console.log(Messages.getRoomMessages(roomname));
    //console.log(roomname);
    var username = "24134";
    console.log("rendering Room: " + roomname);
    var html = '';
    //html += MessageView.render(roomname);
    // RoomsView.$select.append(`<option value="3"> 3 </option>`);

    html += RoomsView.$select.append(_.template(`
    <option value="roomname22"> 3 </option>
    `));

  //   render: _.template(`
  //   <div class="chat">
  //     <div class="username">
  //       <%= username %>:
  //     </div>
  //     <div>
  //     <%= text %>

  //     </div>
  //     <div></div>
  //   </div>
  // `)

    //RoomsView.$select.append());
    // TODO: Render out a single room.
    // when this method gets called
      // add roomname (arg) to the #rooms select node
    //RoomsView.$select.append(roomname);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    console.log('changed room: ' + event);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    console.log("clicked room: " + event);
    // take room name and create new room in rooms
  }

};
