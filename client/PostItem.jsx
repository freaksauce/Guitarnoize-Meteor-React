PostItem = React.createClass({

  propTypes: {
    postData: React.PropTypes.object.isRequired,
  },

  componentDidMount() {
      console.log(this.props.postData);
  },

  render() {

    return <article>
      <div className="">
        <h5>{this.props.postData.title}</h5>
        {this.props.postData.excerpt}
      </div>
    </article>
  }

});
