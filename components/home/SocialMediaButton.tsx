
import Image from "next/image"
import Link_img from '../../public/icon/icon-link.png'

interface SocialMediaButtonProps {
  icon: string;
  text: string;
}

export default function SocialMediaButton({ icon, text }: SocialMediaButtonProps) {
  return (
    <section className="rounded-md bg-gray-900 flex flex-row gap-2 p-2" >
      <Image className="" width="24" height="24" src={icon} alt={text}/>
      <span  className="text-white">{text}</span>
      <Image className="" width="24" height="24" src={Link_img} alt="external-link"/>
    </section>
  )
}
