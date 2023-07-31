import { useParams } from "react-router-dom";

import styles from "./NotePage.module.scss";

export const NotePage = () => {
  const { id } = useParams();

  return <section className={styles.noteSection}>NotePage {id}</section>;
};
