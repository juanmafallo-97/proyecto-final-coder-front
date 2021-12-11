const initialState = {
  user: null,
  pending: false,
  error: null
};

const reducer = (session = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      const { user } = action.payload;
      return { user, error: null, pending: false };
    case "LOGIN_FAILURE":
      const error = action.payload;
      return { ...initialState, error };
    case "LOGOUT":
      return initialState;
    case "LOGIN_PENDING":
      return { ...initialState, pending: true };
    default:
      return session;
  }
};

export default reducer;
