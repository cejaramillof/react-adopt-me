// pure function
export default function location(state = "darkblue", action) {
  if (action.type === "CHANGE_THEME") {
    // flux standard action
    // Action must plain js object and have type.
    // Action may have (error, payload, meta)
    return action.payload;
  } else {
    return state;
  }
}