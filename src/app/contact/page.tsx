import Image from "next/image"

export default function Contact() {
  return (
    <main className="flex flex-col gap-5">
      <section className="border p-3">
        <div>
          <Image src='' alt=""/>
          <span>Email</span>
        </div>
        <div>
          <Image src='' alt=""/>
          <span>Twitter</span>
        </div>
        <div>
          <Image src='' alt=""/>
          <span>Github</span>
        </div>
        <div>
          <Image src='' alt=""/>
          <span>LinkedIn</span>
        </div>
      </section>
      <section className="border p-3">
        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </section>
    </main>
  );
}
