import { Resource } from "i18next";
import { HTMLAttributes } from "react";
import { FileRow } from "../importer/features/main/types";

type ModalParams = {
  isModal?: boolean;
  modalIsOpen?: boolean;
  modalOnCloseTriggered?: () => void;
  modalCloseOnOutsideClick?: boolean;
};

export type CSVImporterProps = (HTMLAttributes<HTMLDialogElement> & HTMLAttributes<HTMLDivElement>) & {
  template?: Record<string, unknown> | string;
  darkMode?: boolean;
  primaryColor?: string;
  className?: string;
  onComplete?: (data: any) => void;
  waitOnComplete?: boolean;
  customStyles?: Record<string, string> | string;
  passedData?: FileRow[];
  hasCustomFields?: boolean;
  showDownloadTemplateButton?: boolean;
  skipHeaderRowSelection?: boolean;
  language?: string;
  customTranslations?: Resource;
} & ModalParams;
