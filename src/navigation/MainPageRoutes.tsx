import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../feature/Home/Home";
import { InjectionPlan } from "../feature/InjectionPlan/InjectionPlan";
import { InjectionRegister } from "../feature/InjectionRegister/InjectionRegister";
import { MedicalUnit } from "../feature/MedicalUnit/MedicalUnit";
import { PersonalInfo } from "../feature/PersonalInfo/PersonalInfo";
import { UnitInfo } from "../feature/UnitInfo/UnitInfo";
import { MainLayout } from "../pages/MainLayout";

export const MainPageRoutes = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact render={() => <Home/>} />
        <Route path="/medicalUnit" exact render={() => <MedicalUnit/> } />
        <Route path="/injectReg" render={() => <InjectionRegister/>} />
        <Route path="/info" render={() => <PersonalInfo/>} />
        <Route path="/unitInfo" render={() => <UnitInfo/>} />
        <Route path="/injectPlan" render={() => <InjectionPlan/>} />
      </Switch>
    </MainLayout>
  );
};
