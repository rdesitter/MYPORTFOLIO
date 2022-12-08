export const GET_PROJECT = 'GET_PROJECT';

export const getProject = (index) => ({
  type: GET_PROJECT,
  index
});

export const GET_PROJECT_BY_SLUG = 'GET_PROJECT_BY_SLUG';

export const getProjectBySlug = (slug) => ({
  type: GET_PROJECT_BY_SLUG,
  slug
});

export const SET_PROJECT = 'SET_PROJECT';

export const setProject = (data, totalItems) => ({
  type: SET_PROJECT,
  ...data,
  totalItems,
});

export const TOGGLE_LOADED = 'TOGGLE_LOADED';

export const toggleLoaded = () => ({
  type: TOGGLE_LOADED,
});

export const GET_SLUG = 'GET_SLUG';

export const getSlug = (index) => ({
  type: GET_SLUG,
  index,
});

export const SET_SLUG = 'SET_SLUG';

export const setSlug = (slug) => ({
  type: SET_SLUG,
  slug,
});

export const RESET_SLUG = 'RESET_SLUG';

export const resetSlug = (slug) => ({
  type: RESET_SLUG,
});
