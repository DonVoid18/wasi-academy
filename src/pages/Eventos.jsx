import EventList from "../components/EventList";
const Eventos = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-20 overflow-hidden pt-40 pb-24 text-main">
      {/* <section className="flex w-containerWitdhMain max-w-containerMax items-center justify-center">
        <div className="flex w-full flex-col gap-5">
          <h1 className="text-3xl font-bold">Próximos eventos</h1>
          <EventList></EventList>
        </div>
      </section>
      <section className="flex w-containerWitdhMain max-w-containerMax items-center justify-center">
        <div className="flex w-full flex-col gap-5">
          <h1 className="text-3xl font-bold">Eventos pasados</h1>
          <EventList></EventList>
        </div>
      </section> */}
      <section className="flex w-containerWitdhMain max-w-containerMax items-center justify-center">
        <div className="flex w-full flex-col gap-5">
          <h1 className="text-3xl font-bold">
            Se aproximan nuevos eventos muy pronto...
          </h1>
        </div>
      </section>
    </div>
  );
};
export default Eventos;
