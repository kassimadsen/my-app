import ExpenseItem from "./components/ExpenseItem";
// root component
function App() {
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
  return (
    // jsx code
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
