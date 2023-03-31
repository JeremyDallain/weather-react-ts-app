import { AiOutlineApi } from "react-icons/ai";

interface Props {
  message: string;
}

export const ErrorMessage = ({ message }: Props) => {
  return (
    <div role="alert" className="flex justify-center items-center text-xl mt-20">
      {/* <AiOutlineApi size={30} /> */}
      <p className="ml-4">{message}</p>
    </div>
  );
};
