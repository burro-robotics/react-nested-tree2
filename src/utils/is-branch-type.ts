import {TreeData} from '../tree-data';

export function isBranchType<BranchType, LeafType>(
  item: TreeData<BranchType, LeafType>,
): item is TreeData<BranchType, LeafType> & {data: BranchType} {
  return !!item.children && item.children.length > 0;
}
