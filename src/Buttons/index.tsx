import "./style.css";
import { ButtonType } from "../types";

function Button(props: ButtonType) {
  return (
    <button
      className={
        (props.default && "default") ||
        (props.danger && "danger") ||
        (props.primary && "primary") ||
        (props.warning && "warning") ||
        (props.success && "success") ||
        props.className
      }
      style={props.style} 
    >
      {props.btnText ? props.btnText : props.children}
    </button>
  );
}

export default Button;
