import { useState } from "react";
import { CheckboxType } from "../types";
import "./style.css";

function Checkbox(props: CheckboxType) {
  const [right, setRight] = useState<boolean>(false);

  return (
    <div>
      <span
        onClick={() => {
          setRight(!right);
        }}
        className={right ? "right" : props.className}
        style={props.style}
        id={props.big ? "big" : props.middle ? "middle" : "span"}
      ></span>
    </div>
  );
}

export default Checkbox;
