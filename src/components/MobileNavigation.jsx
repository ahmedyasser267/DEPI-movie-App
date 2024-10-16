import { NavLink } from "react-router-dom";
import { mobileNavigation } from "../contants/Navigation";

const MobileNavigation = () => {
    return (
        <section className="lg:hidden h-14 fixed bottom-0 bg-neutral-600 bg-opacity-40 w-full">
            <div className="flex items-center justify-between h-full text-neutral-400">
                {
                    mobileNavigation.map((nav, index) => {
                        return (
                            <NavLink
                                key={nav.label + "mobilenavigation"}
                                to={nav.href}
                                className={({isActive})=>`px-3 flex items-center justify-center flex-col hover:text-white ${isActive && "text-white"}`}
                            >
                                <div className="text-2xl">
                                    {nav.icon}
                                </div>
                                <p className="text-sm">{nav.label}</p>
                            </NavLink>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default MobileNavigation;