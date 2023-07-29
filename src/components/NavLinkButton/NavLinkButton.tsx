import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

interface NavLinkButtonProps extends PropsWithChildren {
  to: string;
}

export const NavLinkButton = ({ to, children }: NavLinkButtonProps) => {
  return (
    <Button
      to={to}
      component={NavLink}
      color="inherit"
      sx={{
        justifyContent: "flex-start",
        fontSize: "16px",
        "&.active": {
          fontWeight: 600,
        },
      }}
    >
      {children}
    </Button>
  );
};
