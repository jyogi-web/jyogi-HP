import { Box, SimpleGrid, Container, Heading } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "射的60s",
    author: "Rita",
    date: "2023/10/01",
    technologies: ["Unity", "C#"],
    youtubeUrl: "https://youtu.be/V33WS5e4fNQ",
    description:
      "60秒間で的を撃ち、高得点を目指すゲームです。プレイヤーは制限時間内にできるだけ多くの的を撃ち、ハイスコアを目指します。的の種類によって得点が異なり、動く的はより高得点になっています。",
    deployLink: "https://unityroom.com/games/shootinggallery60s",
    githubLink: null,
    articleLink: null,
  },
  {
    title: "FIT-typing",
    author: "Rita",
    date: "2023/10/05",
    technologies: ["Unity", "C#", "Illustrator"],
    youtubeUrl: "https://youtu.be/V33WS5e4fNQ",
    description:
      "タイピングゲームです。FITの授業や活動に関連した単語を素早くタイプして、スコアを競います。",
    deployLink: "https://unityroom.com/games/fit-typing",
    githubLink: null,
    articleLink: null,
  },
  {
    title: "リア充なんか蹴っ飛ばせ",
    author: "Rita",
    date: "2024/03/06",
    technologies: ["Unity", "C#"],
    youtubeUrl: "https://www.youtube.com/watch?v=nY8PTTqP7kc&list=PLxw0gD-pIxZfvlgVJBUwSeMR5snLB64y9&index=1",
    description:
      "リア充キャラクターを蹴っ飛ばして距離を競うゲームです。パワーとアングルを調整して、できるだけ遠くまで飛ばしましょう。",
    deployLink: "https://unityroom.com/games/riajuu_kickaway",
    githubLink: null,
    articleLink: null,
  },
  { 
    title: 'いきのこれ！クリオネちゃん',
    author: 'KOU',
    date: '2024/03/05',
    technologies: ['Unity', 'C#'],
    youtubeUrl: 'https://youtu.be/3zPkiYSZhNQ',
    description: 'クリオネちゃんが死なないように柱を避けよう',
    deployLink: 'https://unityroom.com/games/ikinokore_clionetyan',
    githubLink: 'https://github.com/KOU050223/IkinokoreClionetyan',
    articleLink: null
  },
  { 
    title: 'ウイルスバスター',
    author: 'KOU',
    date: '2024/02/15', // yyyy/mm/dd
    technologies: ['Unity', 'C#'],
    youtubeUrl: 'https://youtu.be/Qjna5JKj6jE',
    description: '社内に発生したウイルスを物理で解決しよう！',
    deployLink: 'https://unityroom.com/games/virus_buster_in_physics',
    githubLink: 'https://github.com/KOU050223/VirusBuster',
    articleLink: null
  },
  { 
    title: '人から作る？！錬金クッキング',
    author: 'KOU,Gtpsophila,ふぁいんまん,佐野',
    date: '2024/08/22', // yyyy/mm/dd
    technologies: ['Unity', 'C#'],
    youtubeUrl: 'https://youtu.be/c4NNEa8x54E',
    description: '第２回福岡学生ゲームジャムにて作成→人体錬成をしよう！？→人材・食材を集めよう→料理を作ろう！',
    deployLink: 'https://unityroom.com/games/gamejam_2024_08_22_01',
    githubLink: null,
    articleLink: null
  },
  { 
    title: '',
    author: '',
    date: '', // yyyy/mm/dd
    technologies: ['', ''],
    youtubeUrl: 'https://youtu.be/XXXXXXXXXXXX',
    description: 'プロジェクトの説明文をここに入力します。',
    deployLink: 'https://unityroom.com/games/○○',
    githubLink: 'https://github.com/username/repository',
    articleLink: 'https://example.com/article'
  },
  // 他のプロジェクトもここに追加できます
  /*
  { 
    title: '',
    author: '',
    date: '', // yyyy/mm/dd
    technologies: ['', ''],
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
    <Container maxW="container.xl" py={10}>
      <Heading as="h2" size="xl" mb={8} textAlign="center">
        部員制作作品
      </Heading>
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 3 }}
        spacing={10}
        justifyItems="center"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            author={project.author}
            date={project.date}
            technologies={project.technologies}
            youtubeUrl={project.youtubeUrl}
            description={project.description}
            deployLink={project.deployLink}
            githubLink={project.githubLink}
            articleLink={project.articleLink}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default MemberProject;
