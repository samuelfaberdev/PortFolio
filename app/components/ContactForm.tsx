export default function ContactForm() {
  return (
    <form className="flex flex-col items-center gap-4 w-1/2">
      <div className="flex flex-col gap-1 w-full">
        <label className="pl-1" htmlFor="email">
          Email :
        </label>
        <input
          className="p-2 border border-neutral-500 bg-neutral-700 rounded-md"
          type="email"
          name="email"
          id="email"
          placeholder="nom@provider.fr"
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label className="pl-1" htmlFor="subject">
          Objet :
        </label>
        <input
          className="p-2 border border-neutral-500 bg-neutral-700 rounded-md"
          type="text"
          name="subject"
          id="subject"
          placeholder="Salut Samuel !"
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label className="pl-1" htmlFor="">
          Votre message :
        </label>
        <textarea
          className="p-2 border border-neutral-500 bg-neutral-700 rounded-md"
          name="message"
          id="message"
          placeholder="Salut Samuel, parlons un peu de ton projet..."
        ></textarea>
      </div>
      <button type="submit" className="gradient-button">
        Envoyer votre message
      </button>
    </form>
  );
}
