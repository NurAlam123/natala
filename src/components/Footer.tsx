import InstaIcon from "../assets/icons/instagram.svg";
import XSocial from "../assets/icons/x.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-white/60 border-t border-white/20 py-5">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="text-center">
            &copy; 2024 Natala. All rights reserved.
          </div>
          <ul className="flex justify-center items-center gap-2.5">
            <li>
              <InstaIcon />
            </li>
            <li>
              <XSocial />
            </li>
            <li>
              <YoutubeIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
