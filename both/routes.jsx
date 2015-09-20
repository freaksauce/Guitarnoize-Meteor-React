FlowRouter.route("/", {
  name: 'home',
  action: function() {
    ReactLayout.render(Layout, {
      content: <Home />
    });
  }
});

FlowRouter.route("/post/:postId", {
  subscriptions: function(params) {
    this.register('singlePost', Meteor.subscribe('post', params.postId));
  },
  action: function(params, queryParams) {
    ReactLayout.render(Layout, {
      content: <Post postId={params.postId} />
    });
  }
});
//
// FlowRouter.notFound = {
//     subscriptions: function() {
//     },
//     action: function() {
//       ReactLayout.render(Layout, {
//         content: <NotFound />
//       });
//     }
// };
