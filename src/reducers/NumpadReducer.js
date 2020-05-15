import pinLenCheck from '../utils/pinLenCheck';
import pinCorrection from '../utils/pinCorrection';

const NumpadReducer = (state, action) => {
  switch (action.type) {
    case 'ENTER':
      if (state.errors !== null) {
        return {
          ...state,
          loading: false,
        };
      } else {
        return {
          ...state,
          errors: null,
          loading: false,
        };
      }
    case 'RESET':
      return {
        input: action.payload,
        errors: '',
        loading: false,
        entered: false,
        firstUpdate: true,
      };
    case 'UPDATE':
      return { ...state, entered: !state.entered };
    case 'FIRST_UPDATE':
      return { ...state, firstUpdate: false };
    case 'SET_CARD':
      return { ...state, input: action.payload[0] };
    case 'SET_ERROR':
      return { ...state, errors: action.payload };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_PIN':
      return {
        ...state,
        input: action.payload,
      };
    case 'SET_CORRECTION':
      if (Array.isArray(state.input)) {
        return {
          ...state,
          input: pinCorrection(state.input),
        };
      }
      break;
    case 'SET_NUMBER':
      if (Array.isArray(state.input)) {
        return {
          ...state,
          input: pinLenCheck(state.input, action.payload),
        };
      } else {
        return {
          ...state,
          number: action.payload,
        };
      }
    default:
      throw new Error();
  }
};

export default NumpadReducer;
