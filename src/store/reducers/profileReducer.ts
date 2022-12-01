import {
  IProfile,
  ProfileAction,
  ProfilesActionsTypes,
  ProfileState,
} from "../types/profile";

const initialState: ProfileState = {
  profile: {} as IProfile,
  loading: false,
  error: null,
};

export const profileReducer = (
  state = initialState,
  action: ProfileAction
): ProfileState => {
  switch (action.type) {
    case ProfilesActionsTypes.FETCH_PROFILE:
      return { ...state, loading: true, error: null };
    case ProfilesActionsTypes.FETCH_PROFILE_SUCCESS:
      return { ...state, loading: false, error: null, profile: action.payload };
    case ProfilesActionsTypes.FETCH_PROFILE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
