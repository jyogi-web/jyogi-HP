import ProjectCard from './ProjectCard';
import '../styles/MemberProject.css'
import FITTyping from '/imgs/MemberProjectImage/FIT-typing.png';
import Shateki60s from '/imgs/MemberProjectImage/shateki60s.png';
import RiajuuKickaway from '/imgs/MemberProjectImage/riajuu_kickaway.png';


const projects = [
  {
    title: '射的60s',
    author: 'Rita',
    technologies: ['Unity', 'C#'],
    link: 'https://unityroom.com/games/shootinggallery60s',
    image: Shateki60s
  },
  {
    title: 'FIT-typing',
    author: 'Rita',
    technologies: ['Unity','C#', 'Illustrator'],
    link: 'https://unityroom.com/games/fit-typing',
    image: FITTyping 
  },
  {
    title: 'リア充なんか蹴っ飛ばせ',
    author: 'Rita',
    technologies: ['Unity', 'C#','???'],
    link: 'https://unityroom.com/games/riajuu_kickaway',
    image: RiajuuKickaway
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
