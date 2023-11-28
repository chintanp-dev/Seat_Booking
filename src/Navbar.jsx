import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <div className="list-item">
            <div className="round-red" />
            <li>Reserved</li>
          </div>
          <div className="list-item">
            <div className="round-gray" />
            <li>Available</li>
          </div>
          <div className="list-item">
            <div className="round-blue" />
            <li>Merged</li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
