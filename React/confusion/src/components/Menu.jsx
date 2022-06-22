import { useState } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
} from "reactstrap";

function Menu({ dishes, onClick }) {
  const menu = dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 mt-5">
        <Card onClick={() => onClick(dish.id)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  return <div className="row">{menu}</div>;
}

export default Menu;
