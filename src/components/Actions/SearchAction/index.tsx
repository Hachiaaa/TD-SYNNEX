import { ReactComponent as SearchIcon } from "@/assets/ESM@iconset_Search.svg";
import useListContext from "hooks/useListContext";
import { useState } from "react";
import debounce from "utils/debounce";
import "./index.scss";

const SearchAction = () => {
  const { searchSdk } = useListContext();
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="search-container">
      <SearchIcon className="search-icon" />
      <input
        className="search-input"
        placeholder="Search client name,board name,tags,requestor"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          debounce(() => searchSdk?.(e.target.value), 50)();
        }}
      />
    </div>
  );
};

export default SearchAction;
