import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
import {ReactComponent as MyLogo} from "../../assets/golf_2.svg";
import { Link } from "react-router-dom";

const pages = ["Drivers","Hierros","Wedges","Putters", "Pelotas", "Ropa"];
const settings = ["Perfil", "Configuracion", "Compras", "Salir"];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

return (
    <div className={"navBar"}>
    <AppBar position="static" id="navBar">
        <Container maxWidth="xl"
                    sx={{
                        backgroundColor: "green",
                    }}>
            <Toolbar disableGutters>
                <Link to={"/"} style={{textDecoration:"none"}}>
                    <MyLogo fill="white" alt="Logo" width="40px"/>
                </Link>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "sans-serif",
                    fontWeight: 700,
                    letterSpacing: ".1rem",
                    color: "inherit",
                    textDecoration: "none",
                }}
            >
                <Link to={"/"} style={{textDecoration:"none", color:"white"}}>
                    GOLF SHOP
                </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
            <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
            }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: "block", md: "none" },
                }}
            >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                        <Link style={{textDecoration:"none", color:"green"}} to={`category/${page}`}> 
                            {page}
                        </Link>
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    // fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".1rem",
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: "1rem",
                }}
            >
                <Link to={"/"} style={{textDecoration:"none", color:"white"}}>
                    GOLF SHOP
                </Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                >
                <Link style={{textDecoration:"none", color:"white"}} to={`category/${page}`}> 
                            {page}
                        </Link>
                </Button>
                ))}
            </Box>
            <Box id="carrito">
                <CartWidget Cant="4"/>
            </Box>        
            <Box sx={{ flexGrow: 0 ,display: { xs: "none", md: "flex" } }}>
            <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Juan" src="/static/images/avatar/2.jpg" />
            </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
                ))}
            </Menu>
            </Box>
            </Toolbar>
        </Container>
    </AppBar>
    </div>
    );
};
export default ResponsiveAppBar;
