import Link from "next/link"

const LearnLink = () => {
    const id = 5
  return (
    <>
    <Link href="/admin/dashboard"> Go to Admin Dashboard</Link>
    <Link href={`/user/profile/${id}`}> Go to User Profile</Link>
    </>
  )
}

export default LearnLink
