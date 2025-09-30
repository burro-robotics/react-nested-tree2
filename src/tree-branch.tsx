import React, {HTMLAttributes, PropsWithChildren, ReactNode} from 'react';
import type {TreeRootProps} from './tree-root';
import {TreeRoot} from './tree-root';
import {isBranchType} from './utils/is-branch-type';

export type TreeBranchProps<BranchType, LeafType> = PropsWithChildren<
  TreeRootProps<BranchType, LeafType> & {
    rootProps: HTMLAttributes<HTMLUListElement>;
  } & HTMLAttributes<HTMLLIElement>
>;

export function TreeBranch<BranchType, LeafType>({
  data,
  renderBranch,
  renderLeaf,
  depth,
  rootProps,
  ...liProps
}: TreeBranchProps<BranchType, LeafType>): ReactNode {
  return (
    <li key={data.id} {...liProps}>
      <div>{data.data && isBranchType(data) && renderBranch(data)}</div>
      <span className={`${data.isToggled ? 'block' : 'hidden'}`}>
        <TreeRoot
          data={data}
          depth={depth}
          renderBranch={renderBranch}
          renderLeaf={renderLeaf}
          {...rootProps}
        />
      </span>
    </li>
  );
}
