const MultipleComboboxString = `
// combobox.tsx

import { CustomMultipleCombobox, Option } from "custom-combobox";
import { useState } from "react";
import "custom-combobox/dist/custom-combobox.css"; // this is important

const options = [
  { value: "option-1", label: "Option 1" },
  { value: "option-with-icon", label: "Option with icon" },
  { value: "long-long-option-3", label: "Long Long option 3" },
];


export default function Combobox() {
  const [_, setSelectedItems] = useState<Option[] | null>(null);

  const handleSelect = (selectedItem: Option[]) => {
    setSelectedItems(selectedItem); 
  };

  return (
    <div className="w-full flex justify-start flex-col  mx-auto">
      <CustomMultipleCombobox 
          options={options} 
          onSelect={handleSelect} 
      />
    </div>
  );
}
`;

export default MultipleComboboxString;
