import RiderSingleItem from "./ridersingleitem";

export default function RiderItemsContainer(items, title) {

  return (
    <div className="rider-items">
      <ul>
        {title === "OPENING" ? null : <li>Therefore,</li>}

        <div>
          {Object.keys(items).map((key) => (
            <RiderSingleItem key={key} item={items[key]} />
          ))}
        </div>
      </ul>
    </div>
  );
}
