import { Post } from "contentlayer/generated";

export default function BlogPostCard(post: Post){
    return (
        <div className="hover:scale-110 flex flex-col border-2 border-black rounded w-1/4 p-4">
            <div className="flex flex-row justify-between">
                <p className="truncate">{post.title}</p><a href={post.url}>➜</a>
            </div>
        </div>
    )
}