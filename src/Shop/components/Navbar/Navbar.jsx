import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Drawer,
  ClickAwayListener,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

import logo from "../../../assets/images/nellokicks.png";
import useStyles from "./styles";

const PrimarySearchAppBar = ({
  totalItems,
  cart,
  onRemoveFromCart,
  onUpdateCartQty,
  onEmptyCart,
}) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          onClick={handleDrawerOpen}
          aria-label="Show cart items"
          color="inherit"
        >
          <Badge
            badgeContent={totalItems}
            color="secondary"
            overlap="rectangular"
          >
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <div className={classes.AppBar}>
        {
          <div className={classes.button}>
            <IconButton
              onClick={handleDrawerOpen}
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge
                badgeContent={totalItems}
                color="secondary"
                overlap="rectangular"
              >
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        }
      </div>

      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={() => open && handleDrawerClose()}
      >
        <Drawer
          variant="persistent"
          anchor="right"
          open={open}
          onClose={(_, reason) =>
            reason === "backdropClick" && console.log("close")
          }
        >
          <Cart
            cart={cart}
            onRemoveFromCart={onRemoveFromCart}
            onUpdateCartQty={onUpdateCartQty}
            onEmptyCart={onEmptyCart}
          />
        </Drawer>
      </ClickAwayListener>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
