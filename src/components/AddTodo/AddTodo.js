import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions/index";

// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store.
// Si usas el hook `useDispatch` no funcionaran los test.

export function AddTodo(props) {
  const { state, setState } = React.useState({});

  return (
    <div>
      Esa parte de arriba puede ser un poco confusa al inicio asi que la dejo
      pero tendran que poner la informacion que necesita dentro de las `{}`
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
