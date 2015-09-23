Post = React.createClass({

  mixins: [ReactMeteorData],

  propTypes: {
    postId: React.PropTypes.string.isRequired,
  },

  getMeteorData() {
    let handle = Meteor.subscribe("post", this.props.postId);
    // console.log(!handle.ready());
    return {
      postLoading: ! handle.ready(), // Use handle to show loading state
      postItemData: PostsCollection.findOne({'ID': parseInt(this.props.postId)})
    };

  },

  callback() {
    setTimeout(function() {
      $.each($('.lazy-hidden'), function() {
        var dataSrc = $(this).attr('data-src');
        $(this).attr('src', dataSrc);
      });
    }, 0);
  },

  render() {
    if (this.data.postLoading) {
      return <h2>Fetching post...</h2>;
      // console.log('loading');
    }else{
      // console.log(this.data.postItemData);
      return (
        <div className="">
          <h1>{this.data.postItemData.title}</h1>
          <div classameN="postContent" dangerouslySetInnerHTML={{__html:this.data.postItemData.content}}></div>
          {this.callback()}
        </div>
      );
    }

  }
});
