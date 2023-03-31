import { BsFillCursorFill } from "react-icons/bs";

const DEFAULT_ICON_ROTATION = 135;

interface Props {
  degree: number;
}

export const WindArrow = ({ degree }: Props) => {
  return (
      <BsFillCursorFill style={{ transform: `rotate(${degree + DEFAULT_ICON_ROTATION}deg)` }} className="w-6 h-6" />
  );
};