// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: ensure messages always sorted by message_id either by adding them into the messages structure at the right position or by re-sorting every time a message is added.
  // we can re-sort messages when length > 100

  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  sanitizeAndPush: function(message) {
    // remove script and brackets
    // then push into _.data;
    //

    // sanitizing the message
    if (message.text && message.text.includes('<')) {
      message.text = 'failed hack';
    }

    //if array does not contain item with this message_id then push into array
    if (Messages._data.filter(function(m) { return m.message_id === message.message_id; }).length > 0) {
      return;
    } else {
      Messages._data.push(message);
    }

  },

  getRoomMessages: function() {
    // TODO: if App.roomName is equal to null then get all messages
    console.log(App.roomname);
    if (App.roomname === null) {
      return Messages._data;
    // else return filter where the messages have the same roomname
    } else {
      var roomarray = [];
      for (var i = 0; i < Messages._data.length; i++) {
        if (Messages._data[i].roomname === App.roomname) {
          roomarray.push(Messages._data[i]);
        } else {
          // console.log(App.roomname + Messages._data[i].roomname);
        }
      }
      // var roomarray = _.filter(Messages._data, function(message) {
      //   return message.roomname === App.roomname;
      // });
      console.log(roomarray);
      return roomarray;
    }



    // console.log(roomName);
    // console.log(Messages._data);

  }
};