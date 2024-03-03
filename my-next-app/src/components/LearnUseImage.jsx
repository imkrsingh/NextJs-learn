import Image from "next/image"
import MyImage from '../../public/images/peaceful_place.jpg'

const LearnUseImage = () => {
  return (
    <>
    <Image src={MyImage} alt="errorimage not found" width={900} height={300}/>

    <iframe
  src="https://www.youtube.com/embed/PHvw0IP7dEU?autoplay=1"
  title="YouTube Video"
  allowFullScreen
  width="560"
  height="315"
  style={{ padding: '20px' }}
/>

    </>
  )
}

export default LearnUseImage
