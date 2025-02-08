"use client";

import { CustomMultipleCombobox, Option } from "custom-combobox";
import { useState } from "react";
import "custom-combobox/dist/custom-combobox.css";

const options = [
  { value: "option-1", label: "Option 1" },
  { value: "option-with-icon", label: "Option with icon" },
  { value: "long-long-option-3", label: "Long Long option 3" },
  { value: "long-long-long-option-4", label: "Long Long Long option 4" },
  {
    value: "long-long-long-long-option-5",
    label: "Long Long Long Long option 5",
  },
  {
    value: "long-long-long-long-long-option-6",
    label: "Long Long Long  Long option 6",
  },
];

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSelectedItems] = useState<Option[] | null>(null);

  const handleSelect = (selectedItem: Option[]) => {
    setSelectedItems(selectedItem); // Simpan nilai yang dipilih ke state
  };

  return (
    <div className="w-full flex justify-start flex-col">
      <CustomMultipleCombobox options={options} onSelect={handleSelect} />
    </div>
  );
}
