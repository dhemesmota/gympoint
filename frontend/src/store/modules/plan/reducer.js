import produce from 'immer';

const INITIAL_STATE = {
  plan: null,
};

export default function editPlan(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plan/EDIT_PLAN_REQUEST': {
        draft.plan = action.payload.plan;
        break;
      }

      default:
    }
  });
}
