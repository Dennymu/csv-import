import { CSVImporterProps } from "../types";

const defaults: CSVImporterProps = {
  darkMode: true,
  onComplete: (data) => console.log("onComplete", data),
  isModal: true,
  modalCloseOnOutsideClick: true,
  allowCustomFields: false,
};

export default defaults;
