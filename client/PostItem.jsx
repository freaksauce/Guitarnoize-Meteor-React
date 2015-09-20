PostItem = React.createClass({

  propTypes: {
    postItemData: React.PropTypes.object.isRequired,
  },

  render() {
    console.log(this.props.postItemData);
    return <a className="list-group-item" href={'/post/'+this.props.postItemData.ID} dangerouslySetInnerHTML={{__html: this.props.postItemData.title}} />
  }

});
