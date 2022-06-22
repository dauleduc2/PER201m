import { useState } from "react";

import MenuItem from "./menuItem";

function Menu({ dishes, onClick }) {
  const menu = dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 mt-5">
        <MenuItem dish={dish} onClick={onClick} />
      </div>
    );
  });

  return <div className="row">{menu}</div>;
}

export default Menu;
