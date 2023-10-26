import { FC, MouseEventHandler, ReactNode } from "react";
import "./styles.scss";

interface Props {
  id?: string;
  backgroundColor?: string;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Props> = (props) => {
  return (
    <button
      id={props.id}
      style={{ backgroundColor: props.backgroundColor }}
      className="button"
      type="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
