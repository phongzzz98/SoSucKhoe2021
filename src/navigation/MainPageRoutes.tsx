import React from "react";
import { Route, Switch } from "react-router-dom";
import { CertificateEdit } from "../feature/CertificateEdit/CertificateEdit";
import { Certification } from "../feature/Certification/Certification";
import { Home } from "../feature/Home/Home";
import { InjectionPlan } from "../feature/InjectionPlan/InjectionPlan";
import { InjectionRegister } from "../feature/InjectionRegister/InjectionRegister";
import { MedicalUnit } from "../feature/MedicalUnit/MedicalUnit";
import { Notification } from "../feature/Notification/Notification";
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
        <Route path="/certiEdit" render={() => <CertificateEdit/>} />
        <Route path="/notify" render={() => <Notification/>} />
        <Route path="/certification" render={() => <Certification/>} />
      </Switch>
    </MainLayout>
  );
};
