import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Dashboard';
import Students from '~/pages/Students';
import StudentsAdd from '~/pages/Students/Add';
import StudentsEdit from '~/pages/Students/Edit';
import Plans from '~/pages/Plans';
import Enrollments from '~/pages/Enrollments';
import Questions from '~/pages/Questions';

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
        path="/students/add"
        component={StudentsAdd}
        menu="students"
        isPrivate
      />
      <Route
        path="/students/edit/:id"
        component={StudentsEdit}
        menu="students"
        isPrivate
      />
      <Route path="/students" component={Students} menu="students" isPrivate />

      <Route path="/plans" component={Plans} menu="plans" isPrivate />
      <Route
        path="/enrollments"
        component={Enrollments}
        menu="enrollments"
        isPrivate
      />
      <Route
        path="/questions"
        component={Questions}
        menu="questions"
        isPrivate
      />
    </Switch>
  );
}
