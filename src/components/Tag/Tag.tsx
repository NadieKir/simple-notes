import { createSearchParams, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Chip } from "@mui/material";
import { alpha } from "@mui/material/styles";
import DoneIcon from "@mui/icons-material/Done";

import { getContrastColor } from "common/helpers";

interface TagProps {
  color: string;
  label: string;
}

export const Tag = ({ color, label }: TagProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.getAll("tags").includes(label);
  const navigate = useNavigate();
  const location = useLocation();

  const contrastColor = getContrastColor(color);

  const handleClick = () => {
    const isCurrentLabelActive = searchParams.getAll("tags").includes(label);
    let currentTags = searchParams.getAll("tags");

    if (isCurrentLabelActive) {
      currentTags = [...currentTags.filter((t) => t !== label)];
    } else {
      currentTags = [...currentTags, label];
    }

    const newSearchParams = createSearchParams({ tags: currentTags });

    if (!location.pathname.includes("/notes")) {
      const path = `/notes?${newSearchParams.toString()}`;
      navigate(path);

      return;
    }

    setSearchParams(newSearchParams);
  };

  return (
    <Chip
      label={label}
      icon={isActive ? <DoneIcon fontSize="small" style={{ color: contrastColor }} /> : undefined}
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
