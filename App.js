
import Expenses from "./components/Expenses"


function App() {


  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 94.12,
      date: new Date(2022, 3, 15),
    },
    {id:"e2", title:"New Tv", amount:"799.4", date: new Date(2022, 2, 15) },
    {id:"e3", title:"Food", amount:"12.6", date: new Date(2022, 1, 15) },
    {id:"e4" ,title:"Gas", amount:"56.12", date: new Date(2022, 4, 15) },
    {id:"e5", title:"Electric", amount:"40.06", date: new Date(2022, 7, 15) }
  ];



  const pr = document.createElement("p");
  pr.innerHTML= "This is also available 001";
  document.getElementById("root").append("pr");



  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <Expenses items={expenses}/>

    </div>
  );
}

export default App;
