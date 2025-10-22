import { Routes, Route } from "react-router-dom";
import { columnConfig } from "@/components/Navbar/config/columnConfig";

export default function App() {
  return (
    <>
      <Routes>
        {columnConfig.map((route) => {
          const PageComponent = route.component;
          return (
            <Route
              key={route.key}
              path={route.path}
              element={<PageComponent />}
            />
          );
        })}
      </Routes>
    </>
  );
}
