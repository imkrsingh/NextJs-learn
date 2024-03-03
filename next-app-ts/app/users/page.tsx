interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {next: {revalidate: 10}});
  const users: User[] = await res.json();

  return (
    <div>
      <h1> Users List</h1>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <hr/><hr/>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {users.map(user => <tr key={user.id}>
          <th>{user.id}</th>
          <th>{user.name}</th>
          <th>{user.email}</th>
        </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default UsersPage
