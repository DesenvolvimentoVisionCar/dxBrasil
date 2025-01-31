
const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "border-b-2 rounded-md p-1 border-[#c4ff3bcd]"
    : "text-stone-400";
  return (
    <span onClick={selectTab} className="flex justify-between items-center">
      <p className={` mr-2 md:mr-4  ${buttonClasses}`}>
        {children}
      </p>
    </span>
  );
};

export default TabButton;
