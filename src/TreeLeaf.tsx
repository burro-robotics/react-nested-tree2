import React from "react";
import type { TreeData } from "./TreeData";

export const TreeLeaf: React.FC<
  {
    item: TreeData<any, any>;
    renderLeaf: (item: any) => React.ReactNode;
  } & React.HTMLAttributes<HTMLLIElement>
> = ({ item, renderLeaf, ...props }) => {
  return <li {...props}>{renderLeaf(item.data)}</li>;
};
