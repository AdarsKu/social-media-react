import { Form, redirect } from "react-router-dom";

export default function CreatePost() {

  return (<>
    <Form method="POST" className="form">
      <div className="mb-3 ">
        <label htmlFor="userId" className="form-label">Enter your User ID</label>
        <input type="text" className="form-control"
          placeholder="USER ID" required
          name='userId' />
      </div>

      <div className="mb-3 ">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text" className="form-control"
          placeholder="how are you feeling today..."
          required
          name="title" />
      </div>

      <div className="mb-3 ">
        <label htmlFor="body" className="form-label">Post Content</label>
        <textarea className="form-control"
          placeholder="More about post..."
          name="body" />
      </div>


      <br />
      <div className="mb-3 ">
        <input type="number" className="form-control"
          placeholder="Number of reactions"
          name='reactions' />
      </div>


      <button type="submit" className="btn btn-primary">Post</button>


    </Form>
  </>)
}

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then((i) => {
      console.log(i);
    });

  return redirect('/')
}