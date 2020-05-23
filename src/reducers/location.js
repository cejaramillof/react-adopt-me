// pure function
export default function location(state = "Seattle, WA", action) {
  if (action.type === "CHANGE_LOCATION") {
    // flux standard action
    // Action must plain js object and have type.
    // Action may have (error, payload, meta)
    return action.payload;
  } else {
    return state;
  }
}