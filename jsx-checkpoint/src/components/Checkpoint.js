import srcImg from '../sourceImg.png';
import ReactPlayer from 'react-player';
import theVideo from '../30-Seconds .mp4'

const Checkpoint = () => {
  const div1Style = {
    border: 'solid 2px blue',
    maxWidth: '100vw',
  };
  const videoStyle = {
    margin :'10px',
    width: '360px',
    height: '240px',
    border: 'solid 2px black',
  };
  return (
    <div>
      <div style={div1Style}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={srcImg} alt="source img" />
        <br />
        <img
          src={process.env.PUBLIC_URL + './publicImg.png'}
          alt="public img"
        />
      </div>

      <video controls style={videoStyle}>
        <source src={theVideo} />
      </video>
      <div>
        <ReactPlayer url="https://www.youtube.com/watch?v=7fPXI_MnBOY" />
      </div>
    </div>
  );
};

export default Checkpoint;
