import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onLogout }) => {
  const [toggle, setToggle] = useState("BM");

  const handleToggle = () => {
    setToggle((prev) => (prev === "BM" ? "BI" : "BM"));
  };

  return (
    <header className="header">
      <h1 className="helpdesk-title">Helpdesk</h1>
      <div className="header-icons">
        <div className="bm-bi-toggle" onClick={handleToggle}>
          <svg
            width="75"
            height="29"
            viewBox="0 0 75 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Overall container background */}
            <path
              d="M9.375 1C6.8886 1 4.50403 1.35558 2.74587 1.98851C0.987721 2.62145 0 3.47989 0 4.375L0 24.625C0 25.5201 0.987721 26.3785 2.74587 27.0115C4.50403 27.6444 6.8886 28 9.375 28H65.625C68.1114 28 70.496 27.6444 72.2541 27.0115C74.0123 26.3785 75 25.5201 75 24.625V4.375C75 3.47989 74.0123 2.62145 72.2541 1.98851C70.496 1.35558 68.1114 1 65.625 1H9.375Z"
              fill="#E5E5E5"
            />

            {/* Dynamic black background that shifts */}
            {toggle === "BM" ? (
              // Black background on BM side
              <path
                d="M9.375 1C6.8886 1 4.50403 1.35558 2.74587 1.98851C0.987721 2.62145 0 3.47989 0 4.375L0 24.625C0 25.5201 0.987721 26.3785 2.74587 27.0115C4.50403 27.6444 6.8886 28 9.375 28H37.5V2.6875H9.375V1Z"
                fill="black"
              />
            ) : (
              // Black background on BI side
              <path
                d="M37.5 26.3125V2.6875H65.625C66.8682 2.6875 68.0605 2.86529 68.9396 3.18176C69.8186 3.49822 70.3125 3.92745 70.3125 4.375V24.625C70.3125 25.0726 69.8186 25.5018 68.9396 25.8182C68.0605 26.1347 66.8682 26.3125 65.625 26.3125H37.5ZM65.625 28C68.1114 28 70.496 27.6444 72.2541 27.0115C74.0123 26.3785 75 25.5201 75 24.625V4.375C75 3.47989 74.0123 2.62145 72.2541 1.98851C70.496 1.35558 68.1114 1 65.625 1H37.5V28H65.625Z"
                fill="black"
              />
            )}

            <text
              fill={toggle === "BM" ? "white" : "black"}
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Roboto"
              fontSize="12"
              fontWeight="bold"
              letterSpacing="0em"
            >
              <tspan x="10" y="20.1016">
                BM
              </tspan>
            </text>
            <text
              fill={toggle === "BI" ? "white" : "black"}
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Roboto"
              fontSize="12"
              fontWeight="bold"
              letterSpacing="0em"
            >
              <tspan x="46" y="20.1016">
                BI
              </tspan>
            </text>
          </svg>
        </div>

        <svg
          className="icon bell-icon"
          width="24"
          height="29"
          viewBox="0 0 24 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 29C13.892 29 15.427 27.4332 15.427 25.5H8.573C8.573 27.4332 10.108 29 12 29ZM23.539 20.8127C22.504 19.6774 20.567 17.9695 20.567 12.375C20.567 8.12578 17.649 4.72422 13.713 3.88969V2.75C13.713 1.78367 12.946 1 12 1C11.054 1 10.287 1.78367 10.287 2.75V3.88969C6.3514 4.72422 3.4329 8.12578 3.4329 12.375C3.4329 17.9695 1.4963 19.6774 0.4613 20.8127C0.1399 21.1655 -0.0026 21.5871 0 22C0.0059 22.8969 0.6954 23.75 1.7197 23.75H22.28C23.305 23.75 23.995 22.8969 24 22C24.003 21.5871 23.86 21.1649 23.539 20.8127Z"
            fill="black"
          />
        </svg>

        <Link to="/user-profile">
          <svg
            className="icon user-icon"
            width="22"
            height="25"
            viewBox="0 0 22 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 25C0 25 0 25 0 22.6667C0 20.3333 2 13.3333 11 13.3333C20 13.3333 22 20.3333 22 22.6667C22 25 20 25 20 25H0ZM11 11C12.591 11 14.117 10.2625 15.243 8.94975C16.368 7.637 17 5.85652 17 4C17 2.14348 16.368 0.36301 15.243 -0.94975C14.117 -2.2625 12.591 -3 11 -3C9.409 -3 7.883 -2.2625 6.757 -0.94975C5.632 0.36301 5 2.14348 5 4C5 5.85652 5.632 7.637 6.757 8.94975C7.883 10.2625 9.409 11 11 11Z"
              fill="black"
            />
          </svg>
        </Link>

        <svg
          className="icon logout-icon"
          width="27"
          height="25"
          viewBox="0 0 27 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onLogout}
        >
          <path
            d="M26.6263 13.6059L17.6259 24.5416C16.8223 25.518 15.4293 24.8345 15.4293 23.435V17.186H8.14326C7.43073 17.186 6.85748 16.4895 6.85748 15.6238V9.37483C6.85748 8.50909 7.43073 7.81259 8.14326 7.81259H15.4293V1.56362C15.4293 0.170627 16.8169 -0.519362 17.6259 0.457038L26.6263 11.3927C27.1246 12.0046 27.1246 12.994 26.6263 13.6059ZM10.2862 24.2161V21.6124C10.2862 21.1828 9.99692 20.8313 9.64334 20.8313H5.14311C4.19485 20.8313 3.42874 19.9004 3.42874 18.7483V6.25035C3.42874 5.09819 4.19485 4.16736 5.14311 4.16736H9.64334C9.99692 4.16736 10.2862 3.81585 10.2862 3.38624V0.782505C10.2862 0.352889 9.99692 0.00138444 9.64334 0.00138444H5.14311C2.30369 0.00138444 0 2.8004 0 6.25035V18.7483C0 22.1982 2.30369 24.9972 5.14311 24.9972H9.64334C9.99692 24.9972 10.2862 24.6457 10.2862 24.2161Z"
            fill="black"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
