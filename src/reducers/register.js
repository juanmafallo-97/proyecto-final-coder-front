const initialState = {
  pending: false,
  success: false,
  user: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return { ...initialState, success: true, user: action.payload };
    case "REGISTER_FAILURE":
      const error = action.payload;
      return { ...initialState, pending: false, error };
    case "REGISTER_PENDING":
      return { pending: true, error: null };
    case "REGISTER_RESET":
      return initialState;
    default:
      return state;
  }
};

export default reducer;
