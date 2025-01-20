import {TreeData} from '../tree-data';

export function getTreeDataById<BranchData, LeafData>({
  tree,
  id,
}: {
  tree?: TreeData<BranchData, LeafData> | null;
  id: string | number;
}): TreeData<BranchData, LeafData> | undefined {
  if (!tree) {
    return undefined;
  }

  if (tree.id === id) {
    return tree;
  }

  if (tree.children) {
    for (const child of tree.children) {
      const result = getTreeDataById({tree: child, id});
      if (result) {
        return result;
      }
    }
  }

  return undefined;
}
