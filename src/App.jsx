import React from "react";
import Header from "./components/Layout/Header";
import MealsList from "./components/Meals/MealsList";
function App() {
  return (
   <React.Fragment>
    <Header/>
    <main>
      <MealsList/>
    </main>
   </React.Fragment>
  );
}

export default App;
