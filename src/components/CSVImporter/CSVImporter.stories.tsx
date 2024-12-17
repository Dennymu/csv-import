import { useState } from "react";
import { ComponentMeta, ComponentStory, Story } from "@storybook/react";
import defaults from "../../settings/defaults";
import { CSVImporterProps } from "../../types";
import ImporterComponent from "./index";

export default {
  title: "User Interface/Importer",
  component: ImporterComponent,
  argTypes: {
    primaryColor: {
      control: { type: "color" },
    },
    labelColor: {
      control: { type: "color" },
    },
  },
} as ComponentMeta<typeof ImporterComponent>;

const template = {
  columns: [
    {
      name: "First Name",
      key: "first_name",
      required: true,
      description: "The first name of the user",
      suggested_mappings: ["first", "name"],
    },
    {
      name: "Last Name",
      suggested_mappings: ["last"],
    },
    {
      name: "Email",
      required: true,
      description: "The email of the user",
    },
  ],
};

// const passedData = [
//   { index: 0, values: ["first name", "last name"] },
//   { index: 1, values: ["dennis", "murphy"] },
//   { index: 2, values: ["nicole", "murphy"] },
// ];
const passedData = undefined;

const customStyles = {
  "color-primary": "#fdd800",
  "color-primary-hover": "#bea200",
  "color-background": "#ffffff",
  "color-background-modal": "#ffffff",
  "color-input-background": "#ffffff",
  "color-background-menu-hover": "#ffffff",
  "color-progress-bar": "#fdd800",
  "color-text": "#212121",
  "color-secondary": "#757575",
  "color-secondary-hover": "#5d5d5d",
};

const Template: Story<typeof ImporterComponent> = (args: CSVImporterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { isModal } = args;

  const props = {
    ...(isModal ? { modalIsOpen: isOpen } : {}),
    ...(isModal ? { modalOnCloseTriggered: () => setIsOpen(false) } : {}),
    ...(isModal ? { modalCloseOnOutsideClick: args.modalCloseOnOutsideClick } : {}),
    ...args,
  };

  return (
    <div>
      {args.isModal && <button onClick={() => setIsOpen(true)}>Import</button>}
      <ImporterComponent key={props.isModal?.toString()} {...props} />
    </div>
  );
};

export const Importer = Template.bind({});
Importer.args = {
  language: "en",
  ...defaults,
  darkMode: false,
  template: template,
  passedData: passedData,
  customStyles: customStyles,
  allowCustom: true,
  customTranslations: {
    jp: {
      Upload: "アップロード",
      "Browse files": "ファイルを参照",
    },
    pt: {
      Upload: "Carregar",
      "Browse files": "Procurar arquivos",
    },
  },
};
