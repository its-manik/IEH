import { ChevronLast, ChevronFirst } from "lucide-react"
import { createContext, useState } from "react"
import AtkinsLogo from '../../assets/img/AtkinsRealis_primary_lock-up_dark_grey_RGB.png';
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import {toggleSidebar} from '../../store/layout/navgationSlice';

export const SidebarContext = createContext({ expanded: true })

export default function Sidebar({ children, bottomChildren }: { children: React.ReactNode[], bottomChildren: any }) {
   const {sidebarOpen} = useSelector((state: RootState) => state.navigation);
   const dispatch = useDispatch<AppDispatch>();

  return (
    <aside className={
      `h-[calc(100dvh-60px)] ${sidebarOpen ? "w-60" : "w-20"} overflow-hidden transition-all`
    }>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-end items-center">

          <button
            onClick={() => dispatch(toggleSidebar())}
            className="p-1.5 rounded-lg hover:bg-gray-50"
          >
            {sidebarOpen ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{expanded: sidebarOpen}}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>


        <SidebarContext.Provider value={{ expanded: sidebarOpen }}>
        <div className="border-t flex p-3">
          {bottomChildren}
        </div>
        </SidebarContext.Provider>
      </nav>
    </aside>
  )
};