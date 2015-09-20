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
      postData: PostsCollection.findOne({'ID': parseInt(this.props.postId)})
    };

  },

  render() {
    if (this.data.postLoading) {
      // return <LoadingSpinner />;
      console.log('loading');
    }

    // console.log(this.data.postData);
    return (
      <div className="container">
        <h1>Post {this.props.postId}</h1>
        <PostItem postData={this.data.postData} fullPost="true" />
      </div>
    );
  }
});
