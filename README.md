# react-nested-tree

`react-nested-tree` is a flexible React component library for rendering nested tree structures. This package allows you to easily create and manage tree components with customizable rendering for both branches and leaves.

## Installation

To install react-nested-tree, use npm:

```bash
npm install react-nested-tree
```

Or with yarn:

```bash
yarn add react-nested-tree
```

## Usage

To use `react-nested-tree` in your project, import the `TreeRoot` component and provide it with data and rendering functions for the branches and leaves.

```jsx
import React from "react";
import { TreeRoot } from "react-nested-tree";

const App = () => {
  return (
    <TreeRoot<{ name: string }, { name: string }>
      style={{ marginLeft: "20px" }}
      data={{
        id: "root",
        children: [
          {
            id: 1,
            data: { name: "* Branch 1" },
            children: [
              { id: 2, data: { name: "- Leaf 1-1" } },
              { id: 3, data: { name: "- Leaf 1-2" } },
              {
                id: 4,
                data: { name: "* Branch 1-4" },
                children: [{ id: 5, data: { name: "- Leaf 1-4-1" } }],
              },
            ],
          },
          {
            id: 2,
            data: { name: "* Branch 2" },
            children: [{ id: 5, data: { name: "- Leaf 2-1" } }],
          },
        ],
      }}
      renderLeaf={(leaf) => {
        return <p>{leaf.name}</p>;
      }}
      renderBranch={(branch, _isToggled, onToggle) => {
        return <button onClick={onToggle}>{branch.name}</button>;
      }}
    />
  );
};

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

## Contributing

Contributions are always welcome! Please read the [contributing guidelines](LINK_TO_CONTRIBUTING_GUIDELINES) before making a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.
