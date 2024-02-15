const ShoeCard = ({ imgURL}) => {
   
  
    return (
      <div
        className={`cursor-pointer bg-[#f6f6f6]  h-[160px] w-[310px] pl-[50px] rounded-md` } 
       
      >
        <div className='flex '>
          <img
            src={imgURL}
            alt='shoe colletion'
            width={200}
            height={500}
            className='object-contain'
          />
        </div>
      </div>
    );
  };
  
  export default ShoeCard;
