export interface MenuItemOptionModal {
  label: string;
  icon: string;
  isCompleted: boolean;
}

export interface MenuItemModel {
  progress: number;
  label: string;
  active?: number;
  options: MenuItemOptionModal[];
}
