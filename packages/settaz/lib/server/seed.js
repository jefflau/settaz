/*

server/seed.js #tutorial-step-5 - 
This is a file to seed the database with some dummy content. 

*/

import { Promise } from "meteor/promise";
import Users from "meteor/vulcan:users";
import { newMutation } from "meteor/vulcan:core";
import Routes from "../modules/routes/collection.js";

const seedData = [
  {
    name: "Some route",
    grade: "V3",
    description: "Cool dynamic heelhook",
    videos: ["https://www.instagram.com/p/B8zFNY2Jvp7/"],
    photos: [],
    tags: []
  },
  {
    name: "Hard route",
    grade: "V7",
    description: "Cool dynamic heelhook",
    videos: ["https://www.instagram.com/p/B8zFNY2Jvp7/"],
    photos: [],
    tags: []
  }
];

const createUser = async (username, email) => {
  const user = {
    username,
    email,
    isDummy: true
  };

  return newMutation({
    collection: Users,
    document: user,
    validate: false
  });
};

const createDummyUsers = async () => {
  // eslint-disable-next-line no-console
  console.log("// inserting dummy users…");
  return Promise.all([
    createUser("Bruce", "dummyuser1@telescopeapp.org"),
    createUser("Arnold", "dummyuser2@telescopeapp.org"),
    createUser("Julia", "dummyuser3@telescopeapp.org")
  ]);
};

// eslint-disable-next-line no-undef
Vulcan.removeGettingStartedContent = () => {
  Users.remove({ "profile.isDummy": true });
  // eslint-disable-next-line no-console
  console.log("// Getting started content removed");
};

Meteor.startup(() => {
  if (Users.find().fetch().length === 0) {
    Promise.await(createDummyUsers());
  }
  const currentUser = Users.findOne(); // just get the first user available
  if (Routes.find().fetch().length === 0) {
    // eslint-disable-next-line no-console
    console.log("// creating dummy routes");
    Promise.awaitAll(
      seedData.map(document =>
        newMutation({
          collection: Routes,
          document,
          currentUser,
          validate: false
        })
      )
    );
  }
});
