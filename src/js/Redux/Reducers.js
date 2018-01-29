export function config(state = [], action) {
  switch (action.type) {
    case "GET_CONFIG":
      return {
        images: action.config.images
      };
    default:
      return state;
  }
  return state;
}

export function movies(state = [], action) {
  switch (action.type) {
    case "GET_LATEST_MOVIES":
      return {
        latest: action.movies,
      };
    default:
      return state;
  }
  return state;
}
