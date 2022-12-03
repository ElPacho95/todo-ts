export interface TagsState {
  tags: string[];
  loading: boolean;
  error: null | string;
}

export enum TagsActionsTypes {
  FETCH_TAGS = "FETCH_TAGS",
  FETCH_TAGS_SUCCESS = "FETCH_TAGS_SUCCESS",
  FETCH_TAGS_ERROR = "FETCH_TAGS_ERROR",
}

interface FetchTagsAction {
  type: TagsActionsTypes.FETCH_TAGS;
}

interface FetchTagsSuccessAction {
  type: TagsActionsTypes.FETCH_TAGS_SUCCESS;
  payload: string[];
}
interface FetchTagsErrorAction {
  type: TagsActionsTypes.FETCH_TAGS_ERROR;
  payload: string;
}

export type TagAction =
  | FetchTagsAction
  | FetchTagsSuccessAction
  | FetchTagsErrorAction;
