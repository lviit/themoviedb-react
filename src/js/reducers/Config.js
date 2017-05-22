function config(state = [],  action) {
  switch (action.type) {
    case 'SET_CONFIG':
      return action.config.images
    default:
      return state;
  }
  return state;
}

export default config;
