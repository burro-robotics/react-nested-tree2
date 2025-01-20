import {TreeData} from '../tree-data';

export function filterTreeData<BranchData, LeafData>({
  tree,
  predicate,
}: {
  tree?: TreeData<BranchData, LeafData> | null;
  predicate: (data: BranchData | LeafData) => boolean;
}): TreeData<BranchData, LeafData> | null {
  if (!tree) {
    return null;
  }

  const filteredChildren = tree.children
    ? (tree.children
        .map(child => filterTreeData({tree: child, predicate}))
        .filter(child => child !== null) as TreeData<BranchData, LeafData>[])
    : undefined;

  const shouldIncludeCurrentNode = tree.data && predicate(tree.data);

  if (shouldIncludeCurrentNode || (filteredChildren?.length ?? 0) > 0) {
    return {
      id: tree.id,
      data: tree.data,
      children: filteredChildren,
    };
  }

  return null;
}
