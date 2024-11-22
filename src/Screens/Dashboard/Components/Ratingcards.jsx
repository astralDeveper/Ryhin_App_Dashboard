import { ratingCardsData } from "../../../utils/DummyData";
const Ratingcards = () => {
  
  return (
    <main className="bg-white p-6 rounded-lg ">
      <p className="text-textColor6 text-2xl font-bold mb-4 ml-6 ">Overview</p>
      <div className="flex items-center justify-around">
      {ratingCardsData.map((data, index) => (
        <div className="border min-w-64 min-h-36 p-4 shadow-lg rounded-xl flex flex-col items-start justify-around hover:bg-Navbar cursor-pointer hover:text-white hover:transition-all hover:duration-300 hover:ease-linear " key={index} >
          <div className="flex items-center justify-between">
          <img src={data.icon} alt="icon" className="w-12 hover:filter filter-brightness-invert" />
          <p>{data?.hilight}</p>
          </div>
         <div className="flex items-center justify-between w-full" >
         <span className="text-lg font-medium">{data.title}</span>
         <span className="text-[#59eafe] text-lg font-medium hover:text-white" >{data.qty}</span>
         </div>
        </div>
      ))}
      </div>
    </main>
  );
};

export default Ratingcards;
