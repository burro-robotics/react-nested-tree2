# react-nested-tree2

`react-nested-tree2` is a flexible React component library for rendering nested tree structures. This package allows you to easily create and manage tree components with customizable rendering for both branches and leaves.

## Installation

To install react-nested-tree2, use npm:

```bash
npm install react-nested-tree2
```

Or with yarn:

```bash
yarn add react-nested-tree2
```

## Usage

To use `react-nested-tree2` in your project, import the `TreeRoot` component and provide it with data and rendering functions for the branches and leaves.

```jsx
import React from "react";
import { TreeRoot } from "react-nested-tree2";

function App() {
  const [treeData, setTreeData] = useState({
    id: "root",
    children: [
      {
        id: 1,
        data: { name: "* Branch 1" },
        folder_id: "root",
        children: [
          { id: 2, folder_id: 1, data: { name: "- Leaf 1-1" } },
          { id: 3, folder_id: 1, data: { name: "- Leaf 1-2" } },
          {
            id: 4,
            folder_id: 1,
            data: { name: "* Branch 1-4" },
            children: [{ id: 5, folder_id: 4, data: { name: "- Leaf 1-4-1" } }],
            isToggled: false,
          },
        ],
        isToggled: false,
      },
      {
        id: 6,
        data: { name: "* Branch 2" },
        folder_id: "root",
        children: [{ id: 7, folder_id: 2, data: { name: "- Leaf 2-1" } }],
        isToggled: false,
      },
    ],
  });

  // Handler example from parent that gets a branchId.
  function handleOnBranchToggle(branchId: string | number) {
    const treeDataCopy = { ...treeData };
    const treeDataById = getTreeDataById({ tree: treeDataCopy, id: branchId });
    if (treeDataById && treeDataById.hasOwnProperty("isToggled")) {
      treeDataById.isToggled = !treeDataById.isToggled;
    }
    setTreeData(treeDataCopy);
  }

  return (
    <TreeRoot<{ name: string }, { name: string }>
      style={{ marginLeft: "20px" }}
      data={treeData}
      renderLeaf={(leaf) => {
        return <p>{leaf.name}</p>;
      }}
      renderBranch={(branch) => {
        return (
          <div onClick={() => handleOnBranchToggle(branch.id)}>
            {branch.isToggled ? (
              <p>{branch.data?.name}</p>
            ) : (
              <p>branch is closed</p>
            )}
          </div>
        );
      }}
    />
  );
}

export default App;
```

## Props

The `TreeRoot` component accepts the following props:

- **data**: The tree structure data.
- **renderLeaf**: A function to render a leaf node.
- **renderBranch**: A function to render a branch node with toggle functionality.
- **depth** (optional): The initial depth to render.

## Types

- **TreeData**: The type defining the structure of the tree data.
- **TreeRootProps**: The props accepted by the `TreeRoot` component.

## License

Distributed under the MIT License. See `LICENSE` for more information.
