import React, {
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useState,
} from 'react';
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
  const [isToggledState, setIsToggledState] = useState<boolean>(false);

  const onToggleCallback = useCallback(() => {
    setIsToggledState(!isToggledState);
  }, [isToggledState]);

  return (
    <li key={data.id} {...liProps}>
      <div>
        {data.data &&
          isBranchType(data) &&
          renderBranch(data.data, isToggledState, onToggleCallback)}
      </div>
      <span className={`${isToggledState ? 'block' : 'hidden'}`}>
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
