async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")

    return res.json()
}

const LearnDataFetching = async() => {
    const data = await getData()
    console.log("Data:",data);
  return (
    <>
      <h1>Learn Data Fetching</h1>

       {
        data.map((post, i)=>(
            <div key={i}>
                <h6>{post.title}</h6>
                <hr/>
                <p>{post.body}</p>
            </div>
        ))
       }
    </>
  )
}

export default LearnDataFetching
