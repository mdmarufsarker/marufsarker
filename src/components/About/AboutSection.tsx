import SectionTitle from "@/components/SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { maruf1, maruf2, maruf3 } from "/public/"

interface DataTypes {
  id: number;
  name: string;
}

const skills: DataTypes[] = [
  {
    id: 1,
    name: "Reactjs",
  },
  {
    id: 2,
    name: "Nextjs",
  },
  {
    id: 3,
    name: "Svelte",
  },
  {
    id: 4,
    name: "Nodejs",
  },
  {
    id: 5,
    name: "Expressjs",
  },
  {
    id: 6,
    name: "MongoDB",
  },
  {
    id: 7,
    name: "Tailwindcss",
  },
  {
    id: 8,
    name: "C++",
  },
  {
    id: 9,
    name: "Python",
  },
  {
    id: 10,
    name: "Java",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle titleNo="01" title="About Me" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Md. Maruf Sarker and I am experienced in building{" "}
            <span className="text-textGreen">MERN / Nextjs / Svelte</span>{" "}
            websites with full responsiveness, maintaining all the following
            parts like User-friendly,maintainability code, etc. Passionate about
            learning new technologies.
          </p>
          <p>
            I am also a competitive programmer and I love to solve problems. I
            am a <span className="text-textGreen">2 star</span> coder on
            Codechef and <span className="text-textGreen">Gray Coder</span> on
            Codeforces.
          </p>
          <p>
            I am also a content creator. I love to share my knowledge with
            others. I have a youtube channel named{" "}
            <span className="text-textGreen">Maruf Sarker</span> where I share
            my knowledge about programming. I also make problem solving videos
            for <span className="text-textGreen">Beecrowd</span>(Brazilian
            Competitive Programming Community).
          </p>
          <ul className="max-w-[450px] text-sm font-heading grid grid-cols-2 py-4 gap-2">
            {
                skills.map((skill) => {
                    return (
                        <li key={skill.id}>
                            <AiFillThunderbolt className="inline-block mr-2 text-textGreen" />
                            <span>{skill.name}</span>
                        </li>
                    )
                })
            }
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
            <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
                <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                    <Image src={maruf2} className="rounded-lg h-full hover:sc" alt="" />
                    <div className="hidden lgl:inline-block absolute w-full h-80 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                </div>
            </div>
            <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
}
