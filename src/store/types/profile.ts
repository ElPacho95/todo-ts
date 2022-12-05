export interface IProfile {
  username: string;
  profile_img: string;
}

export interface ProfileState {
  profile: IProfile;
  loading: boolean;
  error: null | string;
}

export enum ProfilesActionsTypes {
  FETCH_PROFILE = "FETCH_PROFILE",
  FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS",
  FETCH_PROFILE_ERROR = "FETCH_PROFILE_ERROR",
}

interface FetchProfileAction {
  type: ProfilesActionsTypes.FETCH_PROFILE;
}

interface FetchProfileSuccessAction {
  type: ProfilesActionsTypes.FETCH_PROFILE_SUCCESS;
  payload: IProfile;
}

interface FetchProfileErrorAction {
  type: ProfilesActionsTypes.FETCH_PROFILE_ERROR;
  payload: string;
}

export type ProfileAction =
  | FetchProfileAction
  | FetchProfileSuccessAction
  | FetchProfileErrorAction;
