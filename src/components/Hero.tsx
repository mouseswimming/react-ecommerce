import WomanImg from "../assets/woman_hero2.png";

export default function Hero() {
  return (
    <section
      className="h-[700px] bg-cover bg-no-repeat bg-center px-8 -mt-20 pt-20"
      style={{ backgroundImage: `url("/bg_hero.svg")` }}
    >
      <div className="container m-auto flex justify-around h-full items-center">
        <div>
          <div className="flex items-center gap-x-2 mb-4 text-lg">
            <div className="w-10 h-1 bg-red-500"></div>
            <span>New Trend</span>
          </div>

          <p className="uppercase font-thin leading-[1] text-[4rem]">
            Autumn sale stylish <span className="font-semibold">womens</span>
          </p>
        </div>
        <div className="hidden lg:block shrink-0">
          <img src={WomanImg} alt="" className="max-h-full" />
        </div>
      </div>
    </section>
  );
}
