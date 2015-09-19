FlowRouter.route("/", {
  name: 'home',
  subscriptions: function() {
    this.register('customers', Meteor.subscribe('customers'));
  },
  action: function() {
    ReactLayout.render(Layout, {
      content: <Home />
    });
  }
});

FlowRouter.route("/post/:postId", {
  subscriptions: function() {
  },
  action: function(params, queryParams) {
    console.log(params);
    console.log("Yeah! We are on the post:", params.postId);
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
