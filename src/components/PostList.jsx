import PostView from "./PostView"
import { useLoaderData } from "react-router-dom"

const PostList = () => {
  const postList = useLoaderData();

  return <>
    {postList.length === 0 && <center>Welcome there is no Post</center>}
    {
      postList.map((i) => (<PostView key={i.id} postData={i} />))
    }

  </>

}
export default PostList;

export const postLoader = () => {
  return fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((x) => {
      console.log(x.posts)
      return x.posts
    }).catch(() => {
      return 'error'
    })

}

