import ProjectCard from '../components/ProjectCard';
import '../styles/MemberProject.css';

const projects = [
  {
    title: '射的60s',
    author: 'Rita',
    technologies: ['Unity', 'C#'],
    youtubeUrl: 'https://youtu.be/V33WS5e4fNQ',
    description: '60秒間で的を撃ち、高得点を目指すゲームです。プレイヤーは制限時間内にできるだけ多くの的を撃ち、ハイスコアを目指します。的の種類によって得点が異なり、動く的はより高得点になっています。',
    deployLink: 'https://unityroom.com/games/shootinggallery60s',
    githubLink: null,
    articleLink: null
  },
  {
    title: 'FIT-typing',
    author: 'Rita',
    technologies: ['Unity', 'C#', 'Illustrator'],
    youtubeUrl: 'https://youtu.be/dQw4w9WgXcQ', // 例としてのURLです、実際のURLに置き換えてください
    description: 'タイピングゲームです。FITの授業や活動に関連した単語を素早くタイプして、スコアを競います。',
    deployLink: 'https://unityroom.com/games/fit-typing',
    githubLink: null,
    articleLink: null
  },
  {
    title: 'リア充なんか蹴っ飛ばせ',
    author: 'Rita',
    technologies: ['Unity', 'C#'],
    youtubeUrl: 'https://youtu.be/dQw4w9WgXcQ', // 例としてのURLです、実際のURLに置き換えてください
    description: 'リア充キャラクターを蹴っ飛ばして距離を競うゲームです。パワーとアングルを調整して、できるだけ遠くまで飛ばしましょう。',
    deployLink: 'https://unityroom.com/games/riajuu_kickaway',
    githubLink: null,
    articleLink: null
  },
  // 他のプロジェクトもここに追加できます
  /*
  {
    title: '○○',
    author: '○○',
    technologies: ['Unity', 'C#', '○○'],
    youtubeUrl: 'https://youtu.be/XXXXXXXXXXXX',
    description: 'プロジェクトの説明文をここに入力します。',
    deployLink: 'https://unityroom.com/games/○○',
    githubLink: 'https://github.com/username/repository',
    articleLink: 'https://example.com/article'
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
          youtubeUrl={project.youtubeUrl}
          description={project.description}
          deployLink={project.deployLink}
          githubLink={project.githubLink}
          articleLink={project.articleLink}
        />
      ))}
    </div>
  );
};

export default MemberProject;
