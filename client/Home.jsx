Meteor.subscribe("posts");
Session.set('ppp', 10);

Home = React.createClass({

  componentDidMount() {
    Meteor.call('getPosts', Session.get('ppp'), (error, result) => {

      if (error) {
        console.log(error);
      }else{
        // console.log(result);
        this.setState({apiCallComplete: true, postsData: result});
        Meteor.call('updatePosts', result);

      }

    });
  },

  getInitialState() {
    return {
      apiCallComplete: false
    };
  },

  handleSubmit() {
    console.log('handleSubmit');
  },

  render() {
    if (!this.state.apiCallComplete) {
      return (<div>Loading...</div>);
    } else {
      return (
        <div className="container">
          <h1>Home</h1>
          <Posts postsData={this.state.postsData} />
        </div>
      );
    }
  }
});
