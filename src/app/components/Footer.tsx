import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span><Image
						src="/images/Logo.png"
						alt="Logo"
						className="w-12 h-auto md:w-15"
						width={20}
						height={20}
        	/></span>
        <p className="text-slate-600">Todos os direitos estão reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
