import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { navigation } from "../contants/Navigation";

const Header = () => {
    // ** STATES
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/search?q=${searchInput}`)
    }, [searchInput]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <header className='fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75'>
            <div className='container mx-auto px-3 h-full flex items-center'>
                <Link to={"/"}>
                    <img src={logo} alt="logo" width={120} />
                </Link>

                <div className="hidden lg:flex items-center space-x-3 ms-5">
                    {navigation.map((nav, index) => {
                        return (
                            <div key={nav.href}>
                                <NavLink
                                    key={nav.label} to={nav.href}
                                    className={({ isActive }) => `px-2 hover:text-neutral-50 ${isActive && "text-neutral-50"}`}
                                >
                                    {nav.label}
                                </NavLink>
                            </div>
                        )
                    })}
                </div>

                <div className="ms-auto flex items-center space-x-4">
                    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
                        <input
                            type="search"
                            placeholder="Search here ..."
                            className="bg-transparent px-4 py-1 outline-none border border-white focus:ring-2 focus:ring-neutral-200 rounded-md hidden lg:block"
                            onChange={(e) => setSearchInput(e.target.value)}
                            value={searchInput}
                        />
                        <button className="text-2xl text-white cursor-pointer">
                            <CiSearch />
                        </button>
                    </form>
                    <div className="active:scale-50 transition-all">
                        <img src={userIcon} alt="user icon" className="w-10 h-10 rounded-full cursor-pointer" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
