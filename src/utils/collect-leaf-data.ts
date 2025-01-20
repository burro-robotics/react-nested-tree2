import {TreeData} from '../tree-data';

export function collectLeafData<BranchData, LeafData>({
  tree,
}: {
  tree?: TreeData<BranchData, LeafData> | null;
}): LeafData[] {
  if (!tree) {
    return [];
  }

  let leaves: LeafData[] = [];

  if (!tree.children || tree.children.length === 0) {
    leaves.push(tree.data as LeafData);
  } else {
    for (const child of tree.children) {
      leaves = leaves.concat(collectLeafData({tree: child}));
    }
  }

  return leaves;
}
