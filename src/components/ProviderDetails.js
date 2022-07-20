import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <>
      {provider
        ? (
          <motion.div
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            initial={{ x: '100%', opacity: 0, rotate: 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row w-full h-1/3 jusitify-center content-center items-center"
          >
            <div className="felx md:w-3/5 w-full px-20">
              <img className="object-cover bg-custom-green-500" src={provider.image} alt="Person" />
            </div>
            <div className="flex flex-col md:w-2/5 w-full px-20">
              <div className="flex flex-col w-full pb-12">
                <h1 className="text-4xl font-bold text-custom-green-500 self-end">
                  {provider.name}
                </h1>
                <p className="text-sm font-bold text-custom-grey-500 self-end text-right">{provider.bio}</p>
              </div>
              <div className="overflow-y-scroll max-h-60">
                {provider.skills.map((skill) => <p key={skill.id} className="p-2 bg-custom-white-500 odd:bg-gray-200">{skill.name}</p>)}
              </div>
              <div className="flex justify-between text-lg font-bold text-custom-grey-500 mt-6">
                <p>Cost per Day:</p>
                <p>{`$ ${provider.cost}`}</p>
              </div>
              <div className="flex my-12 self-end">
                <Link to={`/${id}/reserve-developer`} state={provider} exact="true" className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-green-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none">
                  Book Developer
                </Link>
              </div>
            </div>
          </motion.div>
        ) : 'Wait a moment while we fetch data'}
    </>
  );
}

export default ProviderDetails;
