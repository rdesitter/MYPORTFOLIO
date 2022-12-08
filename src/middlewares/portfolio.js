import { GET_PROJECT, GET_PROJECT_BY_SLUG, GET_SLUG, setProject, setSlug } from "../action";
import projects from "../data/portfolio";

const portfolioMiddleware = (store) => (next) => (action) => {
    if (action.type === GET_PROJECT) {
      const project = projects.find(item => item.id === action.index);
      const totalItems = projects.length;
      store.dispatch(setProject(project, totalItems));
    }

    if (action.type === GET_PROJECT_BY_SLUG) {
      const project = projects.find(item => item.slug === action.slug);
      const totalItems = projects.length;
      store.dispatch(setProject(project, totalItems));
    }

    if (action.type === GET_SLUG) {
      const project = projects.find(item => item.id === action.index);
      store.dispatch(setSlug(project.slug));
    }
    next(action);
  };
  
  export default portfolioMiddleware;
  