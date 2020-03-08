/*

modules/movies/schema.js - #tutorial-step-10 -
This is a JS object that defines every property of a collection document...

A SimpleSchema-compatible JSON schema

*/

const schema = {
  // default properties

  _id: {
    type: String,
    optional: true,
    canRead: ["guests"]
  },
  createdAt: {
    type: Date,
    optional: true,
    canRead: ["guests"],
    onCreate: () => {
      return new Date();
    }
  },
  userId: {
    type: String,
    optional: true,
    canRead: ["guests"],
    resolveAs: {
      fieldName: "user",
      type: "User",
      relation: "hasOne"
    }
  },

  // custom properties

  name: {
    label: "Name",
    type: String,
    optional: true,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"]
  },
  grade: {
    label: "Grade",
    type: String,
    optional: true,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"]
  },
  description: {
    label: "Description",
    type: String,
    optional: true,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"]
  },
  videos: {
    label: "Videos",
    type: Array,
    optional: true,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"]
  },
  photos: {
    label: "Photos",
    type: Array,
    optional: true,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"]
  },
  tags: {
    label: "Tags",
    type: Array,
    optional: true,
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"]
  },
  "videos.$": {
    type: String,
    optional: true
  },
  "photos.$": {
    type: String,
    optional: true
  },
  "tags.$": {
    type: String,
    optional: true
  }
};

export default schema;
