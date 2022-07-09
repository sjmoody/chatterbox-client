// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  // _data: ['1', '2', '3'],
  _data: [],
  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  sanitizeAndPush: function(message) {
    // remove script and brackets
    // then push into _.data;
    //

    // sanitizing the message
    if (message.roomname && message.roomname.includes('<')) {
      message.roomname = 'failed hack';
    }

    //if array does not contain item with this roomname then push into array
    if (!Rooms._data.includes(message.roomname)) {
      //console.log(message.roomname);
      Rooms._data.push(message.roomname);
    }
    // console.log(Rooms._data);

    // if (Rooms._data.filter(function(m) { return m.roomname === message.roomname; }).length > 0) {
    //   return;
    // } else {
    //   Rooms._data.push(message.roomname);
    // }

  }

  // figure out how to interact with the rooms here
};