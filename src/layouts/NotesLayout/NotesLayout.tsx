import { useState } from "react";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { Tabs } from "@mui/material";

import { NoteTab } from "components";
import { mockedNotes } from "common/helpers";

import styles from "./NotesLayout.module.scss";

export const NotesLayout = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid component="main" container>
      <Grid component="section" className={styles.notesSection} xs={3}>
        <div className={styles.searchWrapper}>g</div>

        <Tabs
          className={styles.notes}
          variant="scrollable"
          orientation="vertical"
          value={value}
          onChange={handleChange}
        >
          {mockedNotes.map((note) => (
            <NoteTab note={note} />
          ))}
        </Tabs>
      </Grid>

      <Grid component="section" xs={9}>
        <Outlet />
      </Grid>
    </Grid>
  );
};
