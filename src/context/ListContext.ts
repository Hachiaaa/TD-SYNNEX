import React from "react";

import type { ISdkInfo } from "../hooks/useMockApi";

interface IListContext {
  setShowModal?: (show: boolean) => void;
  addNewSdk?: (sdkInfo: ISdkInfo) => void;
  updateSdk?: (id: string, sdkInfo: ISdkInfo) => void;
  searchSdk?: (keyword: string) => void;
  sdkList?: Array<ISdkInfo>;
}

const ListContext = React.createContext<IListContext>({});

export default ListContext;
