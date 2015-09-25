var apiCall = function (apiUrl, callback) {
  try {
    var response = HTTP.get(apiUrl).data;
    callback(null, response);
  } catch (error) {
    if (error.response) {
      var errorCode = error.response.data.code;
      var errorMessage = error.response.data.message;
    } else {
      var errorCode = 500;
      var errorMessage = 'Cannot access the API';
    }
    var myError = new Meteor.Error(errorCode, errorMessage);
    callback(myError, null);
  }
}

Meteor.methods({

  updatePosts: function(data) {

    _.each(data, function(post) {
      // console.log(post);
      myID = post.ID;
      myTitle = post.title;
      myDate = post.date;
      myContent = post.content;

      PostsCollection.upsert({ID: myID}, {
        // Modifier
        $set: {
            ID: myID,
            title: myTitle,
            date: myDate,
            content: myContent
        }
      });

    });
    return true;
  },

  getPosts: function(ppp) {
    console.log('getPosts called');
    this.unblock();
    var apiUrl = "http://guitarnoize.com/wp-json/posts?filter[posts_per_page]="+ppp;
    var response = Meteor.wrapAsync(apiCall)(apiUrl);
    return response;
  }

});

Meteor.publish('posts', function () {
  return PostsCollection.find({}, {sort: {date: -1}});
});
Meteor.publish('post', function(postId) {
  return PostsCollection.find({ID: parseInt(postId)});
});
