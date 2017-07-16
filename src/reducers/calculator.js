export default function storeStats(state = { response: {} }, action) {
  switch (action.type) {
    case 'STORE_STATS':
      return Object.assign({}, state);
    default:
      return state;
  }
}
