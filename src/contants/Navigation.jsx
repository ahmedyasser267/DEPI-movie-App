import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiMoviePlay } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

export const navigation = [
    {
        label: "TV Shows",
        href: "tv",
        icon: <PiTelevisionFill />
    },
    {
        label: "Movie",
        href: "movie",
        icon: <BiMoviePlay />
    }
];

export const mobileNavigation = [
    {
        label: "Home",
        href: "/",
        icon: <MdHomeFilled />
    },
    ...navigation,
    {
        label: "search",
        href: "/search",
        icon: <CiSearch />
    }
]
