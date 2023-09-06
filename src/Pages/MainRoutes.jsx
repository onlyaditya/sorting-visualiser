import React from "react";
import { Route, Routes } from "react-router-dom";
import { SortingTabs } from "../components/SortingTabs";
import { SortingTabsTest } from "../components/SortingTabsTest";

export const MainRoutes = ({ length, algo, speed, inputType, arrayInput }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SortingTabs
            inputType={inputType}
            arrayInput={arrayInput}
            length={length}
            algo={algo}
            speed={speed}
          />
        }
      />
      <Route
        path="/play"
        element={
          <SortingTabsTest
            inputType={inputType}
            arrayInput={arrayInput}
            length={length}
            algo={algo}
            speed={speed}
          />
        }
      />
    </Routes>
  );
};
