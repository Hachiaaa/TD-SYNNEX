import { useState } from "react";
import { nanoid } from "nanoid";
import { produce } from "immer";

import type { WritableDraft } from "immer/dist/internal";

const initialData = [
  {
    clientName: "Worker Training",
    boardName: "Admin Supports",
    tags: ["story"],
    requestor: "Kleven Yu",
    includeBySearch: true,
    id: nanoid(4),
  },
  {
    clientName: "Order Profile Maintain",
    boardName: "One Tools",
    tags: ["Onescr"],
    requestor: "Colin Xiao",
    includeBySearch: true,
    id: nanoid(4),
  },
  {
    clientName: "China Tools Enhancement",
    boardName: "China Tools Enhancement",
    tags: [],
    requestor: "Mark Zhu",
    includeBySearch: true,
    id: nanoid(4),
  },
];

export interface ISdkInfo {
  clientName: string;
  boardName: string;
  tags: Array<string>;
  requestor: string;
  id: string;
  includeBySearch: boolean;
}

const searchKey = ["clientName", "boardName", "requestor", "tags"];

const useMockApi = () => {
  const [sdkList, setSdkList] = useState<Array<ISdkInfo>>(initialData);
  const addNewSdk = (sdkInfo: ISdkInfo) => {
    setSdkList([...sdkList, sdkInfo]);
  };
  const removeSdk = (id: string) => {
    setSdkList(
      produce(sdkList, (draft) => {
        const removeIndex = draft.findIndex((sdk) => sdk.id === id);
        draft.splice(removeIndex, 1);
      })
    );
  };
  const updateSdk = (id: string, sdkInfo: ISdkInfo) => {
    setSdkList(
      produce(sdkList, (draft) => {
        const updatedIndex = draft.findIndex((sdk) => sdk.id === id);
        draft[updatedIndex] = sdkInfo;
      })
    );
  };
  const searchSdk = (keyword: string) => {
    setSdkList(
      produce(sdkList, (draft) => {
        draft.forEach((sdk, index) => {
          const isMatch = searchKey
            .map((key) => sdk[key as keyof WritableDraft<ISdkInfo>])
            .flat()
            .some((searchText) => (searchText as string).includes(keyword));
          if (!isMatch) {
            draft[index].includeBySearch = false;
          } else {
            draft[index].includeBySearch = true;
          }
        });
      })
    );
  };
  return {
    sdkList,
    addNewSdk,
    removeSdk,
    updateSdk,
    searchSdk,
  };
};

export default useMockApi;
