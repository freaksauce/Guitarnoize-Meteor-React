Post = React.createClass({

  mixins: [ReactMeteorData],

  propTypes: {
    postId: React.PropTypes.string.isRequired,
  },

  getMeteorData() {
    return {
      // postData: PostsCollection.find({'ID':this.props.postId}).fetch()
    }
  },

  render() {
    console.log(this.data.postData);
    return (
      <div className="container">
        <h1>Post {this.props.postId}</h1>
        {this.data.postData}
      </div>
    );
  }
});
