import "./App.css";
import { MainLayout } from "./pages/MainLayout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./navigation/PrivateRoute";
import { MainPageRoutes } from "./navigation/MainPageRoutes";
import { Login } from "./feature/Authentication/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllVaccineInfoAction } from "./feature/InjectionRegister/actions/InjectRegisAction";
import { getAllUnitAction } from "./feature/MedicalUnit/actions/MedicalAction";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllVaccineInfoAction());
    dispatch(getAllUnitAction());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute component={MainPageRoutes} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
