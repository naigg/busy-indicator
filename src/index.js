import React, { useReducer, createContext } from "react";

const initialState = {
  display: false
};

const SHOW_DISPLAY = "show-display";
const HIDE_DISPLAY = "hide-display";

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_DISPLAY:
      return {
        ...state,
        display: true
      };
    case HIDE_DISPLAY:
      return {
        ...state,
        display: false
      };
    default:
      return state;
  }
};

/*
Create a context to listen for changes
*/
export const BusyIndicatorContext = createContext({});

/*
Component about the content
*/
const BusyIndicatorDisplay = ({
  displayStyles,
  displayContent = "loading"
}) => {
  const displayStyle = {
    position: "absolute",
    top: 0,
    ...displayStyles
  };

  return (
    <div className="busy-indicator-display" style={displayStyle}>
      {displayContent}
    </div>
  );
};

/*
Component so far
*/
const BusyIndicator = ({
  children,
  displayStyles,
  displayContent,
  ...extraProps
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const showDisplay = () => dispatch({ type: SHOW_DISPLAY });
  const hideDisplay = () => dispatch({ type: HIDE_DISPLAY });

  const providerValue = { state, showDisplay, hideDisplay };

  return (
    <BusyIndicatorContext.Provider value={providerValue}>
      <React.Fragment>
        {children}
        {state && state.display ? (
          <BusyIndicatorDisplay
            displayStyles={displayStyles}
            displayContent={displayContent}
          />
        ) : (
          ""
        )}
      </React.Fragment>
    </BusyIndicatorContext.Provider>
  );
};

export default BusyIndicator;
