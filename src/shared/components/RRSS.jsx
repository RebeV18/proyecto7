import { Link } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";

export const RRSS = () => {
  return (
    <>
      <ul className="rrss">
        <li className="rs">
          <a
            href="https://www.facebook.com/LuisGerardoAquinoSV/?locale=es_LA"
            className="fa-brands fa-facebook"
            style={{ fontSize: "250%", color: "rgb(4, 104, 185)" }}
            onMouseOver={(e) => (e.target.style.color = "azure")}
            onMouseOut={(e) => (e.target.style.color = "rgb(4, 104, 185)")}
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </li>
        <li className="rs">
          <a
            href="https://www.instagram.com/luisgerardoaquino/"
            className="fa-brands fa-instagram"
            style={{ fontSize: "250%", color: "rgb(208, 49, 195)" }}
            onMouseOver={(e) => (e.target.style.color = "azure")}
            onMouseOut={(e) => (e.target.style.color = "rgb(134, 0, 123)")}
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </li>
        <li className="rs">
          <a
            href="https://www.tiktok.com/@luisgakino"
            className="fa-brands fa-tiktok"
            style={{ fontSize: "250%", color: "azure" }}
            onMouseOver={(e) => (e.target.style.color = "rgb(31, 48, 48)")}
            onMouseOut={(e) => (e.target.style.color = "rgb(255, 252, 255)")}
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </li>
      </ul>
    </>
  );
};
