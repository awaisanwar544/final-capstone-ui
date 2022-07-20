import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { getProviders } from '../redux/reducers/providers';

function ProviderDetails() {
  const dispatch = useDispatch();
  const providers = useSelector((state) => state.providers);
  const { id } = useParams();
  const provider = providers.filter((item) => item.id === Number(id))[0];
  useEffect(() => {
    if (providers.length === 0) {
      dispatch(getProviders());
    }
  }, []);
  return (
    <div className="max-w-full">
      {provider
        ? (
          <div
            className="flex flex-col md:flex-row md:w-full overflow:hidden jusitify-center content-center items-center"
          >
            <div className="flex md:w-3/5 w-full px-10">
              <img className="object-cover bg-custom-green-500" src={provider.image} alt="Person" />
            </div>
            <div className="flex flex-col md:w-2/5 w-full px-10">
              <div className="flex flex-col w-full pb-12">
                <h1 className="text-4xl font-bold text-custom-green-500 self-end">
                  {provider.name}
                </h1>
                <p className="text-sm font-bold text-custom-grey-500 self-end">{provider.bio}</p>
              </div>
              <div className="overflow-y-scroll max-h-60">
                {provider.skills.map((skill) => <p key={skill.id} className="p-2 bg-custom-white-500 odd:bg-gray-200">{skill.name}</p>)}
              </div>
              <div className="flex justify-between text-lg font-bold text-custom-grey-500 mt-6">
                <p>Cost per Day:</p>
                <p>{`$ ${provider.cost}0`}</p>
              </div>
              <div className="flex my-12 self-end">
                <Link to={`/${id}/reserve-developer`} state={provider} exact="true" className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-green-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none">
                  Book Developer
                </Link>
              </div>
            </div>
          </div>
        ) : 'Wait a moment while we fetch data'}
    </div>
  );
}

export default ProviderDetails;
