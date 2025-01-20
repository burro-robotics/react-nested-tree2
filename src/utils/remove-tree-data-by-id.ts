import {TreeData} from '../tree-data';

export function removeTreeDataById<BranchData, LeafData>({
  tree,
  id,
}: {
  tree?: TreeData<BranchData, LeafData> | null;
  id: string | number;
}): TreeData<BranchData, LeafData> | null {
  if (!tree) {
    return null;
  }

  if (tree.id === id) {
    return null;
  }

  if (tree.children) {
    const updatedChildren = tree.children
      .map(child => removeTreeDataById({tree: child, id}))
      .filter(child => child !== null);

    return {
      ...tree,
      children: updatedChildren as TreeData<BranchData, LeafData>[],
    };
  }

  return tree;
}
