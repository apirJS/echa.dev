import Image from "next/image"
import { MdOutlineEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";


export default function Contact() {
  return (
    <main className="flex flex-col gap-5">
      <section className="border p-3 gap-y-2 flex flex-col">
        <div className="flex items-center gap-x-2">
          <MdOutlineEmail size={26}/>
          <a target="_blank" href="mailto:apriliyantoecha1@gmail.com" className="">apriliyantoecha1@gmail.com</a>
        </div>
        <div className="flex items-center gap-x-2">
          <AiFillLinkedin size={26}/>
          <a target="_blank" href="https://www.linkedin.com/in/echa-apriliyanto-125402244/" className=" ">Echa Apriliyanto</a>
        </div>
        <div className="flex items-center gap-x-2">
          <FaGithub size={26}/>
          <a target="_blank" href="https://github.com/apirPr" className="">@apirPr</a>
        </div>
        <div className="flex items-center gap-x-2">
          <LuInstagram size={26}/>
          <a target="_blank" href="https://www.instagram.com/apr_314/" className="">@apr314</a>
        </div>
      </section>
      <section className="border p-3">
        <form className="flex flex-col gap-3 items-center ">
          <input type="text" placeholder="Full Name"  className="p-1 rounded-sm bg-inherit border-2 border-r-2 w-full"/>
          <input type="email" placeholder="Email"  className="p-1 rounded-sm bg-inherit border-2 border-r-2 w-full"/>
          <input type="text" placeholder="Subject"  className="p-1 rounded-sm bg-inherit border-2 border-r-2 w-full"/>
          <textarea placeholder="Message" className="p-1 rounded-sm bg-inherit border-2 border-r-2 w-full"></textarea>
          <button className="border-2 w-28 h-10">Send</button>
        </form>
      </section>
    </main>
  );
}
