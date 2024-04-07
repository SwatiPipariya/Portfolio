import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
 
  return (
    <section className="py-15 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-13 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-amber-200 font-semibold text-xl md:text-2xl text-left w-full capitalize">
            Full Stack Web Developer
          </h2>
          {/* <h2>Current Streak: {streak}</h2> */}
          <p className="font-light  text-xs sm:text-sm md:text-base">
            Dedicated and Passionate software developer proficient in HTML, CSS, JavaScript, React.js,
            Node.js, Express.js, MongoDB, Java, Hibernate, and MySQL. Skilled in crafting
            dynamic user interfaces and building robust backend systems. Passionate about
            solving complex problems with clean, maintainable code. Eager to contribute expertise
            to innovative projects and continuously expand skill set in a collaborative work environment.
            I approach each project with enthusiasm, creativity, and attention to detail, striving to
            deliver high-quality solutions that exceed expectations. As a collaborative team member, I
            enjoy sharing my knowledge and learning from others to achieve collective success in every endeavor.
          </p>
          {/* <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            {streak}
          </h2> */}
        </ItemLayout>

        {/* ****************Language progress bars**************** */}

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 "}>
          <div className="col-span-full lg:col-span-13 row-span-2 flex-col items-start ">
            <div className="">
            <p className="text-amber-200 text-2xl font-semibold pb-3 pt-0">Contact Information</p>
            </div>
          <div className="">
            <span className="text-amber-200 font-bold">Name: </span>
            <span>Swati Pipariya</span>
          </div>
          <div className="py-2">
            <span className="text-amber-200 font-bold">Profile: </span>
            <span>Full Stack Developer</span>
          </div>
          <div className="">
            <span className="text-amber-200 font-bold">Email: </span>
            <span>swati.pipariya6171@gmail.com</span>
          </div>
          <div className="py-2">
            <span className="text-amber-200 font-bold">Phone: </span>
            <span>9340175237</span>
          </div>
          </div>

        </ItemLayout>

        {/*****************Git Status******************* */}
        <ItemLayout
          className={"col-span-full md:col-span-8 !p-0"}
        >

          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=SwatiPipariya&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Portfolio"
            loading="lazy"
          />
        
        </ItemLayout>
      {/* ******************Icons section****************** */}
        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=c,cpp,html,css,js,bootstrap,react,npm,nodejs,express,mongodb,java,hibernate,mysql,git,github,netlify,tailwind,materialui,vscode,eclipse,maven`}
            alt="Portfolio"
            loading="lazy"
          />
        </ItemLayout>
        {/*****************Github streak************/}
        {/* <ItemLayout className={"row-span-3 col-span-full md:col-span-6 !p-0"}> */}
        <ItemLayout
          className={
            "col-span-full lg:col-span-13 row-span-2 flex-col items-start"
          }
        >
          <img
            className="w-2/4 h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=Swati%20Pipariya&theme=dark&hide_border=true&background=EB545400&ring=FFE40C&currStreakLabel=E0EB09" alt="GitHub Streak" 
            loading="lazy"
          />

        </ItemLayout>

        {/* ********************Languages progress bar***************** */}
        {/* <ItemLayout className={"col-span-full md:col-span-4 md:row-span-2 !p-0"} >
        <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Portfolio"
            loading="lazy"
          />
        </ItemLayout> */}
      </div>
    </section>
  );
};

export default AboutDetails;
 