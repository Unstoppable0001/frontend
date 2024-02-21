import Sub from '../assets/Sub.png'

const Subscribe = () => {
  return (
    <div className="px-5 md:px-28 py-8 bg-[#f0f0f0]">
      <div className="bg-white rounded-xl flex p-10 gap-10 items-center flex-col md:flex-row">
        <div className="p-10 flex items-center justify-center rounded-xl bg-[#f0f0f0] h-[500px] md:w-1/2">
          <img className="h-full " src= {Sub} alt="" />
        </div>
        <div className="flex gap-5 flex-col flex-grow">
          <div className="text-4xl font-bold md:w-72">
            Subscribe to our
            Newsletter!
          </div>
          <p className="text-lg text-[#908F8F]">
            Be the first to get exclusive offers
            <br />
            ands the latest news
          </p>
          <input type="text" className="h-16 w-full outline-none border rounded-xl indent-5" placeholder="Enter your email address"/>
          <button className="bg-[#F01C21] text-white w-60 rounded-lg font-semibold py-4 cursor-pointer">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe