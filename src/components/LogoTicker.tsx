import Image from "next/image";
import acmeLogo from "../assets/images/acme.png";
import apexLogo from "../assets/images/apex.png";
import celestiaLogo from "../assets/images/celestia.png";
import echoLogo from "../assets/images/echo.png";
import pulseLogo from "../assets/images/pulse.png";
import quantumLogo from "../assets/images/quantum.png";

const images = [
  { id: 1, src: acmeLogo, alt: "Acme logo" },
  { id: 6, src: quantumLogo, alt: "Quantum logo" },
  { id: 2, src: apexLogo, alt: "Apex logo" },
  { id: 3, src: celestiaLogo, alt: "Celestia logo" },
  { id: 4, src: echoLogo, alt: "Echo logo" },
  { id: 5, src: pulseLogo, alt: "Pulse logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world&apos;s most innovative teams
        </h2>
        <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgba(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgba(0,0,0,0))]">
          <div className="flex gap-16">
            {images.map((image) => (
              <Image
                src={image.src}
                key={image.id}
                alt={image.alt}
                className="flex-none h-8 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
