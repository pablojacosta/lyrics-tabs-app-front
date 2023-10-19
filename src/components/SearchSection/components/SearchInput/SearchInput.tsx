import { ChangeEvent, KeyboardEvent } from "react";
import styles from "./SearchInput.module.scss";

interface ISearchInput {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ handleInputChange, onKeyDown }: ISearchInput) => {
  return (
    <div className={styles.searchInput}>
      <input
        type="text"
        placeholder="Type Artist, Song and/or Lyric phrase"
        onChange={handleInputChange}
        onKeyDown={onKeyDown}
        spellCheck="false"
      />
    </div>
  );
};

export default SearchInput;
