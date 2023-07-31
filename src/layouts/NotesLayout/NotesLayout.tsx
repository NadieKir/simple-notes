import { useState } from "react";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Tabs, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

import { NoteTab } from "components";
import { Note } from "common/models";

import styles from "./NotesLayout.module.scss";

interface NotesLayoutProps {
  notes: Note[];
}

export const NotesLayout = ({ notes }: NotesLayoutProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Grid component="main" container>
      <Grid component="section" className={styles.notesSection} xs={3}>
        <div className={styles.searchWrapper}>
          <Box sx={{ display: "flex", alignItems: "flex-end", width: "100%" }}>
            <Search sx={{ mr: 1, my: 0.5 }} />
            <TextField
              label="Find note..."
              variant="standard"
              fullWidth
              value={searchQuery}
              onChange={onChange}
            />
          </Box>
        </div>
        <Tabs className={styles.notes} variant="scrollable" orientation="vertical" value={false}>
          {notes
            .filter(
              (note) => note.heading.includes(searchQuery) || note.content.includes(searchQuery)
            )
            .map((note) => (
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
