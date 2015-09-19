Posts = React.createClass({

  propTypes: {
    postsData: React.PropTypes.array.isRequired,
  },

  componentDidMount() {
    console.log(this.props.postsData);
  },

  render() {
    function item(post) {
      return <li key={post._id}>{post.title}</li>;
    };
    return <ul>{this.props.postsData.map(item)}</ul>;
  }

});
