import React from "react";
import { useReducer, createContext, Dispatch } from "react";
import moduleReducer from "./ModuleReducer";
import type { State, Action } from "./ModuleReducer";

interface LayoutProps {
  children: React.ReactNode;
}

const defaultState: State = {} as State;
const moduleStateContext = createContext(defaultState);
const moduleDispatchContext = createContext((() => {}) as Dispatch<Action>);

const CourseProvider = ({ children }: LayoutProps) => {
  const [state, dispatch] = useReducer(moduleReducer, defaultState);

  return (
    <moduleStateContext.Provider value={state}>
      <moduleDispatchContext.Provider value={dispatch}>
        {children}
      </moduleDispatchContext.Provider>
    </moduleStateContext.Provider>
  );
};

export default CourseProvider;
export { moduleStateContext, moduleDispatchContext };
