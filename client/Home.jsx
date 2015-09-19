Meteor.subscribe("posts");
Session.set('ppp', 10);

Home = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.call('getPosts', Session.get('ppp'), function(error, result) {

      if (error) {
        console.log(error);
      }else{
        // console.log('limit :'+Session.get('ppp'));
        console.log(result);
        // Session.set('posts', result);
        // Meteor.call('updatePosts', result);

      }

    });

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
