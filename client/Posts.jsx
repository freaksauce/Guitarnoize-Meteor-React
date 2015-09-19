Posts = React.createClass({

  propTypes: {
    postsData: React.PropTypes.array.isRequired,
  },

  componentDidMount() {
    console.log(this.props.postsData);
  },

  render() {
    function item(post) {
      return <li>{post.title}</li>;
    };
    // return <ul>{this.props.postsData.map(post)}</ul>;
    return <h2>Post</h2>;
  }

});
