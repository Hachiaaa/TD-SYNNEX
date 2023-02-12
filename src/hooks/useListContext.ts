import { useContext } from "react";
import ListContext from "context/ListContext";

const useListContext = () => {
  return useContext(ListContext);
};

export default useListContext;
