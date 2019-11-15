export function editPlanRequest(plan) {
  return {
    type: '@plan/EDIT_PLAN_REQUEST',
    payload: { plan },
  };
}

export function editPlanSuccess() {
  return {
    type: '@plan/EDIT_PLAN_SUCCESS',
  };
}
