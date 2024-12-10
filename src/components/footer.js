const Footer = () => {
    return (
      <div className="min-h-48 flex flex-col text-sm">
        {/* Main Content */}
        <div className="text-white py-8 px-4 flex-grow">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <ul  className="leading-[45px]">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Delete my account</a></li>
              </ul>
            </div>
            <div>
              <ul  className="leading-[45px]">
                <li><a href="#" className="hover:underline">FAQ's</a></li>
                <li><a href="#" className="hover:underline">Personnel Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Copyright</a></li>
                <li><a href="#" className="hover:underline">Security Advice</a></li>
                <li><a href="#" className="hover:underline">Annual returns</a></li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Fixed Pink Bar */}
        <div className="h-14 fixed bottom-[15px] left-[10px] right-[20px] bg-[#A855F7] text-white py-2 flex justify-between items-center px-4 z-50 rounded-md">

          <div>
          <h6 className="font-extrabold">Install Pocket FM app</h6>
          <h6>listen to unlimited blockbuster audio series</h6>
          </div>

          <button className=" text-md font-bold text-white py-1 px-4 border border-solid border-white rounded-md">
            Install
          </button>
        </div>
      </div>
    );
  };
  
  export default Footer;
  