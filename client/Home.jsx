Session.set('ppp', 10); // ppp = posts per page

Home = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      postsData: PostsCollection.find({}, {limit: Session.get('ppp')}).fetch()
    };
  },

  componentDidMount() {

    let visitedCookie = ReactCookie.load('gmr-visited');
    if (!visitedCookie) {
      Meteor.call('getPosts', Session.get('ppp'), (error, result) => {
        if (error) {
          console.log(error);
        }else{
          this.setState({postsReady: true, postsData: result});
          Meteor.call('updatePosts', result);
          ReactCookie.save('gmr-visited', true, { path: '/', maxAge: 120 });
        }
      });
    }else{
      var posts = PostsCollection.find({}, {limit: Session.get('ppp')});
      this.setState({postsReady: true, postsData: posts});
    }

  },

  getInitialState() {
    return {
      postsReady: false
    };
  },

  render() {
    if (!this.state.postsReady) {
        return (<div>Loading posts...</div>);
    }else if (this.state.postsReady) {
      return (
        <div className="">
          <Posts postsData={this.state.postsData} />
        </div>
      );
    }
  }
});
