import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { notificationData } from "../../data/mockData";
import { ProfileData } from "../../data/mockData";
import Dropdown from "../global/Dropdown";
import { Link } from "react-router-dom";
import user_image from "../../Images/milton-2.jpeg";

import "./Topnav.css";

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to="/" key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);

const curr_user = {
  display_name: "MILTON SK",
  image: user_image,
};

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        <div className="topnav__right-item">
          <div className="notification-button">
            <Dropdown
              icon="bx bxs-bell bx-tada bx-sm"
              // badge='12'
              contentData={notificationData}
              renderItems={(item, index) => renderNotificationItem(item, index)}
              renderFooter={() => <Link to="/">View All</Link>}
            />

            {/* dropdown here */}
          </div>
        </div>

        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>

        {/* <PersonOutlinedIcon /> */}
        <div className="topnav__right-item">

          {/* dropdown here */}
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={ProfileData}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
         
        </div>
        <i class='bx bxs-down-arrow bx-fade-right-hover'></i>
      </Box>
    </Box>
  );
};

export default Topbar;
