# Guitarnoize-Meteor-React

Having created a Meteor app that reads from my Guitarnoize site via the Wordpress JSON-api plugin using the Blaze template system I decided to port it over to React. I am loading from the Wordpress API and saving the posts to MongoDB using "upsert" to ensure there is no doubling up of data. When you visit an individual post page the html is loaded from the database rather than an api call and then rendered to the page via a Post react component.

You can see the app in action here: http://guitarnoize-meteor-react.meteor.com/
