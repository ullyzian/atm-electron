import pinLengthParse from "../utils/pinLengthParse";
import pinCorrection from "../utils/pinCorrection";

const NumpadReducer = (state, action) => {
  switch (action.type) {
    case "ENTER":
      if (state.errors !== null) {
        return { ...state, loading: false };
      } else {
        return { ...state, errors: null, loading: false };
      }
    case "RESET":
      return {
        firstUpdate: true,
        input: action.payload,
        errors: "",
        loading: false,
      };

    case "UPDATE":
      return { ...state, entered: !state.entered };

    case "FIRST_UPDATE":
      return { ...state, firstUpdate: false };

    case "SET_CARD":
      return { ...state, input: action.payload[0] };

    case "SET_ERROR":
      return { ...state, errors: action.payload };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_PIN":
      return { ...state, input: action.payload };

    case "SET_INPUT":
      return { ...state, input: action.payload };
    case "SET_ACCOUNT_SELECT":
      return {
        ...state,
        input: {
          accounts: action.payload.accounts,
          amount: action.payload.amount,
          account: action.payload[0],
        },
      };
    case "SET_CORRECTION":
      if (Array.isArray(state.input)) {
        return { ...state, input: pinCorrection(state.input) };
      }
      return { ...state };

    case "SET_NUMBER":
      if (Array.isArray(state.input)) {
        return { ...state, input: pinLengthParse(state.input, action.payload) };
      } else if (state.input.amount) {
        return { ...state, input: { amount: state.input.amount + action.payload } };
      } else {
        return { ...state, number: action.payload };
      }

    default:
      throw new Error();
  }
};

export default NumpadReducer;
