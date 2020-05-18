import { NoopDebugEngine } from "styletron-react";

const WidthStyle = {
  BaseButton: {
    style: () => {
      return {
        marginTop: "10px",
        width: "70%",
        maxWidth: "300px",
      };
    },
  },
  Root: {
    style: ({ $theme }) => {
      return {
        marginTop: "10px",
        width: "70%",
        maxWidth: "300px",
      };
    },
  },
  Input: {
    style: ({ $theme }) => {
      return {
        backgroundColor: "#292929",
        color: "#FFFFFF",
        outline: "#292929 solid",

      };
    },
  },
};

export default WidthStyle;
