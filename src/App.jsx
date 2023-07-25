import React from "react";
import Header from "./components/Layout/Header";
import MealsList from "./components/Meals/MealsList";
import Cart from "./components/Cart/Cart";
function App() {
  return (
   <React.Fragment>
    <Header/>
    <Cart/>

    <main>
      <MealsList/>
    </main>
   </React.Fragment>
  );
}

export default App;
