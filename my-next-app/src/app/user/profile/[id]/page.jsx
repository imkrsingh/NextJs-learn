
const MyProfile = ({params}) => {
     console.log(params) //These will be visible only in the terminal as they are server components.
  return (
    <div>
    <h1>My Profile {params.id}</h1>  
    </div>
  )
}

export default MyProfile
