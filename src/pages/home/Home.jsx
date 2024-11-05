import NavBar from "../../_components/Navbar";
import Carousel from "../../_components/Carousel";
import Footer from "../../_components/Footer";
import { Link } from "react-router-dom";
import "animate.css";
import { useState, useEffect, useRef } from "react";

function Home() {
  const [animateClass, setAnimateClass] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 4300) {
        setAnimateClass("w-[80rem] h-full");
        if (videoRef.current) {
          videoRef.current.play();
        }
      } else {
        setAnimateClass("w-[40rem] h-[20rem]");
        if (videoRef.current) {
          videoRef.current.pause();
        }
      };
      }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div className="flex flex-col items-center">
      <div className="w-full px-4 md:px-8 lg:px-6">
        <div className="text-center pt-8">
          <h1 className="text-[2rem] font-serif animate__animated animate__backInUp">
            Radiant Elegance with
          </h1>
          <h1 className="text-[3rem] md:text-[5rem] font-serif font-semibold animate__animated animate__backInUp">
            caratlane
          </h1>
        </div>
        <div className="animate__animated animate__backInUp">
          <NavBar />
        </div>
        <div className="w-full aspect-video animate__animated animate__backInUp">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="public/9324842-hd_1366_720_25fps.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Collection Images Section */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
          <img src="public\Collection_disney_11.jpg" alt="Disney Collection" className="w-full md:w-1/2 h-auto" />
          <img src="public\Collection_Harry_potter.jpg" alt="Harry Potter Collection" className="w-full md:w-1/2 h-auto" />
        </div>

        {/* Product Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-10 px-4">
          {['Desktop_1.jpg', 'Desktop_2.jpg', 'Desktop_3.jpg', 'Desktop_4.jpg', 'Desktop_5.jpg', 'Desktop_6.jpg'].map((img, index) => (
            <img key={index} src={`public/${img}`} alt={`Desktop ${index + 1}`} className="w-full h-auto" />
          ))}
        </div>

        {/* Promo Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10 px-4">
          <img src="public/OLD-GOLD_.png" alt="Old Gold" className="w-full md:w-1/3" />
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-medium pb-3">A Stylish Upgrade</h2>
            <p className="pb-5">
              ~ Enjoy 0% Deduction on your gold exchange value. Please note: The old gold doesn’t have to be from only.
            </p>
            <Link to="/product">
              <button className="btn btn-primary">Know More</button>
            </Link>
          </div>
        </div>

        {/* Background Promo Section */}
        <div className="bg-purple-950 py-10 mt-10 px-4 text-center">
          <img src="public/c656a495c4564a4c8ac8a1f5dee414bd.png" alt="Craftsmanship Image" className="mx-auto mb-5" />
          <p className="text-slate-400">
            The highest quality of craftsmanship and innovation that bring you modern, everyday design.
          </p>
          <h2 className="text-white text-2xl pt-5 font-semibold">Know More</h2>
        </div>

        {/* Instagram Section */}
        <div className="py-10">
          <div className="flex flex-col md:flex-row justify-between items-center px-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Shop Our Instagram</h2>
            <p className="text-xl font-light">#MYCaratLaneStory</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 mt-5">
            <img src="public/1.jpg" alt="Instagram 1" className="w-full h-[25rem] " />
            <img src="public/2.jpg" alt="Instagram 2" className="w-full h-[25rem]" />
            <img src="public/3.jpg" alt="Instagram 3" className="w-full h-[25rem]" />
            <img src="public/4.jpg" alt="Instagram 4" className="w-full h-[25rem]" />
            <img src="public/5.jpg" alt="Instagram 5" className="w-full h-[25rem]" />
            <img src="public/6.jpg" alt="Instagram 6" className="w-full h-[25rem]" />
          </div>
        </div>

        {/* Insider Section */}
        <div className="bg-gradient-to-b from-black to-purple-900 p-8 my-10 rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-44 justify-center">
            <div className="flex items-center space-x-4">
              <img src="/purple-gift-icon.png" alt="Purple Gift Icon" className="h-10" />
              <div>
                <h1 className="text-2xl font-semibold text-white">Join CaratLane Insider</h1>
                <p className="text-white">To discover enticing deals, latest arrivals, & more</p>
              </div>
            </div>
            <div className="flex flex-col mt-4 md:mt-0 items-center">
              <input
                type="text"
                placeholder="Enter Email"
                className="input input-bordered w-full max-w-xs mb-2"
              />
              <button className="btn btn-primary w-full">Submit</button>
              <div className="flex mt-4">
                {["Male", "Female", "Other"].map((label) => (
                  <label key={label} className="label cursor-pointer flex items-center gap-2 mr-4">
                    <span className="text-white">{label}</span>
                    <input type="radio" name="gender" className="radio checked:bg-blue-500" />
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="relative w-full h-full flex flex-col justify-center items-center py-32 overflow-hidden">
          {/* Scrolling text behind the video */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <p className="text-6xl font-bold text-black opacity-30 animate-scroll whitespace-nowrap">
              Radiant Elegance with Caratlane &nbsp; — &nbsp; Radiant Elegance
              with Caratlane &nbsp; — &nbsp;
            </p>
          </div>

          {/* Video Element */}
          <video
            ref={videoRef} // Attach the ref to the video element
            className={`${animateClass} object-cover transition-all duration-300 ease-in-out z-10`}
            autoPlay
            loop
            muted
          >
            <source
              src="public/9511253-hd_1366_720_25fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Video Section with Scrolling Text */}
        {/* <div className="relative w-full flex flex-col justify-center items-center py-32 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <p className="text-2xl md:text-6xl font-bold text-black opacity-30 animate-scroll whitespace-nowrap">
              Radiant Elegance with Caratlane &nbsp; — &nbsp; Radiant Elegance with Caratlane &nbsp; — &nbsp;
            </p>
          <video
            ref={videoRef}
            muted
            className={`${animateClass} object-cover transition-all duration-300 ease-in-out z-10`}
            autoPlay
            loop
          >
          </div>
            <source src="public/9511253-hd_1366_720_25fps.mp4" type="video/mp4" />
          </video>
        </div> */}
        
      <div className="w-full">
      <Footer />
      </div>
    </div>
  );
}

export default Home;
