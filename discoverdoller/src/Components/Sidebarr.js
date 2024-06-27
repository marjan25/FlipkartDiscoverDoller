import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { useCallback } from "react";



import React from "react";

const Sidebarr = () => {
  const { collapseSidebar, toggleSidebar,toggled } =
    useProSidebar();
  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      console.log(true);
      collapseSidebar();
    } else {
      console.log(false);
      collapseSidebar();
    }
  };
  return (
    <div
      id="app"
      style={({ height: "100vh" }, { display: "flex", flexDirection: "row" ,position: 'sticky',
      top: '0'
     })}
    >
      <Sidebar
        breakPoint="sm"
        transitionDuration={800}
        backgroundColor="#00A7E9"
        rtl={false}
        style={{ height: "100vh", }}
      >
        <Menu style={{  fontSize:'1vw'}}>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center",  fontSize:'1vw'}}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem >
          <SubMenu icon={<HomeOutlinedIcon /> }  style={{ textAlign: "center",  fontSize:'1vw',} } label="Home">
            <MenuItem icon={<PeopleOutlinedIcon />}>Item 1</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon />}>Item 2</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon />}>Item 3</MenuItem>
          </SubMenu>

          <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
        </Menu>
      </Sidebar>
      {/* <main>
        <h1
          onClick={() => {
            toggle();
          }}
          style={{ color: "black", marginLeft: "5rem" }}
        >
          React-Pro-Sidebar
        </h1>
        {toggled ? (
          <h1 style={{ color: "black", marginLeft: "5rem" }}>Toggled</h1>
        ) : (
          <h1 style={{ color: "black", marginLeft: "5rem" }}>Not Toggled</h1>
        )}
        {broken && (
          <h1 style={{ color: "white", marginLeft: "5rem" }}>Small screen</h1>
        )}
      </main> */}
    </div>
  );
};

export default Sidebarr;
