const initialState = {
  tasks: [{ id: "1", title: "Redux", completed: true }],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
