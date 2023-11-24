import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <div className="list-item">
            <div className="round" />
            <li>Reserved</li>
          </div>
          <div className="list-item">
            <div className="round" />
            <li>Available</li>
          </div>
          <div className="list-item">
            <div className="round" />
            <li>Merged</li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
