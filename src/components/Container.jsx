const Container = ({ children }) => {
  return (
    // <div className=" px-[2rem] xl:mx-20 md:mx-8 sm:mx-7   mx-auto">
    <div className=" px-[2rem] max-w-screen-xl mx-auto sm:px-[2rem]">
      {children}
    </div>
  );
};

export default Container;
