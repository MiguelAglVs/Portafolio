import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border border-t-[#33353f] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="p-12 flex justify-center">
        <p className="text-slate-600">
          <span className="mr-1">&copy;</span> {currentYear} Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
