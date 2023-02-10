import { ReactComponent as SearchIcon } from "@assets/ESM@iconset_Search.svg";
import "./index.scss";

const SearchAction = () => {
  return (
    <div className="search-container">
      <SearchIcon className="search-icon" />
      <input
        className="search-input"
        placeholder="Search client name,board name,tags,requestor"
      />
    </div>
  );
};

export default SearchAction;
