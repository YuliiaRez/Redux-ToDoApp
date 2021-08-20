import ACTION_TYPES from "./actionTypes";

export const createTask = (taskData) => {
  return {
    type: ACTION_TYPES.CREATE_TASK,
    taskData: taskData,
  };
};
export const deleteTask = (id) => {
  return {
    type: ACTION_TYPES.DELETE_TASK,
    id: id,
  };
};

export const updateTask = (newInfo) => {
  return {
    type: ACTION_TYPES.UPDATE_TASK,
    newInfo: newInfo,
  };
};
