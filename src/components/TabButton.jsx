
const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b rounded-md p-1 border-[#c4ff3bcd]"
    : "text-stone-500";
  return (
    <span onClick={selectTab} className="flex justify-between items-center">
      <p className={`mr-4 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </span>
  );
};

export default TabButton;
