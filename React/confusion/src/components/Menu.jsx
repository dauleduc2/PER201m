import { useState } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Media,
} from "reactstrap";

function Menu({ dishes: dishesValue }) {
  const [dishes, setDishes] = useState(dishesValue);

  const [selectedDish, setSelectedDish] = useState(null);

  const _onDishSelect = (dish) => {
    setSelectedDish(dish);
  };

  const _renderDish = (dish) => {
    if (dish !== null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <></>;
    }
  };

  const menu = dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 mt-5">
        <Card onClick={() => _onDishSelect(dish)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
      <div className="row">
        <div className="col-12 col-md-5 mt-1">{_renderDish(selectedDish)}</div>
      </div>
    </div>
  );
}

export default Menu;
