import {TreeData} from '../tree-data';

export function isLeafType<BranchType, LeafType>(
  item: TreeData<BranchType, LeafType>,
): item is TreeData<BranchType, LeafType> & {data: LeafType} {
  return !item.children || item.children.length === 0;
}
