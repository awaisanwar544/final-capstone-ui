import PropTypes from 'prop-types';

function Reservation({ reservationData }) {
  return (
    <div className="flex justify-around mt-8 shadow-lg w-3/4 border-4 border-transparent hover:shadow-2xl transition hover:scale-110 duration:300ms">
      <div>
        <img className="w-20 h-20 m-auto object-contain rounded-full bg-custom-green-500" src={reservationData.provider_image} alt={reservationData.provider_name} />
      </div>
      <div className="flex items-center">
        <div className="text-center">
          <p className="flex justify-around">
            You reserved:
            <b>{reservationData.provider_name}</b>
          </p>
          <p>
            {`From ${new Date(reservationData.start_date).toLocaleDateString('en-US', { month: 'long' })} ${reservationData.start_date.split('').splice(8, 9).join('')}
               to ${new Date(reservationData.end_date).toLocaleDateString('en-US', { month: 'long' })} ${reservationData.end_date.split('').splice(8, 9).join('')}`}
          </p>
          <p className="flex justify-around">
            Total cost:
            <b>{reservationData.total_cost}</b>
          </p>
          <p className="text-custom-grey-500">{`(Reserved on ${reservationData.created_at.slice(0, 10).split('-').reverse().join(' / ')})`}</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-red-500 hover:text-white hover:border-red-500 font-bold py-2 px-4 rounded focus:outline-none" type="button">
          Delete
        </button>
      </div>
    </div>
  );
}

Reservation.propTypes = {
  reservationData: PropTypes.shape({
    id: PropTypes.number,
    provider_id: PropTypes.number,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    total_cost: PropTypes.string,
    created_at: PropTypes.string,
    provider_name: PropTypes.string,
    provider_image: PropTypes.string,
  }).isRequired,
};

export default Reservation;
