import React from "react";
import "./appbar.scss";
import { ReactComponent as IEHLogo } from '../../assets/img/IEH-Logo.svg';
import { ReactComponent as AtkinsLogo } from '../../assets/img/AtkinsRealis_stacked_lock-up_dark_grey_RGB (1).svg';
type Props = {};

function Appbar(props: Props) {
  return (
    <div className="appbar">
      <header className="flex items-center justify-between px-8 py-1 shadow-md w-dvw sticky top-0 bg-white">
        {/* <!-- IEH Logo --> */}

        <div className="flex flex-row flex-nowrap items-center gap-2">
          <IEHLogo />
          <h1 className="text-2xl hidden sm:block">Information Exchange Hub</h1>
        </div>

        {/* <!-- Atkins Logo  --> */}

        <div>
          <AtkinsLogo  width={30} height={30}/>
        </div>

        {/* <!-- Notification & user container--> */}

        <div className="hidden sm:block">
          <div className="flex flex-row items-center justify-center gap-5">
            {/* <!-- Notification icon --> */}

            <div className="flex items-center justify-center p-2 h-full hover:bg-slate-100 focus:border-x-2 border-indigo-500">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 stroke-icon-default hover:stroke-icon-primary"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- User container Image and name and dropdown icon  --> */}

            <div className="flex flex-row items-center justify-center h-full gap-2">
              {/* <!-- User Image --> */}
              <div className="h-full hover:bg-slate-100">
                <img
                  className="w-[40px] h-[40px] object-cover rounded-3xl border-[1.5px] border-border-primary"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAdDbkid3HQpf95jZzrNwbg2v1HmrnnDgb9EUHZwPB8g&s"
                  alt=""
                />
              </div>
              {/* <!-- Username and title --> */}

              <div className="flex flex-col justify-center">
                <div>
                  <h4 className="font-bold text-xs">John Doe</h4>
                </div>
                <div>
                  <h4 className="text-xs">Graphic Designer</h4>
                </div>
              </div>

              {/* <!-- dropdown icon --> */}

              <div className="flex items-center justify-center p-2 h-full hover:bg-slate-100">
                <button>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 stroke-icon-default hover:stroke-icon-primary"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Humberger menu icon --> */}

        <div className="block sm:hidden">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 stroke-icon-default hover:stroke-icon-primary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
        </div>
      </header>
    </div>
  );
}

export default Appbar;
