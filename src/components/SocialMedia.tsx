import { AiFillYoutube, AiOutlineGithub } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn, FaMedium } from "react-icons/fa";

interface DataTypes {
  id: number;
  icon: JSX.Element;
  link: string;
}

const socialMedia: DataTypes[] = [
  {
    id: 1,
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/@CPSAcademy",
  },
  {
    id: 2,
    icon: <FaFacebook />,
    link: "https://www.facebook.com/groups/456778342598121",
  },
  {
    id: 3,
    icon: <FaMedium />,
    link: "https://medium.com/@shahriar76/",
  },
  {
    id: 4,
    icon: <AiOutlineGithub />,
    link: "https://github.com/MuhammadShahriar",
  },
  {
    id: 5,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/muhammad-shahriar/",
  },
];

export default function SocialMedia() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        {socialMedia.map(({ id, icon, link }) => {
          return (
            <a href={link} key={id} target="_blank">
              <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-Green cursor-pointer hover:-translate-y-2 transition-all duration-300">
                {icon}
              </span>
            </a>
          );
        })}
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
}
