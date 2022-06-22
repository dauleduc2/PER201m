import { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "../shared/dish";
import DishDetail from "./dishDetail";
import Menu from "./Menu";
import Header from "./header";
import Footer from "./footer";
function Main() {
  const [dishes, setDishes] = useState(DISHES);

  const [selectedDish, setSelectedDish] = useState(null);

  const _onDishSelect = (dishId) => {
    setSelectedDish(dishId);
  };

  return (
    <div className="">
      <Header />

      <div className="container">
        <Menu dishes={dishes} onClick={_onDishSelect} />
        {selectedDish !== null && (
          <DishDetail
            selectedDish={dishes.filter((dish) => dish.id === selectedDish)[0]}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Main;
