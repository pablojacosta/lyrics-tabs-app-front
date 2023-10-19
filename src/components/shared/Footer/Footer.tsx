import Container from "@elements/Container/Container";
import styles from "./Footer.module.scss";
import SocialIcons from "./components/SocialIcons";
import Separator from "@components/elements/Separator";

interface IFooter {
  removeBg?: boolean;
  isHome?: boolean;
}

const Footer = ({ removeBg, isHome }: IFooter) => {
  return (
    <footer
      className={`${styles.footer} ${removeBg ? styles.removeBg : ""} ${
        isHome ? styles.isHome : ""
      }`}
    >
      <Container>
        <Separator color="white" />
        <SocialIcons />
      </Container>
    </footer>
  );
};

export default Footer;
