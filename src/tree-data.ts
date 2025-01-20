export type TreeData<BranchData, LeafData> = {
  id: string | number;
  data?: BranchData | LeafData;
  children?: TreeData<BranchData, LeafData>[];
};
