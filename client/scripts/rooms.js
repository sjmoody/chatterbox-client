// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  // _data: ['1', '2', '3'],
  _data: ["all"],


  add: function(room) {
    Rooms._data.push(room);
  },


  sanitizeAndPush: function(message) {

    // sanitizing the message
    if (message.roomname && message.roomname.includes('<')) {
      message.roomname = 'failed hack';
    }

    //if array does not contain item with this roomname then push into array
    if (!Rooms._data.includes(message.roomname)) {
      //console.log(message.roomname);
      Rooms._data.push(message.roomname);
    }


  }

};