import React, { HTMLAttributes, PropsWithChildren, useCallback, useState } from 'react'
import type { TreeRootProps } from './TreeRoot'
import { TreeRoot } from './TreeRoot'

export const TreeBranch: React.FC<
  PropsWithChildren<TreeRootProps<any, any>> & {
    rootProps: HTMLAttributes<HTMLUListElement>
  } & React.HTMLAttributes<HTMLLIElement>
> = ({ data, renderBranch, renderLeaf, depth, rootProps, ...liProps }) => {
  const [isToggledState, setIsToggledState] = useState<boolean>(false)
  const onToggleCallback = useCallback(() => {
    setIsToggledState(!isToggledState)
  }, [isToggledState])

  return (
    <li key={data.id} {...liProps}>
      <div>{renderBranch(data.data, isToggledState, onToggleCallback)}</div>
      <span className={`${isToggledState ? 'block' : 'hidden'}`}>
        <TreeRoot data={data} depth={depth} renderBranch={renderBranch} renderLeaf={renderLeaf} {...rootProps} />
      </span>
    </li>
  )
}
