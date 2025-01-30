import { NavItem } from "@/app/components/Header/components";

interface IMobileMenu {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (
    value: ((prevState: boolean) => boolean) | boolean,
  ) => void;
}

export const MobileMenu = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: IMobileMenu) => {
  return (
    <div
      className={`fixed z-40 top-20 bottom-0 left-0 right-0 w-full bg-black overflow-hidden ${isMobileMenuOpen ? "max-h-dvh" : "max-h-0"}`}
    >
      <div className={"w-full h-full"}>
        <div className={"py-20 px-5 w-full h-full"}>
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className={
              "flex flex-col items-center justify-start gap-[60px] w-full"
            }
          >
            <NavItem
              link={"/about"}
              name={"About"}
              widget={false}
              hoverText={"About - Learn more"}
            />

            <div className={"w-5 h-px bg-gray"}></div>

            <NavItem
              link={"/pricing"}
              name={"Pricing"}
              widget={false}
              hoverText={"Price - Simple & affordable"}
            />

            <div className={"w-5 h-px bg-gray"}></div>

            <NavItem
              link={"/cases"}
              name={"Cases"}
              widget={true}
              hoverText={"Case - What we’ve done"}
            />

            <div className={"w-5 h-px bg-gray"}></div>

            <NavItem
              link={"/contact"}
              name={"Contact"}
              widget={false}
              hoverText={"Contact - How to contact us"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
