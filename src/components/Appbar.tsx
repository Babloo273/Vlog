import { Link } from "react-router-dom"
import { Avatar } from "./BlogCards"

export const Appbar = () => {
    return <div className="flex justify-between px-6 py-4 border-b border-slate-200">
        <div>
            Medium
        </div>
        <div className="flex" >
            <Link to={"/publish"} className="mr-2">
            <button type="button" className="cursor-pointer text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-sm rounded-full text-sm px-4 py-1.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">New</button>
            </Link>
            <div>
            <Avatar name="Peter"/>
            </div>
        </div>
    </div>
}