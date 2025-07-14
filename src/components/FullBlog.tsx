import type { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCards"

export const FullBlog = ({ blog }: {blog: Blog}) => {
    return<div>
        <Appbar/>
    <div className="grid grid-cols-12 px-10 pt-10 max-w-screen-xl flex justify-center">
        <div className="col-span-8 ">
         <div className="  text-5xl font-bold">
            {blog.title}
         </div>
         <div className="text-slate-500">
            2 December 2007
         </div>
         <div className=" text-lg font-normal">
            {blog.content}
         </div>
         </div>
         <div className="col-span-4  ">
            <div className="ml-5">
                Author
            </div>
            <div className="flex mt-4">
                <div className="mr-4 mt-2 ">
                <Avatar name="Andaconda"/>
                </div >
                <div className="">
                    <div className="text-xl font-semibold">
                        {/* {blog.author.name} */}
                        Andaconda
                    </div>
                    <div className="text-slate-400">
                        master of meirth
                    </div>
                </div>
            </div>
         </div>
    </div>
    </div>
    
}