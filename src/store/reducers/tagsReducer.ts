import { TagAction, TagsActionsTypes, TagsState } from "../types/tags";

const initialState: TagsState = {
  tags: [],
  loading: false,
  error: null,
};
export const tagsReducer = (
  state = initialState,
  action: TagAction
): TagsState => {
  switch (action.type) {
    case TagsActionsTypes.FETCH_TAGS:
      return { loading: true, error: null, tags: [] };
    case TagsActionsTypes.FETCH_TAGS_SUCCESS:
      return { loading: false, error: null, tags: action.payload };
    case TagsActionsTypes.FETCH_TAGS_ERROR:
      return { loading: false, error: action.payload, tags: [] };
    default:
      return state;
  }
};
