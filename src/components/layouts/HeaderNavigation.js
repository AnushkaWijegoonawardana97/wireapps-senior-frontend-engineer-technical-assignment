import {
  AppBar,
  Divider,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  APP_NAME,
  HEADER_DESKTOP,
  HEADER_MOBILE,
  NAV_WIDTH,
} from "../../utilites/constants";
import { bgBlur } from "../../utilites/cssStyles";

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: "none",
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

const HeaderNavigation = (props) => {
  return (
    <StyledRoot>
      <StyledToolbar>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='center'
          sx={{ flexGrow: 1 }}>
          <Link to={"/"}>
            <Typography variant='h2' sx={{ color: "text.primary" }}>
              {APP_NAME}
            </Typography>
          </Link>
        </Stack>
      </StyledToolbar>
      <Divider />
    </StyledRoot>
  );
};

HeaderNavigation.propTypes = {};

export default HeaderNavigation;
