import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Dashboard';
import Students from '~/pages/Students';
import StudentsNew from '~/pages/Students/New';
import StudentsEdit from '~/pages/Students/Edit';
import PlansAdd from '~/pages/Plans/Add';
import PlansEdit from '~/pages/Plans/Edit';
import Plans from '~/pages/Plans';
import EnrollmentsAdd from '~/pages/Enrollments/Add';
import Enrollments from '~/pages/Enrollments';
import HelpOrders from '~/pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route
        path="/dashboard"
        component={Dashboard}
        menu="dashboard"
        isPrivate
      />

      <Route
        path="/students/new"
        component={StudentsNew}
        menu="students"
        isPrivate
      />
      <Route
        path="/students/:id/edit"
        component={StudentsEdit}
        menu="students"
        isPrivate
      />
      <Route path="/students" component={Students} menu="students" isPrivate />

      <Route
        path="/plans/:id/edit"
        component={PlansEdit}
        menu="plans"
        isPrivate
      />
      <Route path="/plans/add" component={PlansAdd} menu="plans" isPrivate />
      <Route path="/plans" component={Plans} menu="plans" isPrivate />

      <Route
        path="/enrollments/add"
        component={EnrollmentsAdd}
        menu="enrollments"
        isPrivate
      />
      <Route
        path="/enrollments"
        component={Enrollments}
        menu="enrollments"
        isPrivate
      />
      <Route
        path="/help-orders"
        component={HelpOrders}
        menu="help-orders"
        isPrivate
      />
    </Switch>
  );
}
