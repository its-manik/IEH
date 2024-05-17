import { ChevronLast, ChevronFirst } from "lucide-react"
import { createContext, useState } from "react"
import AtkinsLogo from '../../assets/img/AtkinsRealis_primary_lock-up_dark_grey_RGB.png';
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const SidebarContext = createContext({ expanded: true })

export default function Sidebar({ children, bottomChildren }: { children: React.ReactNode[], bottomChildren: any }) {
  const [expanded, setExpanded] = useState(true)
  //  const {} = useSelector((state: RootState) => state.)

  return (
    <aside className={
      `h-[calc(100dvh-45px)] ${expanded ? "w-60" : "w-20"} overflow-hidden transition-all`
    }>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={AtkinsLogo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>


        <SidebarContext.Provider value={{ expanded }}>
        <div className="border-t flex p-3">
          {bottomChildren}
        </div>
        </SidebarContext.Provider>
      </nav>
    </aside>
  )
};