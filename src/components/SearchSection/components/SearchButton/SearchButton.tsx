import useGetSearchData from "@hooks/useGetSearchData";
import styles from "./SearchButton.module.scss";

const SearchButton = () => {
  const { getData } = useGetSearchData();

  return (
    <div className={styles.searchButton}>
      <button onClick={getData}>Search!</button>
    </div>
  );
};

export default SearchButton;
