Posts = React.createClass({

  propTypes: {
    postsData: React.PropTypes.array.isRequired,
  },

  render() {

    function item(post) {
      return <PostItem postData={post} />
    }

    return <section className="">
          <h2 className="">Posts</h2>
          {this.props.postsData.map(item)}
        </section>;

  }

});
