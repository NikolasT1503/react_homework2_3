import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));



function App() {
  let result = 0;
  
  let solve1 = () => {
    let sum = 0;
    let num = Number.parseInt(document.getElementById('digit').value);
    sum = num*(num+1)/2;
    document.getElementById('res').innerHTML='Результат = '+sum;
    alert ('Результат = ' + sum);
    
    //return sum
  }


  return (
    <div className="App">
      <h2>Вычисление суммы n первых натуральных чисел</h2>
      <TextField
        id="digit"
        type="number"
        label="Введите число n"
      />
      <button onClick={solve1}>Рассчитать</button>
      <h2 id='res'>Результат = </h2>
    </div>
  );
}

export default App;
