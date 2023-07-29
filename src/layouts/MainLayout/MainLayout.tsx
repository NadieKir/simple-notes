import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

import { Header } from "components";

export const MainLayout = () => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid xs={2}>
        <Header />
      </Grid>
      <Grid xs={10}>
        <Outlet />
      </Grid>
    </Grid>
  );
};
