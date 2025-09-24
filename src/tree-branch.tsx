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
  getIsToggled,
  depth,
  rootProps,
  ...liProps
}: TreeBranchProps<BranchType, LeafType>): ReactNode {
  return (
    <li key={data.id} {...liProps}>
      <div>{data.data && isBranchType(data) && renderBranch(data.data)}</div>
      <span className={`${getIsToggled(data) ? 'block' : 'hidden'}`}>
        <TreeRoot
          data={data}
          depth={depth}
          renderBranch={renderBranch}
          renderLeaf={renderLeaf}
          getIsToggled={getIsToggled}
          {...rootProps}
        />
      </span>
    </li>
  );
}
