import React from 'react';
import ReactPlayer from 'react-player';
import ReactTooltip from 'react-tooltip';

import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function FilmTrailer({ trailer }) {
  return (
    <div className="film-trailer">
      <div className="video">
        <ReactPlayer
          url={trailer}
          controls={true}
          // light={true}
          pip={true}
          width="98%"
          height="80vh"
        />
      </div>
      <div className="link" data-tip="Go Home">
        <ReactTooltip />
        <Link to="/">
          <button className="btn-link">
            <FaHome />
          </button>
        </Link>

      </div>
    </div>
  );
}

export default FilmTrailer;
