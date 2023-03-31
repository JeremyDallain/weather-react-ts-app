import { ThreeDots } from "react-loader-spinner";

export const Loader = () => {
  return (
    <ThreeDots
      height="100"
      width="100"
      radius="9"
      color="#f1f1f1"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass="flex justify-center items-center h-96"
      visible={true}
    />
  );
};
