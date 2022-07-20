function DeletePopup() {
  function deleteHandle() {
    document.getElementById('delete-popup').remove();
  }

  return (
    <div
      id="delete-popup"
      className="flex justify-around bg-custom-white-500 z-100 items-center mt-[50%] py-4 shadow-lg w-3/4 border-2 border-transparent hover:border-custom-green-500 hover:rounded-md hover:shadow-2xl absolute"
    >
      <div className="item w-auto h-20">
        <h1>
          Are you sure you want to delete a?
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-red-500 hover:text-white hover:border-red-500 font-bold py-2 px-4 rounded focus:outline-none" type="button" onClick={deleteHandle}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeletePopup;
