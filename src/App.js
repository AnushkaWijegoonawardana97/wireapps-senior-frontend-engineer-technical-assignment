import { Container, styled } from "@mui/material";
import React from "react";
import { APP_BAR_DESKTOP, APP_BAR_MOBILE } from "./utilites/constants";
import { Route, Routes } from "react-router-dom";
import HeaderNavigation from "./components/layouts/HeaderNavigation";
import Homepage from "./pages/Homepage";
import CategoryPage from "./pages/CategoryPage";

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const App = (props) => {
  return (
    <StyledRoot>
      <HeaderNavigation />
      <Main>
        <Container maxWidth='xl'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route
              path='/mens-clothing'
              element={<CategoryPage categoryName="men's clothing" />}
            />
            <Route
              path='/womens-clothing'
              element={<CategoryPage categoryName="women's clothing" />}
            />
          </Routes>
        </Container>
      </Main>
    </StyledRoot>
  );
};

App.propTypes = {};

export default App;
