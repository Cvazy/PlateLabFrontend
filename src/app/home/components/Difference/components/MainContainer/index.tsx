import { PhotosDifference } from "./components";

export const MainContainer = () => {
  return (
    <div className={"w-full"}>
      <div className={"flex justify-between items-start gap-11 w-full"}>
        <div></div>

        <PhotosDifference />

        <div></div>
      </div>
    </div>
  );
};
