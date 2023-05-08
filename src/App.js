import React from "react";
import Expenses from "./components/Expenses/Expenses";
// root component
// function App (used to be belowe)
const App = () => {
  // How you would do it in javascript: (imperative way)
  // const para = document.createElement('p');
  // para.textContent = 'This is visible!';
  // document.getElementById('root').append(para);
  // How you would convert that to react:
  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <p>This is also visible!</p>
  //   </div>
  // );
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    // jsx code
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
