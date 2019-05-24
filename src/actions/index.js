export const addTodo = (id, text) => ({
  type: "ADD_TODO",
  id,
  text
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});
