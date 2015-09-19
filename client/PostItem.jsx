PostItem = React.createClass({

  propTypes: {
    postData: React.PropTypes.object.isRequired,
  },

  componentDidMount() {
      console.log(this.props.postData);
  },

  render() {
    return <a className="list-group-item" href="/post/{this.props.postData._id}">{this.props.postData.title}</a>
  }

});
