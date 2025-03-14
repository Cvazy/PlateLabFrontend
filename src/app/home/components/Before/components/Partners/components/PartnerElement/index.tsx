import CustomImage from "@/app/utils/customImage";
import { IPartner } from "@/app/home";
import { imageLoader } from "@/app/utils";

export const PartnerElement = ({ name, image }: Omit<IPartner, "id">) => {
  return (
    <div
      className={
        "flex items-center justify-center w-16 h-16 rounded-2xl lg:bg-[#161515]"
      }
    >
      <CustomImage
        src={image || ""}
        alt={name}
        width={48}
        height={48}
        className={"border-none border-0"}
        loader={imageLoader}
        loading={"lazy"}
      />
    </div>
  );
};
