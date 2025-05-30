import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

export default function Details() {
 
  function handleClick(link: string) {
    return (
    window.open(link)
    )
  }

  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Annieeeee11",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/vaanya-g-165b33278/",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/_lazy_annie_",
    },
  ];
  
    const name = "Vaanya Goel";

    const display = "I copy websites from figma";

    const timeline = [

        {
          year: "2025",
          role: "Frontend Developer Intern",
          company: "Amazure",
          description: "Working with Reactjs to enhance the web application"
        }
      ]

    const projects = [
        {
          name: "Project",
          description: "Coming Soon..",
          tech: "Reactjs, tailwindcss, typescript",
          year: "2024",
          link: "https://github.com/Annieeeee11" 
        },
        {
            name: "Project",
            description: "Coming Soon..",
            tech: "Reactjs, tailwindcss, typescript",
            year: "2024",
            link: "https://github.com/Annieeeee11"
          },
          {
            name: "Project",
            description: "Coming Soon..",
            tech: "Nextjs, tailwindcss, typescript",
            year: "2024",
            link: "https://github.com/Annieeeee11"
          },
          {
            name: "Project",
            description: "Coming Soon..",
            tech: "Nextjs, tailwindcss, typescript",
            year: "2024",
            link: "https://github.com/Annieeeee11"
          },
      ]

      return {
        handleClick,
        links,
        name,
        display,
        timeline,
        projects
      }
}