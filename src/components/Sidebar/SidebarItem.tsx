import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarContext } from "./Sidebar";


type SidebarItemProps = {
    icon: React.ReactNode
    text: string
    alert?: boolean
    path?: string
  };
  
  export function SidebarItem({ icon, text, alert, path }: SidebarItemProps) {
    const { expanded } = useContext(SidebarContext)
    const [active, setActive] = useState(false)
    const navigate = useNavigate();
  
    const pathname = window.location.pathname
  
    const handleClick = () => {
      if (path ) {
        navigate(path)
      }
    };
  
    useEffect(() => {
      setActive(pathname === `/${path}`)
    }, [pathname, path]);
    
    return (
      <li
      className={`
        relative flex items-center py-2 px-3 my-1
         rounded-md cursor-pointer
        transition-colors group
        ${active ? "bg-indigo-50 border-r-4 border-indigo-600" : "hover:bg-indigo-50 text-gray-600"}
      `}
      onClick={handleClick}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}
        />
      )}
    
      {!expanded && (
        <div
          className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm
            opacity-0 invisible transition-all delay-0
            group-hover:opacity-100 group-hover:visible
          `}
        >
          {text}
        </div>
      )}
    </li>
    
    )
  }
  