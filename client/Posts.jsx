Posts = React.createClass({

  propTypes: {
    PostData: React.PropTypes.object.isRequired,
  },

  render() {
    function item(post) {
      return <li>{post.title}</li>;
    };
    return <ul>{this.props.postData.map(post)}</ul>;
  }

});
