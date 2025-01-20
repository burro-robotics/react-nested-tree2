import React from 'react';

export type TreeLeafProps<LeafType> = {
  item: LeafType;
  renderLeaf: (item: LeafType) => React.ReactNode;
} & React.HTMLAttributes<HTMLLIElement>;

export function TreeLeaf<LeafType>({
  item,
  renderLeaf,
  ...props
}: TreeLeafProps<LeafType>) {
  return <li {...props}>{renderLeaf(item)}</li>;
}
