import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "../SmallNavbar/SmallNavbar.css";
import { Link } from "react-router-dom";

const SmallNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="smallNavbar">
      <div>
        <h6>Dashboard</h6>
      </div>
      <div>
        {isOpen ? (
          <IoClose size={30} className="bar" onClick={handleToggle} />
        ) : (
          <FaBars size={25} className="bar" onClick={handleToggle} />
        )}
      </div>

      {isOpen && (
        <div className="navLinks">
          <ul>
            <div>
              <Link className="Links" to="/">
                Home
              </Link>
            </div>
            <div>
              <Link className="Links" to="/">
                Note
              </Link>
            </div>
            <div>
              <Link className="Links" to="/">
                Stats
              </Link>
            </div>
            <div>
              <Link className="Links" to="/">
                Wallet
              </Link>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SmallNavbar;
