import { registerFragment } from "meteor/vulcan:core";

registerFragment(/* GraphQL */ `
  fragment RoutesItem on Route {
    name
    description
    grade
    videos
    user {
      username
    }
  }
`);
