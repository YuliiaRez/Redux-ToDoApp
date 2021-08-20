import React from "react";
import { connect } from "react-redux";
import { deleteTask, updateTask } from "../../actions";
import s from "../../pages/TodoPage/TodoPage.module.scss";

function TasksList(props) {
  const { tasks, deleteTaskAction, updateTaskAction } = props;

  const mapTask = ({ id, taskBody, isDone }, index) => {
    const changeIsDone = () => {
      updateTaskAction({ id: id, isDone: !isDone });
      console.log(`taskbody`, taskBody);
    };

    const deleteTask = () => {
      deleteTaskAction(id);
    };
    return (
      <li key={id}>
        taskBody: {taskBody}
        <input type="checkbox" checked={isDone} onChange={changeIsDone} />
        <button onClick={deleteTask}>Del</button>
      </li>
    );
  };

  return <ol className={s.tasksList}>{tasks.map(mapTask)}</ol>;
  // return <ul>{tasks}</ul>;
}

const mapStateToProps = (state) => state.taskState;
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTaskAction: (id) => {
      dispatch(deleteTask(id));
    },
    updateTaskAction: (newTaskInfo) => {
      dispatch(updateTask(newTaskInfo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
