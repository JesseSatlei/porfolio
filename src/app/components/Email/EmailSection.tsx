"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative">
      <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10" id="contact">
        <h5 className="text-xl font-bold text-white my-2">Vamos nos conectar!</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Estou sempre aberto a novas oportunidades e conversas, não tenha medo e vamos conversar um pouco!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/JesseSatlei" target="_blank">
            <Image src="/github-icon.svg" width={50} height={50} alt={""} />
          </Link>
          <Link href="https://www.linkedin.com/in/jess%C3%A9-satlei-souza-carvalho/" target="_blank">
            <Image src="/linkedin-icon.svg" width={50} height={50} alt={""} />
          </Link>
        </div>
      </div>
      <div>
        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Seu E-mail
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="jacob@google.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Assunto
            </label>
            <input
              type="text"
              id="subject"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Orçamento"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Quero fazer um orçamento..."
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {" "}
              Enviar{" "}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;