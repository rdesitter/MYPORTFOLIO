import { RESET_SLUG, SET_PROJECT, SET_SLUG, TOGGLE_LOADED } from "../action";

const initialState = {
    projectItem: {},
    totalItems: 0,
    loaded: false,
    slug: '',
  };
  
  /* 
  todo
  ajouter projets + techno utilisées, url vers sites, lien github si public, descriptions, role sur le projet
  */
  
  function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case SET_PROJECT:
        return {
          ...state,
          projectItem: {
            ...action
          },
          totalItems: action.totalItems,
          loaded: true,
          slug: '',
        }
      case TOGGLE_LOADED:
        return {
          ...state,
          loaded: !state.loaded,
        }
      case SET_SLUG:
        return {
          ...state,
          slug: action.slug,
        }
      case RESET_SLUG:
        return {
          ...state,
          slug: '',
        }
      default:
        return state;
    }
  }
  
  export default reducer;
  