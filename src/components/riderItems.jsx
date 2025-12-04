import RiderSingleItem from "./ridersingleitem";

export default function RiderItems(items, title) {

  return (
    <div className="rider-items">
      {title === "OPENING" ? null : <li>Therefore,</li>}

      {items.items.map((item, index) => {
        return (
          <RiderSingleItem
            key={index}
            item={item.item}
            checked={item.checked}
          />
        );
      })}
    </div>
  );
}
