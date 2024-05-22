import {
  type HTMLAttributes,
  type PropsWithChildren,
  type ReactNode,
} from "react";

import React from "react";
import { TreeBranch } from "./TreeBranch";
import type { TreeData } from "./TreeData";
import { TreeLeaf } from "./TreeLeaf";

export type TreeRootProps<BranchType, LeafType> =
  HTMLAttributes<HTMLUListElement> & {
    data: TreeData<BranchType, LeafType>;
    depth?: number;
    renderLeaf: (item: LeafType) => ReactNode;
    renderBranch: (
      item: BranchType,
      isToggled: boolean,
      onToggle: () => void
    ) => ReactNode;
  };

export function TreeRoot<BranchType, LeafType>(
  props: PropsWithChildren<TreeRootProps<BranchType, LeafType>>
) {
  const { data, renderLeaf, renderBranch, depth, ...ulProps } = props;

  return (
    <ul {...(depth !== undefined ? ulProps : {})}>
      {data.children &&
        data.children.map((item) => {
          if (item.children) {
            return (
              <TreeBranch
                key={item.id}
                data={item}
                depth={depth ? depth + 1 : 1}
                renderBranch={renderBranch}
                renderLeaf={renderLeaf}
                rootProps={ulProps}
              />
            );
          } else {
            return (
              <TreeLeaf key={item.id} item={item} renderLeaf={renderLeaf} />
            );
          }
        })}
    </ul>
  );
}
