function Reservation() {
  return (
    <div className="flex justify-around mt-8 shadow-lg w-3/4 border-4 border-transparent hover:border-red-500 hover:rounded-md hover:shadow-2xl hover:scale-105">
      <div>
        <img className="w-20 h-20 m-auto object-contain rounded-full bg-custom-green-500" src="https://w7.pngwing.com/pngs/905/43/png-transparent-management-professional-sales-business-service-lawyer-company-service-people-thumbnail.png" alt="Person" />
      </div>
      <div className="text-center">
        <p>You reserved Person</p>
        <p>From date to date</p>
        <p className="flex justify-around">
          Total cost:
          <b>$1</b>
        </p>
        <p className="text-custom-grey-500">(reserved on date)</p>
      </div>
    </div>
  );
}

export default Reservation;
