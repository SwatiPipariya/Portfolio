
import React from "react";
// import {React, useEffect ,useState} from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import { useClient } from "next/client";
  //       const response = await axios.get('https://api.github.com/users/SwatiPipariya/contributions');

// import axios from "axios";
const AboutDetails = () => {
  useClient();
  const [state, setState] = React.useState(null);

  //       const response = await axios.get('https://api.github.com/users/SwatiPipariya/contributions');
  const [streak, setStreak] = useState(null);

  React.useEffect(() => {
    const fetchStreak = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/SwatiPipariya/events');
        const { streak } = response.data;
        setStreak(streak);
      } catch (error) {
        console.error('Error fetching streak:', error);
      }
    };

    fetchStreak();

    // Polling every 10 minutes to update streak
    const interval = setInterval(fetchStreak, 600000);

    return () => clearInterval(interval);
  }, []);





  const calculateStreak = (contributions) => {
    // Your logic to calculate streak from contributions data
    // Example: Check consecutive days with contributions
    let streak = 0;
    for (let i = 0; i < contributions.length; i++) {
      if (contributions[i].count > 0) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  };

  return (
    <section className="py-15 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-13 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Full Stack Web Developer
          </h2>
          {/* <h2>Current Streak: {streak}</h2> */}
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            Dedicated and Passionate software developer proficient in HTML, CSS, JavaScript, React.js,
            Node.js, Express.js, MongoDB, Java, Hibernate, and MySQL. Skilled in crafting
            dynamic user interfaces and building robust backend systems. Passionate about
            solving complex problems with clean, maintainable code. Eager to contribute expertise
            to innovative projects and continuously expand skill set in a collaborative work environment.
            I approach each project with enthusiasm, creativity, and attention to detail, striving to
            deliver high-quality solutions that exceed expectations. As a collaborative team member, I
            enjoy sharing my knowledge and learning from others to achieve collective success in every endeavor.
          </p>
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
          {streak}
          </h2>
        </ItemLayout>

        {/* ****************Language progress bars**************** */}

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Portfolio"
            loading="lazy"
          /> 
      
          
         
        </ItemLayout>

         {/* ****************Git Status******************* */}
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

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=c,cpp,html,css,js,bootstrap,react,npm,nodejs,express,mongodb,java,hibernate,mysql,git,github,netlify,tailwind,materialui,vscode,eclipse,maven`}
            alt="Portfolio"
            loading="lazy"
          />
        </ItemLayout>
          {/* ****************Github streak*********** */}
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          {/* <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=Swati%20Pipariya&theme=dark&hide_border=true&background=EB545400&ring=FFE40C&currStreakLabel=E0EB09" alt="GitHub Streak" 
            alt="Portfolio"
            loading="lazy"
          /> */}

        </ItemLayout>
        
        {/* <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=codebucks27&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout> */}

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/codebucks27/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=codebucks27&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="Portfolio"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
