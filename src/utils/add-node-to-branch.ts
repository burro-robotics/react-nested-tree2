import {TreeData} from '../tree-data';

export function addChildToBranch<BranchData, LeafData>({
  tree,
  branchId,
  newNode,
}: {
  tree?: TreeData<BranchData, LeafData> | null;
  branchId: string | number;
  newNode: TreeData<BranchData, LeafData>;
}): TreeData<BranchData, LeafData> | null {
  if (!tree) {
    return null;
  }

  if (tree.id === branchId) {
    const updatedChildren = tree.children
      ? [...tree.children, newNode]
      : [newNode];
    return {
      ...tree,
      children: updatedChildren,
    };
  }

  if (tree.children) {
    const updatedChildren = tree.children
      .map(child => addChildToBranch({tree: child, branchId, newNode}))
      .filter(child => child !== null) as TreeData<BranchData, LeafData>[];

    return {
      ...tree,
      children: updatedChildren,
    };
  }

  return tree;
}
