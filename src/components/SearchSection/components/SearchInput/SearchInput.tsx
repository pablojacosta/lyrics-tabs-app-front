import styles from "./SearchInput.module.scss";

interface ISearchInput {
  handleInputChange: () => void;
  onKeyDown: () => void;
}

const SearchInput = ({ handleInputChange, onKeyDown }: ISearchInput) => {
  return (
    <div className={styles.searchinput}>
      <input
        type="text"
        placeholder="Type Artist, Song and/or Lyric phrase"
        onChange={handleInputChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default SearchInput;