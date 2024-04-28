import Image from "next/image";

export default function Home() {
  return (
    <>
  <div className="flex justify-center items-center text-white h-[44vh] flex-col gap-4">
    <div className="font-bold text-4xl  ">Buy Me a Chai  <span><img src="" alt="" /></span></div>
     <p>
      A crowdfunding platform for creator. Get funded by your fans and followers. Start now!
     </p>

    <div>
      <button className="border bg-purple-700 p-2 rounded-sm mx-2">Start Here</button>
      <button className="border bg-purple-700 p-2 rounded-sm mx-2">Read More</button>
    </div>
  </div>


    <div className="bg-white h-1 opacity-10"></div>


    <div className="text-white container mx-auto  py-32 pt-14">

      <h1 className="text-2xl font-bold text-center mb-14">Your Fans buy you a Chai</h1>
      <div className="flex gap-5 justify-around">
        
        <div className="item space-y-3 flex flex-col justify-center items-center" >
          <img className="rounded-full " src="ForgotPassword.avif" width={85} alt="" />
          <p className="font-bold">Fund Yourself</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>

        <div className="item space-y-3 flex flex-col justify-center items-center" >
          <img className="rounded-full" src="ForgotPassword.avif" width={85} alt="" />
          <p className="font-bold">Fund Yourself</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>

        <div className="item space-y-3 flex flex-col justify-center items-center " >
          <img className="rounded-full" src="ForgotPassword.avif" width={85} alt="" />
          <p className="font-bold">Fund Yourself</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>

      </div>

    </div>


    <div className="bg-white h-1 opacity-10"></div>



    <div className="text-white container mx-auto  py-32 pt-14">

<h1 className="text-2xl font-bold text-center mb-14">Your Fans buy you a Chai</h1>
<div className="flex gap-5 justify-around">
  
  <div className="item space-y-3 flex flex-col justify-center items-center" >
    <img className="rounded-full " src="ForgotPassword.avif" width={85} alt="" />
    <p className="font-bold">Fund Yourself</p>
    <p className="text-center">Your fans are available for you to help you</p>
  </div>

  <div className="item space-y-3 flex flex-col justify-center items-center" >
    <img className="rounded-full" src="ForgotPassword.avif" width={85} alt="" />
    <p className="font-bold">Fund Yourself</p>
    <p className="text-center">Your fans are available for you to help you</p>
  </div>

  <div className="item space-y-3 flex flex-col justify-center items-center " >
    <img className="rounded-full" src="ForgotPassword.avif" width={85} alt="" />
    <p className="font-bold">Fund Yourself</p>
    <p className="text-center">Your fans are available for you to help you</p>
  </div>

</div>

</div>

  </>
  );
}



//  flowbite for tailwind css and free resource it is a like bootstrap
