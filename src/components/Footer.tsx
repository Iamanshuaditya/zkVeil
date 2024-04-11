import React from "react";
import { navLinks, socials } from "../utils/constants";
import logo from "../../public/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="relative dark:bg-grey-light mt-[85px] md:pt-10 lg:pt-12">
      <div className="container px-8 mx-auto flex justify-between flex-col md:flex-row items-center gap-10 md:gap-0">
        <div className="flex flex-col gap-[25px]">
          <div className="w-[185px]">
            <img className="w-full" src={logo} alt="zkVeil logo" />
          </div>
          <div className="flex gap-[21px]">
            {socials.map((social) => (
              <a href={social.href}>
                <img src={social.src} alt={social.description} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex max-w-[550px] w-full justify-between flex-col sm:flex-row text-center md:text-left gap-10 sm:gap-0">
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              About
            </h6>
            {navLinks.map((link, index) => {
              return (
                <p className="mt-[10px]">
                  <a
                    href={link.href}
                    key={index}
                    className="text-black leading-[21.4px] text-base"
                  >
                    {link.title}
                  </a>
                </p>
              );
            })}
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Buy
            </h6>
            <p className="mt-[10px]">
              <a href="#" className={`text-black leading-[21.4px] text-base`}>
                View Chart
              </a>
            </p>
            <p className="mt-[10px]">
              <a href="#" className={`text-black leading-[21.4px] text-base`}>
                Buy on Uniswap
              </a>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Legal
            </h6>
            <p className="mt-[10px]">
              <a href="#" className={`text-black leading-[21.4px] text-base`}>
                Privacy Policy
              </a>
            </p>
            <p className="mt-[10px]">
              <a href="#" className={`text-black leading-[21.4px] text-base`}>
                Terms & conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
