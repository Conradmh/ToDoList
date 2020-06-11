const reqs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_REQ':
      return [
        ...state,
        {
          id: action.id,
          title: action.description,
          description: action.description,
          priority: action.priority,
          completed: false
        }
      ]
    case 'TOGGLE_REQ':
      return state.map(req =>
        req.id === action.id ? { ...req, completed: !req.completed } : req
      )
    default:
      return state
  }
}

export default reqs
