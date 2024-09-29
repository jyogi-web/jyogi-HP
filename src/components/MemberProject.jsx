import ProjectCard from './ProjectCard';
import '../styles/MemberProject.css'


const projects = [
  {
    title: '射的60s',
    author: 'Rita',
    technologies: ['Unity', 'C#'],
    link: 'https://unityroom.com/games/shootinggallery60s',
    image: 'img/MemberProjectImage/shateki60s.png'
  },
  {
    title: 'FIT-typing',
    author: 'Rita',
    technologies: ['Unity','C#', 'Illustrator'],
    link: 'https://unityroom.com/games/fit-typing',
    image: 'img/MemberProjectImage/FIT-typing.png'
  },
  {
    title: 'リア充なんか蹴っ飛ばせ',
    author: 'Rita',
    technologies: ['Unity', 'C#','???'],
    link: 'https://unityroom.com/games/riajuu_kickaway',
    image: 'img/MemberProjectImage/riajuu_kickaway.png'
  },
  {
    title: 'FIT-typing',
    author: 'Rita',
    technologies: ['Unity','C#', 'Illustrator'],
    link: 'https://unityroom.com/games/fit-typing',
    image: 'img/MemberProjectImage/FIT-typing.png'
  },
  // 他のプロジェクトもここに追加できます
  /*
  {
    title: '○○',
    author: '○○',
    technologies: ['Unity','C#', '○○'],
    link: 'https://unityroom.com/games/○○',
    image: 'img/MemberProjectImage/○○.png'
  },
  */
];

const MemberProject = () => {
  return (
    <div className="member-projects">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          author={project.author}
          technologies={project.technologies}
          link={project.link}
          image={project.image}
        />
      ))}

      
    </div>
  );
};

export default MemberProject;
