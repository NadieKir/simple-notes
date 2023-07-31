import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { NavLinkButton, Tag } from "components";
import palette from "style/_colors.module.scss";

import styles from "./Header.module.scss";
import logo from "./images/logo.svg";
import { mockedTags } from "common/helpers";

export const Header = () => {
  const navigate = useNavigate();

  const handleAddNote = () => {
    navigate("/notes/add");
  };

  return (
    <Stack className={styles.header} component={"header"}>
      <Box className={styles.logoWrapper}>
        <Link to="/">
          <img src={logo} width={135} alt="Logotype" />
        </Link>
      </Box>

      <h1 className="visually-hidden">Notes Taking App</h1>

      <Stack component="nav" className={styles.nav} spacing={4}>
        <Stack spacing={1} sx={{ color: palette.black }}>
          <NavLinkButton to="/notes">Notes</NavLinkButton>
          <Stack className={styles.tags} spacing={0.5}>
            {mockedTags.map((tag) => (
              <Tag color={tag.color} label={tag.label} />
            ))}
          </Stack>
        </Stack>
        <NavLinkButton to="/trash">Trash</NavLinkButton>
      </Stack>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleAddNote}
        sx={{
          paddingTop: "12px",
          paddingBottom: "12px",
          borderRadius: 0,
        }}
      >
        Add note
      </Button>
    </Stack>
  );
};
