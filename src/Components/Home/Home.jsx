import Hero from "../HomeRoute/Hero.jsx";
import Banner from "../HomeRoute/Banner.jsx";

export const Home = () => {
  return (
      <div>
          <Banner/>
          <div className="justify-center flex">
              <div className="container md:px-0 px-5">
                  <Hero/>
              </div>
          </div>
      </div>
  )
}
