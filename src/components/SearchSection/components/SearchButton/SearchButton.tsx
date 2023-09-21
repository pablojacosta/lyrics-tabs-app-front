import styles from "./SearchButton.module.scss";

interface ISearchButton {
  getData: () => void;
}

const SearchButton = ({ getData }: ISearchButton) => {
  return (
    <div className={styles.searchButton}>
      <button onClick={getData}>Search!</button>
    </div>
  );
};

export default SearchButton;
