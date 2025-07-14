import { Appbar } from "../components/Appbar"
import { BlogCards } from "../components/BlogCards"
import { useBlogs } from "../hooks"



export const Blogs = ()=>{
    const {loading,blogs}=useBlogs();

    if(loading){
        return <div className="flex flex-col justify-center">
           <div>loading....</div> 
        </div>
    }

    return <div>
        <Appbar/>
    <div className="flex justify-center ">
    <div className="">
        {blogs.map(blog => <BlogCards
        authorName={blog.author.name || "Ano"}
        title={blog.title}
        content={blog.content}
        publishDate={"June 29,2025"}
        id={blog.id}
        />)}
        
    
    
        {/* <BlogCards
        authorName={"Peter V"}
        title={"How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing"}
        content={"No need to create a fancy and modern website with hundred of pages to make money online.  Making money online is the dream for man"}
        publishDate={"June 29,2025"}
        />
    

        <BlogCards
        authorName={"Peter V"}
        title={"How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing"}
        content={"No need to create a fancy and modern website with hundred of pages to make money online.  Making money online is the dream for man"}
        publishDate={"June 29,2025"}
        /> */}
      </div>
    </div>
    </div>
}