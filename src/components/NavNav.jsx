// components/Navbar.js
import Image from "next/image";
import Link from "next/link";

const NavNav = () => {
  return (
    <nav className="navbar flex justify-between bg-yellow-200 text-black">
      <div className="logo">
        <Link href="/">
          <Image
            src="/godrejLogo.svg"
            alt="godrej logo"
            width="125"
            height="45"
          />
        </Link>
      </div>
      <div className="nav-links flex flex-row">
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/about">
          <p>About</p>
        </Link>
        <div className="dropdown">
          <span>Services</span>
          <div className="dropdown-content">
            <Link href="/services/service1">
              <p>Service 1</p>
            </Link>
            <div className="nested-dropdown">
              <span>Subservices</span>
              <div className="nested-dropdown-content">
                <Link href="/services/service1/subservice1">
                  <p>Subservice 1</p>
                </Link>
                <Link href="/services/service1/subservice2">
                  <p>Subservice 2</p>
                </Link>
              </div>
            </div>
            <Link href="/services/service2">
              <p>Service 2</p>
            </Link>
          </div>
        </div>
        <div className="dropdown">
          <span>Contact</span>
          <div className="dropdown-content">
            <Link href="/contact/email">
              <p>Email</p>
            </Link>
            <Link href="/contact/phone">
              <p>Phone</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavNav;
