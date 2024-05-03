import mountainImg from "../../assets/Mountain-preview.png";
import disnakerImg from "../../assets/Disnaker-preview.png";
import dwipantaraImg from "../../assets/Dwipantara-preview.png";

export default function PortofolioSection() {
  return (
    <div className="w-full max-w-[1440px] flex flex-col gap-6 md:gap-8 lg:gap-10">
      {/* Container utama */}

      {/* Bagian judul */}
      <div className="flex flex-col gap-4 md:gap-6">
        <h1 className="font-bold text-4xl md:text-5xl font-sans text-center">
          Portofolio
        </h1>
        <h3 className="text-wrap text-lg md:tracking-wide md:text-xl font-bold font-sans uppercase text-center leading-relaxed">
          recognitions & accomplishment
        </h3>
      </div>

      {/* container content */}
      <div className="flex flex-col gap-24">
        {/* content */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:justify-between lg:gap-8 xl:gap-12">
          <a
            href="https://dribbble.com/shots/24100507-Camping-Website-UI"
            target="_blank"
          >
            <img
              src={mountainImg}
              alt="mountain ui preview"
              className="mx-auto bg-cover object-cover mt-0 shadow-lg w-full max-w-sm md:max-w-full md:max-h-fit lg:max-w-sm xl:max-w-xl 2xl:max-w-2xl lg:mt-0 link"
            />
          </a>
          <div className="gap-4 md:gap-6 flex flex-col justify-between min-h-full">
            <h1 className="uppercase text-white font-sans font-extrabold md:text-xl xl:text-2xl 2xl:text-3xl px-4 py-2 w-fit bg-primary">
              UI Design
            </h1>

            <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-sans tracking-tight lg:tracking-normal leading-relaxed">
              Camping Web Design
            </h1>

            <a
              href="https://dribbble.com/shots/24100507-Camping-Website-UI"
              target="_blank"
              className="font-semibold font-sans underline w-fit text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl hover:text-primary"
            >
              Read more
            </a>
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col lg:flex-row-reverse gap-4 md:gap-6 lg:justify-between lg:gap-8 xl:gap-12">
          <a
            href="https://dribbble.com/shots/24100624-Silancar-Website-UI"
            target="_blank"
          >
            <img
              src={disnakerImg}
              alt="disnaker preview img"
              className="mx-auto bg-cover object-cover mt-0 shadow-lg w-full max-w-sm md:max-w-full md:max-h-fit lg:max-w-sm xl:max-w-xl 2xl:max-w-2xl lg:mt-0 link"
            />
          </a>
          <div className="gap-4 md:gap-6 flex flex-col justify-between min-h-full py-6">
            <h1 className="uppercase text-white font-sans font-extrabold md:text-xl xl:text-2xl 2xl:text-3xl px-4 py-2 w-fit bg-primary">
              ui design
            </h1>

            <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-sans tracking-tight lg:tracking-normal leading-tight">
              Disnaker Web Design
            </h1>

            <a
              href="https://dribbble.com/shots/24100624-Silancar-Website-UI"
              target="_blank"
              className="font-semibold font-sans underline text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl hover:text-primary"
            >
              Read more
            </a>
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:justify-between lg:gap-8 xl:gap-12">
          <a
            href="https://dribbble.com/shots/24100693-UI-Indonesian-Culture-Learning-Application"
            target="_blank"
          >
            <img
              src={dwipantaraImg}
              alt=""
              className="mx-auto bg-cover object-cover mt-0 shadow-lg w-full max-w-sm md:max-w-full md:max-h-fit lg:max-w-sm xl:max-w-xl 2xl:max-w-2xl lg:mt-0 link"
            />
          </a>
          <div className="gap-4 md:gap-6 flex flex-col justify-between min-h-full py-6">
            <h1 className="uppercase text-white font-sans font-extrabold md:text-xl xl:text-2xl 2xl:text-3xl px-4 py-2 w-fit bg-primary">
              ui design
            </h1>

            <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-sans tracking-tight lg:tracking-normal leading-tight">
              Education App Design
            </h1>

            <a
              href="https://dribbble.com/shots/24100693-UI-Indonesian-Culture-Learning-Application"
              target="_blank"
              className="font-semibold font-sans underline text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl hover:text-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
