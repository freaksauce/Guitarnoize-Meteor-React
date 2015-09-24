Session.set('ppp', 10);

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
          // console.log(result);
          this.setState({postsReady: true, postsData: result});
          Meteor.call('updatePosts', result);
          ReactCookie.save('gmr-visited', true, { path: '/', maxAge: 120 });
          // ReactCookie.save('locale', locale, { path: '/', maxAge: 3600 * 24 * 30 });
        }
      });

    }
  },

  getInitialState() {
    return {
      postsReady: false
    };
  },

  render() {

    if (!this.state.postsReady) {
      if (this.data.postsData !== null) {
        return (
          <div className="">
            <Posts postsData={this.data.postsData} />
          </div>
        );
      }else{
        return (<div>Loading posts...</div>);
      }
    }else if (this.state.postsReady) {
      return (
        <div className="">
          <Posts postsData={this.state.postsData} />
        </div>
      );
    }
  }
});
