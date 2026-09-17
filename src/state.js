const state = {
  status: 'idle',
  data: null,
  error: null,
  lastSearch: null,
};

export function getState() {
  return state;
}

export function setState(updates) {
  Object.assign(state, updates);
}