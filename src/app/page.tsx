import Image from 'next/image'
import { allPosts, Post } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import BlogPostCard from '@/components/blogPostCard'

export default function Home() {
  const posts = allPosts.sort((a: Post,b: Post) => compareDesc(new Date(a.date), new Date(b.date)))
  return (
    <div className='main'>
      <h1 className="text-3xl font-sans font-bold">Hi I&apos;m Levi 👋</h1>
      <p className="text-lg font-semibold">I&apos;m a Full-stack developer</p>
      <p>&nbsp;</p>
      <p>I like to code and keep my stuff minimalistic, here I post about projects and other topics.</p>
      <p>
        I am currently employed as a software consultant <strong>@Elmos N.V</strong> in Mechelen, Belgium.
      </p>
        <p>
          This blog is a place for me to talk about the topics in tech that interest me the most.
          Im also planning on posting here about personal projects I am working on.
        </p>
        <p>&nbsp;</p>
        <h2 className="text-lg font-semibold underline">Posts</h2>
        <p>&nbsp;</p>
        <div className="flex flex-row flex-wrap space-x-3">  
          {posts.map((post: Post,idx) => (
            <BlogPostCard key={idx} {...post} />
          ))}
        </div>
    </div>
  )
}
