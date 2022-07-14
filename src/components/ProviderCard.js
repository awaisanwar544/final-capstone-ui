import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faGithub, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

function ProviderCard() {
  const id = 1;
  return (
    <div className="flex flex-col mx-6 bg-custom-white-500">
      <div className="item w-auto h-40">
        <img className="w-40 h-40 m-auto object-contain rounded-full bg-custom-green-500" src="https://w7.pngwing.com/pngs/905/43/png-transparent-management-professional-sales-business-service-lawyer-company-service-people-thumbnail.png" alt="Person" />
      </div>
      <div className="item w-auto h-28 text-center flex flex-col justify-around">
        <h3>Person</h3>
        <span className="text-custom-grey-500 select-none">..................</span>
        <p className="text-custom-grey-500">People that something</p>
      </div>
      <Link
        exact
        to={`/developer/${id}`}
        className="text-custom-grey-500 text-center hover:text-custom-green-500 font-bold m-4"
      >
        <p>See Details</p>
      </Link>
      <div className="item w-auto h-12">
        <ul className="flex w-52 justify-around">
          <li>
            <a href="https://github.com/Kakalanp" without rel="noreferrer" target="_blank">
              <FontAwesomeIcon className="text-custom-grey-500 text-xl hover:text-custom-green-500" icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/joaquin-garrido-lecca-zanetti/" without rel="noreferrer" target="_blank">
              <FontAwesomeIcon className="text-custom-grey-500 text-xl hover:text-custom-green-500" icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/LeccaJoaquin" without rel="noreferrer" target="_blank">
              <FontAwesomeIcon className="text-custom-gray-500 text-xl hover:text-custom-green-500" icon={faTwitter} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProviderCard;
