import { useReducer } from "react";
import { APP_STATUS_ACTIONS, MOCK_APP_STATUS_STATE, APP_STATE_KEYS } from "./constants";
import { windowRef } from "../utils/window-ref";
import { dispatchMiddleware } from "./utils";
const {
  SET_IS_MOBILE,
  SET_MODAL,
  CLOSE_MODAL,
  SET_IS_LOGGED,
  SET_RPC_DOWN,
  SET_DEGRADED,
  SET_REWARDS_STATUS,
} = APP_STATUS_ACTIONS;

const { IS_MOBILE, MODAL, IS_LOGGED, IS_RPC_DOWN, IS_DEGRADED, IS_LOW_REWARDS, IS_EMPTY_REWARDS } = APP_STATE_KEYS;

export function AppStatusReducer(state, action) {
  const updatedState = { ...state };
  switch (action.type) {
    case SET_IS_MOBILE: {
      updatedState[IS_MOBILE] = action[IS_MOBILE];
      break;
    }
    case SET_MODAL: {
      updatedState[MODAL] = action.modal;
      break;
    }
    case CLOSE_MODAL: {
      updatedState[MODAL] = {};
      break;
    }
    case SET_IS_LOGGED: {
      const { account } = action;
      updatedState[IS_LOGGED] = Boolean(account);
      break;
    }
    case SET_RPC_DOWN: {
      const { isRpcDown } = action;
      updatedState[IS_RPC_DOWN] = Boolean(isRpcDown);
      break;
    }
    case SET_DEGRADED: {
      const { isDegraded } = action;
      updatedState[IS_DEGRADED] = Boolean(isDegraded);
      break;
    }
    case SET_REWARDS_STATUS: {
      const { rewardsStatus } = action;
      updatedState[IS_LOW_REWARDS] = Boolean(rewardsStatus.isLow);
      updatedState[IS_EMPTY_REWARDS] = Boolean(rewardsStatus.isEmpty);
      break;
    }
    default:
      console.log(`Error: ${action.type} not caught by App Status reducer`);
  }
  windowRef.appStatus = updatedState;

  return updatedState;
}

export const useAppStatus = (defaultState = MOCK_APP_STATUS_STATE) => {
  const [state, pureDispatch] = useReducer(AppStatusReducer, defaultState);
  const dispatch = dispatchMiddleware(pureDispatch);
  windowRef.appStatus = state;
  return {
    ...state,
    actions: {
      setIsMobile: (isMobile) => dispatch({ type: SET_IS_MOBILE, isMobile }),
      setModal: (modal) => dispatch({ type: SET_MODAL, modal }),
      closeModal: () => dispatch({ type: CLOSE_MODAL }),
      setIsLogged: (account) => dispatch({ type: SET_IS_LOGGED, account }),
      setIsRpcDown: (isRpcDown) => dispatch({ type: SET_RPC_DOWN, isRpcDown }),
      setIsDegraded: (isDegraded) => dispatch({ type: SET_DEGRADED, isDegraded }),
      setRewardsStatus: (rewardsStatus) => dispatch({ type: SET_REWARDS_STATUS, rewardsStatus }),
    },
  };
};
