Post = React.createClass({

  mixins: [ReactMeteorData],

  propTypes: {
    postId: React.PropTypes.string.isRequired,
  },

  getMeteorData() {
    return {
    }
  },

  getInitialState: function() {
    return {
    };
  },

  handleSubmit() {
    console.log('handleSubmit');
  },

  render() {

    return (
      <div className="container">
        <h1>Post {this.props.postId}</h1>
      </div>
    );
  }
});
