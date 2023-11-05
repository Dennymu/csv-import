import { IconType } from "../../Icon/types";
import { InputProps } from "../../Input/types";

export type ListManagerProps = Omit<InputProps, "onChange" | "icon"> & {
  formStyle?: string;
  onChange: (value: string[]) => void;
  icon?: IconType;
};
