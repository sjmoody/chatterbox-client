// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
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
      console.log("duplicate Mofo!");
    } else {

      // console.log(message.message_id);
      Messages._data.push(message);
    }

  },

  getRoomMessages: function(roomName) {
    console.log(roomName);
    console.log(Messages._data);
    return _.filter(Messages._data, function(i) {
      return i === roomName;
    });
  }

  // data[0]
//   campus: "rpp"
// created_at: "2022-07-07T22:12:15.420Z"
// github_handle: "puhpx"
// message_id: 69244
// roomname: "testroom1"
// text: "hello this is a test tweet"
// updated_at: "2022-07-07T22:12:15.420Z"
// username: "testname1"
};