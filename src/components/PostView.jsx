import { SlLike } from "react-icons/sl";
import { AiOutlineDislike } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostListContext } from "../store/PostListContext";
const PostView = ({ postData }) => {

  const { deletePost } = useContext(PostListContext)
  return (
    <div className="card postStructure">
      <div className="card-body">
        <h5 className="card-title">{postData.title}</h5>
        <p className="card-text">{postData.body}</p>

        <button type="button" className="btn btn-primary">
          <SlLike /> <span className="badge bg-secondary">{postData.reactions.likes}</span>
        </button>
        <button type="button" className="btn btn-primary">
          <AiOutlineDislike /> <span className="badge bg-secondary">{postData.reactions.dislikes}</span>
        </button>

        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => { deletePost(postData.id) }}>
          <MdDelete />
        </span>
      </div>
    </div>
  )
}
export default PostView;