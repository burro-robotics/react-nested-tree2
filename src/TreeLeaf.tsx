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
