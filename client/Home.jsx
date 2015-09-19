Meteor.subscribe("posts");
Session.set('ppp', 10);

Home = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.call('getPosts', Session.get('ppp'), (error, result) => {

      if (error) {
        console.log(error);
      }else{
        // console.log('limit :'+Session.get('ppp'));
        console.log(result);
        // this.setState({postsData: result});
        Meteor.call('updatePosts', result);
        return {
          postsData: result
        }
      }

    });
  },

  // getInitialState() {
  //   return {
  //     postContent: null
  //   };
  // },

  getPosts() {
    console.log('get posts')
    // return <Posts PostData={this.state.posts} />
  },

  handleSubmit() {
    console.log('handleSubmit');
  },

  render() {

    return (
      <div className="container">
        <h1>Home</h1>
        {this.data.postsData}
      </div>
    );
  }
});
