import { Link } from "react-router-dom";

export default function ServicesSection() {
  return (
    <div className="w-full max-w-[1440px] flex flex-col gap-6 md:gap-8 lg:gap-6">
      {/* Container utama */}
      <div className="flex flex-col gap-6">
        {/* Bagian judul */}
        <h1 className="font-bold text-4xl md:text-5xl font-sans text-center">
          Portofolio
        </h1>
        <h3 className="text-wrap text-lg md:tracking-wide md:text-xl font-bold font-sans uppercase text-center leading-relaxed">
          recognitions & accomplishment
        </h3>
      </div>
      <div className="flex flex-col gap-6 md:gap-8">
        <img
          src="https://plus.unsplash.com/premium_photo-1667516764926-c4ac7e9a14cd?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="mx-auto mt-0 shadow-lg w-full max-w-sm md:max-w-full md:max-h-fit lg:max-w-sm xl:max-w-md lg:mt-0"
        />

        <h1 className="uppercase text-white font-sans font-extrabold md:text-xl px-4 py-2 w-fit bg-orange">
          art direction
        </h1>

        <h1 className="font-bold text-4xl md:text-5xl font-sans tracking-tight leading-tight">
          Design and extreme programming practice
        </h1>

        <Link to="/" className="font-semibold font-sans underline text-2xl">
          Read more
        </Link>
      </div>
    </div>
  );
}
