import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Item from "../../components/Item";

const SidebarComponent = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Sidebar
            collapsed={isCollapsed}
            // backgroundColor={colors.primary[400]}
            rootStyles={{
                height: "100%",
                overflow: "auto",
                [`.ps-sidebar-container`]: {
                    backgroundColor: colors.primary[400],
                },
            }}
        >
            <Menu
                iconShape="square"
                menuItemStyles={{
                    button: {
                        padding: "5px 35px 5px 20px !important",
                        [`&:hover`]: {
                            backgroundColor: "transparent",
                            color: "#868dfb !important",
                        },
                        [`&.active`]: {
                            //   backgroundColor: '#13395e',
                            color: "#6870fa !important",
                        },
                    },
                }}
            >
                <MenuItem
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                    style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
                >
                    {!isCollapsed && (
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                        >
                            <Typography variant="h4" color={colors.grey[100]}>
                                ADMIN
                            </Typography>
                            <IconButton
                                onClick={() => setIsCollapsed(!isCollapsed)}
                            >
                                <MenuOutlinedIcon />
                            </IconButton>
                        </Box>
                    )}
                </MenuItem>

                {!isCollapsed && (
                    <Box mb="25px">
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <img
                                alt="profile-user"
                                width="100px"
                                height="100px"
                                src={`./src/assets/images/natasha_romanoff.jpg`}
                                style={{
                                    cursor: "pointer",
                                    borderRadius: "50%",
                                }}
                            />
                        </Box>
                        <Box textAlign="center">
                            <Typography
                                variant="h3"
                                color={colors.grey[100]}
                                fontWeight="bold"
                                sx={{ m: "10px 0 0 0" }}
                            >
                                Natasha Romanoff
                            </Typography>
                            <Typography
                                variant="h5"
                                color={colors.greenAccent[500]}
                            >
                                VP Fancy Admin
                            </Typography>
                        </Box>
                    </Box>
                )}

                <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                    <Item
                        title="Dashboard"
                        to="/"
                        icon={<HomeOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />

                    <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                    >
                        Data
                    </Typography>
                    <Item
                        title="Manage Team"
                        to="/team"
                        icon={<PeopleOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Contacts Information"
                        to="/contacts"
                        icon={<ContactsOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Invoices Balances"
                        to="/invoices"
                        icon={<ReceiptOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />

                    <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                    >
                        Pages
                    </Typography>
                    <Item
                        title="Profile Form"
                        to="/form"
                        icon={<PersonOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Calendar"
                        to="/calendar"
                        icon={<CalendarTodayOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="FAQ Page"
                        to="/faq"
                        icon={<HelpOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />

                    <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                    >
                        Charts
                    </Typography>
                    <Item
                        title="Bar Chart"
                        to="/bar"
                        icon={<BarChartOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Pie Chart"
                        to="/pie"
                        icon={<PieChartOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Line Chart"
                        to="/line"
                        icon={<TimelineOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Geography Chart"
                        to="/geography"
                        icon={<MapOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </Box>
            </Menu>
        </Sidebar>
    );
};

export default SidebarComponent;
