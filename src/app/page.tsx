"use client";

import { CustomMultipleCombobox, Option } from "custom-combobox";
import { useState } from "react";
import "custom-combobox/dist/custom-combobox.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import MultipleComboboxSelect from "../components/string/MultipleComboboxSelect";
import MultipleComboboxString from "../components/string/MultipleComboboxString";
import MultipleDisable from "@/components/string/MultipleDisable";
import { GithubIcon } from "lucide-react";
import { SiStorybook } from "react-icons/si";

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
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
        width: "100%",
        maxWidth: 800,
        margin: "0 auto",
        paddingTop: "20px",
      }}
    >
      <a href="https://github.com/susilodev/custom-combobox" target="_blank">
        <div
          style={{
            position: "fixed",
            right: "30px",
            top: "20px",
            cursor: "pointer",
            backgroundColor: "#000",
            borderRadius: "50%",
            padding: "10px",
          }}
        >
          <GithubIcon style={{ color: "#fff" }} />
        </div>
      </a>

      <a
        href="https://susilodev.github.io/custom-combobox/?path=/story/components-custommultiplecombobox--default"
        target="_blank"
      >
        <div
          style={{
            position: "fixed",
            right: "30px",
            top: "90px",
            cursor: "pointer",
            backgroundColor: "red",
            borderRadius: "50%",
            padding: "10px",
          }}
        >
          <SiStorybook
            style={{ color: "#fff", width: "25px", height: "25px" }}
          />
        </div>
      </a>

      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          fontFamily: "sans-serif",
          margin: "10px 0 20px 0",
        }}
      >
        <strong>Dropdown custom Multiple with search</strong>
      </h2>

      <CustomMultipleCombobox options={options} onSelect={handleSelect} />

      <div style={{ height: "20px" }}></div>

      <SyntaxHighlighter language="tsx" style={dracula}>
        {MultipleComboboxString}
      </SyntaxHighlighter>

      <h2
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "sans-serif",
          margin: "30px 0 20px 0",
        }}
      >
        <strong>Dropdown Select without search</strong>
      </h2>

      <CustomMultipleCombobox
        options={options}
        withSearch={false}
        onSelect={handleSelect}
      />

      <div style={{ height: "10px", margin: "0px 0 0 0" }}></div>
      <SyntaxHighlighter language="tsx" style={dracula}>
        {MultipleComboboxSelect}
      </SyntaxHighlighter>

      <h2
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "sans-serif",
          margin: "30px 0 20px 0",
        }}
      >
        <strong>Disable Multiple</strong>
      </h2>

      <CustomMultipleCombobox
        options={options}
        onSelect={handleSelect}
        multiple={false}
      />

      <div style={{ height: "10px", margin: "0px 0 0 0" }}></div>
      <SyntaxHighlighter language="tsx" style={dracula}>
        {MultipleDisable}
      </SyntaxHighlighter>
    </div>
  );
}
