// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: [],

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  // fn addFriend

  isFriend: function(friend) {
    console.log(friend);
    return Friends._data.includes(friend);

  },

  toggleStatus: function(friend) {
    console.log(friend);
    if (Friends._data.includes(friend)) {
      Friends._data = _.filter(Friends._data, function(f) {
        return f !== friend;
      });
    } else {
      Friends._data.push(friend);
    }
    console.log('new friend list: ' + Friends._data);
  },



};