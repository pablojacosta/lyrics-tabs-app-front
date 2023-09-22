import Container from "@components/elements/Container";
import styles from "./Title.module.scss";

const Title = () => {
  return (
    <Container>
      <div className={styles.title}>
        <h1>LYRICS AND TABS FINDER</h1>
      </div>
    </Container>
  );
};

export default Title;
