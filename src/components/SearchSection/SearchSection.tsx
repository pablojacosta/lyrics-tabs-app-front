/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@components/elements/Container";
import styles from "./SearchSection.module.scss";
import SearchInput from "./components/SearchInput";
import SearchButton from "./components/SearchButton";

interface ISearchSection {
  handleInputChange: (e: any) => void;
  onKeyDown: (event: any) => void;
}

const SearchSection = ({ handleInputChange, onKeyDown }: ISearchSection) => {
  return (
    <Container>
      <div className={styles.searchSection}>
        <SearchInput
          handleInputChange={handleInputChange}
          onKeyDown={onKeyDown}
        />
        <SearchButton />
      </div>
    </Container>
  );
};

export default SearchSection;
