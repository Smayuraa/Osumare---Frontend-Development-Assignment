import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import twitchLogo from '../assets/twitch.png';

const SocialIcons = () => {
  const iconStyle = { color: '#6c638c', fontSize: '1.8rem', fontWeight: 600 };
  const textStyle = { color: '#6c638c', fontWeight: 500 };

  return (
    <div className="container py-4" style={{ backgroundColor: "#f8f8fc" }}>
      <div className="row justify-content-center text-center align-items-center">
        <div className="col-2">
          <i className="fab fa-google" style={iconStyle}></i>
          <p style={textStyle}>Google</p>
        </div>
        <div className="col-2">
          <i className="fab fa-facebook" style={iconStyle}></i>
          <p style={textStyle}>Facebook</p>
        </div>
        <div className="col-2">
          <i className="fab fa-youtube" style={iconStyle}></i>
          <p style={textStyle}>YouTube</p>
        </div>
        <div className="col-2">
          <i className="fab fa-pinterest" style={iconStyle}></i>
          <p style={textStyle}>Pinterest</p>
        </div>
        <div className="col-2">
          <img src={twitchLogo} alt="Twitch" style={{ height: '45px', width: '100px' }} />
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
