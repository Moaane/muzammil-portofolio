export default function AboutSection() {
  return (
    <div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-2 md:gap-6 lg:space-x-2 ">
      <div className="flex flex-col lg:w-1/2 gap-2 md:gap-6 lg:justify-between">
        <h1 className="uppercase font-sans font-bold text-xl md:text-2xl text-primary">
          muzammil alvaro
        </h1>

        <h1 className="font-bold md:font-extrabold text-3xl md:text-5xl lg:text-5xl xl:text-6xl tracking-wider">
          Best developer? and design enthusiast
        </h1>
      </div>

      <div className="flex lg:w-2/3 flex-col gap-2 md:gap-6">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
          Developer with a design flair, embracing challenges to create engaging
          digital experiences.
        </h1>

        <h1 className="font-medium text-lg md:text-xl lg:text-2xl">
          Crafting seamless digital experiences as both a full stack developer
          and UI designer, I merge code and design for user-friendly solutions.
        </h1>
      </div>
    </div>
  );
}
