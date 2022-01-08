// Либо использовать @loadable/component, в рамках туториала - некритично
// import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// const TestPage = lazy(() => import("./test"));

export const Routing = () => {
  return (
    <Routes>
      {/* <Route path="/test" element={<TestPage />} /> */}
    </Routes>
  );
};
