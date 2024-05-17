import React from "react";
import Appbar from "../Appbar/Appbar";
import Sidebar from "../Sidebar/Sidebar";
import {SidebarItem} from '../Sidebar/SidebarItem';
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

import {
  LayoutDashboard,
  ShieldCheckIcon,
  Share2,
  FolderSync,
  Flag,
  Webhook,
  LineChart,
  Clock,
  MessageCircleQuestion,
  Users,
  AlignLeft,
} from "lucide-react";

type Props = {};

function Layout(props: Props) {
  const { sidebarOpen } = useSelector((state: RootState) => state.navigation);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="h-[60px]">
        <Appbar />
      </div>
      <div className="flex h-[calc(100dvh-60px)]">
      <div>
        <Sidebar
          bottomChildren={
            <div>
              <SidebarItem
                icon={<MessageCircleQuestion />}
                text="FAQ"
                path="FAQ"
              />
              <SidebarItem icon={<AlignLeft />} text="Logs" path="logs" />
              <SidebarItem
                icon={<Users />}
                text="Control Panel"
                path="control-panel"
              />
            </div>
          }
        >
          <SidebarItem
            icon={<LayoutDashboard />}
            text="Dashboard"
            path="dashboard"
          />
          <SidebarItem
            icon={<ShieldCheckIcon />}
            text="Scheme"
            path="security-scheme-configurations"
          />
          <SidebarItem
            icon={<Share2 />}
            text="Connectors"
            path="data-connectors-configurations"
          />
          <SidebarItem
            icon={<FolderSync />}
            text="Applications"
            path="application-configurations"
          />
          <SidebarItem
            icon={<Flag />}
            text="Events"
            path="event-configurations"
          />
          <SidebarItem
            icon={<Webhook />}
            text="Webhooks"
            path="webhooks-configurations"
          />
          <SidebarItem
            icon={<LineChart />}
            text="Activity types"
            path="activity-types-configurations"
          />
          <SidebarItem icon={<Clock />} text="Activities" path="activities" />
        </Sidebar>
      </div>
      <div className={`mx-auto px-4 ${sidebarOpen ? "w-[calc(100%-20rem)]" : "w-[calc(100%-6rem)]"}`}>
        <Outlet />
      </div>
      </div>
    </div>
  );
}

export default Layout;
