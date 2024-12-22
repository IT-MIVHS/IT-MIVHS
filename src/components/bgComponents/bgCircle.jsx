const BackgroundCircle = () => {
  return (
    <>
      {" "}
      <div className="-z-10 ring ring-violet-700 bg-violet-700 rounded-full w-1/4 h-80 fixed -left-52 -top-36 blur-3xl opacity-50 "></div>
      <div className="-z-10 ring ring-indigo-900 bg-pink-800 rounded-full w-1/3 h-96 fixed -right-52 top-36 blur-3xl opacity-20 scale-150"></div>
      <div className="-z-10 ring ring-indigo-900 bg-indigo-900 rounded-full w-1/4 h-80 fixed left-96 bottom-0 blur-3xl opacity-50"></div>
    </>
  );
};

export default BackgroundCircle;
