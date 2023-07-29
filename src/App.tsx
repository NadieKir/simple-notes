import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { AddNotePage, ChooseNotePage, NotePage } from "pages";
import { MainLayout, NotesLayout } from "layouts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate replace to="/notes" />} />
          <Route path="/" element={<NotesLayout />}>
            <Route path="notes" element={<ChooseNotePage />} />
            <Route path="notes/:id" element={<NotePage />} />
            <Route path="notes/add" element={<AddNotePage />} />
            <Route path="trash" element={<div>Trash</div>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
