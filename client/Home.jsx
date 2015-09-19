Home = React.createClass({

  mixins: [ReactMeteorData],

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
        <h1>Home</h1>
      </div>
    );
  }
});
