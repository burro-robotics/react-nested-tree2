import {TreeData} from '../tree-data';

export function pruneTree<TreeBranch, TreeLeaf>(
  tree: TreeData<TreeBranch, TreeLeaf>,
  predicate: (node: TreeData<TreeBranch, TreeLeaf>) => boolean,
): TreeData<TreeBranch, TreeLeaf> | undefined {
  if (!tree.children) return tree;

  tree.children.forEach(child => pruneTree(child, predicate));

  tree.children = tree.children.filter(child => {
    return predicate(child);
  });

  return tree;
}
