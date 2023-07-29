import { Tag } from "common/models";

export const mockedTags: Tag[] = [
  {
    id: "1",
    label: "#travelling",
    color: "#5A78E2",
  },
  {
    id: "2",
    label: "#cooking",
    color: "#2A78E2",
  },
];

export const mockedNotes = [
  {
    id: "1",
    heading: "В сети обсуждают кадр с Райаном Гослингом в образе Кена из фильма «Барби». ... Комедийный фильм «Барби» режиссера Греты Гервик («Леди Берд», «Маленькие женщины») должен выйти на экраны летом 2023 года",
    content: "В сети обсуждают кадр с Райаном Гослингом в образе Кена из фильма «Барби». ... Комедийный фильм «Барби» режиссера Греты Гервик («Леди Берд», «Маленькие женщины») должен выйти на экраны летом 2023 года",
    date: "July 21",
    tags: mockedTags
  }, 
  {
    id: "2",
    heading: "Heading 2",
    content: "Description description 2",
    date: "July 22",
    tags: mockedTags
  }, 
];
