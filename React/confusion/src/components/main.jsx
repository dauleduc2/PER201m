import { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "../shared/dish";
import DishDetail from "./dishDetail";
import Menu from "./Menu";

function Main() {
  const [dishes, setDishes] = useState(DISHES);

  const [selectedDish, setSelectedDish] = useState(null);

  const _onDishSelect = (dishId) => {
    setSelectedDish(dishId);
  };

  return (
    <div className="">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href={"/"}>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <div className="container">
        <Menu dishes={dishes} onClick={_onDishSelect} />
        {selectedDish !== null && (
          <DishDetail
            selectedDish={dishes.filter((dish) => dish.id === selectedDish)[0]}
          />
        )}
      </div>
    </div>
  );
}

export default Main;
