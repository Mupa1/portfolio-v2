const Contact = () => {
  return (
    <section id="contact" className="flex flex-col justify-center md:h-screen">
      <h2 className="pt-24 md:pt-0">Contact Me</h2>
      <form className="grid gap-3">
        <input type="text" name="name" id="name" placeholder="Name" className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <textarea name="message" id="message" rows={10} />
        <button type="submit"></button>
      </form>
    </section>
  );
};

export default Contact;
