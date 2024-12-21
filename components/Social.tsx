import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaDiscord} from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";

const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/aakashsaini09'},
    {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/-aakashsaini'},
    {icon: <FaDiscord/>, path: 'https://discordapp.com/users/1243529310351130704'},
    {icon: <FaSquareXTwitter/>, path: 'https://x.com/__aakashsaini'},
]
const Social = ({containerStyles, iconStyles}: any) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
            <Link key={index} className={iconStyles} href={item.path} target="_blank">
                {item.icon}
            </Link>
        )
      })}
    </div>
  )
}

export default Social
