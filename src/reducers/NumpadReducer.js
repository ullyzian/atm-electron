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
      return {
        ...state,
        input: { ...state.input, accounts: action.payload.accounts },
      };
    case "SET_AMOUNT":
      return {
        ...state,
        input: {
          ...state.input,
          amount: action.payload.amount,
        },
      };
    case "SET_ACCOUNT_SELECT":
      return {
        ...state,
        input: {
          ...state.input,
          account: action.payload[0],
        },
      };
    case "SET_CORRECTION":
      if (state.input.amount) {
        return { ...state, input: { ...state.input, amount: state.input.amount.slice(0, -1) } };
      } else if (Array.isArray(state.input)) {
        return { ...state, input: pinCorrection(state.input) };
      } else {
        return { ...state };
      }

    case "SET_NUMBER":
      if (state.input.amount !== undefined) {
        return { ...state, input: { ...state.input, amount: state.input.amount + action.payload } };
      } else if (Array.isArray(state.input)) {
        return { ...state, input: pinLengthParse(state.input, action.payload) };
      } else {
        return { ...state, number: action.payload };
      }

    default:
      throw new Error();
  }
};

export default NumpadReducer;
