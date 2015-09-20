PostItem = React.createClass({

  propTypes: {
    postData: React.PropTypes.object.isRequired,
  },

  render() {
    console.log(this.props.postData.ID);
    return <a className="list-group-item" href={'/post/'+this.props.postData.ID} dangerouslySetInnerHTML={{__html: this.props.postData.title}} />
  }

});
