import { Route, Routes } from "react-router";
import { TaskList } from "./components/TaskList/TaskList";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshThunk } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { PublicRoute } from "./routesConfig/PublicRoute";
import { PrivateRoute } from "./routesConfig/PrivateRoute";
//Plan
// Додати форми логіну / регістрації
// Додати рефреш
// Додати заглушку при рефреш
// Додати приватні маршрути
const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Refreshing...</h1>
  ) : (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/todos"
          element={
            <PrivateRoute>
              <TaskList />
            </PrivateRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Registration />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
