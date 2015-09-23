Posts = React.createClass({

  propTypes: {
    postsData: React.PropTypes.array.isRequired,
  },

  render() {

    function item(post) {
      return <PostItem postItemData={post} />
    }

    return <section>
          <div className="list-group">
            {this.props.postsData.map(item)}
          </div>
        </section>;

  }

});
