import { useNavigate } from "react-router-dom";

export const ChooseNotePage = () => {
  const navigate = useNavigate();

  const handleAddNote = () => {
    navigate("/notes/add");
  };

  return (
    <div>
      <span>Choose a note on a menu on the left</span>
      <br />
      <span>or</span>
      <button onClick={handleAddNote}>Create new note</button>
    </div>
  );
};
