export function config(state = [], action) {
  switch (action.type) {
    case "SET_CONFIG":
      console.log('reducer');
      return {
        images: action.config.images
      };
    default:
      return state;
  }
  return state;
}
