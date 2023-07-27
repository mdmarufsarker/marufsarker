import SectionTitle from "@/components/SectionTitle";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="max-w-containerContent mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle titleNo="02" title="Where I have worked" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li className="border-1-2 border-1-hoverColor bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">
            Stack Learner
          </li>
          <li className="border-1-2 border-1-hoverColor bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">
            Beecrowd
          </li>
          <li className="border-1-2 border-1-hoverColor bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium ">
            CPS Academy
          </li>
        </ul>
      </div>
    </section>
  );
}
