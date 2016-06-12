export default function visFilter (
  state = 'SHOW_ALL',
  action
) {
  switch (action.type) {
    case 'SET_POSTINGS_FILTER':
      return action.position;
    default:
      return state;
  }
}
