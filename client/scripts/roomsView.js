// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // RoomsView.render(); //this doesn't make sense. As we don't have any data in array initially. Thats probably why <%= roomname %> keep returning undefined

    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    console.log("rendering RoomsView");
    console.log(Rooms._data);
    for (var i = 0; i < Rooms._data.length; i++) {
      RoomsView.renderRoom(Rooms._data[i]);
    }

  },

  renderRoom: function(roomname = "no room here") {

    var html = '';

    // create HTML for the room name which is probably an option tag
    // we want to append the html to the RoomsView
    var compiled = _.template("<option value='1'> <%- rn  %> </option>");

    html += compiled({rn: roomname});
    // console.log(html);
    RoomsView.$select.append(html);



  },

  handleChange: function(event) {
    var getText = $(this).find(':selected').text();

    App.roomname = getText.trim();
    MessagesView.render();
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    console.log("clicked room: " + event);
    var newRoom = (prompt('what is the new room name?') || "new Unnamed room");
    // pass newRoom to a rooms function
    Rooms.add(newRoom);
    App.roomname = newRoom;
    RoomsView.render();
    MessagesView.render();


  }

};
