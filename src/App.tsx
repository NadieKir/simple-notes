import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { AddNotePage, ChooseNotePage, NotePage } from "pages";
import { MainLayout, NotesLayout } from "layouts";
import { mockedNotes } from "common/helpers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate replace to="/notes" />} />
          <Route path="/" element={<NotesLayout notes={mockedNotes.filter((n) => !n.deleted)} />}>
            <Route path="notes" element={<ChooseNotePage />} />
            <Route path="notes/:id" element={<NotePage />} />
            <Route path="notes/add" element={<AddNotePage />} />
          </Route>
          <Route path="/" element={<NotesLayout notes={mockedNotes.filter((n) => n.deleted)} />}>
            <Route path="trash" element={<div>choose</div>} />
            <Route path="trash/:id" element={<NotePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
