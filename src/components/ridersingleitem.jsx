import { useState } from 'react';
import Checkbox from './checkbox';

export default function RiderSingleItem(item) {

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <label>
 <Checkbox checked={isChecked} onChange={handleCheckboxChange}/>
     {item.item}
    </label>
  );
}
