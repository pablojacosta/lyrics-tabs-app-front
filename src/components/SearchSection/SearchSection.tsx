import Container from "@components/elements/Container";
import styles from "./SearchSection.module.scss";
import SearchInput from "./components/SearchInput";
import SearchButton from "./components/SearchButton";

interface ISearchSection {
  handleInputChange: () => void;
  onKeyDown: () => void;
  getData: () => void;
}

const SearchSection = ({
  handleInputChange,
  onKeyDown,
  getData,
}: ISearchSection) => {
  return (
    <Container>
      <div className={styles.searchSection}>
        <SearchInput
          handleInputChange={handleInputChange}
          onKeyDown={onKeyDown}
        />
        <SearchButton getData={getData} />
      </div>
    </Container>
  );
};

export default SearchSection;
