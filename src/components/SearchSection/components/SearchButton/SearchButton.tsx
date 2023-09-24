import useGetSearchData from "@hooks/useGetSearchData";

const SearchButton = () => {
  const { getData } = useGetSearchData();

  return (
    <div>
      <button onClick={getData}>Search!</button>
    </div>
  );
};

export default SearchButton;
