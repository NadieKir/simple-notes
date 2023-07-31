import { useState } from "react";
import { Chip } from "@mui/material";
import { alpha } from "@mui/material/styles";
import DoneIcon from "@mui/icons-material/Done";

import { getContrastColor } from "common/helpers";

interface TagProps {
  color: string;
  label: string;
}

export const Tag = ({ color, label }: TagProps) => {
  const [active, setActive] = useState(false);
  const contrastColor = getContrastColor(color);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <Chip
      label={label}
      icon={active ? <DoneIcon fontSize="small" style={{ color: contrastColor }} /> : undefined}
      onClick={handleClick}
      sx={{
        justifyContent: "flex-start",
        minHeight: "34px",
        paddingLeft: "5px",
        paddingRight: "5px",
        backgroundColor: color,
        color: contrastColor,
        "&:hover": {
          backgroundColor: alpha(color, 0.9),
        },
      }}
    />
  );
};
