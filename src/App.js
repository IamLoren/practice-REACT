import React, { useEffect } from "react";
import { TaskList } from "./components/TaskList/TaskList";
import { useDispatch } from "react-redux";
import { fetchTasksThunk } from "./redux/tasks/operations";
import { Posts } from "./components/Posts/Posts";
//Plan

const App = () => {
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(fetchTasksThunk());
  //   }, [dispatch]);

  return (
    <div>
      {/* <TaskList /> */}
      <Posts />
    </div>
  );
};

export default App;
