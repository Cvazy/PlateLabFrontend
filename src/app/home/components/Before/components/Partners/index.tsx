import { PartnerElement } from "./components";
import { IPartner, useFetchBeforePartnersQuery } from "@/app/home";

export const Partners = () => {
  const { data } = useFetchBeforePartnersQuery();

  const partners: IPartner[] = data || [];

  return (
    <div className={"flex justify-center gap-3 w-full lg:gap-4"}>
      {partners.length > 0 &&
        partners?.map(({ id, name, image }) => (
          <PartnerElement key={id} name={name} image={image} />
        ))}
    </div>
  );
};
