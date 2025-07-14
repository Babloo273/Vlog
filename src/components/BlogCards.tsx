import { Link } from "react-router-dom";

interface BlogCardsprop {
    authorName: string;
    title: string;
    content: string;
    publishDate: string;
    id: number;
}

export const BlogCards = ({
    id,
    authorName,
    title,
    content,
    publishDate
}:BlogCardsprop)=>{
    return <Link to={`/blog/${id}`}>
    <div className="border-b border-slate-200 mt-2 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            <div className="flex justify-center" ><Avatar  name={authorName} /></div> <div className="flex justify-center ml-2 mt-1 text-xl">{authorName}</div> <div className="mt-4 ml-2 "><Circle/></div> <div className="flex justify-center ml-2 mt-1  text-slate-500">{publishDate}</div>
        </div>
        <div className="text-2xl font-bold">
            {title}
        </div>
        <div className="text-lg font-normal">
            {content.slice(0,100)+"..."}
        </div>
        <div className="text-sm mt-4 font-thin text-slate-400 ">
            {`${Math.ceil(content.length)/100} min read`}
        </div>
    </div>
    </Link>
}

 export function Avatar ({name}: {name:string}) {
    
 return <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>

}


function Circle () {
    return <div className="w-1 h-1 bg-slate-400 rounded-full">

    </div>
}