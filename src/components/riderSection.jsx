import RiderItems from "./riderItems";

export default function RiderSection(rider) {
  return (
    <section>
      <h2>{rider.title}</h2>
      <h3>{rider.description}</h3>
      <RiderItems items={rider.items} title={rider.title} />
      {rider.title === "EXHIBITION" ? (
        <div>* with the exception of salvaged materials</div>
      ) : null}
    </section>
  );
}
