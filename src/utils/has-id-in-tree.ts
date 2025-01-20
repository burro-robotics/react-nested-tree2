import {TreeData} from '../tree-data';

export function hasIdInTree<BranchData, LeafData>({
  tree,
  id,
}: {
  tree?: TreeData<BranchData, LeafData> | null;
  id: string | number;
}): boolean {
  if (!tree) {
    return false;
  }

  if (tree.id === id) {
    return true;
  }

  if (tree.children) {
    for (const child of tree.children) {
      if (hasIdInTree({tree: child, id})) {
        return true;
      }
    }
  }

  return false;
}
