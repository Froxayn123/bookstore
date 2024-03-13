const Spinner = () => {
  const skeletonCard = [];
  for (let i = 0; i < 6; i++) {
    skeletonCard.push(
      <div className="w-[350px] p-4 m-4 flex flex-col space-y-4 border-2 rounded-lg relative border-blue-600">
        <div className="animate-pulse flex flex-col space-x-4 space-y-4">
          <div className="m-2 flex items-center space-x-8">
            <div className="p-2 px-24 rounded bg-slate-700"></div>
            <div className="p-4 px-8 absolute end-0 top-0 rounded-md bg-slate-700"></div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-x-2">
              <div className="p-4 rounded-full bg-slate-700"></div>
              <div className="p-2 px-12 rounded bg-slate-700"></div>
            </div>
            <div className="flex justify-start items-center gap-x-2">
              <div className="p-4 rounded-full bg-slate-700"></div>
              <div className="p-2 px-12 rounded bg-slate-700"></div>
            </div>
          </div>
          <div className="flex justify-evenly items-center">
            <div>
              <div className="p-4 rounded-full bg-slate-700"></div>
            </div>
            <div>
              <div className="p-4 rounded-full bg-slate-700"></div>
            </div>
            <div>
              <div className="p-4 rounded-full bg-slate-700"></div>
            </div>
            <div>
              <div className="p-4 rounded-full bg-slate-700"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">{skeletonCard}</div>
    </>
  );
};

export default Spinner;
