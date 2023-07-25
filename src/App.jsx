import React, {useState} from "react";
import Header from "./components/Layout/Header";
import MealsList from "./components/Meals/MealsList";
import Cart from "./components/Cart/Cart";
import CartContexProvider from "./store/CartContexProvider";
function App() {
 
 const [cardIsVisible, setCardIsVisible]= useState(false)

 const showCardHandler =() =>{
  setCardIsVisible(true)
 }

 const hideCardHandler =() => {
  setCardIsVisible(false)
 }
  return (
   <CartContexProvider>
    <Header onShowCard = {showCardHandler}/>
   {cardIsVisible && <Cart onCloseCard = {hideCardHandler}/>}

    <main>
      <MealsList/>
    </main>
   </CartContexProvider>
  );
}

export default App;
