const initialState = [];

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const todos = (state = initialState, action) => {
  switch (action.type) {
    // Aca va tu codigo;
    case "AddTodo":
      return [...state, {}];
  }
};

export default todos;
// Lean test
