import React from "react";
import { SortingTabsTest } from "../components/SortingTabsTest";

export const Visualise = ({
  length,
  algo,
  speed,
  inputType,
  arrayInput,
  mode,
}) => {
  return (
    <SortingTabsTest
      inputType={inputType}
      arrayInput={arrayInput}
      length={length}
      algo={algo}
      speed={speed}
      mode={mode}
    />
  );
};
