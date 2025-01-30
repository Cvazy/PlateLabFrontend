import { ICaseItem, useFetchAllCasesQuery } from "@/app/cases/model";
import { usePathname } from "next/navigation";
import { DelayedLink } from "@/app/components";

interface INavItem {
  link: string;
  name: string;
  hoverText: string;
  widget: boolean;
}

export const NavItem = ({ link, name, hoverText, widget }: INavItem) => {
  const pathname = usePathname();
  const isActive = pathname === link;

  const { data } = useFetchAllCasesQuery();

  const cases: ICaseItem[] = data || [];

  return (
    <DelayedLink
      href={link}
      data-link-status={isActive ? "active" : undefined}
      data-cursor-text={hoverText}
      className={`relative nav_link_click ${widget ? "flex items-center gap-0.5" : ""}`}
    >
      <div
        data-cursor-text={hoverText}
        className={`${widget ? "flex items-center gap-2.5 sm:gap-0.5" : ""} py-1.5 px-2.5 lg:px-5`}
      >
        <div
          data-cursor-text={hoverText}
          className={`!duration-100 text-center font-fancy text-xl text-white sm:text-base sm:!leading-[18px] sm:min-w-14`}
        >
          {name}
        </div>

        {widget && (
          <div className={`rounded bg-white`} data-cursor-text={hoverText}>
            <div className={"py-1 px-1.5"} data-cursor-text={hoverText}>
              <p
                data-cursor-text={hoverText}
                className={"text-[13px] !leading-none text-black font-fancy"}
              >
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
