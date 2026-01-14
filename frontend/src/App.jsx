import { products, siteMetadata } from "../../data/data.js";
import { heroSection } from "../../data/data.js";
import { whyUs } from "../../data/data.js";
import { topProducts } from "../../data/data.js";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { PiTiktokLogo } from "react-icons/pi";
import AnimatedContent from "./component/AnimatedContent.jsx";
import FadeContent from "./component/FadeContent.jsx";

export default function App() {
  return (
    <div className="bg-neutral-950">
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-sm border-b border-white/30 p-4 px-8 rounded-b-3xl flex justify-between items-center transition-all duration-300">
        <a
          href="#"
          className="text-2xl text-white font-light tracking-wide hover:text-neutral-200 transition-colors"
        >
          {siteMetadata.brand}
        </a>
        <ul className="flex gap-8">
          <li>
            <a
              href="#products"
              className="text-white text-lg font-light tracking-wide hover:text-neutral-200 hover:underline underline-offset-4 transition-all duration-300"
            >
              Koleksi
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white text-lg font-light tracking-wide hover:text-neutral-200 hover:underline underline-offset-4 transition-all duration-300"
            >
              Kontak
            </a>
          </li>
        </ul>
      </nav>
      <div
        id="hero"
        className="hero relative h-screen w-full flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-75"
          style={{ backgroundImage: `url(${heroSection.image})` }}
        ></div>
        <div className="hero-content relative z-10 flex items-center flex-col gap-4 text-center max-w-3xl ">
          <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={false}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.1}
          >
            <h1 className="text-white text-4xl font-extralight">
              {heroSection.title}
            </h1>
          </AnimatedContent>
                    <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={false}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.3}
          >
          <h2 className="text-neutral-200 text-xl font-extralight ">
            {heroSection.description}
          </h2>
          </AnimatedContent>
                    <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={false}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.5}
          >
          <a
            href="#products"
            className="bg-white/10 mt-2 p-4 px-6 font-light tracking-wider text-lg text-white hover:backdrop-blur-sm border border-white/30 rounded-4xl transition-all duration-300 cursor-pointer inline-block"
            >
            {heroSection.buttonText}
          </a>
              </AnimatedContent>
        </div>
      </div>
      <div
        id="products"
        className="products flex flex-col items-center h-screen"
      >
        <div className="items flex flex-row w-full h-full">
          <div className="relative flex flex-col flex-1 h-full group">
            <img
              className="absolute h-full w-full object-cover brightness-80 group-hover:brightness-60 transition-all duration-300"
              src={products.image[0]}
              alt={`${products.title[0]} product image`}
            />
            <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={false}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.2}
            className="h-full"
          >
            <div className="relative flex flex-col items-center justify-center h-full w-full">
              <div className="flex flex-col items-center justify-center p-12 px-14 gap-2 rounded-3xl bg-white/10 group-hover:backdrop-blur-sm border border-white/30 transition-all duration-300">
                <h4 className="text-neutral-100 text-3xl font-light tracking-wide">
                  {products.title[0]}
                </h4>
                <p className="text-neutral-200 text-xl font-light">
                  {products.description[0]}
                </p>
              </div>
            </div>
              </AnimatedContent>
          </div>
          <div className="relative flex flex-col flex-1 h-full group">
            <img
              className="absolute h-full w-full object-cover brightness-80 group-hover:brightness-60 transition-all duration-300"
              src={products.image[1]}
              alt={`${products.title[1]} product image`}
              />
                          <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={false}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.4}
            className="h-full"
          >
            <div className="relative flex flex-col items-center justify-center h-full w-full">
              <div className="flex flex-col items-center justify-center p-12 px-14 gap-2 rounded-3xl bg-white/10 group-hover:backdrop-blur-sm border border-white/30 transition-all duration-300">
                <h4 className="text-neutral-100 text-3xl font-light tracking-wide">
                  {products.title[1]}
                </h4>
                <p className="text-neutral-200 text-xl font-light">
                  {products.description[1]}
                </p>
              </div>
            </div>
          </AnimatedContent>
          </div>
          <div className="relative flex flex-col flex-1 h-full group">
            <img
              className="absolute h-full w-full object-cover brightness-80 group-hover:brightness-60 transition-all duration-300"
              src={products.image[2]}
              alt={`${products.title[2]} product image`}
            />
                        <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={false}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.6}
            className="h-full"
          >
            <div className="relative flex flex-col items-center justify-center h-full w-full">
              <div className="flex flex-col items-center justify-center p-12 px-14 gap-2 rounded-3xl bg-white/10 group-hover:backdrop-blur-sm border border-white/30 transition-all duration-300">
                <h4 className="text-neutral-100 text-3xl font-light tracking-wide">
                  {products.title[2]}
                </h4>
                <p className="text-neutral-200 text-xl font-light">
                  {products.description[2]}
                </p>
              </div>
            </div>
          </AnimatedContent>
          </div>
        </div>
      </div>
      <div
        id="why-us"
        className="whyUs h-screen flex flex-col items-center gap-8 bg-orange-100/70"
      >
        <div className="">
          <h2 className="text-neutral-100 text-4xl font-light tracking-wide pt-24">
            Why Us?
          </h2>
        </div>
        <div className="flex flex-row h-full w-full">
          <div className="relative flex h-full w-full overflow-hidden justify-center items-end">
            <img
              className="absolute object-cover h-full brightness-80"
              src={whyUs.image[0]}
              alt="sustainable image"
            />
            <div className="relative bg-white/10 backdrop-blur-xs border border-white/30 flex flex-col items-center justify-center text-center rounded-4xl max-w-9/10 p-12 gap-8 mb-6">
              <h5 className="text-2xl text-white tracking-wider">
                {whyUs.tittle[0]}
              </h5>
              <p className="text-base text-white tracking-wider">
                {whyUs.description[0]}
              </p>
            </div>
          </div>
          <div className="relative flex h-full w-full overflow-hidden justify-center items-end">
            <img
              className="absolute object-cover h-full brightness-80"
              src={whyUs.image[1]}
              alt="sustainable image"
            />
            <div className="relative bg-white/10 backdrop-blur-xs border border-white/30 flex flex-col items-center justify-center text-center rounded-4xl max-w-9/10 p-12 gap-8 mb-6">
              <h5 className="text-2xl text-white tracking-wider">
                {whyUs.tittle[1]}
              </h5>
              <p className="text-base text-white tracking-wider">
                {whyUs.description[1]}
              </p>
            </div>
          </div>
          <div className="relative flex h-full w-full overflow-hidden justify-center items-end">
            <img
              className="absolute object-cover h-full brightness-80"
              src={whyUs.image[2]}
              alt="sustainable image"
            />
            <div className="relative bg-white/10 backdrop-blur-xs border border-white/30 flex flex-col items-center justify-center text-center rounded-4xl max-w-9/10 p-12 gap-8 mb-6">
              <h5 className="text-2xl text-white tracking-wider">
                {whyUs.tittle[2]}
              </h5>
              <p className="text-base text-white tracking-wider">
                {whyUs.description[2]}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-orange-100/70 h-screen w-full p-8 pt-16 flex flex-col items-center">
        <h3 className="text-4xl text-white p-6">Top Products</h3>
        <div className="flex flex-row gap-8 h-full w-full items-end">
          <div className="items relative flex flex-col items-center justify-end w-auto h-19/20 rounded-4xl overflow-hidden">
            <img
              className="h-full absolute object-cover w-full brightness-80"
              src={topProducts.image[0]}
              alt="top products image"
            />
            <div className="relative p-8 flex flex-col justify-between items-center flex-1">
              <p className="bg-white/10 border border-white/30 backdrop-blur-xs p-3 px-5 rounded-3xl text-white text-xl">
                Top 2
              </p>
              <div className="flex flex-col justify-center gap-8 text-center p-8 bg-white/10 border border-white/30 backdrop-blur-xs max-w-xl rounded-3xl">
                <h5 className="text-4xl text-white font-light">{topProducts.title[0]}</h5>
                <p className="text-2xl text-neutral-200">
                  {topProducts.description[0]}
                </p>
              </div>
            </div>
          </div>
          <div className="items relative flex flex-col items-center justify-end w-auto h-full rounded-4xl overflow-hidden">
            <img
              className="h-full absolute object-cover w-full brightness-80"
              src={topProducts.image[1]}
              alt="top products image"
            />
            <div className="relative p-8 flex flex-col justify-between items-center flex-1">
              <p className="bg-yellow-300/10 border border-white/30 backdrop-blur-xs p-3 px-5 rounded-3xl text-white text-xl">
                Top 1
              </p>
              <div className=" relative flex flex-col justify-center gap-8 text-center p-8 bg-white/10 border border-white/30 backdrop-blur-xs max-w-xl rounded-3xl">
                <h5 className="text-4xl text-white font-light">{topProducts.title[1]}</h5>
                <p className="text-2xl text-neutral-200">
                  {topProducts.description[1]}
                </p>
              </div>
            </div>
          </div>
          <div className="items relative flex flex-col items-center justify-end w-auto h-18/20 rounded-4xl overflow-hidden">
            <img
              className="h-full absolute object-cover w-full brightness-80"
              src={topProducts.image[2]}
              alt="top products image"
            />
            <div className="relative p-8 flex flex-col justify-between items-center flex-1">
              <p className="bg-orange-600/10 border border-white/30 backdrop-blur-xs p-3 px-5 rounded-3xl text-white text-xl">
                Top 3
              </p>
              <div className=" relative flex flex-col justify-center gap-8 text-center p-8 bg-white/10 border border-white/30 backdrop-blur-xs max-w-xl rounded-3xl">
                <h5 className="text-4xl text-white font-light">{topProducts.title[2]}</h5>
                <p className="text-2xl text-neutral-200">
                  {topProducts.description[2]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="bg-orange-100/70 p-16">
        <div className="max-w-5xl m-auto flex flex-row justify-between p-4">
          <div className="gap-2 flex flex-col">
            <h6 className="text-4xl">Arunika Woodworks</h6>
            <p className="text-xl">Jl. Ikan Tombro No.18, Malang</p>
          </div>
          <div className="flex flex-col text-lg gap-1">
            <a className="flex gap-4" href="wa.me/+6288805385353">
              <FaWhatsapp size={24} /> 088805385353
            </a>
            <a className="flex gap-4" href="instagram.com/jeyy_prtf">
              <FaInstagram size={24} /> @arunika.woodworks
            </a>
            <a className="flex gap-4" href="tiktok.com/@jeyy_prtf">
              <PiTiktokLogo size={24} /> @arunika.woodworks
            </a>
          </div>
        </div>
      </div>
      <footer className="w-full flex items-center justify-center bg-orange-100/70">
        <p className="text-amber-950 text-center text-md p-4">
          &copy; 2024 {siteMetadata.brand}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
