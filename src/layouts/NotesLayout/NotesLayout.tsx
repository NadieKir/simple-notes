import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { Tabs } from "@mui/material";

import { NoteTab } from "components";
import { Note } from "common/models";

import styles from "./NotesLayout.module.scss";

interface NotesLayoutProps {
  notes: Note[];
}

export const NotesLayout = ({ notes }: NotesLayoutProps) => {
  return (
    <Grid component="main" container>
      <Grid component="section" className={styles.notesSection} xs={3}>
        <div className={styles.searchWrapper}>search</div>
        <Tabs className={styles.notes} variant="scrollable" orientation="vertical" value={false}>
          {notes.map((note) => (
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
