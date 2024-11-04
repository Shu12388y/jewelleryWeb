import React, { useEffect, useRef } from "react";
import NavBar from "../../_components/Navbar";
import Carousel from "../../_components/Carousel";
import Footer from "../../_components/Footer";

function Home() {
  const contentRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      contentRef.current.classList.remove("opacity-0", "translate-y-10");
    }, 100); // Delay for smoother load
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <div
        ref={contentRef}
        className="opacity-0 translate-y-10 transition-all duration-1000 ease-in-out"
      >
        <div>
          <h1 className="text-[2rem] text-center font-serif pt-8">
            Radiant Elegance with
          </h1>
          <h1 className="text-[5rem] text-center font-serif mt-[-1rem] font-semibold">
            caratlane
          </h1>
        </div>
        <div>
          <NavBar />
        </div>
        <div className="w-full aspect-video">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source
              src="public/9324842-hd_1366_720_25fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="flex flex-row ">
          <div>
            <img src="public\Collection_disney_11.jpg" alt="" />
          </div>
          <div>
            <img src="public\Collection_Harry_potter.jpg" alt="" />
          </div>
        </div>

        <div className="flex flex-col pt-10 px-3">
          <div className="flex flex-row">
            <div>
              <img src="public\Desktop_1.jpg" alt="" />
            </div>
            <div>
              <img src="public\Desktop_2.jpg" alt="" />
            </div>
            <div>
              <img src="public\Desktop_3.jpg" alt="" />
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <img src="public\Desktop_4.jpg" alt="" />
            </div>
            <div>
              <img src="public\Desktop_5.jpg" alt="" />
            </div>
            <div>
              <img src="public\Desktop_6.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="pt-10 pr-5 pl-5">
            <div className="flex flex-row gap-4">
              <div>
                <img src="public\1X.webp" alt="" />
              </div>
              <div>
                <img src="public\2x (1).webp" alt="" />
              </div>
            </div>
          </div>
          <div className="pt-4 pr-5 pl-5">
            <div className="flex flex-row gap-4">
              <div>
                <img src="public\2x_R.webp" alt="" />
              </div>
              <div>
                <img src="public\2X_Today_1.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="pt-4 pr-5 pl-5">
            <div className="flex flex-row gap-4">
              <div>
                <img src="public\2x.jpg" alt="" />
              </div>
              <div>
                <img src="public\2X.webp" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-[15rem]">
          <div>
            <img src="public\OLD-GOLD_.png" alt="" />
          </div>
          <div className="text-left">
            <h1 className="text-3xl  font-medium pb-3">A Stylish Upgrade </h1>
            <p className="pb-5 font-normal">
              {" "}
              ~Enjoy 0% Deduction on your gold exchange value. Please note: The
              old gold <br /> doesn't have to be from only.
            </p>
            <button class="item-center btn btn-active btn-primary">
              Know More
            </button>
          </div>
        </div>

        <div className="bg-purple-950 py-20">
          <div className="flex flex-col items-center justify-center">
            <img src="public\c656a495c4564a4c8ac8a1f5dee414bd.png" alt="" />
          </div>
          <div className="text-center text-slate-400">
            The highest quantity of craftsmanship and innovation <br />
            that bring you modern, everyday design.
            <div>
              <h2 className="text-white text-2xl pt-5 font-semibold">
                Know More
              </h2>
            </div>
          </div>
        </div>

        <div className="py-5 px-4">
          <h2 className="text-3xl pb-3">Best of CaratLane</h2>
          <Carousel />
        </div>

        <div>
          <div className="flex flex-row justify-between items-stretch">
            <h1 className="text-2xl font-semibold ml-[4rem] pb-6">
              Shop Our Instagram
            </h1>
            <h1 className="text-2xl font-light mr-[4rem] ">
              #MYCaratLaneStory
            </h1>
          </div>
          <div className="flex flex-row justify-center rounde rounded-md">
            <div>
              <img src="public\1.jpg" className="w-full h-[30rem]" alt="" />
            </div>
            <div className="flex flex-col overflow-x-hidden">
              <div className="flex flex-row">
                <img src="public\2.jpg" className="w-full h-[15rem] " alt="" />
                <img src="public\3.jpg" className="w-full h-[15rem]" alt="" />
                <img src="public\4.jpg" className="w-full h-[15rem] " alt="" />
              </div>
              <div className="flex flex-row">
                <img src="public\5.jpg" className="w-full h-[15rem] " alt="" />
                <img src="public\6.jpg" className="w-full h-[15rem] " alt="" />
                <img src="public\7.jpg" className="w-full h-[15rem] " alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-black to-purple-900 p-10 mx-10 my-6  rounded-md">
          <div className="flex fle-row items-center gap-8 justify-center">
            <div className="flex items-center space-x-4">
              <img src="/purple-gift-icon.png" alt="Purple Gift Icon" />
              <div>
                <h1 className="text-2xl font-semibold text-white">
                  Join CaratLane Insider
                </h1>
                <p className="text-white">
                  To discover enticing deals, latest arrivals, & more
                </p>
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Email"
                className="input input-bordered w-full max-w-xs"
              />
              <button className="btn btn-active btn-primary w-full mt-5">
                Submit
              </button>
              <div className="flex flex-row items-center justify-center">
                <div className="form-control">
                  <label className="label cursor-pointer flex flex-row gap-2">
                    <span className="label-text text-white">Male</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-red-500 boder border-red-50"
                      defaultChecked
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer flex flex-row gap-2">
                    <span className="label-text text-white">Female</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-blue-500 border border-red-100"
                      defaultChecked
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer flex flex-row gap-2">
                    <span className="label-text text-white">Other</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-blue-500 border border-red-100"
                      defaultChecked
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
