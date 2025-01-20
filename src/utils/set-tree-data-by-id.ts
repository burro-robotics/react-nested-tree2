import {TreeData} from '../tree-data';

export function setTreeDataById<BranchData, LeafData>({
  tree,
  id,
  newData,
}: {
  tree?: TreeData<BranchData, LeafData> | null;
  id: string | number;
  newData: BranchData | LeafData;
}): TreeData<BranchData, LeafData> | null {
  if (!tree) {
    return null;
  }

  if (tree.id === id) {
    return {
      ...tree,
      data: newData,
    };
  }

  if (tree.children) {
    const updatedChildren = tree.children
      .map(child => setTreeDataById({tree: child, id, newData}))
      .filter(child => child !== null) as TreeData<BranchData, LeafData>[];

    return {
      ...tree,
      children: updatedChildren,
    };
  }

  return tree;
}
