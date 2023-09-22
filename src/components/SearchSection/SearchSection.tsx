import Container from "@components/elements/Container";
import styles from "./SearchSection.module.scss";
import SearchInput from "./components/SearchInput";
import SearchButton from "./components/SearchButton";
import { ChangeEvent, KeyboardEvent } from "react";

interface ISearchSection {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
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
