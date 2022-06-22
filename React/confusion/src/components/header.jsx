import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";
function Header() {
  return (
    <Navbar dark>
      <div className="container">
        <NavbarBrand href={"/"}>Ristorante Con Fusion</NavbarBrand>
      </div>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante con Fusion</h1>
              <p>
                We take inspiration from the world best cuisines, and create a
                unique fusion experience
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </Navbar>
  );
}

export default Header;
