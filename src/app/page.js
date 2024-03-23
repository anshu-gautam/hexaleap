"use client";

import AdCard from "@/components/CardBox";
import useDarkMode from "@/components/DarkMode";
import Card from "@/components/ImageCard";

export default function Home(props) {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <main className="min-h-screen bg-[#f7f7f8] dark:bg-gray-700 flex-col justify-center p-4">
      <div>
        {colorTheme === "light" ? (
          <svg
            onClick={() => setTheme("light")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-indigo-400 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setTheme("dark")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gray-700 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </div>
      <h1 className="text-2xl underline underline-offset-4 font-bold dark:text-white pt-4 pb-2 pl-8">
        Sports
      </h1>
      <div className="w-full flex justify-center items-center space-x-5">
        <div className="flex flex-col items-center bg-white dark:bg-gray-600 shadow-md p-2">
          <Card imagePath="/Mask group.png" altText="Example" />
          <div className="w-full mt-4 text-sm">
            <h3 className="dark:text-white">Sacramento River Cats</h3>
            <div className="flex bg-[#f7f7f8] dark:bg-gray-700 w-full justify-between mt-3 p-1 dark:text-white">
              <div className="flex flex-col">
                <h3 className="font-medium">Total Events</h3>
                <p className="font-thin">48 Events</p>
              </div>
              <div className="flex flex-col">
                <h3 className="font-medium">Sports</h3>
                <p className="font-thin">Basketball</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-600 shadow-md p-2">
          <Card imagePath="/Mask group.png" altText="Example" />
          <div className="w-full mt-4 text-sm">
            <h3 className="dark:text-white">Las Vegas Aviator</h3>
            <div className="flex bg-[#f7f7f8] dark:bg-gray-700 w-full justify-between mt-3 p-1 dark:text-white">
              <div className="flex flex-col">
                <h3 className="font-medium">Total Events</h3>
                <p className="font-thin">28 Events</p>
              </div>
              <div className="flex flex-col">
                <h3 className="font-medium">Sports</h3>
                <p className="font-thin">Baseball</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-600 shadow-md p-2">
          <Card imagePath="/Mask group.png" altText="Example" />
          <div className="w-full mt-4 text-sm">
            <h3 className="dark:text-white">Las Vegas Aviator</h3>
            <div className="flex bg-[#f7f7f8] dark:bg-gray-700 w-full justify-between mt-3 p-1 dark:text-white">
              <div className="flex flex-col">
                <h3 className="font-medium">Total Events</h3>
                <p className="font-thin">28 Events</p>
              </div>
              <div className="flex flex-col">
                <h3 className="font-medium">Sports</h3>
                <p className="font-thin">Baseball</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-600 shadow-md p-2">
          <Card imagePath="/Mask group.png" altText="Example" />
          <div className="w-full mt-4 text-sm">
            <h3 className="dark:text-white">New Jersey Devils</h3>
            <div className="flex bg-[#f7f7f8] dark:bg-gray-700 w-full justify-between mt-3 p-1 dark:text-white">
              <div className="flex flex-col">
                <h3 className="font-medium">Total Events</h3>
                <p className="font-thin">15 Events</p>
              </div>
              <div className="flex flex-col">
                <h3 className="font-medium">Sports</h3>
                <p className="font-thin">Ice Hockey</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-600 shadow-md p-2">
          <Card imagePath="/Mask group.png" altText="Example" />
          <div className="w-full mt-4 text-sm">
            <h3 className="dark:text-white">Sacramento River Cats</h3>
            <div className="flex bg-[#f7f7f8] dark:bg-gray-700 w-full justify-between mt-3 p-1 dark:text-white">
              <div className="flex flex-col">
                <h3 className="font-medium">Total Events</h3>
                <p className="font-thin">48 Events</p>
              </div>
              <div className="flex flex-col">
                <h3 className="font-medium">Sports</h3>
                <p className="font-thin">Basketball</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col items-center border dark:border-none bg-white dark:bg-gray-600 p-2">
          <Card imagePath="/Every.png" altText="Example" />

          <AdCard
            title={"Advertisement title"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            }
          />
        </div>
      </div>
      <footer className="text-center text-white mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
          See More
        </button>
      </footer>

      <div className=" dark:bg-[#1b262b] mt-5 p-2 text-center">
        <h1 className="text-3xl dark:text-white p-4">Collection Spotlight</h1>
        <div className="dark:text-white text-sm">
          <p>
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience.
          </p>
          <p>Grab yours today</p>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <div className="bg-white dark:bg-gray-600 p-2">
            <Card imagePath="/Ticket_Mockup 3.png" altText="Example" />

            <div className="dark:text-white mt-2">
              <h1 className="font-semibold">Las Vegas Aviator </h1>
              <p className="text-sm mt-2">OCT 15 | SUN | 4:30 PM</p>
              <div className="text-xs dark:text-gray-200 mt-2">
                <p>Las Vegas Ballpark,Las Vegas,</p>
                <p>Nevada</p>
              </div>
            </div>
            <button className="bg-black text-sm px-4 py-2 mt-2 text-white ">
              Take Flight Collection
            </button>
          </div>
          <div className="bg-white dark:bg-gray-600 p-2">
            <Card imagePath="/unnamed 1.png" altText="Example" />

            <div className="dark:text-white mt-2">
              <h1 className="font-semibold">Sacramento River Cats </h1>
              <p className="text-sm mt-2">OCT 15 | SUN | 4:30 PM</p>
              <div className="text-xs dark:text-gray-200 mt-2">
                <p>Sutter Health Park, Sacramento,</p>
                <p>California</p>
              </div>
            </div>
            <button className="bg-black text-sm px-4 py-2 mt-2 text-white ">
              Take Flight Collection
            </button>
          </div>

          <div className="bg-white dark:bg-gray-600 p-2">
            <Card imagePath="/Ticket_Mockup 3.png" altText="Example" />

            <div className="dark:text-white mt-2">
              <h1 className="font-semibold">Las Vegas Aviator </h1>
              <p className="text-sm mt-2">OCT 15 | SUN | 4:30 PM</p>
              <div className="text-xs dark:text-gray-200 mt-2">
                <p>Las Vegas Ballpark,Las Vegas,</p>
                <p>Nevada</p>
              </div>
            </div>
            <button className="bg-black text-sm px-4 py-2 mt-2 text-white ">
              Take Flight Collection
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
