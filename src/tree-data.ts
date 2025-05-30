export type TreeData<BranchData, LeafData> = {
  id: string | number;
  isToggled?: boolean;
  data?: BranchData | LeafData;
  children?: TreeData<BranchData, LeafData>[];
};
