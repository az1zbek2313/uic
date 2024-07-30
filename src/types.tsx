export interface ButtonType {
    style?:object;
    children?: string | null;
    default?: boolean;
    primary?: boolean;
    danger?: boolean;
    success?:boolean;
    warning?: boolean;
    btnText?: string | null;
    width?:string;
    height?:string;
    className?:string;
  }
  export interface CheckboxType {
    style?:object;
    className?:string;
    small?:boolean;
    middle?:boolean;
    big?:boolean;
    default?: boolean;
    primary?: boolean;
    danger?: boolean;
    success?:boolean;
    warning?: boolean;
  }