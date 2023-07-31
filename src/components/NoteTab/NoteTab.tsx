import { NavLink } from "react-router-dom";
import { Stack, Tab, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

import { Note } from "common/models";
import palette from "style/_colors.module.scss";

import styles from "./NoteTab.module.scss";

interface NoteTabProps {
  note: Note;
}

export const NoteTab = (props: NoteTabProps) => {
  const { id, date, heading, content, tags } = props.note;

  const label = (
    <>
      <Stack direction="row" justifyContent="space-between" sx={{ width: "100%" }}>
        <Typography component="time" className={styles.trimmedText} variant="caption">
          {date}
        </Typography>
        <Stack direction="row" spacing={0.1}>
          {tags.map((tag) => (
            <CircleIcon
              sx={{
                fill: tag.color,
                width: "12px",
                aspectRatio: "1/1",
              }}
            />
          ))}
        </Stack>
      </Stack>
      <Typography component="h3" className={styles.trimmedText} variant="h6">
        {heading}
      </Typography>
      <Typography
        component="p"
        className={styles.trimmedText}
        variant="subtitle2"
        sx={{
          lineHeight: 1,
        }}
      >
        {content}
      </Typography>
    </>
  );

  const { note, ...nativeTabProps } = props;

  return (
    <Tab
      component={NavLink}
      to={`/notes/${id}`}
      label={label}
      sx={{
        alignItems: "flex-start",
        paddingX: "40px",
        paddingY: "20px",
        textTransform: "none",
        "&.active": {
          backgroundColor: palette.white,
          color: palette.black,
        },
      }}
      {...nativeTabProps}
    />
  );
};
