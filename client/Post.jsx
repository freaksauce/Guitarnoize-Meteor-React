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

  render() {
    if (this.data.postLoading) {
      return <h1>Loading</h1>;
      console.log('loading');
    }else{
      console.log(this.data.postItemData);
      return (
        <div className="container">
          <h1>Post {this.props.postId}</h1>
          <PostItem postItemData={this.data.postItemData} fullPost="true" />
        </div>
      );      
    }

  }
});
