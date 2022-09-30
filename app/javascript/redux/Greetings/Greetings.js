// Action Types
const GET = 'my-vew-rails-app/greetings/GET';
const baseURL = 'http://localhost:3000/greetings';
const initialState = [];

// Reducer
export default function greetingsReducer(state = initialState, action) {
  // const greetings = [...state, action.payload];
  switch (action.type) {
    case GET:
      return action.payload;

    default:
      return state;
  }
}

// calls
const fetchGreetings = async () => {
  const result = await fetch(baseURL);
  const data = await result.json();
  return data;
};

// Action Creators
export const getGreetings = () => async (dispatch) => {
  const result = await fetchGreetings();
  const greetings = Object.entries(result).map(([itemId, [greeting]]) => ({
    id: itemId,
    title: greeting.message,
  }));
  dispatch({
    type: GET,
    payload: greetings,
  });
};
