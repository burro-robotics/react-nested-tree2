import React, {
  type HTMLAttributes,
  type PropsWithChildren,
  type ReactNode,
} from 'react';
import {TreeBranch} from './tree-branch';
import type {TreeData} from './tree-data';
import {TreeLeaf} from './tree-leaf';
import {isBranchType} from './utils/is-branch-type';
import {isLeafType} from './utils/is-leaf-type';

export type TreeRootProps<BranchType, LeafType> =
  HTMLAttributes<HTMLUListElement> & {
    data: TreeData<BranchType, LeafType>;
    depth?: number;
    renderLeaf: (item: LeafType) => ReactNode;
    renderBranch: (
      item: BranchType,
      isToggled: boolean,
      onToggle: () => void,
    ) => ReactNode;
  };

export function TreeRoot<BranchType, LeafType>({
  data,
  renderLeaf,
  renderBranch,
  depth,
  ...ulProps
}: PropsWithChildren<TreeRootProps<BranchType, LeafType>>) {
  return (
    <ul {...(depth !== undefined ? ulProps : {})}>
      {data.children &&
        data.children.map(item => {
          if (isBranchType(item)) {
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
          } else if (isLeafType(item)) {
            return (
              <TreeLeaf<LeafType>
                key={item.id}
                item={item.data}
                renderLeaf={renderLeaf}
              />
            );
          } else {
            console.error('Invalid item type');
            return null;
          }
        })}
    </ul>
  );
}
