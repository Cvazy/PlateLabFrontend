import { ICaseItem, useFetchAllCasesQuery } from "@/app/cases/model";
import { usePathname } from "next/navigation";
import { DelayedLink } from "@/app/components";

interface INavItem {
  link: string;
  name: string;
  widget: boolean;
}

export const NavItem = ({ link, name, widget }: INavItem) => {
  const pathname = usePathname();
  const isActive = pathname === link;

  const { data } = useFetchAllCasesQuery();

  const cases: ICaseItem[] = data || [];

  return (
    <DelayedLink
      href={link}
      data-link-status={isActive ? "active" : undefined}
      data-cursor-text={name}
      className={`relative nav_link_click ${widget ? "flex items-center gap-0.5" : ""}`}
    >
      <div
        data-cursor-text={name}
        className={`${widget ? "flex items-center gap-2.5 sm:gap-0.5" : ""} py-1.5 px-2.5 lg:px-5`}
      >
        <div
          data-cursor-text={name}
          className={`!duration-100 text-center font-fancy text-xl text-white sm:text-base sm:!leading-[18px] sm:min-w-14`}
        >
          {name}
        </div>

        {widget && (
          <div className={`rounded bg-white`}>
            <div className={"py-1 px-1.5"}>
              <p className={"text-[13px] !leading-none text-black font-fancy"}>
                {cases && cases.length}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className={"nav_link_line"}></div>
    </DelayedLink>
  );
};
