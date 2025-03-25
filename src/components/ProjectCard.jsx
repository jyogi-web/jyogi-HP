import PropTypes from 'prop-types';
import '../styles/ProjectCard.css';

const ProjectCard = ({ title, author, technologies, youtubeUrl, description, deployLink, githubLink, articleLink }) => {
  // YouTubeのサムネイル画像URLを生成する関数
  const getYoutubeThumbnail = (url) => {
    if (!url) return null;

    // YouTubeのビデオIDを抽出
    const videoId = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);

    if (videoId && videoId[1]) {
      // 高画質サムネイルのURLを返す
      return `https://img.youtube.com/vi/${videoId[1]}/hqdefault.jpg`;
    }

    return null;
  };

  const thumbnailUrl = getYoutubeThumbnail(youtubeUrl);

  return (
    <div className="project-card">
      {thumbnailUrl ? (
        <img src={thumbnailUrl} alt={`${title} thumbnail`} className="project-image" />
      ) : (
        <div className="project-image placeholder">No thumbnail available</div>
      )}

      <h2 className="project-title">{title}</h2>
      <p className="project-author">作成者: {author}</p>
      <p className="project-technologies">使用技術: {technologies.join(', ')}</p>

      {description && (
        <p className="project-description">{description}</p>
      )}

      <div className="project-links">
        {youtubeUrl && (
          <a href={youtubeUrl} className="project-link youtube-link" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        )}

        {deployLink && (
          <a href={deployLink} className="project-link deploy-link" target="_blank" rel="noopener noreferrer">
            作品のリンク
          </a>
        )}

        {githubLink && (
          <a href={githubLink} className="project-link github-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}

        {articleLink && (
          <a href={articleLink} className="project-link article-link" target="_blank" rel="noopener noreferrer">
            記事
          </a>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  youtubeUrl: PropTypes.string,
  description: PropTypes.string,
  deployLink: PropTypes.string,
  githubLink: PropTypes.string,
  articleLink: PropTypes.string
};

export default ProjectCard;
