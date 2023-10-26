import { FC, ReactNode } from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";
import getRgbString from "../../utils/getRgbString";
import "./styles.scss";

interface Props {
  children: ReactNode;
}

const Background: FC<Props> = (props) => {
  const { color } = useGlobalContext();

  return (
    <div
      className="background"
      style={{
        backgroundColor: getRgbString(color),
      }}
    >
      {props.children}
    </div>
  );
};

export default Background;
