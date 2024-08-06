import { createContext, useReducer, useState } from "react";

export const PostListContext = createContext({
  PostList: [],
  addPost: () => { },
  addInitialPost: () => { },
  deletePost: () => { }
})


///////
export const PostListContextProvider = ({ children }) => {

  const [ID, setUniqID] = useState(200)

  const [postList, dispacherFunction] = useReducer(reducerFunction, [])

  const addInitialPost = (postObj) => {

    const newDispatcherObj = {
      type: 'ADD_INITIAL_POST',
      payload: {
        post: postObj
      }
    }
    dispacherFunction(newDispatcherObj)
  }
  const addPost = (userID, title, body, reactions) => {

    const newDispatcherObj = {
      type: 'ADD_POST',
      payload: {
        id: ID,
        reactions,
        title,
        body,
        userID
      }
    }
    setUniqID(i => i + 1)

    dispacherFunction(newDispatcherObj)
  }

  const deletePost = (id) => {
    const newDispatcherObject = {
      type: 'DELETE_POST',
      payload: {
        postId: id
      }
    }
    dispacherFunction(newDispatcherObject)
  }
  return <>
    <PostListContext.Provider value={{
      postList,
      addInitialPost,
      addPost,
      deletePost
    }}>

      {children}

    </PostListContext.Provider>
  </>
}


const reducerFunction = (currList, actionObj) => {

  let newList = []

  if (actionObj.type === 'DELETE_POST') {
    newList = currList.filter((i) => (
      i.id !== actionObj.payload.postId
    ))
  } else if (actionObj.type === 'ADD_INITIAL_POST') {
    newList = [...currList, ...actionObj.payload.post]
  } else if (actionObj.type === 'ADD_POST') {
    newList =
      [...currList, {
        id: actionObj.payload.id,
        reactions: { likes: actionObj.payload.reactions, dislikes: 10 },
        title: actionObj.payload.title,
        body: actionObj.payload.body,
        userID: actionObj.payload.userID
      }]
  }
  return newList
}

