import React from "react";
import Appbar from "../Appbar/Appbar";
import Sidebar from "../Sidebar/Sidebar";
import {SidebarItem} from '../Sidebar/SidebarItem';
import { Outlet } from "react-router-dom";

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
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="h-[45px]">
        <Appbar />
      </div>
      <div className="flex h-[100dvh-45px]">
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
      <div className="container">
        <Outlet />
      </div>
      </div>
    </div>
  );
}

export default Layout;
