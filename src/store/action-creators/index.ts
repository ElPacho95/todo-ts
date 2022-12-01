import * as TodoActionCreators from "./todo";
import * as ProfileActionCreators from "./profile";
import * as TagsActionsTypes from "./tags";

export default {
  ...TodoActionCreators,
  ...ProfileActionCreators,
  ...TagsActionsTypes
};
