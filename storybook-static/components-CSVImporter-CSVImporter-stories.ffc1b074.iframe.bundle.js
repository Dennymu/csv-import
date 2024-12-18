"use strict";
(self.webpackChunkcsv_import_react_dennis = self.webpackChunkcsv_import_react_dennis || []).push([
  [191],
  {
    "./src/components/CSVImporter/CSVImporter.stories.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Importer: () => Importer,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => CSVImporter_stories,
        });
      var react = __webpack_require__("./node_modules/react/index.js");
      const settings_defaults = { darkMode: !0, onComplete: (data) => console.log("onComplete", data), isModal: !0, modalCloseOnOutsideClick: !0 };
      var es = __webpack_require__("./node_modules/react-i18next/dist/es/index.js");
      const resources = {
        en: { translation: {} },
        fr: {
          translation: {
            Upload: "Télécharger",
            "Select Header": "Sélectionner l'en-tête",
            "Map Columns": "Mapper les colonnes",
            "Expected Column": "Colonne attendue",
            Required: "Requis",
            "Drop your file here": "Déposez votre fichier ici",
            or: "ou",
            "Browse files": "Parcourir les fichiers",
            "Download Template": "Télécharger le modèle",
            "Only CSV, XLS, and XLSX files can be uploaded": "Seuls les fichiers CSV, XLS et XLSX peuvent être téléchargés",
            "Select Header Row": "Sélectionner la ligne d'en-tête",
            "Select the row which contains the column headers": "Sélectionnez la ligne qui contient les en-têtes de colonne",
            "Only the first sheet (&quot;{{sheet}}&quot;) of the Excel file will be imported. To import multiple sheets, please upload each sheet individually.":
              "Seule la première feuille (&quot;{{sheet}}&quot;) du fichier Excel sera importée. Pour importer plusieurs feuilles, veuillez télécharger chaque feuille individuellement.",
            Cancel: "Annuler",
            Continue: "Continuer",
            "Your File Column": "Votre colonne de fichier",
            "Your Sample Data": "Vos données d'échantillon",
            "Destination Column": "Colonne de destination",
            Include: "Inclure",
            Submit: "Soumettre",
            "Loading...": "Chargement...",
            "Please include all required columns": "Veuillez inclure toutes les colonnes requises",
            Back: "Retour",
            "- Select one -": "- Sélectionnez un -",
            "- empty -": "- vide -",
            "Import Successful": "Importation réussie",
            "Upload Successful": "Téléchargement réussi",
            Done: "Terminé",
            "Upload another file": "Télécharger un autre fichier",
          },
        },
        es: {
          translation: {
            Upload: "Subir",
            "Select Header": "Seleccionar encabezado",
            "Map Columns": "Mapear columnas",
            "Expected Column": "Columnas esperadas",
            Required: "Requerido",
            "Drop your file here": "Suelta tu archivo aquí",
            or: "o",
            "Browse files": "Examinar archivos",
            "Download Template": "Descargar plantilla",
            "Only CSV, XLS, and XLSX files can be uploaded": "Solo se pueden subir archivos CSV, XLS y XLSX",
            "Select Header Row": "Seleccionar fila de encabezado",
            "Select the row which contains the column headers": "Selecciona la fila que contiene los encabezados de las columnas",
            "Only the first sheet (&quot;{{sheet}}&quot;) of the Excel file will be imported. To import multiple sheets, please upload each sheet individually.":
              " Solo se importará la primera hoja (&quot;{{sheet}}&quot;) del archivo de Excel. Para importar varias hojas, sube cada hoja individualmente.",
            Cancel: "Cancelar",
            Continue: "Continuar",
            "Your File Column": "Tu columna del archivo",
            "Your Sample Data": "Tus datos de muestra",
            "Destination Column": "Columna de destino",
            Include: "Incluir",
            Submit: "Enviar",
            "Loading...": "Cargando...",
            "Please include all required columns": "Por favor incluye todas las columnas requeridas",
            Back: "Atrás",
            "- Select one -": "- Selecciona uno -",
            "- empty -": "- vacío -",
            "Import Successful": "Importación exitosa",
            "Upload Successful": "Se ha subido con éxito",
            Done: "Listo",
            "Upload another file": "Subir otro archivo",
          },
        },
        it: {
          translation: {
            Upload: "Caricare",
            "Select Header": "Seleziona intestazione",
            "Map Columns": "Mappa colonne",
            "Expected Column": "Colonna prevista",
            Required: "Richiesto",
            "Drop your file here": "Trascina il tuo file qui",
            or: "oppure",
            "Browse files": "Sfoglia file",
            "Download Template": "Scarica il modello",
            "Only CSV, XLS, and XLSX files can be uploaded": "Solo i file CSV, XLS e XLSX possono essere caricati",
            "Select Header Row": "Seleziona la riga di intestazione",
            "Select the row which contains the column headers": "Seleziona la riga che contiene le intestazioni delle colonne",
            "Only the first sheet (&quot;{{sheet}}&quot;) of the Excel file will be imported. To import multiple sheets, please upload each sheet individually.":
              "Solo il primo foglio (&quot;{{sheet}}&quot;) del file Excel verrà importato. Per importare più fogli, carica ogni foglio singolarmente.",
            Cancel: "Annulla",
            Continue: "Continua",
            "Your File Column": "La tua colonna di file",
            "Your Sample Data": "I tuoi dati di esempio",
            "Destination Column": "Colonna di destinazione",
            Include: "Includere",
            Submit: "Invia",
            "Loading...": "Caricamento...",
            "Please include all required columns": "Si prega di includere tutte le colonne richieste",
            Back: "Indietro",
            "- Select one -": "- Selezionane uno -",
            "- empty -": "- vuoto -",
            "Import Successful": "Importazione riuscita",
            "Upload Successful": "Caricamento riuscito",
            Done: "Fatto",
            "Upload another file": "Carica un altro file",
          },
        },
        de: {
          translation: {
            Upload: "Hochladen",
            "Select Header": "Kopfzeile auswählen",
            "Map Columns": "Spalten zuordnen",
            "Expected Column": "Erwartete Spalten",
            Required: "Erforderlich",
            "Drop your file here": "Datei hier ablegen",
            or: "oder",
            "Browse files": "Dateien durchsuchen",
            "Download Template": "Vorlage herunterladen",
            "Only CSV, XLS, and XLSX files can be uploaded": "Nur CSV-, XLS- und XLSX-Dateien können hochgeladen werden",
            "Select Header Row": "Kopfzeilenreihe auswählen",
            "Select the row which contains the column headers": "Wähle die Zeile, die die Spaltenüberschriften enthält",
            "Only the first sheet (&quot;{{sheet}}&quot;) of the Excel file will be imported. To import multiple sheets, please upload each sheet individually.":
              "Nur das erste Blatt (&quot;{{sheet}}&quot;) der Excel-Datei wird importiert. Um mehrere Blätter zu importieren, lade bitte jedes Blatt einzeln hoch.",
            Cancel: "Abbrechen",
            Continue: "Weiter",
            "Your File Column": "Deine Spalte der Datei",
            "Your Sample Data": "Deine Beispieldaten",
            "Destination Column": "Zielspalte",
            Include: "Einfügen",
            Submit: "Senden",
            "Loading...": "Laden...",
            "Please include all required columns": "Bitte alle erforderlichen Spalten einfügen",
            Back: "Zurück",
            "- Select one -": "- Wähle eine aus -",
            "- empty -": "- leer -",
            "Import Successful": "Import erfolgreich",
            "Upload Successful": "Upload erfolgreich",
            Done: "Fertig",
            "Upload another file": "Eine weitere Datei hochladen",
          },
        },
      };
      __webpack_require__("./node_modules/i18next/dist/esm/i18next.js")
        .Ay.use(es.r9)
        .init({ resources, lng: "en", keySeparator: !1, interpolation: { escapeValue: !1 } });
      var papaparse_min = __webpack_require__("./node_modules/papaparse/papaparse.min.js"),
        papaparse_min_default = __webpack_require__.n(papaparse_min),
        xlsx = __webpack_require__("./node_modules/xlsx/xlsx.mjs"),
        chunk_6QYXN73V = __webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-6QYXN73V.mjs");
      const colors_primary = "var(--color-primary)",
        sizes_icon = { small: "1em", medium: "1.142em", large: "1.71em" };
      var classes = __webpack_require__("./src/importer/utils/classes.ts"),
        injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),
        injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
        styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),
        setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes),
        insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        Errors_module = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/components/Errors/style/Errors.module.scss"
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Errors_module.A, options);
      const style_Errors_module = Errors_module.A && Errors_module.A.locals ? Errors_module.A.locals : void 0;
      var index_esm = __webpack_require__("./node_modules/react-icons/pi/index.esm.js"),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
      function Errors({ error, centered = !1 }) {
        return error
          ? (0, jsx_runtime.jsx)("div", {
              className: (0, classes.A)([style_Errors_module.errors, centered ? style_Errors_module.centered : void 0]),
              children: (0, jsx_runtime.jsxs)("p", { children: [(0, jsx_runtime.jsx)(index_esm.GLE, { size: sizes_icon.small }), error.toString()] }),
            })
          : null;
      }
      try {
        (Errors.displayName = "Errors"),
          (Errors.__docgenInfo = {
            description: "",
            displayName: "Errors",
            props: {
              error: { defaultValue: null, description: "", name: "error", required: !1, type: { name: "unknown" } },
              centered: { defaultValue: { value: "false" }, description: "", name: "centered", required: !1, type: { name: "boolean" } },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/importer/components/Errors/index.tsx#Errors"] = {
              docgenInfo: Errors.__docgenInfo,
              name: "Errors",
              path: "src/importer/components/Errors/index.tsx#Errors",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Stepper_module = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/components/Stepper/style/Stepper.module.scss"
        ),
        Stepper_module_options = {};
      (Stepper_module_options.styleTagTransform = styleTagTransform_default()),
        (Stepper_module_options.setAttributes = setAttributesWithoutAttributes_default()),
        (Stepper_module_options.insert = insertBySelector_default().bind(null, "head")),
        (Stepper_module_options.domAPI = styleDomAPI_default()),
        (Stepper_module_options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Stepper_module.A, Stepper_module_options);
      const style_Stepper_module = Stepper_module.A && Stepper_module.A.locals ? Stepper_module.A.locals : void 0;
      function Stepper({ steps, current, clickable, setCurrent, skipHeader }) {
        return (0, jsx_runtime.jsx)("div", {
          className: style_Stepper_module.stepper,
          children: steps.map((step, i) => {
            if (step.disabled) return null;
            const done = i < current,
              Element = clickable ? "button" : "div",
              buttonProps = clickable ? { onClick: () => setCurrent(i), type: "button" } : {};
            let displayNumber = i + 1;
            return (
              skipHeader && displayNumber > 1 && displayNumber--,
              (0, jsx_runtime.jsxs)(
                Element,
                {
                  className: (0, classes.A)([
                    style_Stepper_module.step,
                    i === current ? style_Stepper_module.active : done && style_Stepper_module.done,
                    steps.length < 4 && style_Stepper_module.stepWide,
                  ]),
                  ...buttonProps,
                  children: [
                    (0, jsx_runtime.jsx)("div", {
                      className: style_Stepper_module.badge,
                      children: done ? (0, jsx_runtime.jsx)(index_esm.HTu, { color: colors_primary }) : displayNumber,
                    }),
                    (0, jsx_runtime.jsx)("div", { className: style_Stepper_module.label, children: step.label }),
                  ],
                },
                i
              )
            );
          }),
        });
      }
      Stepper.displayName = "Stepper";
      try {
        (Stepper.displayName = "Stepper"),
          (Stepper.__docgenInfo = {
            description: "",
            displayName: "Stepper",
            props: {
              steps: { defaultValue: null, description: "", name: "steps", required: !0, type: { name: "Step[]" } },
              current: { defaultValue: null, description: "", name: "current", required: !0, type: { name: "number" } },
              setCurrent: { defaultValue: null, description: "", name: "setCurrent", required: !0, type: { name: "(step: number) => void" } },
              step: { defaultValue: null, description: "", name: "step", required: !0, type: { name: "Step" } },
              clickable: { defaultValue: null, description: "", name: "clickable", required: !1, type: { name: "boolean" } },
              skipHeader: { defaultValue: null, description: "", name: "skipHeader", required: !0, type: { name: "boolean" } },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/importer/components/Stepper/index.tsx#Stepper"] = {
              docgenInfo: Stepper.__docgenInfo,
              name: "Stepper",
              path: "src/importer/components/Stepper/index.tsx#Stepper",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const sanitizeKey = (input) => {
          let result = input.toLowerCase().replace(/\s/g, "_");
          return (result = result.replace(/[^a-zA-Z0-9_]/g, "")), result;
        },
        isValidColor = (color) => /^#([0-9A-F]{3}){1,2}$/i.test(color);
      function convertRawTemplate(rawTemplate, hasCustomFields) {
        const template = ((name, param) => {
          if (void 0 === param) return {};
          let parsedObj = {};
          if ("string" == typeof param)
            try {
              parsedObj = JSON.parse(param);
            } catch (e) {
              return (
                console.error(
                  `The '${name}' prop is not a valid JSON string. This prop can either be a JSON string or JSON object. Please check the documentation for more details.`
                ),
                {}
              );
            }
          else parsedObj = param;
          return parsedObj;
        })("template", rawTemplate);
        if (!template || 0 === Object.keys(template).length)
          return [null, "The parameter 'template' is required. Please check the documentation for more details."];
        const columnData = template.columns;
        if (!columnData) return [null, "Invalid template: No columns provided"];
        if (!Array.isArray(columnData)) return [null, "Invalid template: columns should be an array of objects"];
        const seenKeys = {},
          seenSuggestedMappings = {},
          columns = [];
        for (let i = 0; i < columnData.length; i++) {
          const item = columnData[i];
          if ("object" != typeof item) return [null, `Invalid template: Each item in columns should be an object (check column ${i})`];
          const name = item.name || "";
          let key = item.key || "";
          const description = item.description || "",
            required = item.required || !1;
          let suggestedMappings = item.suggested_mappings || [];
          if ("" === name) return [null, `Invalid template: The parameter "name" is required for each column (check column ${i})`];
          if (("" === key && (key = sanitizeKey(name)), seenKeys[key]))
            return [null, `Invalid template: Duplicate keys are not allowed (check column ${i})`];
          seenKeys[key] = !0;
          for (let j = 0; j < suggestedMappings.length; j++) {
            let mappingVal = suggestedMappings[j].trim();
            const lowerCaseMapping = mappingVal.toLowerCase();
            if ("" === mappingVal || seenSuggestedMappings[lowerCaseMapping])
              return [null, `Invalid template: The suggested_mappings for column ${name} cannot contain blank values or duplicate values.`];
            (seenSuggestedMappings[lowerCaseMapping] = !0), (suggestedMappings[j] = mappingVal);
          }
          columns.push({ name, key, description, required, suggested_mappings: suggestedMappings });
        }
        return (
          hasCustomFields && columns.push({ name: "Custom Field", key: "custom" }),
          0 === columns.length ? [null, "Invalid template: No columns were provided"] : [{ columns }, null]
        );
      }
      let Steps = (function (Steps) {
        return (Steps.Upload = "upload"), (Steps.RowSelection = "row-selection"), (Steps.MapColumns = "map-columns"), Steps;
      })({});
      const StepEnum_Upload = 0,
        StepEnum_RowSelection = 1,
        StepEnum_MapColumns = 2,
        StepEnum_Complete = 3;
      const hooks_useStepNavigation = function useStepNavigation(initialStep, skipHeader) {
        const [t] = (0, es.Bd)(),
          stepper = (function useStepper(steps, initialStep = 0, skipHeader) {
            const [current, setCurrent] = (0, react.useState)(initialStep),
              step = (0, react.useMemo)(() => steps[current], [current, steps]);
            return { steps, current, step, setCurrent, skipHeader };
          })(
            ((skipHeader) => [
              { label: "Upload", id: Steps.Upload },
              { label: "Select Header", id: Steps.RowSelection, disabled: skipHeader },
              { label: "Map Columns", id: Steps.MapColumns },
            ])(skipHeader).map((step) => ({ ...step, label: t(step.label) })),
            StepEnum_Upload,
            skipHeader
          ),
          [storageStep, setStorageStep] = (function useMutableLocalStorage(key, initialValue) {
            const getLocalStorage = () => {
                if ("undefined" == typeof window) return initialValue;
                try {
                  const item = window.localStorage.getItem(key);
                  return item ? JSON.parse(item) : initialValue;
                } catch (error) {
                  return console.log(error), initialValue;
                }
              },
              [storedValue, setStoredValue] = (0, react.useState)(getLocalStorage());
            return (
              (0, react.useEffect)(() => {
                setStoredValue(getLocalStorage());
              }, [key]),
              [
                storedValue,
                (value) => {
                  try {
                    const valueToStore = value instanceof Function ? value(storedValue) : value;
                    setStoredValue(valueToStore), "undefined" != typeof window && window.localStorage.setItem(key, JSON.stringify(valueToStore));
                  } catch (error) {
                    console.log(error);
                  }
                },
              ]
            );
          })("tf_steps", ""),
          [currentStep, setCurrentStep] = (0, react.useState)(initialStep),
          setStep = (newStep) => {
            setCurrentStep(newStep), setStorageStep(newStep), stepper.setCurrent(newStep);
          };
        return (
          (0, react.useEffect)(() => {
            stepper.setCurrent(storageStep || 0), setCurrentStep(storageStep || 0);
          }, [storageStep]),
          {
            currentStep: storageStep || currentStep,
            setStep,
            goBack: (backStep = 0) => {
              setStep((backStep = backStep || currentStep - 1 || 0));
            },
            goNext: (nextStep = 0) => {
              const calculatedStep = ((nextStep, skipHeader) => {
                if (skipHeader)
                  switch (nextStep) {
                    case StepEnum_Upload:
                    case StepEnum_RowSelection:
                      return StepEnum_MapColumns;
                    case StepEnum_MapColumns:
                      return StepEnum_Complete;
                    default:
                      return nextStep;
                  }
                return nextStep;
              })((nextStep = nextStep || currentStep + 1 || 0), skipHeader);
              setStep(calculatedStep);
            },
            stepper,
            stepId: stepper?.step?.id,
            setStorageStep,
          }
        );
      };
      var Main_module = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/features/main/style/Main.module.scss"
        ),
        Main_module_options = {};
      (Main_module_options.styleTagTransform = styleTagTransform_default()),
        (Main_module_options.setAttributes = setAttributesWithoutAttributes_default()),
        (Main_module_options.insert = insertBySelector_default().bind(null, "head")),
        (Main_module_options.domAPI = styleDomAPI_default()),
        (Main_module_options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Main_module.A, Main_module_options);
      const style_Main_module = Main_module.A && Main_module.A.locals ? Main_module.A.locals : void 0;
      var chunk_UVUR7MCU = __webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs"),
        Box_module = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/components/Box/style/Box.module.scss"
        ),
        Box_module_options = {};
      (Box_module_options.styleTagTransform = styleTagTransform_default()),
        (Box_module_options.setAttributes = setAttributesWithoutAttributes_default()),
        (Box_module_options.insert = insertBySelector_default().bind(null, "head")),
        (Box_module_options.domAPI = styleDomAPI_default()),
        (Box_module_options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Box_module.A, Box_module_options);
      const style_Box_module = Box_module.A && Box_module.A.locals ? Box_module.A.locals : void 0;
      function Box({ className, variants = [], ...props }) {
        const variantStyles = (0, classes.A)(variants.map((c) => style_Box_module[c])),
          containerClasses = (0, classes.A)([style_Box_module.box, variantStyles, className]);
        return (0, jsx_runtime.jsx)("div", { ...props, className: containerClasses });
      }
      Box.displayName = "Box";
      try {
        (Box.displayName = "Box"),
          (Box.__docgenInfo = {
            description: "",
            displayName: "Box",
            props: { variants: { defaultValue: { value: "[]" }, description: "", name: "variants", required: !1, type: { name: "BoxVariant[]" } } },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/importer/components/Box/index.tsx#Box"] = {
              docgenInfo: Box.__docgenInfo,
              name: "Box",
              path: "src/importer/components/Box/index.tsx#Box",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Complete_module = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/features/complete/style/Complete.module.scss"
        ),
        Complete_module_options = {};
      (Complete_module_options.styleTagTransform = styleTagTransform_default()),
        (Complete_module_options.setAttributes = setAttributesWithoutAttributes_default()),
        (Complete_module_options.insert = insertBySelector_default().bind(null, "head")),
        (Complete_module_options.domAPI = styleDomAPI_default()),
        (Complete_module_options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Complete_module.A, Complete_module_options);
      const style_Complete_module = Complete_module.A && Complete_module.A.locals ? Complete_module.A.locals : void 0;
      function Complete({ reload, close, isModal }) {
        const { t } = (0, es.Bd)();
        return (0, jsx_runtime.jsx)(Box, {
          className: style_Complete_module.content,
          children: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)("span", { className: style_Complete_module.icon, children: (0, jsx_runtime.jsx)(index_esm.HTu, {}) }),
              (0, jsx_runtime.jsx)("div", { children: t("Import Successful") }),
              (0, jsx_runtime.jsxs)("div", {
                className: style_Complete_module.actions,
                children: [
                  (0, jsx_runtime.jsx)(chunk_UVUR7MCU.$, {
                    type: "button",
                    colorScheme: "secondary",
                    leftIcon: (0, jsx_runtime.jsx)(index_esm.zRt, {}),
                    onClick: reload,
                    children: t("Upload another file"),
                  }),
                  isModal &&
                    (0, jsx_runtime.jsx)(chunk_UVUR7MCU.$, {
                      type: "button",
                      colorScheme: "primary",
                      leftIcon: (0, jsx_runtime.jsx)(index_esm.HTu, {}),
                      onClick: close,
                      children: t("Done"),
                    }),
                ],
              }),
            ],
          }),
        });
      }
      Complete.displayName = "Complete";
      try {
        (complete.displayName = "complete"),
          (complete.__docgenInfo = {
            description: "",
            displayName: "complete",
            props: {
              reload: { defaultValue: null, description: "", name: "reload", required: !0, type: { name: "() => void" } },
              close: { defaultValue: null, description: "", name: "close", required: !0, type: { name: "() => void" } },
              isModal: { defaultValue: null, description: "", name: "isModal", required: !0, type: { name: "boolean" } },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/importer/features/complete/index.tsx#complete"] = {
              docgenInfo: complete.__docgenInfo,
              name: "complete",
              path: "src/importer/features/complete/index.tsx#complete",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Default_module = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/components/Table/style/Default.module.scss"
        ),
        Default_module_options = {};
      (Default_module_options.styleTagTransform = styleTagTransform_default()),
        (Default_module_options.setAttributes = setAttributesWithoutAttributes_default()),
        (Default_module_options.insert = insertBySelector_default().bind(null, "head")),
        (Default_module_options.domAPI = styleDomAPI_default()),
        (Default_module_options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Default_module.A, Default_module_options);
      const style_Default_module = Default_module.A && Default_module.A.locals ? Default_module.A.locals : void 0;
      function getStringLengthOfChildren(children) {
        return "string" == typeof children
          ? children.length
          : Array.isArray(children)
          ? children.reduce((sum, child) => sum + getStringLengthOfChildren(child), 0)
          : (0, react.isValidElement)(children)
          ? getStringLengthOfChildren(children.props.children)
          : 0;
      }
      var Tooltip_module = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/components/Tooltip/style/Tooltip.module.scss"
        ),
        Tooltip_module_options = {};
      (Tooltip_module_options.styleTagTransform = styleTagTransform_default()),
        (Tooltip_module_options.setAttributes = setAttributesWithoutAttributes_default()),
        (Tooltip_module_options.insert = insertBySelector_default().bind(null, "head")),
        (Tooltip_module_options.domAPI = styleDomAPI_default()),
        (Tooltip_module_options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Tooltip_module.A, Tooltip_module_options);
      const style_Tooltip_module = Tooltip_module.A && Tooltip_module.A.locals ? Tooltip_module.A.locals : void 0;
      function Tooltip({ as, className, title, children, icon = (0, jsx_runtime.jsx)(index_esm.GLE, {}), ...props }) {
        const Tag = as || "span",
          length = getStringLengthOfChildren(title),
          wrapperClasses = (0, classes.A)([style_Tooltip_module.tooltip, className, length > 30 && style_Tooltip_module.multiline]),
          [tooltipVisible, setTooltipVisible] = (0, react.useState)(!1),
          [position, setPosition] = (0, react.useState)({ top: 0, left: 0 }),
          targetRef = (0, react.useRef)(null),
          tooltipContainer = (0, react.useRef)(document.createElement("div"));
        (0, react.useEffect)(
          () => (
            document.body.appendChild(tooltipContainer.current),
            () => {
              document.body.removeChild(tooltipContainer.current);
            }
          ),
          []
        );
        const tooltipMessage =
          tooltipVisible &&
          (0, jsx_runtime.jsx)("span", {
            className: style_Tooltip_module.message,
            style: { position: "fixed", top: `${position.top}px`, left: `${position.left}px` },
            children: title,
          });
        return (0, jsx_runtime.jsxs)(Tag, {
          ...props,
          className: wrapperClasses,
          children: [
            children,
            (0, jsx_runtime.jsxs)("span", {
              className: style_Tooltip_module.icon,
              onMouseEnter: () => {
                if (targetRef.current) {
                  const rect = targetRef.current.getBoundingClientRect();
                  setPosition({ top: rect.bottom + window.scrollY, left: rect.left + rect.width / 2 + window.scrollX }), setTooltipVisible(!0);
                }
              },
              onMouseLeave: () => {
                setTooltipVisible(!1);
              },
              ref: targetRef,
              children: [icon, tooltipMessage],
            }),
          ],
        });
      }
      Tooltip.displayName = "Tooltip";
      try {
        (Tooltip.displayName = "Tooltip"),
          (Tooltip.__docgenInfo = {
            description: "",
            displayName: "Tooltip",
            props: {
              as: {
                defaultValue: null,
                description: "",
                name: "as",
                required: !1,
                type: { name: "enum", value: [{ value: '"div"' }, { value: '"span"' }, { value: '"p"' }] },
              },
              title: {
                defaultValue: null,
                description: "",
                name: "title",
                required: !1,
                type: {
                  name: "string | (ReactElement<any, string | JSXElementConstructor<any>> & string) | (Iterable<ReactNode> & string) | (ReactPortal & string)",
                },
              },
              icon: { defaultValue: { value: "<PiInfo />" }, description: "", name: "icon", required: !1, type: { name: "ReactNode" } },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/importer/components/Tooltip/index.tsx#Tooltip"] = {
              docgenInfo: Tooltip.__docgenInfo,
              name: "Tooltip",
              path: "src/importer/components/Tooltip/index.tsx#Tooltip",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const TableContext = (0, react.createContext)({});
      function Table({
        data,
        keyAsId = "id",
        theme,
        mergeThemes,
        highlightColumns,
        hideColumns = ["id"],
        emptyState,
        heading,
        background = "zebra",
        columnWidths = [],
        columnAlignments = [],
        fixHeader = !1,
        onRowClick,
      }) {
        const style = theme ? (mergeThemes ? { ...style_Default_module, ...theme } : theme) : style_Default_module,
          modelDatum = data?.[0],
          thead = modelDatum
            ? Object.keys(modelDatum).map((k) => {
                const value = modelDatum[k];
                return 0 === k.indexOf("_") ? "" : "object" == typeof value && value?.captionInfo ? { key: k, captionInfo: value.captionInfo } : k;
              })
            : {},
          context = { style, highlightColumns, hideColumns, columnWidths, columnAlignments };
        if (!data || !data?.length) return (0, jsx_runtime.jsx)("div", { className: style.emptyMsg, children: emptyState || null });
        const tableStyle = (0, classes.A)([style?.table, style?.[background], fixHeader && style?.fixHeader]),
          headingContent = heading
            ? (0, jsx_runtime.jsx)("div", { className: style.caption, children: heading })
            : (0, jsx_runtime.jsx)("div", {
                className: style.thead,
                role: "rowgroup",
                children: (0, jsx_runtime.jsx)(Row, { datum: thead, isHeading: !0 }),
              });
        return (0, jsx_runtime.jsxs)(TableContext.Provider, {
          value: context,
          children: [
            (0, jsx_runtime.jsxs)("div", {
              className: tableStyle,
              role: "table",
              children: [
                headingContent,
                (0, jsx_runtime.jsx)("div", {
                  className: style.tbody,
                  role: "rowgroup",
                  children: data.map((d, i) => {
                    const key = keyAsId && d?.[keyAsId] ? d[keyAsId] : i,
                      props = { datum: d, onClick: onRowClick };
                    return (0, react.createElement)(Row, { ...props, key: key?.toString() });
                  }),
                }),
              ],
            }),
            !data.length &&
              (0, jsx_runtime.jsx)("div", {
                className: style.emptyMsg,
                role: "empty-query",
                children: (0, jsx_runtime.jsx)("p", { children: "Empty" }),
              }),
          ],
        });
      }
      Table.displayName = "Table";
      const Row = ({ datum, onClick, isHeading }) => {
        const { style, highlightColumns, hideColumns, columnWidths, columnAlignments } = (0, react.useContext)(TableContext),
          className = (0, classes.A)([style?.tr]);
        return (0, jsx_runtime.jsx)("div", {
          className,
          role: "row",
          onClick: () => onClick?.(datum),
          children: Object.keys(datum)
            .filter((k) => !hideColumns.includes(datum[k]) && !hideColumns.includes(k))
            .map((k, i) => {
              let content = datum[k]?.content || datum[k];
              const tooltip = datum[k]?.tooltip,
                captionInfo = isHeading ? datum[k]?.captionInfo : null,
                headingKey = isHeading ? datum[k]?.key : null;
              content = isHeading && captionInfo ? (0, jsx_runtime.jsx)(Tooltip, { title: captionInfo, children: headingKey }) : content;
              const wrappedContent = content && "string" == typeof content ? (0, jsx_runtime.jsx)("span", { children: content }) : content,
                cellClass = (0, classes.A)([
                  highlightColumns?.includes(k) && style.highlight,
                  !wrappedContent && style.empty,
                  "string" != typeof content && style.element,
                ]),
                cellStyle = { width: columnWidths?.[i] || "auto", textAlign: columnAlignments?.[i] || "left" };
              return (0, jsx_runtime.jsx)(Cell, { cellClass, cellStyle, tooltip: tooltip || "", children: wrappedContent }, k);
            }),
        });
      };
      Row.displayName = "Row";
      const Cell = ({ children, cellClass, cellStyle, tooltip }) => {
        const { style } = (0, react.useContext)(TableContext),
          cellProps = {
            className: (0, classes.A)([style?.td, cellClass, !children && style?.empty]),
            role: "cell",
            style: cellStyle,
            ...(tooltip ? { title: tooltip } : {}),
          };
        return (0, jsx_runtime.jsx)("div", { ...cellProps, children });
      };
      Cell.displayName = "Cell";
      try {
        (Table.displayName = "Table"),
          (Table.__docgenInfo = {
            description: "",
            displayName: "Table",
            props: {
              data: { defaultValue: null, description: "", name: "data", required: !0, type: { name: "TableData" } },
              keyAsId: { defaultValue: { value: "id" }, description: "", name: "keyAsId", required: !1, type: { name: "string" } },
              theme: { defaultValue: null, description: "", name: "theme", required: !1, type: { name: "Style" } },
              mergeThemes: { defaultValue: null, description: "", name: "mergeThemes", required: !1, type: { name: "boolean" } },
              highlightColumns: { defaultValue: null, description: "", name: "highlightColumns", required: !1, type: { name: "string[]" } },
              hideColumns: { defaultValue: { value: '["id"]' }, description: "", name: "hideColumns", required: !1, type: { name: "string[]" } },
              emptyState: {
                defaultValue: null,
                description: "",
                name: "emptyState",
                required: !1,
                type: { name: "ReactElement<any, string | JSXElementConstructor<any>>" },
              },
              heading: {
                defaultValue: null,
                description: "",
                name: "heading",
                required: !1,
                type: { name: "ReactElement<any, string | JSXElementConstructor<any>>" },
              },
              background: {
                defaultValue: { value: "zebra" },
                description: "",
                name: "background",
                required: !1,
                type: { name: "enum", value: [{ value: '"zebra"' }, { value: '"dark"' }, { value: '"light"' }, { value: '"transparent"' }] },
              },
              columnWidths: { defaultValue: { value: "[]" }, description: "", name: "columnWidths", required: !1, type: { name: "string[]" } },
              columnAlignments: {
                defaultValue: { value: "[]" },
                description: "",
                name: "columnAlignments",
                required: !1,
                type: { name: '("" | "left" | "center" | "right")[]' },
              },
              fixHeader: { defaultValue: { value: "false" }, description: "", name: "fixHeader", required: !1, type: { name: "boolean" } },
              onRowClick: { defaultValue: null, description: "", name: "onRowClick", required: !1, type: { name: "((row: TableDatum) => void)" } },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/importer/components/Table/index.tsx#Table"] = {
              docgenInfo: Table.__docgenInfo,
              name: "Table",
              path: "src/importer/components/Table/index.tsx#Table",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Checkbox_module = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/components/Checkbox/style/Checkbox.module.scss"
        ),
        Checkbox_module_options = {};
      (Checkbox_module_options.styleTagTransform = styleTagTransform_default()),
        (Checkbox_module_options.setAttributes = setAttributesWithoutAttributes_default()),
        (Checkbox_module_options.insert = insertBySelector_default().bind(null, "head")),
        (Checkbox_module_options.domAPI = styleDomAPI_default()),
        (Checkbox_module_options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Checkbox_module.A, Checkbox_module_options);
      const style_Checkbox_module = Checkbox_module.A && Checkbox_module.A.locals ? Checkbox_module.A.locals : void 0;
      function Checkbox({ label, className, ...props }) {
        const containerClasses = (0, classes.A)([style_Checkbox_module.container, className]);
        return (0, jsx_runtime.jsxs)("label", {
          className: containerClasses,
          children: [(0, jsx_runtime.jsx)("input", { type: "checkbox", ...props }), (0, jsx_runtime.jsx)("span", { children: label })],
        });
      }
      Checkbox.displayName = "Checkbox";
      try {
        (Checkbox.displayName = "Checkbox"),
          (Checkbox.__docgenInfo = {
            description: "",
            displayName: "Checkbox",
            props: {
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !1,
                type: { name: "string | ReactElement<any, string | JSXElementConstructor<any>>" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/importer/components/Checkbox/index.tsx#Checkbox"] = {
              docgenInfo: Checkbox.__docgenInfo,
              name: "Checkbox",
              path: "src/importer/components/Checkbox/index.tsx#Checkbox",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const hooks_useIsomorphicLayoutEffect = "undefined" != typeof window ? react.useLayoutEffect : react.useEffect;
      const hooks_useEventListener = function useEventListener(eventName, handler, element) {
        const savedHandler = (0, react.useRef)(handler);
        hooks_useIsomorphicLayoutEffect(() => {
          savedHandler.current = handler;
        }, [handler]),
          (0, react.useEffect)(() => {
            const targetElement = element?.current || window;
            if (!targetElement || !targetElement.addEventListener) return;
            const eventListener = (event) => savedHandler.current(event);
            return (
              targetElement.addEventListener(eventName, eventListener),
              () => {
                targetElement.removeEventListener(eventName, eventListener);
              }
            );
          }, [eventName, element]);
      };
      const hooks_useRect = function useRect() {
        const [ref, setRef] = (0, react.useState)(null),
          [size, setSize] = (0, react.useState)({ x: 0, y: 0, width: 0, height: 0, top: 0, right: 0, bottom: 0, left: 0 }),
          updateRect = (0, react.useCallback)(() => {
            ref && setSize(ref.getBoundingClientRect());
          }, [ref?.offsetHeight, ref?.offsetWidth]);
        return (
          hooks_useEventListener("resize", updateRect),
          hooks_useIsomorphicLayoutEffect(() => {
            updateRect();
          }, [ref?.offsetHeight, ref?.offsetWidth]),
          (0, react.useLayoutEffect)(
            () => (window.addEventListener("mresize", updateRect), () => window.removeEventListener("mresize", updateRect)),
            []
          ),
          [setRef, size, updateRect]
        );
      };
      var Input_module = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/components/Input/style/Input.module.scss"
        ),
        Input_module_options = {};
      (Input_module_options.styleTagTransform = styleTagTransform_default()),
        (Input_module_options.setAttributes = setAttributesWithoutAttributes_default()),
        (Input_module_options.insert = insertBySelector_default().bind(null, "head")),
        (Input_module_options.domAPI = styleDomAPI_default()),
        (Input_module_options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Input_module.A, Input_module_options);
      const style_Input_module = Input_module.A && Input_module.A.locals ? Input_module.A.locals : void 0;
      function Input({ as = "input", label, icon, iconAfter, error, options, className, variants = [], children, ...props }) {
        const Element = as,
          variantStyles = (0, classes.A)(variants.map((c) => style_Input_module[c])),
          containerClassName = (0, classes.A)([style_Input_module.container, variantStyles, className]),
          icon1 = icon && (0, jsx_runtime.jsx)("span", { className: style_Input_module.icon, children: icon }),
          icon2 = iconAfter
            ? (0, jsx_runtime.jsx)("span", { className: style_Input_module.icon, children: iconAfter })
            : error && (0, jsx_runtime.jsx)("span", { className: style_Input_module.icon, children: (0, jsx_runtime.jsx)(index_esm.GLE, {}) }),
          iconSelect =
            options &&
            (0, jsx_runtime.jsx)("span", {
              className: (0, classes.A)([style_Input_module.icon, style_Input_module.dropdownIcon]),
              children: (0, jsx_runtime.jsx)(index_esm.RQe, {}),
            }),
          selectElement = options && options && (0, jsx_runtime.jsx)(Select, { options, ...props }),
          inputWrapper = (0, jsx_runtime.jsxs)("div", {
            className: (0, classes.A)([style_Input_module.inputWrapper, error && style_Input_module.hasError]),
            children: [icon1, selectElement || (0, jsx_runtime.jsx)(Element, { ...props, ...(options ? { type: "text" } : {}) }), iconSelect, icon2],
          });
        return (0, jsx_runtime.jsxs)("div", {
          className: containerClassName,
          children: [
            (0, jsx_runtime.jsxs)("label", {
              children: [label ? (0, jsx_runtime.jsx)("span", { className: style_Input_module.label, children: label }) : null, inputWrapper],
            }),
            error && (0, jsx_runtime.jsx)("div", { className: style_Input_module.error, children: error }),
            children && (0, jsx_runtime.jsx)("div", { className: style_Input_module.footer, children }),
          ],
        });
      }
      function Select({ options = {}, placeholder, ...props }) {
        const [open, setOpen] = (0, react.useState)(!1),
          onChangeOption = (e) => {
            const { value } = e.target;
            props?.onChange && props?.onChange(value), e.stopPropagation(), e.preventDefault(), onBlur();
          },
          selectedKey = Object.keys(options).find((k) => options[k].value === props.value) || "",
          [setRef, size, updateRect] = hooks_useRect(),
          [setRefPortal, sizePortal, updatePortalRect] = hooks_useRect(),
          windowSize = (function useWindowSize() {
            const [size, setSize] = (0, react.useState)([0, 0]);
            return (
              (0, react.useLayoutEffect)(() => {
                function updateSize() {
                  setSize([window.innerWidth, window.innerHeight]);
                }
                return window.addEventListener("resize", updateSize), updateSize(), () => window.removeEventListener("resize", updateSize);
              }, []),
              size
            );
          })(),
          optionsPosition = {
            top: `${size.y + sizePortal.height > windowSize[1] - 4 ? windowSize[1] - sizePortal.height - 4 : size.y + 4}px`,
            left: `${size?.x}px`,
            width: size?.right - size?.left + "px",
          },
          onBlur = () => {
            setOpen(!1);
          },
          ref = (0, react.useRef)(null);
        return (
          (function useClickOutside(ref, callback) {
            const staticCallback = (0, react.useCallback)(callback, []);
            (0, react.useEffect)(() => {
              const handleClickOutside = (event) => {
                ref && ref?.current && !ref.current.contains(event.target) && staticCallback(!1);
              };
              return (
                document.addEventListener("mousedown", handleClickOutside),
                () => {
                  document.removeEventListener("mousedown", handleClickOutside);
                }
              );
            }, [ref, staticCallback]);
          })(ref, onBlur),
          (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)("input", {
                ...props,
                value: selectedKey,
                className: (0, classes.A)([style_Input_module.select, open && style_Input_module.open]),
                readOnly: !0,
                onFocus: () => {
                  updateRect(), updatePortalRect(), setOpen(!0);
                },
                placeholder,
              }),
              (0, jsx_runtime.jsx)("div", { className: style_Input_module.optionsRef, ref: setRef }),
              open &&
                (0, jsx_runtime.jsx)("div", {
                  className: style_Input_module.options,
                  style: optionsPosition,
                  ref: setRefPortal,
                  children: (0, jsx_runtime.jsxs)("div", {
                    className: style_Input_module.inner,
                    ref,
                    children: [
                      placeholder &&
                        (0, jsx_runtime.jsx)(
                          "button",
                          {
                            className: (0, classes.A)([style_Input_module.option, style_Input_module.placeholder]),
                            onClick: onChangeOption,
                            children: placeholder,
                          },
                          -1
                        ),
                      Object.keys(options).map((k, i) =>
                        (0, jsx_runtime.jsxs)(
                          "button",
                          {
                            className: (0, classes.A)([style_Input_module.option, options[k].value === props.value && style_Input_module.selected]),
                            type: "button",
                            ...options[k],
                            onClick: onChangeOption,
                            autoFocus: 0 === i,
                            children: [
                              k,
                              " ",
                              options[k].required && (0, jsx_runtime.jsx)("span", { className: style_Input_module.requiredMark, children: "*" }),
                            ],
                          },
                          k
                        )
                      ),
                    ],
                  }),
                }),
            ],
          })
        );
      }
      Input.displayName = "Input";
      try {
        (Input.displayName = "Input"),
          (Input.__docgenInfo = {
            description: "",
            displayName: "Input",
            props: {
              as: {
                defaultValue: { value: "input" },
                description: "",
                name: "as",
                required: !1,
                type: { name: "enum", value: [{ value: '"input"' }, { value: '"textarea"' }] },
              },
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !1,
                type: { name: "string | ReactElement<any, string | JSXElementConstructor<any>>" },
              },
              icon: {
                defaultValue: null,
                description: "",
                name: "icon",
                required: !1,
                type: { name: "ReactElement<any, string | JSXElementConstructor<any>>" },
              },
              iconAfter: {
                defaultValue: null,
                description: "",
                name: "iconAfter",
                required: !1,
                type: { name: "ReactElement<any, string | JSXElementConstructor<any>>" },
              },
              error: { defaultValue: null, description: "", name: "error", required: !1, type: { name: "string" } },
              options: { defaultValue: null, description: "", name: "options", required: !1, type: { name: "{ [key: string]: InputOption; }" } },
              variants: { defaultValue: { value: "[]" }, description: "", name: "variants", required: !1, type: { name: "InputVariants[]" } },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/importer/components/Input/index.tsx#Input"] = {
              docgenInfo: Input.__docgenInfo,
              name: "Input",
              path: "src/importer/components/Input/index.tsx#Input",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function DropdownFields({ options, value, placeholder, onChange, selectedValues, updateSelectedValues }) {
        const [selectedOption, setSelectedOption] = (0, react.useState)(value),
          [filteredOptions, setFilteredOptions] = (0, react.useState)({});
        (0, react.useEffect)(() => {
          setSelectedOption(value);
        }, [selectedValues]),
          (0, react.useEffect)(() => {
            filterOptions();
          }, [options, selectedValues]);
        const filterOptions = () => {
          const newFilteredOptions = {};
          for (const key in options) {
            const option = options[key];
            (selectedValues.some((item) => item.key === option?.value && item.selected && option.value !== value) && "Custom Column" !== key) ||
              (newFilteredOptions[key] = option);
          }
          setFilteredOptions(newFilteredOptions);
        };
        return (0, jsx_runtime.jsx)(Input, {
          options: filteredOptions,
          value: selectedOption,
          placeholder,
          variants: ["small"],
          onChange: (event) => {
            const newValue = event,
              updatedSelectedValues = selectedValues.map((item) =>
                item.key === selectedOption ? { ...item, selected: !1 } : item.key === newValue ? { ...item, selected: !0 } : item
              );
            setSelectedOption(newValue), updateSelectedValues([...updatedSelectedValues]), onChange(newValue);
          },
          disabled: 0 === Object.keys(filteredOptions).length,
        });
      }
      DropdownFields.displayName = "DropdownFields";
      try {
        (DropDownFields.displayName = "DropDownFields"),
          (DropDownFields.__docgenInfo = {
            description: "",
            displayName: "DropDownFields",
            props: {
              options: { defaultValue: null, description: "", name: "options", required: !0, type: { name: "{ [key: string]: InputOption; }" } },
              value: { defaultValue: null, description: "", name: "value", required: !0, type: { name: "string" } },
              placeholder: { defaultValue: null, description: "", name: "placeholder", required: !0, type: { name: "string" } },
              onChange: { defaultValue: null, description: "", name: "onChange", required: !0, type: { name: "(value: string) => void" } },
              selectedValues: {
                defaultValue: null,
                description: "",
                name: "selectedValues",
                required: !0,
                type: { name: "{ key: string; selected: boolean | undefined; }[]" },
              },
              updateSelectedValues: {
                defaultValue: null,
                description: "",
                name: "updateSelectedValues",
                required: !0,
                type: { name: "(updatedValues: { key: string; selected: boolean | undefined; }[]) => void" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/importer/features/map-columns/components/DropDownFields.tsx#DropDownFields"] = {
              docgenInfo: DropDownFields.__docgenInfo,
              name: "DropDownFields",
              path: "src/importer/features/map-columns/components/DropDownFields.tsx#DropDownFields",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function stringsSimilarity(s1, s2) {
        const words = s1.split(" "),
          words2 = s2.split(" "),
          highestSimilarity = words.reduce((acc, word) => {
            const highestSimilarity = words2.reduce((acc2, word2) => {
              const wordSimilarity = (function similarity(s1, s2) {
                let longer = s1,
                  shorter = s2;
                s1.length < s2.length && ((longer = s2), (shorter = s1));
                const longerLength = longer.length;
                if (0 === longerLength) return 1;
                return (
                  (longerLength -
                    (function editDistance(s1, s2) {
                      (s1 = s1.toLowerCase()), (s2 = s2.toLowerCase());
                      const costs = new Array(s2.length + 1);
                      for (let i = 0; i <= s1.length; i++) {
                        let lastValue = i;
                        for (let j = 0; j <= s2.length; j++)
                          if (0 === i) costs[j] = j;
                          else if (j > 0) {
                            let newValue = costs[j - 1];
                            s1.charAt(i - 1) !== s2.charAt(j - 1) && (newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1),
                              (costs[j - 1] = lastValue),
                              (lastValue = newValue);
                          }
                        i > 0 && (costs[s2.length] = lastValue);
                      }
                      return costs[s2.length];
                    })(longer, shorter)) /
                  parseFloat(longerLength.toString())
                );
              })(word, word2);
              return wordSimilarity > acc2 ? wordSimilarity : acc2;
            }, 0);
            return highestSimilarity > acc ? highestSimilarity : acc;
          }, 0);
        return highestSimilarity;
      }
      var MapColumns_module = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/features/map-columns/style/MapColumns.module.scss"
        ),
        MapColumns_module_options = {};
      (MapColumns_module_options.styleTagTransform = styleTagTransform_default()),
        (MapColumns_module_options.setAttributes = setAttributesWithoutAttributes_default()),
        (MapColumns_module_options.insert = insertBySelector_default().bind(null, "head")),
        (MapColumns_module_options.domAPI = styleDomAPI_default()),
        (MapColumns_module_options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(MapColumns_module.A, MapColumns_module_options);
      const style_MapColumns_module = MapColumns_module.A && MapColumns_module.A.locals ? MapColumns_module.A.locals : void 0;
      function useMapColumnsTable(uploadColumns, templateColumns = [], columnsValues, isLoading) {
        const { t } = (0, es.Bd)();
        (0, react.useEffect)(() => {
          Object.keys(columnsValues).map((uploadColumnIndexStr) => {
            const uploadColumnIndex = Number(uploadColumnIndexStr),
              templateKey = columnsValues[uploadColumnIndex].key;
            handleTemplateChange(uploadColumnIndex, templateKey);
          });
        }, []);
        const [values, setValues] = (0, react.useState)(() => {
            const usedTemplateColumns = new Set();
            return uploadColumns.reduce((acc, uc) => {
              const matchedSuggestedTemplateColumn = templateColumns?.find((tc) => {
                return (
                  (templateColumn = tc),
                  (uploadColumnName = uc.name),
                  !!templateColumn?.suggested_mappings &&
                    templateColumn.suggested_mappings.some((suggestion) => suggestion.toLowerCase() === uploadColumnName.toLowerCase())
                );
                var templateColumn, uploadColumnName;
              });
              if (matchedSuggestedTemplateColumn && matchedSuggestedTemplateColumn.key)
                return (
                  usedTemplateColumns.add(matchedSuggestedTemplateColumn.key),
                  (acc[uc.index] = { key: matchedSuggestedTemplateColumn.key, include: !0 }),
                  acc
                );
              const similarTemplateColumn = templateColumns?.find((tc) => {
                return (
                  !!(
                    tc.key &&
                    !usedTemplateColumns.has(tc.key) &&
                    ((templateColumnKey = tc.key),
                    (uploadColumnName = uc.name),
                    stringsSimilarity(templateColumnKey.replace(/_/g, " "), uploadColumnName.toLowerCase()) > 0.9)
                  ) && (usedTemplateColumns.add(tc.key), !0)
                );
                var templateColumnKey, uploadColumnName;
              });
              return (
                (acc[uc.index] = {
                  key: similarTemplateColumn?.key || "",
                  include: !!similarTemplateColumn?.key,
                  selected: !!similarTemplateColumn?.key,
                }),
                acc
              );
            }, {});
          }),
          [selectedValues, setSelectedValues] = (0, react.useState)(Object.values(values).map(({ key, selected }) => ({ key, selected }))),
          templateFields = (0, react.useMemo)(
            () => templateColumns.reduce((acc, tc) => ({ ...acc, [tc.name]: { value: tc.key, required: tc.required } }), {}),
            [JSON.stringify(templateColumns)]
          ),
          handleTemplateChange = (uploadColumnIndex, key) => {
            setValues((prev) => {
              const templatesFields = { ...prev, [uploadColumnIndex]: { ...prev[uploadColumnIndex], key, include: !!key, selected: !!key } },
                templateFieldsObj = Object.values(templatesFields).map(({ key, selected }) => ({ key, selected }));
              return (
                setSelectedValues(templateFieldsObj),
                console.log("Template fields:", templateFields, "template fields object:", templateFieldsObj),
                templatesFields
              );
            });
          },
          yourFileColumn = t("Your File Column"),
          yourSampleData = t("Your Sample Data"),
          destinationColumn = t("Destination Column"),
          include = t("Include");
        return {
          rows: (0, react.useMemo)(
            () =>
              uploadColumns.map((uc, index) => {
                const { name, sample_data } = uc,
                  suggestion = values?.[index] || {},
                  samples = sample_data.filter((d) => d);
                return {
                  [yourFileColumn]: { raw: name || !1, content: name || (0, jsx_runtime.jsx)("em", { children: t("- empty -") }) },
                  [yourSampleData]: {
                    raw: "",
                    content: (0, jsx_runtime.jsx)("div", {
                      title: samples.join(", "),
                      className: style_MapColumns_module.samples,
                      children: samples.map((d, i) => (0, jsx_runtime.jsx)("small", { children: d }, i)),
                    }),
                  },
                  [destinationColumn]: {
                    raw: "",
                    content: (0, jsx_runtime.jsx)(DropdownFields, {
                      options: templateFields,
                      value: suggestion.key,
                      placeholder: t("- Select one -"),
                      onChange: (key) => handleTemplateChange(index, key),
                      selectedValues,
                      updateSelectedValues: setSelectedValues,
                    }),
                  },
                  [include]: {
                    raw: !1,
                    content: (0, jsx_runtime.jsx)(Checkbox, {
                      checked: suggestion.include,
                      disabled: !suggestion.key || isLoading,
                      onChange: (e) => {
                        return (
                          (id = index),
                          (value = e.target.checked),
                          void setValues((prev) => ({ ...prev, [id]: { ...prev[id], include: !!prev[id].key && value } }))
                        );
                        var id, value;
                      },
                    }),
                  },
                };
              }),
            [values, isLoading]
          ),
          formValues: values,
        };
      }
      function MapColumns({ template, data, columnMapping, selectedHeaderRow, skipHeaderRowSelection, onSuccess, onCancel, isSubmitting }) {
        if (0 === data.rows.length) return null;
        const { t } = (0, es.Bd)(),
          headerRowIndex = selectedHeaderRow || 0;
        let sampleDataRows = data.rows.slice(headerRowIndex + 1, headerRowIndex + 4);
        const uploadColumns = data.rows[headerRowIndex]?.values.map((cell, index) => {
            let sample_data = sampleDataRows.map((row) => row.values[index]);
            return { index, name: cell, sample_data };
          }),
          { rows, formValues } = useMapColumnsTable(uploadColumns, template.columns, columnMapping, isSubmitting),
          [error, setError] = (0, react.useState)(null);
        return (0, jsx_runtime.jsx)("div", {
          className: style_MapColumns_module.content,
          children: (0, jsx_runtime.jsxs)("form", {
            onSubmit: (e) => {
              e.preventDefault(), setError(null);
              const columns = Object.entries(formValues).reduce(
                  (acc, [index, columnMapping]) => (columnMapping.include ? { ...acc, [index]: columnMapping } : acc),
                  {}
                ),
                isRequiredColumnsIncluded = ((template, formValues) => {
                  const requiredColumns = template.columns.filter((column) => column.required),
                    includedValues = Object.values(formValues).filter((value) => value.include);
                  return requiredColumns.every((requiredColumn) => includedValues.some((includedValue) => includedValue.key === requiredColumn.key));
                })(template, formValues);
              isRequiredColumnsIncluded ? onSuccess(columns) : setError(t("Please include all required columns"));
            },
            children: [
              data
                ? (0, jsx_runtime.jsx)("div", {
                    className: style_MapColumns_module.tableWrapper,
                    children: (0, jsx_runtime.jsx)(Table, {
                      data: rows,
                      background: "dark",
                      fixHeader: !0,
                      columnWidths: ["20%", "30%", "30%", "20%"],
                      columnAlignments: ["", "", "", "center"],
                    }),
                  })
                : (0, jsx_runtime.jsx)(jsx_runtime.Fragment, { children: t("Loading...") }),
              (0, jsx_runtime.jsxs)("div", {
                className: style_MapColumns_module.actions,
                children: [
                  (0, jsx_runtime.jsx)(chunk_UVUR7MCU.$, {
                    type: "button",
                    colorScheme: "secondary",
                    onClick: onCancel,
                    isDisabled: isSubmitting,
                    children: t(skipHeaderRowSelection ? "Cancel" : "Back"),
                  }),
                  !!error &&
                    (0, jsx_runtime.jsx)("div", {
                      className: style_MapColumns_module.errorContainer,
                      children: (0, jsx_runtime.jsx)(Errors, { error }),
                    }),
                  (0, jsx_runtime.jsx)(chunk_UVUR7MCU.$, { colorScheme: "primary", isLoading: isSubmitting, type: "submit", children: t("Submit") }),
                ],
              }),
            ],
          }),
        });
      }
      MapColumns.displayName = "MapColumns";
      try {
        (mapcolumns.displayName = "mapcolumns"),
          (mapcolumns.__docgenInfo = {
            description: "",
            displayName: "mapcolumns",
            props: {
              template: { defaultValue: null, description: "", name: "template", required: !0, type: { name: "Template" } },
              data: { defaultValue: null, description: "", name: "data", required: !0, type: { name: "FileData" } },
              columnMapping: {
                defaultValue: null,
                description: "",
                name: "columnMapping",
                required: !0,
                type: { name: "{ [index: number]: TemplateColumnMapping; }" },
              },
              selectedHeaderRow: { defaultValue: null, description: "", name: "selectedHeaderRow", required: !0, type: { name: "number | null" } },
              skipHeaderRowSelection: {
                defaultValue: null,
                description: "",
                name: "skipHeaderRowSelection",
                required: !1,
                type: { name: "boolean" },
              },
              onSuccess: {
                defaultValue: null,
                description: "",
                name: "onSuccess",
                required: !0,
                type: { name: "(columnMapping: { [index: number]: TemplateColumnMapping; }) => void" },
              },
              onCancel: { defaultValue: null, description: "", name: "onCancel", required: !0, type: { name: "() => void" } },
              isSubmitting: { defaultValue: null, description: "", name: "isSubmitting", required: !0, type: { name: "boolean" } },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/importer/features/map-columns/index.tsx#mapcolumns"] = {
              docgenInfo: mapcolumns.__docgenInfo,
              name: "mapcolumns",
              path: "src/importer/features/map-columns/index.tsx#mapcolumns",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var chunk_3KCBMPN5 = __webpack_require__("./node_modules/@chakra-ui/alert/dist/chunk-3KCBMPN5.mjs"),
        RowSelection_module = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/features/row-selection/style/RowSelection.module.scss"
        ),
        RowSelection_module_options = {};
      (RowSelection_module_options.styleTagTransform = styleTagTransform_default()),
        (RowSelection_module_options.setAttributes = setAttributesWithoutAttributes_default()),
        (RowSelection_module_options.insert = insertBySelector_default().bind(null, "head")),
        (RowSelection_module_options.domAPI = styleDomAPI_default()),
        (RowSelection_module_options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(RowSelection_module.A, RowSelection_module_options);
      const style_RowSelection_module = RowSelection_module.A && RowSelection_module.A.locals ? RowSelection_module.A.locals : void 0;
      function RowSelection({ data, onSuccess, onCancel, selectedHeaderRow, setSelectedHeaderRow }) {
        const { t } = (0, es.Bd)(),
          [isLoading, setIsLoading] = (0, react.useState)(!1),
          handleRadioChange = (e) => {
            setSelectedHeaderRow(Number(e.target.value));
          },
          dataWithRadios = data.rows.slice(0, 50).map((row) => {
            const nameWithRadio = (0, jsx_runtime.jsxs)("span", {
                children: [
                  (0, jsx_runtime.jsx)("input", {
                    type: "radio",
                    id: `radio-${row.index}`,
                    className: style_RowSelection_module.inputRadio,
                    name: "rowSelection",
                    value: row.index,
                    checked: selectedHeaderRow === row.index,
                    onChange: handleRadioChange,
                  }),
                  row.values?.[0],
                ],
              }),
              mappedRow = Object.entries(row.values).map(([key, value]) => [
                key,
                { raw: value, content: "0" === key ? nameWithRadio : (0, jsx_runtime.jsx)("span", { children: value }), tooltip: value },
              ]);
            return Object.fromEntries(mappedRow);
          }),
          uploadRow = data.rows[0] ?? { values: {} },
          numberOfColumns = Math.min(Object.keys(uploadRow.values).length, 7),
          widthPercentage = 100 / numberOfColumns,
          columnWidths = Array(numberOfColumns).fill(`${widthPercentage}%`),
          hasMultipleExcelSheets = (data.sheetList.length ?? 0) > 1;
        return (0, jsx_runtime.jsx)("div", {
          className: style_RowSelection_module.content,
          children: (0, jsx_runtime.jsxs)("form", {
            children: [
              data
                ? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                      hasMultipleExcelSheets
                        ? (0, jsx_runtime.jsxs)(chunk_3KCBMPN5.F, {
                            status: "info",
                            children: [
                              (0, jsx_runtime.jsx)(index_esm.Ia7, { className: style_RowSelection_module.warningIcon }),
                              t(
                                "Only the first sheet (&quot;{{sheet}}&quot;) of the Excel file will be imported. To import multiple sheets, please upload each sheet individually.",
                                { sheet: data.sheetList[0] }
                              ),
                            ],
                          })
                        : null,
                      (0, jsx_runtime.jsx)("div", {
                        className: style_RowSelection_module.tableWrapper,
                        children: (0, jsx_runtime.jsx)(Table, {
                          fixHeader: !0,
                          mergeThemes: !0,
                          data: dataWithRadios || [],
                          heading: (0, jsx_runtime.jsx)("div", {
                            className: style_RowSelection_module.headingCaption,
                            children: (0, jsx_runtime.jsx)(Tooltip, {
                              title: t("Select the row which contains the column headers"),
                              children: t("Select Header Row"),
                            }),
                          }),
                          keyAsId: "index",
                          background: "zebra",
                          columnWidths,
                          columnAlignments: Array(numberOfColumns).fill("left"),
                          onRowClick: (row) => setSelectedHeaderRow(dataWithRadios?.indexOf(row) || 0),
                        }),
                      }),
                    ],
                  })
                : (0, jsx_runtime.jsx)(jsx_runtime.Fragment, { children: t("Loading...") }),
              (0, jsx_runtime.jsxs)("div", {
                className: style_RowSelection_module.actions,
                children: [
                  (0, jsx_runtime.jsx)(chunk_UVUR7MCU.$, {
                    type: "button",
                    colorScheme: "secondary",
                    onClick: onCancel,
                    isDisabled: isLoading,
                    children: t("Cancel"),
                  }),
                  (0, jsx_runtime.jsx)(chunk_UVUR7MCU.$, {
                    colorScheme: "primary",
                    onClick: (e) => {
                      e.preventDefault(), setIsLoading(!0), onSuccess(), setIsLoading(!1);
                    },
                    isLoading,
                    type: "submit",
                    children: t("Continue"),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      RowSelection.displayName = "RowSelection";
      try {
        (rowselection.displayName = "rowselection"),
          (rowselection.__docgenInfo = {
            description: "",
            displayName: "rowselection",
            props: {
              data: { defaultValue: null, description: "", name: "data", required: !0, type: { name: "FileData" } },
              onSuccess: { defaultValue: null, description: "", name: "onSuccess", required: !0, type: { name: "() => void" } },
              onCancel: { defaultValue: null, description: "", name: "onCancel", required: !0, type: { name: "() => void" } },
              selectedHeaderRow: { defaultValue: null, description: "", name: "selectedHeaderRow", required: !0, type: { name: "number | null" } },
              setSelectedHeaderRow: {
                defaultValue: null,
                description: "",
                name: "setSelectedHeaderRow",
                required: !0,
                type: { name: "(id: number) => void" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/importer/features/row-selection/index.tsx#rowselection"] = {
              docgenInfo: rowselection.__docgenInfo,
              name: "rowselection",
              path: "src/importer/features/row-selection/index.tsx#rowselection",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var dist_es = __webpack_require__("./node_modules/react-dropzone/dist/es/index.js"),
        box = __webpack_require__("./node_modules/@chakra-ui/react/dist/esm/box/box.mjs"),
        typography_text = __webpack_require__("./node_modules/@chakra-ui/react/dist/esm/typography/text.mjs"),
        esm = __webpack_require__("./node_modules/zustand/esm/index.mjs"),
        middleware = __webpack_require__("./node_modules/zustand/esm/middleware.mjs");
      const stores_theme = (0, esm.vt)()(
        (0, middleware.Zr)(
          (set) => ({
            theme: "undefined" != typeof window ? localStorage.getItem("csv-importer-theme") : "light",
            setTheme: (newTheme) => set((state) => ({ theme: newTheme || ("light" === state.theme ? "dark" : "light") })),
          }),
          { name: "csv-importer-theme" }
        )
      );
      function UploaderWrapper({ onSuccess, setDataError, ...props }) {
        const [loading, setLoading] = (0, react.useState)(!1),
          theme = stores_theme((state) => state.theme),
          { t } = (0, es.Bd)(),
          { getRootProps, getInputProps, isDragActive, open } = (0, dist_es.VB)({
            noClick: !0,
            noKeyboard: !0,
            maxFiles: 1,
            accept: {
              "application/vnd.ms-excel": [".xls"],
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
              "text/csv": [".csv"],
            },
            onDropRejected: (fileRejections) => {
              setLoading(!1);
              const errorMessage = fileRejections[0].errors[0].message;
              setDataError(errorMessage);
            },
            onDropAccepted: async ([file]) => {
              setLoading(!0), onSuccess(file), setLoading(!1);
            },
          });
        return (0, jsx_runtime.jsx)(box.a, {
          padding: "15px",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--border-radius-2)",
          children: (0, jsx_runtime.jsxs)(box.a, {
            ...getRootProps(),
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            flex: 1,
            border: "2px dashed var(--color-border)",
            borderRadius: "var(--border-radius-2)",
            children: [
              (0, jsx_runtime.jsx)("input", { ...getInputProps() }),
              isDragActive
                ? (0, jsx_runtime.jsx)(typography_text.E, { children: t("Drop your file here") })
                : loading
                ? (0, jsx_runtime.jsx)(typography_text.E, { children: t("Loading...") })
                : (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                      (0, jsx_runtime.jsx)(typography_text.E, { children: t("Drop your file here") }),
                      (0, jsx_runtime.jsx)(typography_text.E, { children: t("or") }),
                      (0, jsx_runtime.jsx)(chunk_UVUR7MCU.$, {
                        leftIcon: (0, jsx_runtime.jsx)(index_esm.K8w, {}),
                        onClick: open,
                        mt: "6px",
                        colorScheme: "secondary",
                        variant: "light" === theme ? "outline" : "solid",
                        _hover:
                          "light" === theme ? { background: "var(--color-primary)", color: "var(--color-text)", borderColor: "#757575" } : void 0,
                        children: t("Browse files"),
                      }),
                    ],
                  }),
            ],
          }),
        });
      }
      UploaderWrapper.displayName = "UploaderWrapper";
      try {
        (UploaderWrapper.displayName = "UploaderWrapper"),
          (UploaderWrapper.__docgenInfo = {
            description: "",
            displayName: "UploaderWrapper",
            props: {
              showDownloadTemplateButton: {
                defaultValue: null,
                description: "",
                name: "showDownloadTemplateButton",
                required: !1,
                type: { name: "boolean" },
              },
              skipHeaderRowSelection: {
                defaultValue: null,
                description: "",
                name: "skipHeaderRowSelection",
                required: !0,
                type: { name: "boolean" },
              },
              onSuccess: { defaultValue: null, description: "", name: "onSuccess", required: !0, type: { name: "(file: File) => void" } },
              setDataError: {
                defaultValue: null,
                description: "",
                name: "setDataError",
                required: !0,
                type: { name: "Dispatch<SetStateAction<string | null>>" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/importer/components/UploaderWrapper/UploaderWrapper.tsx#UploaderWrapper"] = {
              docgenInfo: UploaderWrapper.__docgenInfo,
              name: "UploaderWrapper",
              path: "src/importer/components/UploaderWrapper/UploaderWrapper.tsx#UploaderWrapper",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function useTemplateTable(fields = []) {
        if (!fields) return [];
        const { t } = (0, es.Bd)(),
          expectedColumnKey = t("Expected Column"),
          requiredKey = t("Required");
        return (0, react.useMemo)(
          () =>
            fields.map((item) => ({
              [expectedColumnKey]: item?.description
                ? {
                    raw: item.name,
                    content: (0, jsx_runtime.jsx)("div", {
                      children: (0, jsx_runtime.jsx)(Tooltip, { title: item?.description, children: item.name }),
                    }),
                  }
                : item.name,
              [requiredKey]: {
                raw: item?.required ? 1 : 0,
                content: item?.required ? (0, jsx_runtime.jsx)(index_esm.HTu, {}) : (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
              },
            })),
          [fields]
        );
      }
      try {
        (useTemplateTable.displayName = "useTemplateTable"),
          (useTemplateTable.__docgenInfo = { description: "", displayName: "useTemplateTable", props: {} }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/importer/features/uploader/hooks/useTemplateTable.tsx#useTemplateTable"] = {
              docgenInfo: useTemplateTable.__docgenInfo,
              name: "useTemplateTable",
              path: "src/importer/features/uploader/hooks/useTemplateTable.tsx#useTemplateTable",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Uploader_module = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/features/uploader/style/Uploader.module.scss"
        ),
        Uploader_module_options = {};
      (Uploader_module_options.styleTagTransform = styleTagTransform_default()),
        (Uploader_module_options.setAttributes = setAttributesWithoutAttributes_default()),
        (Uploader_module_options.insert = insertBySelector_default().bind(null, "head")),
        (Uploader_module_options.domAPI = styleDomAPI_default()),
        (Uploader_module_options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Uploader_module.A, Uploader_module_options);
      const style_Uploader_module = Uploader_module.A && Uploader_module.A.locals ? Uploader_module.A.locals : void 0;
      function Uploader({ template, skipHeaderRowSelection, onSuccess, showDownloadTemplateButton, setDataError }) {
        const fields = useTemplateTable(template.columns),
          theme = stores_theme((state) => state.theme),
          uploaderWrapper = (0, jsx_runtime.jsx)(UploaderWrapper, { onSuccess, skipHeaderRowSelection, setDataError });
        showDownloadTemplateButton = showDownloadTemplateButton ?? !0;
        const { t } = (0, es.Bd)();
        const downloadTemplateButton = showDownloadTemplateButton
          ? (0, jsx_runtime.jsx)(chunk_UVUR7MCU.$, {
              width: "100%",
              leftIcon: (0, jsx_runtime.jsx)(index_esm.Inw, {}),
              onClick: function downloadTemplate() {
                const { columns } = template,
                  csvData = `${columns.map((obj) => obj.name).join(",")}`,
                  link = document.createElement("a");
                (link.href = URL.createObjectURL(new Blob([csvData], { type: "text/csv" }))), (link.download = "example.csv"), link.click();
              },
              colorScheme: "secondary",
              variant: "light" === theme ? "outline" : "solid",
              _hover: "light" === theme ? { background: "var(--color-primary)", color: "var(--color-text)", borderColor: "#757575" } : void 0,
              children: t("Download Template"),
            })
          : null;
        return (0, jsx_runtime.jsxs)("div", {
          className: style_Uploader_module.content,
          children: [
            uploaderWrapper,
            (0, jsx_runtime.jsxs)("div", {
              className: style_Uploader_module.box,
              children: [
                (0, jsx_runtime.jsx)("div", {
                  className: style_Uploader_module.tableContainer,
                  children: (0, jsx_runtime.jsx)(Table, {
                    fixHeader: !0,
                    data: fields,
                    background: "transparent",
                    columnWidths: ["65%", "35%"],
                    columnAlignments: ["", "center"],
                  }),
                }),
                downloadTemplateButton,
              ],
            }),
          ],
        });
      }
      Uploader.displayName = "Uploader";
      try {
        (uploader.displayName = "uploader"),
          (uploader.__docgenInfo = {
            description: "",
            displayName: "uploader",
            props: {
              template: { defaultValue: null, description: "", name: "template", required: !0, type: { name: "Template" } },
              skipHeaderRowSelection: {
                defaultValue: null,
                description: "",
                name: "skipHeaderRowSelection",
                required: !0,
                type: { name: "boolean" },
              },
              onSuccess: { defaultValue: null, description: "", name: "onSuccess", required: !0, type: { name: "(file: File) => void" } },
              showDownloadTemplateButton: {
                defaultValue: null,
                description: "",
                name: "showDownloadTemplateButton",
                required: !1,
                type: { name: "boolean" },
              },
              setDataError: {
                defaultValue: null,
                description: "",
                name: "setDataError",
                required: !0,
                type: { name: "Dispatch<SetStateAction<string | null>>" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/importer/features/uploader/index.tsx#uploader"] = {
              docgenInfo: uploader.__docgenInfo,
              name: "uploader",
              path: "src/importer/features/uploader/index.tsx#uploader",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function Main(props) {
        const {
            isModal = !0,
            modalOnCloseTriggered = () => null,
            template,
            onComplete,
            customStyles,
            showDownloadTemplateButton,
            skipHeaderRowSelection,
            passedData,
            hasCustomFields,
          } = props,
          skipHeader = skipHeaderRowSelection ?? !1,
          { t } = (0, es.Bd)();
        !(function useCustomStyles(customStyles) {
          (0, react.useEffect)(() => {
            if (customStyles) {
              const parsedStyles = JSON.parse(customStyles);
              parsedStyles &&
                Object.keys(parsedStyles).forEach((key) => {
                  const root = document.documentElement,
                    value = parsedStyles?.[key];
                  root.style.setProperty("--" + key, value);
                });
            }
          }, [customStyles]);
        })(
          ((name, param) => {
            if (void 0 === param) return "";
            let parsedObj = {};
            if ("string" == typeof param)
              try {
                parsedObj = JSON.parse(param);
              } catch (e) {
                return (
                  console.error(
                    `The '${name}' prop is not a valid JSON string. This prop can either be a JSON string or JSON object. Please check the documentation for more details.`
                  ),
                  ""
                );
              }
            else parsedObj = param;
            for (const key in parsedObj) "string" == typeof parsedObj[key] && (parsedObj[key] = parsedObj[key].replace(/%(?!25)/g, "%25"));
            return JSON.stringify(parsedObj);
          })("customStyles", customStyles)
        );
        const { currentStep, setStep, goNext, goBack, stepper, setStorageStep } = hooks_useStepNavigation(StepEnum_Upload, skipHeader),
          [initializationError, setInitializationError] = (0, react.useState)(null),
          [dataError, setDataError] = (0, react.useState)(null),
          emptyData = { fileName: "", rows: [], sheetList: [], errors: [] },
          [data, setData] = (0, react.useState)(emptyData),
          [selectedHeaderRow, setSelectedHeaderRow] = (0, react.useState)(0),
          [columnMapping, setColumnMapping] = (0, react.useState)({}),
          [isSubmitting, setIsSubmitting] = (0, react.useState)(!1),
          [parsedTemplate, setParsedTemplate] = (0, react.useState)({ columns: [] });
        (0, react.useEffect)(() => {
          const [parsedTemplate, parsedTemplateError] = convertRawTemplate(template, hasCustomFields || !1);
          parsedTemplateError ? setInitializationError(parsedTemplateError) : parsedTemplate && setParsedTemplate(parsedTemplate);
        }, [template]),
          (0, react.useEffect)(() => {
            0 === data.rows.length && currentStep !== StepEnum_Upload && reload();
          }, [data]),
          (0, react.useEffect)(() => {
            passedData &&
              Array.isArray(passedData) &&
              passedData.length > 0 &&
              (setData({ fileName: "Import test", rows: passedData, sheetList: [], errors: [] }), goNext());
          }, [passedData]);
        const reload = () => {
            setData(emptyData), setSelectedHeaderRow(0), setColumnMapping({}), setDataError(null), setStep(StepEnum_Upload);
          },
          requestClose = () => {
            isModal && (modalOnCloseTriggered && modalOnCloseTriggered(), currentStep === StepEnum_Complete && reload());
          };
        if (initializationError)
          return (0, jsx_runtime.jsx)("div", {
            className: style_Main_module.wrapper,
            children: (0, jsx_runtime.jsx)(Errors, { error: initializationError, centered: !0 }),
          });
        return (0, jsx_runtime.jsxs)("div", {
          className: style_Main_module.wrapper,
          children: [
            (0, jsx_runtime.jsx)("div", { children: (0, jsx_runtime.jsx)(Stepper, { ...stepper }) }),
            (0, jsx_runtime.jsx)("div", {
              className: style_Main_module.content,
              children: (() => {
                switch (currentStep) {
                  case StepEnum_Upload:
                    return (0, jsx_runtime.jsx)(Uploader, {
                      template: parsedTemplate,
                      skipHeaderRowSelection: skipHeader || !1,
                      showDownloadTemplateButton,
                      setDataError,
                      onSuccess: async (file) => {
                        setDataError(null);
                        const fileType = file.name.slice(file.name.lastIndexOf(".") + 1);
                        if (!["csv", "xls", "xlsx"].includes(fileType)) return void setDataError(t("Only CSV, XLS, and XLSX files can be uploaded"));
                        const reader = new FileReader(),
                          isNotBlankRow = (row) => row.some((cell) => "" !== cell.toString().trim());
                        switch (
                          ((reader.onload = async (e) => {
                            const bstr = e?.target?.result;
                            if (bstr)
                              switch (fileType) {
                                case "csv":
                                  papaparse_min_default().parse(bstr.toString(), {
                                    complete: function (results) {
                                      const rows = results.data.filter(isNotBlankRow).map((row, index) => ({ index, values: row }));
                                      setData({ fileName: file.name, rows, sheetList: [], errors: results.errors.map((error) => error.message) }),
                                        goNext();
                                    },
                                  });
                                  break;
                                case "xlsx":
                                case "xls":
                                  const workbook = xlsx.LF(bstr, { type: "binary" }),
                                    sheetList = workbook.SheetNames,
                                    rows = xlsx.Wp.sheet_to_json(workbook.Sheets[sheetList[0]], { header: 1 })
                                      .filter(isNotBlankRow)
                                      .map((row, index) => ({ index, values: row }));
                                  setData({ fileName: file.name, rows, sheetList, errors: [] }), goNext();
                              }
                          }),
                          fileType)
                        ) {
                          case "csv":
                            reader.readAsText(file, "utf-8");
                            break;
                          case "xlsx":
                          case "xls":
                            reader.readAsBinaryString(file);
                        }
                      },
                    });
                  case StepEnum_RowSelection:
                    return (0, jsx_runtime.jsx)(RowSelection, {
                      data,
                      onCancel: reload,
                      onSuccess: () => goNext(),
                      selectedHeaderRow,
                      setSelectedHeaderRow,
                    });
                  case StepEnum_MapColumns:
                    return (0, jsx_runtime.jsx)(MapColumns, {
                      template: parsedTemplate,
                      data,
                      columnMapping,
                      skipHeaderRowSelection: skipHeader,
                      selectedHeaderRow,
                      onSuccess: (columnMapping) => {
                        setIsSubmitting(!0), setColumnMapping(columnMapping);
                        const startIndex = (selectedHeaderRow || 0) + 1,
                          headerRow = data.rows[selectedHeaderRow || 0].values,
                          mappedRows = [];
                        data.rows.slice(startIndex).forEach((row) => {
                          const resultingRow = { index: row.index - startIndex, values: {} };
                          let customCount = 1;
                          row.values.forEach((value, valueIndex) => {
                            const mapping = columnMapping[valueIndex];
                            mapping &&
                              mapping.include &&
                              ("custom" === mapping.key
                                ? ((resultingRow.values["custom_header" + customCount] = headerRow[valueIndex] || ""),
                                  (resultingRow.values[mapping.key + "_field" + customCount] = value),
                                  customCount++)
                                : (resultingRow.values[mapping.key] = value));
                          }),
                            mappedRows.push(resultingRow);
                        });
                        const includedColumns = Object.values(columnMapping).filter(({ include }) => include),
                          onCompleteData = {
                            num_rows: mappedRows.length,
                            num_columns: includedColumns.length,
                            error: null,
                            columns: includedColumns.map(({ key }) => ({ key, name: key })),
                            rows: mappedRows,
                          };
                        onComplete && onComplete(onCompleteData), setIsSubmitting(!1), goNext();
                      },
                      isSubmitting,
                      onCancel: skipHeader ? reload : () => goBack(StepEnum_RowSelection),
                    });
                  case StepEnum_Complete:
                    return (0, jsx_runtime.jsx)(Complete, { reload, close: requestClose, isModal });
                  default:
                    return null;
                }
              })(),
            }),
            !!dataError &&
              (0, jsx_runtime.jsxs)("div", {
                className: style_Main_module.status,
                children: [
                  (0, jsx_runtime.jsx)("div", {}),
                  (0, jsx_runtime.jsx)(Errors, { error: dataError, centered: !0 }),
                  (0, jsx_runtime.jsx)("div", {}),
                ],
              }),
            isModal &&
              (0, jsx_runtime.jsx)(chunk_6QYXN73V.K, {
                isRound: !0,
                className: style_Main_module.close,
                colorScheme: "secondary",
                "aria-label": "Close",
                icon: (0, jsx_runtime.jsx)(index_esm.yBK, {}),
                onClick: requestClose,
              }),
          ],
        });
      }
      Main.displayName = "Main";
      try {
        (main.displayName = "main"),
          (main.__docgenInfo = {
            description: "",
            displayName: "main",
            props: {
              template: { defaultValue: null, description: "", name: "template", required: !1, type: { name: "string | Record<string, unknown>" } },
              darkMode: { defaultValue: null, description: "", name: "darkMode", required: !1, type: { name: "boolean" } },
              primaryColor: { defaultValue: null, description: "", name: "primaryColor", required: !1, type: { name: "string" } },
              onComplete: { defaultValue: null, description: "", name: "onComplete", required: !1, type: { name: "((data: any) => void)" } },
              waitOnComplete: { defaultValue: null, description: "", name: "waitOnComplete", required: !1, type: { name: "boolean" } },
              customStyles: {
                defaultValue: null,
                description: "",
                name: "customStyles",
                required: !1,
                type: { name: "string | Record<string, string>" },
              },
              showDownloadTemplateButton: {
                defaultValue: null,
                description: "",
                name: "showDownloadTemplateButton",
                required: !1,
                type: { name: "boolean" },
              },
              skipHeaderRowSelection: {
                defaultValue: null,
                description: "",
                name: "skipHeaderRowSelection",
                required: !1,
                type: { name: "boolean" },
              },
              language: { defaultValue: null, description: "", name: "language", required: !1, type: { name: "string" } },
              customTranslations: { defaultValue: null, description: "", name: "customTranslations", required: !1, type: { name: "Resource" } },
              passedData: { defaultValue: null, description: "", name: "passedData", required: !1, type: { name: "FileRow[]" } },
              hasCustomFields: { defaultValue: null, description: "", name: "hasCustomFields", required: !1, type: { name: "boolean" } },
              isModal: { defaultValue: null, description: "", name: "isModal", required: !1, type: { name: "boolean" } },
              modalIsOpen: { defaultValue: null, description: "", name: "modalIsOpen", required: !1, type: { name: "boolean" } },
              modalOnCloseTriggered: {
                defaultValue: null,
                description: "",
                name: "modalOnCloseTriggered",
                required: !1,
                type: { name: "(() => void)" },
              },
              modalCloseOnOutsideClick: {
                defaultValue: null,
                description: "",
                name: "modalCloseOnOutsideClick",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/importer/features/main/index.tsx#main"] = {
              docgenInfo: main.__docgenInfo,
              name: "main",
              path: "src/importer/features/main/index.tsx#main",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var lib_esm = __webpack_require__("./node_modules/react-icons/lib/esm/index.js"),
        extend_theme = __webpack_require__("./node_modules/@chakra-ui/react/dist/esm/extend-theme/extend-theme.mjs"),
        chakra_provider = __webpack_require__("./node_modules/@chakra-ui/react/dist/esm/chakra-provider.mjs"),
        emotion_cache_browser_esm = __webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),
        emotion_element_f0de968e_browser_esm = __webpack_require__("./node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js"),
        define_styles = __webpack_require__("./node_modules/@chakra-ui/styled-system/dist/esm/define-styles.mjs");
      const Alert = (0, define_styles.Dt)({
          baseStyle: (props) => ({
            container: {
              backgroundColor: "info" === props.status ? "var(--color-background-modal)" : "",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--border-radius-2)",
              fontWeight: "400",
            },
            title: { color: "inherit" },
            description: { color: "inherit" },
            icon: { color: "inherit" },
          }),
        }),
        Button = (0, define_styles.Dt)({
          baseStyle: {
            fontWeight: "normal",
            borderRadius: "base",
            height: "auto",
            lineHeight: "1",
            fontSize: "inherit",
            border: "none",
            cursor: "pointer",
          },
          sizes: { sm: { fontSize: "sm", px: 4, py: 3 }, md: { fontSize: "md", px: 6, py: 4 } },
          variants: {
            solid: (props) =>
              "secondary" === props.colorScheme
                ? {
                    _hover: { backgroundColor: "var(--external-colors-secondary-300)", borderColor: "#757575" },
                    color: "var(--color-text-on-secondary)",
                  }
                : { color: "var(--color-text-on-primary)", _hover: { backgroundColor: "var(--external-colors-primary-300)" } },
          },
          defaultProps: {},
        }),
        foundations_borders = { none: 0, "1px": "1px solid", "2px": "2px solid", "4px": "4px solid", "8px": "8px solid" },
        foundations_shadows = {
          xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
          sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
          base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
          md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
          inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
          none: "none",
          "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
        },
        spacing = {
          px: "1px",
          0.5: "calc(var(--base-spacing) * 0.083)",
          1: "calc(var(--base-spacing) * 0.167)",
          1.5: "calc(var(--base-spacing) * 1)",
          2: "calc(var(--base-spacing) * 0.333)",
          2.5: "calc(var(--base-spacing) * 0.417)",
          3: "calc(var(--base-spacing) * 0.5)",
          3.5: "calc(var(--base-spacing) * 0.583)",
          4: "calc(var(--base-spacing) * 0.667)",
          5: "calc(var(--base-spacing) * 0.833)",
          6: "calc(var(--base-spacing) * 1)",
          7: "calc(var(--base-spacing) * 1.167)",
          8: "calc(var(--base-spacing) * 1.333)",
          9: "calc(var(--base-spacing) * 1.5)",
          10: "calc(var(--base-spacing) * 1.667)",
          12: "calc(var(--base-spacing) * 2)",
          14: "calc(var(--base-spacing) * 2.333)",
          16: "calc(var(--base-spacing) * 2.667)",
          20: "calc(var(--base-spacing) * 3.333)",
          24: "calc(var(--base-spacing) * 4)",
          28: "calc(var(--base-spacing) * 4.667)",
          32: "calc(var(--base-spacing) * 5.333)",
          36: "calc(var(--base-spacing) * 6)",
          40: "calc(var(--base-spacing) * 6.667)",
          44: "calc(var(--base-spacing) * 7.333)",
          48: "calc(var(--base-spacing) * 8)",
          52: "calc(var(--base-spacing) * 8.667)",
          56: "calc(var(--base-spacing) * 9.333)",
          60: "calc(var(--base-spacing) * 10)",
          64: "calc(var(--base-spacing) * 10.667)",
          72: "calc(var(--base-spacing) * 12)",
          80: "calc(var(--base-spacing) * 13.333)",
          96: "calc(var(--base-spacing) * 16)",
        },
        chakra = {
          semanticTokens: {
            colors: {
              "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
              "chakra-body-bg": { _light: "white", _dark: "gray.800" },
              "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
              "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
              "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
              "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
              "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" },
            },
          },
          direction: "ltr",
          ...{
            breakpoints: { base: "0em", sm: "30em", md: "48em", lg: "62em", xl: "80em", "2xl": "96em" },
            zIndices: {
              hide: -1,
              auto: "auto",
              base: 0,
              docked: 10,
              dropdown: 1e3,
              sticky: 1100,
              banner: 1200,
              overlay: 1300,
              modal: 1400,
              popover: 1500,
              skipLink: 1600,
              toast: 1700,
              tooltip: 1800,
            },
            radii: {
              none: "0",
              sm: "var(--border-radius)",
              base: "var(--border-radius-2)",
              md: "var(--border-radius-3)",
              lg: "var(--border-radius-4)",
              xl: "var(--border-radius-5)",
              "2xl": "calc(var(--border-radius-5) * 1.5)",
              "3xl": "calc(var(--border-radius-5) * 2)",
              full: "9999px",
            },
            blur: { none: 0, sm: "4px", base: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" },
            colors: {
              transparent: "transparent",
              current: "currentColor",
              black: "#000000",
              white: "#FFFFFF",
              primary: {
                50: "var(--color-primary)",
                100: "var(--color-primary)",
                200: "var(--color-primary)",
                300: "var(--color-primary-hover)",
                400: "var(--color-primary)",
                500: "var(--color-primary)",
                600: "var(--color-primary)",
                700: "var(--color-primary)",
                800: "var(--color-primary)",
                900: "var(--color-primary)",
              },
              secondary: {
                50: "var(--color-secondary)",
                100: "var(--color-secondary)",
                200: "var(--color-secondary)",
                300: "var(--color-secondary-hover)",
                400: "var(--color-secondary)",
                500: "var(--color-secondary)",
                600: "var(--color-secondary)",
                700: "var(--color-secondary)",
                800: "var(--color-secondary)",
                900: "var(--color-secondary)",
              },
              whiteAlpha: {
                50: "rgba(255, 255, 255, 0.04)",
                100: "rgba(255, 255, 255, 0.06)",
                200: "rgba(255, 255, 255, 0.08)",
                300: "rgba(255, 255, 255, 0.16)",
                400: "rgba(255, 255, 255, 0.24)",
                500: "rgba(255, 255, 255, 0.36)",
                600: "rgba(255, 255, 255, 0.48)",
                700: "rgba(255, 255, 255, 0.64)",
                800: "rgba(255, 255, 255, 0.80)",
                900: "rgba(255, 255, 255, 0.92)",
              },
              blackAlpha: {
                50: "rgba(0, 0, 0, 0.04)",
                100: "rgba(0, 0, 0, 0.06)",
                200: "rgba(0, 0, 0, 0.08)",
                300: "rgba(0, 0, 0, 0.16)",
                400: "rgba(0, 0, 0, 0.24)",
                500: "rgba(0, 0, 0, 0.36)",
                600: "rgba(0, 0, 0, 0.48)",
                700: "rgba(0, 0, 0, 0.64)",
                800: "rgba(0, 0, 0, 0.80)",
                900: "rgba(0, 0, 0, 0.92)",
              },
              gray: {
                50: "#F7FAFC",
                100: "#EDF2F7",
                200: "#E2E8F0",
                300: "#CBD5E0",
                400: "#A0AEC0",
                500: "#718096",
                600: "#4A5568",
                700: "#2D3748",
                800: "#1A202C",
                900: "#171923",
              },
              red: {
                50: "#FFF5F5",
                100: "#FED7D7",
                200: "#FEB2B2",
                300: "#FC8181",
                400: "#F56565",
                500: "#E53E3E",
                600: "#C53030",
                700: "#9B2C2C",
                800: "#822727",
                900: "#63171B",
              },
              orange: {
                50: "#FFFAF0",
                100: "#FEEBC8",
                200: "#FBD38D",
                300: "#F6AD55",
                400: "#ED8936",
                500: "#DD6B20",
                600: "#C05621",
                700: "#9C4221",
                800: "#7B341E",
                900: "#652B19",
              },
              yellow: {
                50: "#FFFFF0",
                100: "#FEFCBF",
                200: "#FAF089",
                300: "#F6E05E",
                400: "#ECC94B",
                500: "#D69E2E",
                600: "#B7791F",
                700: "#975A16",
                800: "#744210",
                900: "#5F370E",
              },
              green: {
                50: "#F0FFF4",
                100: "#C6F6D5",
                200: "#9AE6B4",
                300: "#68D391",
                400: "#48BB78",
                500: "#38A169",
                600: "#2F855A",
                700: "#276749",
                800: "#22543D",
                900: "#1C4532",
              },
              teal: {
                50: "#E6FFFA",
                100: "#B2F5EA",
                200: "#81E6D9",
                300: "#4FD1C5",
                400: "#38B2AC",
                500: "#319795",
                600: "#2C7A7B",
                700: "#285E61",
                800: "#234E52",
                900: "#1D4044",
              },
              blue: {
                50: "#ebf8ff",
                100: "#bee3f8",
                200: "#90cdf4",
                300: "#63b3ed",
                400: "#4299e1",
                500: "#3182ce",
                600: "#2b6cb0",
                700: "#2c5282",
                800: "#2a4365",
                900: "#1A365D",
              },
              cyan: {
                50: "#EDFDFD",
                100: "#C4F1F9",
                200: "#9DECF9",
                300: "#76E4F7",
                400: "#0BC5EA",
                500: "#00B5D8",
                600: "#00A3C4",
                700: "#0987A0",
                800: "#086F83",
                900: "#065666",
              },
              purple: {
                50: "#FAF5FF",
                100: "#E9D8FD",
                200: "#D6BCFA",
                300: "#B794F4",
                400: "#9F7AEA",
                500: "#805AD5",
                600: "#6B46C1",
                700: "#553C9A",
                800: "#44337A",
                900: "#322659",
              },
              pink: {
                50: "#FFF5F7",
                100: "#FED7E2",
                200: "#FBB6CE",
                300: "#F687B3",
                400: "#ED64A6",
                500: "#D53F8C",
                600: "#B83280",
                700: "#97266D",
                800: "#702459",
                900: "#521B41",
              },
              linkedin: {
                50: "#E8F4F9",
                100: "#CFEDFB",
                200: "#9BDAF3",
                300: "#68C7EC",
                400: "#34B3E4",
                500: "#00A0DC",
                600: "#008CC9",
                700: "#0077B5",
                800: "#005E93",
                900: "#004471",
              },
              facebook: {
                50: "#E8F4F9",
                100: "#D9DEE9",
                200: "#B7C2DA",
                300: "#6482C0",
                400: "#4267B2",
                500: "#385898",
                600: "#314E89",
                700: "#29487D",
                800: "#223B67",
                900: "#1E355B",
              },
              messenger: {
                50: "#D0E6FF",
                100: "#B9DAFF",
                200: "#A2CDFF",
                300: "#7AB8FF",
                400: "#2E90FF",
                500: "#0078FF",
                600: "#0063D1",
                700: "#0052AC",
                800: "#003C7E",
                900: "#002C5C",
              },
              whatsapp: {
                50: "#dffeec",
                100: "#b9f5d0",
                200: "#90edb3",
                300: "#65e495",
                400: "#3cdd78",
                500: "#22c35e",
                600: "#179848",
                700: "#0c6c33",
                800: "#01421c",
                900: "#001803",
              },
              twitter: {
                50: "#E5F4FD",
                100: "#C8E9FB",
                200: "#A8DCFA",
                300: "#83CDF7",
                400: "#57BBF5",
                500: "#1DA1F2",
                600: "#1A94DA",
                700: "#1681BF",
                800: "#136B9E",
                900: "#0D4D71",
              },
              telegram: {
                50: "#E3F2F9",
                100: "#C5E4F3",
                200: "#A2D4EC",
                300: "#7AC1E4",
                400: "#47A9DA",
                500: "#0088CC",
                600: "#007AB8",
                700: "#006BA1",
                800: "#005885",
                900: "#003F5E",
              },
            },
            ...{
              letterSpacings: { tighter: "-0.05em", tight: "-0.025em", normal: "0", wide: "0.025em", wider: "0.05em", widest: "0.1em" },
              lineHeights: {
                normal: "normal",
                none: 1,
                shorter: 1.25,
                short: 1.375,
                base: 1.5,
                tall: 1.625,
                taller: "2",
                3: ".75rem",
                4: "1rem",
                5: "1.25rem",
                6: "1.5rem",
                7: "1.75rem",
                8: "2rem",
                9: "2.25rem",
                10: "2.5rem",
              },
              fontWeights: { hairline: 100, thin: 200, light: 300, normal: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800, black: 900 },
              fonts: {
                heading:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
              },
              fontSizes: {
                "3xs": "calc(var(--font-size) * 0.45)",
                "2xs": "calc(var(--font-size) * 0.625)",
                xs: "calc(var(--font-size) * 0.75)",
                sm: "calc(var(--font-size) * 0.875)",
                md: "calc(var(--font-size) * 1)",
                lg: "calc(var(--font-size) * 1.125)",
                xl: "calc(var(--font-size) * 1.25)",
                "2xl": "calc(var(--font-size) * 1.5)",
                "3xl": "calc(var(--font-size) * 1.875)",
                "4xl": "calc(var(--font-size) * 2.25)",
                "5xl": "calc(var(--font-size) * 3)",
                "6xl": "calc(var(--font-size) * 3.75)",
                "7xl": "calc(var(--font-size) * 4.5)",
                "8xl": "calc(var(--font-size) * 6)",
                "9xl": "calc(var(--font-size) * 8)",
              },
            },
            sizes: {
              ...spacing,
              max: "max-content",
              min: "min-content",
              full: "100%",
              "3xs": "14rem",
              "2xs": "16rem",
              xs: "20rem",
              sm: "24rem",
              md: "28rem",
              lg: "32rem",
              xl: "36rem",
              "2xl": "42rem",
              "3xl": "48rem",
              "4xl": "56rem",
              "5xl": "64rem",
              "6xl": "72rem",
              "7xl": "80rem",
              "8xl": "90rem",
              prose: "60ch",
              container: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
            },
            shadows: foundations_shadows,
            space: spacing,
            borders: foundations_borders,
            transition: {
              property: {
                common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
                colors: "background-color, border-color, color, fill, stroke",
                dimensions: "width, height",
                position: "left, right, top, bottom",
                background: "background-color, background-image, background-position",
              },
              easing: {
                "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
                "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
                "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
              },
              duration: {
                "ultra-fast": "50ms",
                faster: "100ms",
                fast: "150ms",
                normal: "200ms",
                slow: "300ms",
                slower: "400ms",
                "ultra-slow": "500ms",
              },
            },
          },
          styles: {},
          config: { useSystemColorMode: !1, initialColorMode: "light", cssVarPrefix: "external" },
          components: { Button, Alert },
        },
        myCache = (0, emotion_cache_browser_esm.A)({ key: "csv-importer" }),
        chakraTheme = (0, extend_theme.oY)(chakra);
      function ThemeProvider({ children }) {
        return (0, jsx_runtime.jsx)(emotion_element_f0de968e_browser_esm.C, {
          value: myCache,
          children: (0, jsx_runtime.jsx)(chakra_provider.s, {
            resetCSS: !1,
            disableGlobalStyle: !0,
            theme: chakraTheme,
            children: (0, jsx_runtime.jsx)(lib_esm.Vx.Provider, { value: { className: "react-icon", size: sizes_icon.medium }, children }),
          }),
        });
      }
      ThemeProvider.displayName = "ThemeProvider";
      try {
        (Theme.displayName = "Theme"),
          (Theme.__docgenInfo = { description: "", displayName: "Theme", props: {} }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/importer/providers/Theme.tsx#Theme"] = {
              docgenInfo: Theme.__docgenInfo,
              name: "Theme",
              path: "src/importer/providers/Theme.tsx#Theme",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function Providers({ children }) {
        return (0, jsx_runtime.jsx)(ThemeProvider, { children });
      }
      Providers.displayName = "Providers";
      try {
        (providers.displayName = "providers"),
          (providers.__docgenInfo = { description: "", displayName: "providers", props: {} }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/importer/providers/index.tsx#providers"] = {
              docgenInfo: providers.__docgenInfo,
              name: "providers",
              path: "src/importer/providers/index.tsx#providers",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var style = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/style/index.scss"
        ),
        style_options = {};
      (style_options.styleTagTransform = styleTagTransform_default()),
        (style_options.setAttributes = setAttributesWithoutAttributes_default()),
        (style_options.insert = insertBySelector_default().bind(null, "head")),
        (style_options.domAPI = styleDomAPI_default()),
        (style_options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(style.A, style_options);
      style.A && style.A.locals && style.A.locals;
      var csv_importer = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/CSVImporter/style/csv-importer.css"
        ),
        csv_importer_options = {};
      (csv_importer_options.styleTagTransform = styleTagTransform_default()),
        (csv_importer_options.setAttributes = setAttributesWithoutAttributes_default()),
        (csv_importer_options.insert = insertBySelector_default().bind(null, "head")),
        (csv_importer_options.domAPI = styleDomAPI_default()),
        (csv_importer_options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(csv_importer.A, csv_importer_options);
      csv_importer.A && csv_importer.A.locals && csv_importer.A.locals;
      const CSVImporter = (0, react.forwardRef)((importerProps, forwardRef) => {
          const {
              isModal = !0,
              modalIsOpen = !0,
              modalOnCloseTriggered = () => null,
              modalCloseOnOutsideClick,
              template,
              darkMode = !1,
              primaryColor = "#7a5ef8",
              className,
              onComplete,
              customStyles,
              showDownloadTemplateButton,
              skipHeaderRowSelection,
              language,
              customTranslations,
              passedData,
              hasCustomFields,
              ...props
            } = importerProps,
            ref = forwardRef ?? (0, react.useRef)(null),
            { t, i18n } = (0, es.Bd)(),
            current = ref?.current;
          (0, react.useEffect)(() => {
            i18n.changeLanguage(language);
          }, [language]),
            (0, react.useEffect)(() => {
              customTranslations &&
                Object.keys(customTranslations).forEach((language) => {
                  i18n.addResourceBundle(language, "translation", customTranslations[language], !0, !0);
                });
            }, [customTranslations]),
            (0, react.useEffect)(() => {
              isModal && current && (modalIsOpen ? current?.showModal?.() : current?.close?.());
            }, [isModal, modalIsOpen, current]);
          const domElementClass = [
              "csv-importer",
              "CSVImporter-" + (isModal ? "dialog" : "div"),
              darkMode ? "CSVImporter-dark" : "CSVImporter-light",
              className,
            ]
              .filter((i) => i)
              .join(" "),
            setTheme = stores_theme((state) => state.setTheme);
          (0, react.useEffect)(() => {
            setTheme(darkMode ? "dark" : "light");
          }, [darkMode]),
            (0, react.useEffect)(() => {
              if (primaryColor && isValidColor(primaryColor)) {
                const root = document.documentElement;
                root.style.setProperty("--color-primary", primaryColor),
                  root.style.setProperty(
                    "--color-primary-hover",
                    ((color, percent) => {
                      if (!isValidColor(color)) return color;
                      color = ((color) => (
                        4 === color.length && (color = "#" + color[1] + color[1] + color[2] + color[2] + color[3] + color[3]), color
                      ))(color);
                      const num = parseInt(color.replace("#", ""), 16),
                        amt = Math.round(2.55 * percent),
                        R = (num >> 16) - amt,
                        B = ((num >> 8) & 255) - amt,
                        G = (255 & num) - amt;
                      return (
                        "#" +
                        (
                          16777216 +
                          65536 * (R < 255 ? (R < 1 ? 0 : R) : 255) +
                          256 * (B < 255 ? (B < 1 ? 0 : B) : 255) +
                          (G < 255 ? (G < 1 ? 0 : G) : 255)
                        )
                          .toString(16)
                          .slice(1)
                      );
                    })(primaryColor, 20)
                  );
              }
            }, [primaryColor]);
          current?.addEventListener("cancel", () => {
            modalOnCloseTriggered();
          });
          const elementProps = {
              ref,
              ...(isModal
                ? {
                    onClick: (event) => {
                      modalCloseOnOutsideClick && event.target === current && modalOnCloseTriggered();
                    },
                  }
                : {}),
              className: domElementClass,
              "data-theme": darkMode ? "dark" : "light",
              style: { colorScheme: darkMode ? "dark" : "light" },
              ...props,
            },
            ImporterComponent = () => (0, jsx_runtime.jsx)(Providers, { children: (0, jsx_runtime.jsx)(Main, { ...importerProps }) });
          return isModal
            ? (0, jsx_runtime.jsx)("div", {
                className: "csvImporter",
                children: (0, jsx_runtime.jsx)("dialog", { ...elementProps, children: (0, jsx_runtime.jsx)(ImporterComponent, {}) }),
              })
            : (0, jsx_runtime.jsx)("div", { ...elementProps, children: (0, jsx_runtime.jsx)(ImporterComponent, {}) });
        }),
        components_CSVImporter = CSVImporter;
      try {
        (CSVImporter.displayName = "CSVImporter"),
          (CSVImporter.__docgenInfo = {
            description: "",
            displayName: "CSVImporter",
            props: {
              template: { defaultValue: null, description: "", name: "template", required: !1, type: { name: "string | Record<string, unknown>" } },
              darkMode: { defaultValue: null, description: "", name: "darkMode", required: !1, type: { name: "boolean" } },
              primaryColor: { defaultValue: null, description: "", name: "primaryColor", required: !1, type: { name: "string" } },
              onComplete: { defaultValue: null, description: "", name: "onComplete", required: !1, type: { name: "((data: any) => void)" } },
              waitOnComplete: { defaultValue: null, description: "", name: "waitOnComplete", required: !1, type: { name: "boolean" } },
              customStyles: {
                defaultValue: null,
                description: "",
                name: "customStyles",
                required: !1,
                type: { name: "string | Record<string, string>" },
              },
              showDownloadTemplateButton: {
                defaultValue: null,
                description: "",
                name: "showDownloadTemplateButton",
                required: !1,
                type: { name: "boolean" },
              },
              skipHeaderRowSelection: {
                defaultValue: null,
                description: "",
                name: "skipHeaderRowSelection",
                required: !1,
                type: { name: "boolean" },
              },
              language: { defaultValue: null, description: "", name: "language", required: !1, type: { name: "string" } },
              customTranslations: { defaultValue: null, description: "", name: "customTranslations", required: !1, type: { name: "Resource" } },
              passedData: { defaultValue: null, description: "", name: "passedData", required: !1, type: { name: "FileRow[]" } },
              hasCustomFields: { defaultValue: null, description: "", name: "hasCustomFields", required: !1, type: { name: "boolean" } },
              isModal: { defaultValue: null, description: "", name: "isModal", required: !1, type: { name: "boolean" } },
              modalIsOpen: { defaultValue: null, description: "", name: "modalIsOpen", required: !1, type: { name: "boolean" } },
              modalOnCloseTriggered: {
                defaultValue: null,
                description: "",
                name: "modalOnCloseTriggered",
                required: !1,
                type: { name: "(() => void)" },
              },
              modalCloseOnOutsideClick: {
                defaultValue: null,
                description: "",
                name: "modalCloseOnOutsideClick",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/components/CSVImporter/index.tsx#CSVImporter"] = {
              docgenInfo: CSVImporter.__docgenInfo,
              name: "CSVImporter",
              path: "src/components/CSVImporter/index.tsx#CSVImporter",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const CSVImporter_stories = {
          title: "User Interface/Importer",
          component: components_CSVImporter,
          argTypes: { primaryColor: { control: { type: "color" } }, labelColor: { control: { type: "color" } } },
        },
        Template = (args) => {
          const [isOpen, setIsOpen] = (0, react.useState)(!1),
            { isModal } = args,
            props = {
              ...(isModal ? { modalIsOpen: isOpen } : {}),
              ...(isModal ? { modalOnCloseTriggered: () => setIsOpen(!1) } : {}),
              ...(isModal ? { modalCloseOnOutsideClick: args.modalCloseOnOutsideClick } : {}),
              ...args,
            };
          return (0, jsx_runtime.jsxs)("div", {
            children: [
              args.isModal && (0, jsx_runtime.jsx)("button", { onClick: () => setIsOpen(!0), children: "Import" }),
              (0, jsx_runtime.jsx)(components_CSVImporter, { ...props }, props.isModal?.toString()),
            ],
          });
        };
      Template.displayName = "Template";
      const Importer = Template.bind({});
      (Importer.args = {
        language: "en",
        ...settings_defaults,
        darkMode: !1,
        template: {
          columns: [
            { name: "First Name", key: "first_name", required: !0, description: "The first name of the user", suggested_mappings: ["first", "name"] },
            { name: "Last Name", suggested_mappings: ["last"] },
            { name: "Email", required: !0, description: "The email of the user" },
          ],
        },
        passedData: undefined,
        customStyles: {
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
        },
        hasCustomFields: !0,
        customTranslations: {
          jp: { Upload: "アップロード", "Browse files": "ファイルを参照" },
          pt: { Upload: "Carregar", "Browse files": "Procurar arquivos" },
        },
      }),
        (Importer.parameters = {
          ...Importer.parameters,
          docs: {
            ...Importer.parameters?.docs,
            source: {
              originalSource:
                "(args: CSVImporterProps) => {\n  const [isOpen, setIsOpen] = useState(false);\n  const {\n    isModal\n  } = args;\n  const props = {\n    ...(isModal ? {\n      modalIsOpen: isOpen\n    } : {}),\n    ...(isModal ? {\n      modalOnCloseTriggered: () => setIsOpen(false)\n    } : {}),\n    ...(isModal ? {\n      modalCloseOnOutsideClick: args.modalCloseOnOutsideClick\n    } : {}),\n    ...args\n  };\n  return <div>\n      {args.isModal && <button onClick={() => setIsOpen(true)}>Import</button>}\n      <ImporterComponent key={props.isModal?.toString()} {...props} />\n    </div>;\n}",
              ...Importer.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = ["Importer"];
    },
    "./src/importer/utils/classes.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      const __WEBPACK_DEFAULT_EXPORT__ = (a, separator = " ") =>
        a
          .filter((c) => c)
          .map((c) => c.toString().trim())
          .join(separator);
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/components/Box/style/Box.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/api.js"
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".Box-module__box--IiTEA{display:block;margin:0 auto;padding:var(--m);background-color:var(--color-background-modal);border-radius:var(--border-radius-5);box-shadow:0 0 20px var(--color-background-modal-shadow);max-width:100%}.Box-module__box--IiTEA.Box-module__fluid--zbibO{max-width:none}.Box-module__box--IiTEA.Box-module__mid--NS_FE{max-width:440px}.Box-module__box--IiTEA.Box-module__wide--TRxYP{max-width:660px}.Box-module__box--IiTEA.Box-module__space-l--WnVEv{padding:var(--m-l)}.Box-module__box--IiTEA.Box-module__space-mid--TKmAO{padding:var(--m)}.Box-module__box--IiTEA.Box-module__space-none--mSLt4{padding:0}.Box-module__box--IiTEA.Box-module__bg-shade--O5IDc{background-color:var(--color-background-modal-shade)}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/importer/components/Box/style/Box.module.scss"],
            names: [],
            mappings:
              "AAAA,wBACI,aAAA,CACA,aAAA,CACA,gBAAA,CACA,8CAAA,CACA,oCAAA,CACA,wDAAA,CACA,cAAA,CAEA,iDACI,cAAA,CAEJ,+CACI,eAAA,CAEJ,gDACI,eAAA,CAEJ,mDACI,kBAAA,CAEJ,qDACI,gBAAA,CAEJ,sDACI,SAAA,CAEJ,oDACI,oDAAA",
            sourcesContent: [
              ".box {\r\n    display: block;\r\n    margin: 0 auto;\r\n    padding: var(--m);\r\n    background-color: var(--color-background-modal);\r\n    border-radius: var(--border-radius-5);\r\n    box-shadow: 0 0 20px var(--color-background-modal-shadow);\r\n    max-width: 100%;\r\n\r\n    &.fluid {\r\n        max-width: none;\r\n    }\r\n    &.mid {\r\n        max-width: 440px;\r\n    }\r\n    &.wide {\r\n        max-width: 660px;\r\n    }\r\n    &.space-l {\r\n        padding: var(--m-l);\r\n    }\r\n    &.space-mid {\r\n        padding: var(--m);\r\n    }\r\n    &.space-none {\r\n        padding: 0;\r\n    }\r\n    &.bg-shade {\r\n        background-color: var(--color-background-modal-shade);\r\n    }\r\n}\r\n",
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            box: "Box-module__box--IiTEA",
            fluid: "Box-module__fluid--zbibO",
            mid: "Box-module__mid--NS_FE",
            wide: "Box-module__wide--TRxYP",
            "space-l": "Box-module__space-l--WnVEv",
            "space-mid": "Box-module__space-mid--TKmAO",
            "space-none": "Box-module__space-none--mSLt4",
            "bg-shade": "Box-module__bg-shade--O5IDc",
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/components/Checkbox/style/Checkbox.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/api.js"
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.Checkbox-module__container--dmUqd{display:inline-block;gap:var(--m-xs);align-items:center}.Checkbox-module__container--dmUqd:has(input:not(:disabled)){cursor:pointer}.Checkbox-module__container--dmUqd input[type=checkbox]{-webkit-appearance:none;appearance:none;background-color:rgba(0,0,0,0);margin:0;color:var(--color-primary);width:var(--m);height:var(--m);border:2px solid var(--color-border);display:grid;place-content:center;border-radius:var(--border-radius-1);cursor:pointer}.Checkbox-module__container--dmUqd input[type=checkbox]::before{content:"";width:var(--m-xs);height:var(--m-xs)}.Checkbox-module__container--dmUqd input[type=checkbox]:checked{background-color:var(--color-primary);border-color:var(--color-primary)}.Checkbox-module__container--dmUqd input[type=checkbox]:checked::before{clip-path:polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);box-shadow:inset 1em 1em var(--color-text-on-primary)}.Checkbox-module__container--dmUqd input[type=checkbox]:not(:disabled):focus-visible{outline:1px solid var(--color-border);outline-offset:3px}.Checkbox-module__container--dmUqd input[type=checkbox]:disabled{--container-color: var(--container-disabled);color:var(--container-disabled);cursor:default;background-color:var(--color-input-disabled);border-color:var(--color-border-soft)}.Checkbox-module__container--dmUqd input[type=checkbox]:disabled:checked::before{clip-path:polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);box-shadow:inset 1em 1em var(--color-border-soft)}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/importer/components/Checkbox/style/Checkbox.module.scss"],
            names: [],
            mappings:
              "AAAA,mCACE,oBAAA,CACA,eAAA,CACA,kBAAA,CAEA,6DACE,cAAA,CAGF,wDACE,uBAAA,CACA,eAAA,CACA,8BAAA,CACA,QAAA,CACA,0BAAA,CACA,cAAA,CACA,eAAA,CACA,oCAAA,CACA,YAAA,CACA,oBAAA,CACA,oCAAA,CACA,cAAA,CAEA,gEACE,UAAA,CACA,iBAAA,CACA,kBAAA,CAGF,gEACE,qCAAA,CACA,iCAAA,CAGF,wEACE,sEAAA,CACA,qDAAA,CAIA,qFACE,qCAAA,CACA,kBAAA,CAIJ,iEACE,4CAAA,CACA,+BAAA,CACA,cAAA,CACA,4CAAA,CACA,qCAAA,CAGE,iFACE,sEAAA,CACA,iDAAA",
            sourcesContent: [
              '.container {\r\n  display: inline-block;\r\n  gap: var(--m-xs);\r\n  align-items: center;\r\n\r\n  &:has(input:not(:disabled)) {\r\n    cursor: pointer;\r\n  }\r\n\r\n  input[type="checkbox"] {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    background-color: transparent;\r\n    margin: 0;\r\n    color: var(--color-primary);\r\n    width: var(--m);\r\n    height: var(--m);\r\n    border: 2px solid var(--color-border);\r\n    display: grid;\r\n    place-content: center;\r\n    border-radius: var(--border-radius-1);\r\n    cursor: pointer;\r\n\r\n    &::before {\r\n      content: "";\r\n      width: var(--m-xs);\r\n      height: var(--m-xs);\r\n    }\r\n\r\n    &:checked {\r\n      background-color: var(--color-primary);\r\n      border-color: var(--color-primary);\r\n    }\r\n\r\n    &:checked::before {\r\n      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\r\n      box-shadow: inset 1em 1em var(--color-text-on-primary);\r\n    }\r\n\r\n    &:not(:disabled) {\r\n      &:focus-visible {\r\n        outline: 1px solid var(--color-border);\r\n        outline-offset: 3px;\r\n      }\r\n    }\r\n\r\n    &:disabled {\r\n      --container-color: var(--container-disabled);\r\n      color: var(--container-disabled);\r\n      cursor: default;\r\n      background-color: var(--color-input-disabled);\r\n      border-color: var(--color-border-soft);\r\n\r\n      &:checked {\r\n        &::before {\r\n          clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\r\n          box-shadow: inset 1em 1em var(--color-border-soft);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n',
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = { container: "Checkbox-module__container--dmUqd" });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/components/Errors/style/Errors.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/api.js"
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".Errors-module__errors--dky7r{color:var(--color-text-error);margin:var(--m-xxs) 0}.Errors-module__errors--dky7r p{margin:0;display:flex;align-items:center;gap:var(--m-xxs);text-align:left}.Errors-module__centered--MvAii{display:flex;justify-content:center;align-items:center;flex-direction:column;height:100%}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/importer/components/Errors/style/Errors.module.scss"],
            names: [],
            mappings:
              "AAAA,8BACE,6BAAA,CACA,qBAAA,CAEA,gCACE,QAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA,CACA,eAAA,CAIJ,gCACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,qBAAA,CACA,WAAA",
            sourcesContent: [
              ".errors {\r\n  color: var(--color-text-error);\r\n  margin: var(--m-xxs) 0;\r\n\r\n  p {\r\n    margin: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: var(--m-xxs);\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n.centered {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n",
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = { errors: "Errors-module__errors--dky7r", centered: "Errors-module__centered--MvAii" });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/components/Input/style/Input.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/api.js"
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".Input-module__container--yx_bn{margin-bottom:var(--m);text-align:left}.Input-module__container--yx_bn:only-child{margin:var(--m-xxs) 0}.Input-module__container--yx_bn:has(input[disabled]) .Input-module__label--rOMYd{cursor:default}.Input-module__container--yx_bn>label{font:inherit;color:inherit;font-weight:inherit;line-height:inherit;background-color:rgba(0,0,0,0);border:none;text-align:inherit;padding:0;font-size:inherit;accent-color:var(--color-primary)}.Input-module__label--rOMYd{display:inline-block;margin-bottom:var(--m-xxs);cursor:pointer;line-height:1;font-weight:500;font-family:var(--font-family-1);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.Input-module__inputWrapper--XoUxm{background-color:var(--color-input-background);border-radius:var(--border-radius-2);outline:1px solid rgba(0,0,0,0);padding:calc(var(--m-xxs)/2);border:1px solid var(--color-border);font-weight:400;display:flex;align-items:center;min-width:270px;position:relative}.Input-module__inputWrapper--XoUxm:focus-within,.Input-module__inputWrapper--XoUxm:has(.Input-module__open--BdtLA){outline-color:var(--color-text);z-index:11}.Input-module__inputWrapper--XoUxm:focus-within .Input-module__icon--ZUckC svg:not([data-stroke=no-stroke]) path,.Input-module__inputWrapper--XoUxm:has(.Input-module__open--BdtLA) .Input-module__icon--ZUckC svg:not([data-stroke=no-stroke]) path{stroke:var(--color-text)}.Input-module__inputWrapper--XoUxm:focus-within .Input-module__options--f6xgP,.Input-module__inputWrapper--XoUxm:has(.Input-module__open--BdtLA) .Input-module__options--f6xgP{display:flex}.Input-module__inputWrapper--XoUxm:has(>[error]),.Input-module__inputWrapper--XoUxm.Input-module__hasError--VCdrB{border-color:var(--color-text-error)}.Input-module__inputWrapper--XoUxm:has(>[error]) .Input-module__icon--ZUckC svg:not([data-stroke=no-stroke]) path,.Input-module__inputWrapper--XoUxm.Input-module__hasError--VCdrB .Input-module__icon--ZUckC svg:not([data-stroke=no-stroke]) path{stroke:var(--color-text-error)}.Input-module__inputWrapper--XoUxm:has(>[disabled]){background-color:var(--color-input-disabled);color:var(--color-input-text-disabled);border-color:var(--color-border-soft)}.Input-module__inputWrapper--XoUxm:has(>[disabled]) .Input-module__icon--ZUckC.Input-module__dropdownIcon--p7FCp{cursor:default}.Input-module__inputWrapper--XoUxm .Input-module__icon--ZUckC{padding:0 var(--m-xxxs);cursor:pointer;display:flex}.Input-module__inputWrapper--XoUxm .Input-module__icon--ZUckC button{background:none;padding:0;border:none;cursor:pointer}.Input-module__inputWrapper--XoUxm .Input-module__icon--ZUckC svg:not([data-stroke=no-stroke]) path{display:block;stroke:var(--color-text-soft)}.Input-module__inputWrapper--XoUxm input,.Input-module__inputWrapper--XoUxm select,.Input-module__inputWrapper--XoUxm textarea{-webkit-tap-highlight-color:rgba(0,0,0,0);appearance:none;resize:none;width:100%;display:block;padding:calc(var(--m-xxs)/2);border:none;background-color:rgba(0,0,0,0);flex-grow:1;color:var(--color-text);font:inherit;font-weight:inherit;line-height:inherit;accent-color:var(--color-primary)}.Input-module__inputWrapper--XoUxm input::-webkit-input-placeholder,.Input-module__inputWrapper--XoUxm select::-webkit-input-placeholder,.Input-module__inputWrapper--XoUxm textarea::-webkit-input-placeholder{color:var(--color-text-soft)}.Input-module__inputWrapper--XoUxm input:-moz-placeholder,.Input-module__inputWrapper--XoUxm select:-moz-placeholder,.Input-module__inputWrapper--XoUxm textarea:-moz-placeholder{color:var(--color-text-soft)}.Input-module__inputWrapper--XoUxm input::-moz-placeholder,.Input-module__inputWrapper--XoUxm select::-moz-placeholder,.Input-module__inputWrapper--XoUxm textarea::-moz-placeholder{color:var(--color-text-soft)}.Input-module__inputWrapper--XoUxm input:-ms-input-placeholder,.Input-module__inputWrapper--XoUxm select:-ms-input-placeholder,.Input-module__inputWrapper--XoUxm textarea:-ms-input-placeholder{color:var(--color-text-soft)}.Input-module__inputWrapper--XoUxm input option:disabled,.Input-module__inputWrapper--XoUxm select option:disabled,.Input-module__inputWrapper--XoUxm textarea option:disabled{color:var(--color-text-soft)}.Input-module__inputWrapper--XoUxm input option:not([value]),.Input-module__inputWrapper--XoUxm select option:not([value]),.Input-module__inputWrapper--XoUxm textarea option:not([value]){display:none}.Input-module__inputWrapper--XoUxm input:focus,.Input-module__inputWrapper--XoUxm select:focus,.Input-module__inputWrapper--XoUxm textarea:focus{outline:none}.Input-module__inputWrapper--XoUxm select option{background-color:var(--color-input-background);border:none;padding:var(--m)}.Input-module__fluid--wFqsS .Input-module__inputWrapper--XoUxm{min-width:auto}.Input-module__small--fMrPN .Input-module__inputWrapper--XoUxm{padding:0 var(--m-xxxs);min-width:auto;border-radius:var(--border-radius-1)}.Input-module__small--fMrPN .Input-module__inputWrapper--XoUxm .Input-module__options--f6xgP{border-radius:var(--border-radius-1)}.Input-module__small--fMrPN .Input-module__inputWrapper--XoUxm .Input-module__options--f6xgP .Input-module__option--GJz6G{border-radius:var(--border-radius-1)}.Input-module__inputWrapper--XoUxm .Input-module__optionsRef--XDQzs{display:flex;position:absolute;top:100%;right:0;left:0}.Input-module__inputWrapper--XoUxm .Input-module__select--tzMbb:not([disabled]){cursor:pointer}.Input-module__options--f6xgP{position:fixed;top:100%;right:0;left:0;z-index:1000}.Input-module__options--f6xgP .Input-module__inner--AOjg3{display:flex;background-color:var(--color-input-background);border-radius:var(--border-radius-2);padding:var(--m-xxxxs);outline:1px solid var(--color-border);display:flex;flex-direction:column;gap:var(--m-xxxxs);max-height:calc(100vh - 8px);overflow-y:auto;margin-top:var(--m-xxxxs);width:100%}.Input-module__options--f6xgP .Input-module__option--GJz6G{padding:var(--m-xxs) var(--m-xxs);border-radius:var(--border-radius-2);background-color:rgba(0,0,0,0);border:none}.Input-module__options--f6xgP .Input-module__option--GJz6G[disabled]{color:var(--color-text-soft)}.Input-module__options--f6xgP .Input-module__option--GJz6G:not([disabled]){cursor:pointer}.Input-module__options--f6xgP .Input-module__option--GJz6G:not([disabled]):hover,.Input-module__options--f6xgP .Input-module__option--GJz6G:not([disabled]):focus,.Input-module__options--f6xgP .Input-module__option--GJz6G:not([disabled]).Input-module__selected--ivZNA{background-color:var(--color-background-menu-hover)}.Input-module__options--f6xgP .Input-module__option--GJz6G:not([disabled]).Input-module__placeholder--KZQxV{color:var(--color-text-soft)}.Input-module__options--f6xgP .Input-module__option--GJz6G .Input-module__requiredMark--sSnpb{color:var(--color-text-error)}.Input-module__error--TW7C5{color:var(--color-text-error);margin-top:var(--m-xxs);line-height:1;font-weight:400}.Input-module__footer--tueTz{color:var(--color-text-soft);margin-top:var(--m-xxs);line-height:1;font-weight:400}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/importer/components/Input/style/Input.module.scss",
              "webpack://./src/importer/components/Input/style/mixins.scss",
            ],
            names: [],
            mappings:
              "AAEA,gCACE,sBAAA,CACA,eAAA,CAEA,2CACE,qBAAA,CAIA,iFACE,cAAA,CAIJ,sCACE,YAAA,CACA,aAAA,CACA,mBAAA,CACA,mBAAA,CACA,8BAAA,CACA,WAAA,CACA,kBAAA,CACA,SAAA,CACA,iBAAA,CACA,iCAAA,CAIJ,4BACE,oBAAA,CACA,0BAAA,CACA,cAAA,CACA,aAAA,CACA,eAAA,CACA,gCAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA,CAGF,mCACE,8CAAA,CACA,oCAAA,CACA,+BAAA,CACA,4BAAA,CACA,oCAAA,CACA,eAAA,CACA,YAAA,CACA,kBAAA,CACA,eAAA,CACA,iBAAA,CAEA,mHAEE,+BAAA,CACA,UAAA,CAEA,qPACE,wBAAA,CAGF,+KACE,YAAA,CAIJ,kHAEE,oCAAA,CAEA,oPACE,8BAAA,CAIJ,oDACE,4CAAA,CACA,sCAAA,CACA,qCAAA,CAEA,iHACE,cAAA,CAIJ,8DACE,uBAAA,CACA,cAAA,CACA,YAAA,CAEA,qEACE,eAAA,CACA,SAAA,CACA,WAAA,CACA,cAAA,CAGF,oGACE,aAAA,CACA,6BAAA,CAIJ,+HAGE,yCAAA,CACA,eAAA,CACA,WAAA,CACA,UAAA,CACA,aAAA,CACA,4BAAA,CACA,WAAA,CACA,8BAAA,CACA,WAAA,CACA,uBAAA,CACA,YAAA,CACA,mBAAA,CACA,mBAAA,CACA,iCAAA,CCxHO,gND2HL,4BAAA,CC3HK,kLD2HL,4BAAA,CC3HK,qLD2HL,4BAAA,CC3HK,iMD2HL,4BAAA,CAGF,+KACE,4BAAA,CAEF,2LACE,YAAA,CAGF,iJACE,YAAA,CAIJ,iDACE,8CAAA,CACA,WAAA,CACA,gBAAA,CAGF,+DACE,cAAA,CAGF,+DACE,uBAAA,CACA,cAAA,CACA,oCAAA,CAEA,6FACE,oCAAA,CAEA,0HACE,oCAAA,CAKN,oEACE,YAAA,CACA,iBAAA,CACA,QAAA,CACA,OAAA,CACA,MAAA,CAGF,gFACE,cAAA,CAIJ,8BACE,cAAA,CACA,QAAA,CACA,OAAA,CACA,MAAA,CACA,YAAA,CAEA,0DACE,YAAA,CACA,8CAAA,CACA,oCAAA,CACA,sBAAA,CACA,qCAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,4BAAA,CACA,eAAA,CACA,yBAAA,CACA,UAAA,CAGF,2DACE,iCAAA,CACA,oCAAA,CACA,8BAAA,CACA,WAAA,CAEA,qEACE,4BAAA,CAGF,2EACE,cAAA,CAEA,2QAGE,mDAAA,CAEF,4GACE,4BAAA,CAGJ,8FACE,6BAAA,CAKN,4BACE,6BAAA,CACA,uBAAA,CACA,aAAA,CACA,eAAA,CAGF,6BACE,4BAAA,CACA,uBAAA,CACA,aAAA,CACA,eAAA",
            sourcesContent: [
              '@import "./mixins.scss";\r\n\r\n.container {\r\n  margin-bottom: var(--m);\r\n  text-align: left;\r\n\r\n  &:only-child {\r\n    margin: var(--m-xxs) 0;\r\n  }\r\n\r\n  &:has(input[disabled]) {\r\n    .label {\r\n      cursor: default;\r\n    }\r\n  }\r\n\r\n  & > label {\r\n    font: inherit;\r\n    color: inherit;\r\n    font-weight: inherit;\r\n    line-height: inherit;\r\n    background-color: transparent;\r\n    border: none;\r\n    text-align: inherit;\r\n    padding: 0;\r\n    font-size: inherit;\r\n    accent-color: var(--color-primary);\r\n  }\r\n}\r\n\r\n.label {\r\n  display: inline-block;\r\n  margin-bottom: var(--m-xxs);\r\n  cursor: pointer;\r\n  line-height: 1;\r\n  font-weight: 500;\r\n  font-family: var(--font-family-1);\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.inputWrapper {\r\n  background-color: var(--color-input-background);\r\n  border-radius: var(--border-radius-2);\r\n  outline: 1px solid transparent;\r\n  padding: calc(var(--m-xxs) / 2);\r\n  border: 1px solid var(--color-border);\r\n  font-weight: 400;\r\n  display: flex;\r\n  align-items: center;\r\n  min-width: 270px;\r\n  position: relative;\r\n\r\n  &:focus-within,\r\n  &:has(.open) {\r\n    outline-color: var(--color-text);\r\n    z-index: 11;\r\n\r\n    .icon svg:not([data-stroke="no-stroke"]) path {\r\n      stroke: var(--color-text);\r\n    }\r\n\r\n    .options {\r\n      display: flex;\r\n    }\r\n  }\r\n\r\n  &:has(> [error]),\r\n  &.hasError {\r\n    border-color: var(--color-text-error);\r\n\r\n    .icon svg:not([data-stroke="no-stroke"]) path {\r\n      stroke: var(--color-text-error);\r\n    }\r\n  }\r\n\r\n  &:has(> [disabled]) {\r\n    background-color: var(--color-input-disabled);\r\n    color: var(--color-input-text-disabled);\r\n    border-color: var(--color-border-soft);\r\n\r\n    .icon.dropdownIcon {\r\n      cursor: default;\r\n    }\r\n  }\r\n\r\n  .icon {\r\n    padding: 0 var(--m-xxxs);\r\n    cursor: pointer;\r\n    display: flex;\r\n\r\n    button {\r\n      background: none;\r\n      padding: 0;\r\n      border: none;\r\n      cursor: pointer;\r\n    }\r\n\r\n    svg:not([data-stroke="no-stroke"]) path {\r\n      display: block;\r\n      stroke: var(--color-text-soft);\r\n    }\r\n  }\r\n\r\n  input,\r\n  select,\r\n  textarea {\r\n    -webkit-tap-highlight-color: transparent;\r\n    appearance: none;\r\n    resize: none;\r\n    width: 100%;\r\n    display: block;\r\n    padding: calc(var(--m-xxs) / 2);\r\n    border: none;\r\n    background-color: transparent;\r\n    flex-grow: 1;\r\n    color: var(--color-text);\r\n    font: inherit;\r\n    font-weight: inherit;\r\n    line-height: inherit;\r\n    accent-color: var(--color-primary);\r\n\r\n    @include placeholder {\r\n      color: var(--color-text-soft);\r\n    }\r\n\r\n    option:disabled {\r\n      color: var(--color-text-soft);\r\n    }\r\n    option:not([value]) {\r\n      display: none;\r\n    }\r\n\r\n    &:focus {\r\n      outline: none;\r\n    }\r\n  }\r\n\r\n  select option {\r\n    background-color: var(--color-input-background);\r\n    border: none;\r\n    padding: var(--m);\r\n  }\r\n\r\n  .fluid & {\r\n    min-width: auto;\r\n  }\r\n\r\n  .small & {\r\n    padding: 0 var(--m-xxxs);\r\n    min-width: auto;\r\n    border-radius: var(--border-radius-1);\r\n\r\n    .options {\r\n      border-radius: var(--border-radius-1);\r\n\r\n      .option {\r\n        border-radius: var(--border-radius-1);\r\n      }\r\n    }\r\n  }\r\n\r\n  .optionsRef {\r\n    display: flex;\r\n    position: absolute;\r\n    top: 100%;\r\n    right: 0;\r\n    left: 0;\r\n  }\r\n\r\n  .select:not([disabled]) {\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.options {\r\n  position: fixed;\r\n  top: 100%;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1000;\r\n\r\n  .inner {\r\n    display: flex;\r\n    background-color: var(--color-input-background);\r\n    border-radius: var(--border-radius-2);\r\n    padding: var(--m-xxxxs);\r\n    outline: 1px solid var(--color-border);\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: var(--m-xxxxs);\r\n    max-height: calc(100vh - 8px);\r\n    overflow-y: auto;\r\n    margin-top: var(--m-xxxxs);\r\n    width: 100%;\r\n  }\r\n\r\n  .option {\r\n    padding: var(--m-xxs) var(--m-xxs);\r\n    border-radius: var(--border-radius-2);\r\n    background-color: transparent;\r\n    border: none;\r\n\r\n    &[disabled] {\r\n      color: var(--color-text-soft);\r\n    }\r\n\r\n    &:not([disabled]) {\r\n      cursor: pointer;\r\n\r\n      &:hover,\r\n      &:focus,\r\n      &.selected {\r\n        background-color: var(--color-background-menu-hover);\r\n      }\r\n      &.placeholder {\r\n        color: var(--color-text-soft);\r\n      }\r\n    }\r\n    .requiredMark {\r\n      color: var(--color-text-error);\r\n    }\r\n  }\r\n}\r\n\r\n.error {\r\n  color: var(--color-text-error);\r\n  margin-top: var(--m-xxs);\r\n  line-height: 1;\r\n  font-weight: 400;\r\n}\r\n\r\n.footer {\r\n  color: var(--color-text-soft);\r\n  margin-top: var(--m-xxs);\r\n  line-height: 1;\r\n  font-weight: 400;\r\n}\r\n',
              '@mixin optional-at-root($sel) {\r\n  @at-root #{if(not &, $sel, selector-append(&, $sel))} {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin placeholder {\r\n  @include optional-at-root("::-webkit-input-placeholder") {\r\n    @content;\r\n  }\r\n\r\n  @include optional-at-root(":-moz-placeholder") {\r\n    @content;\r\n  }\r\n\r\n  @include optional-at-root("::-moz-placeholder") {\r\n    @content;\r\n  }\r\n\r\n  @include optional-at-root(":-ms-input-placeholder") {\r\n    @content;\r\n  }\r\n}\r\n',
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            container: "Input-module__container--yx_bn",
            label: "Input-module__label--rOMYd",
            inputWrapper: "Input-module__inputWrapper--XoUxm",
            open: "Input-module__open--BdtLA",
            icon: "Input-module__icon--ZUckC",
            options: "Input-module__options--f6xgP",
            hasError: "Input-module__hasError--VCdrB",
            dropdownIcon: "Input-module__dropdownIcon--p7FCp",
            fluid: "Input-module__fluid--wFqsS",
            small: "Input-module__small--fMrPN",
            option: "Input-module__option--GJz6G",
            optionsRef: "Input-module__optionsRef--XDQzs",
            select: "Input-module__select--tzMbb",
            inner: "Input-module__inner--AOjg3",
            selected: "Input-module__selected--ivZNA",
            placeholder: "Input-module__placeholder--KZQxV",
            requiredMark: "Input-module__requiredMark--sSnpb",
            error: "Input-module__error--TW7C5",
            footer: "Input-module__footer--tueTz",
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/components/Stepper/style/Stepper.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/api.js"
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.Stepper-module__stepper--Mc9fq{display:flex;gap:var(--m);margin:var(--m-xs) auto;justify-content:center}.Stepper-module__stepper--Mc9fq .Stepper-module__step--p1YE4{display:flex;gap:var(--m-xxs);align-items:center;transition:all .3s ease-out}.Stepper-module__stepper--Mc9fq .Stepper-module__step--p1YE4 .Stepper-module__badge--kpRVV{border-radius:50%;border:1px solid var(--color-border);aspect-ratio:1;width:2em;display:flex;align-items:center;justify-content:center;transition:all .3s ease-out}.Stepper-module__stepper--Mc9fq .Stepper-module__step--p1YE4.Stepper-module__active--mbIU0{color:var(--color-primary)}.Stepper-module__stepper--Mc9fq .Stepper-module__step--p1YE4.Stepper-module__active--mbIU0 .Stepper-module__badge--kpRVV{background-color:var(--color-primary);color:var(--color-text-on-primary);border:none}.Stepper-module__stepper--Mc9fq .Stepper-module__step--p1YE4.Stepper-module__done--YM01p .Stepper-module__badge--kpRVV{border-color:var(--color-primary)}.Stepper-module__stepper--Mc9fq .Stepper-module__step--p1YE4:not(:first-of-type):before{content:"";height:1px;width:min(140px,4vw);background-color:var(--color-border);border-radius:2px;margin-right:var(--m-xs)}.Stepper-module__stepper--Mc9fq .Stepper-module__stepWide--thaa3:not(:first-of-type):before{width:min(120px,10vw)}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/importer/components/Stepper/style/Stepper.module.scss"],
            names: [],
            mappings:
              "AAEA,gCACE,YAAA,CACA,YAAA,CACA,uBAAA,CACA,sBAAA,CAEA,6DACE,YAAA,CACA,gBAAA,CACA,kBAAA,CACA,2BAZS,CAcT,2FACE,iBAAA,CACA,oCAAA,CACA,cAAA,CACA,SAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,2BAtBO,CAyBT,2FACE,0BAAA,CAEA,yHACE,qCAAA,CACA,kCAAA,CACA,WAAA,CAIF,uHACE,iCAAA,CAKF,wFACE,UAAA,CACA,UAAA,CACA,oBAAA,CACA,oCAAA,CACA,iBAAA,CACA,wBAAA,CAOF,4FACE,qBAAA",
            sourcesContent: [
              '$transition: all 0.3s ease-out;\r\n\r\n.stepper {\r\n  display: flex;\r\n  gap: var(--m);\r\n  margin: var(--m-xs) auto;\r\n  justify-content: center;\r\n\r\n  .step {\r\n    display: flex;\r\n    gap: var(--m-xxs);\r\n    align-items: center;\r\n    transition: $transition;\r\n\r\n    .badge {\r\n      border-radius: 50%;\r\n      border: 1px solid var(--color-border);\r\n      aspect-ratio: 1;\r\n      width: 2em;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      transition: $transition;\r\n    }\r\n\r\n    &.active {\r\n      color: var(--color-primary);\r\n\r\n      .badge {\r\n        background-color: var(--color-primary);\r\n        color: var(--color-text-on-primary);\r\n        border: none;\r\n      }\r\n    }\r\n    &.done {\r\n      .badge {\r\n        border-color: var(--color-primary);\r\n      }\r\n    }\r\n\r\n    &:not(:first-of-type) {\r\n      &:before {\r\n        content: "";\r\n        height: 1px;\r\n        width: calc(min(140px, 4vw));\r\n        background-color: var(--color-border);\r\n        border-radius: 2px;\r\n        margin-right: var(--m-xs);\r\n      }\r\n    }\r\n  }\r\n\r\n  .stepWide {\r\n    &:not(:first-of-type) {\r\n      &:before {\r\n        width: calc(min(120px, 10vw));\r\n      }\r\n    }\r\n  }\r\n}\r\n',
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            stepper: "Stepper-module__stepper--Mc9fq",
            step: "Stepper-module__step--p1YE4",
            badge: "Stepper-module__badge--kpRVV",
            active: "Stepper-module__active--mbIU0",
            done: "Stepper-module__done--YM01p",
            stepWide: "Stepper-module__stepWide--thaa3",
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/components/Table/style/Default.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/api.js"
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".Default-module__table--T4cK3{display:flex;flex-direction:column;flex:1 1 auto;width:100%;border-collapse:collapse;border-spacing:0;border-radius:var(--border-radius-2);outline:1px solid var(--color-border);table-layout:fixed;overflow:hidden}.Default-module__table--T4cK3 .Default-module__thead--opqwk{display:table-header-group}.Default-module__table--T4cK3 .Default-module__tbody--hTpF4{display:block;overflow:auto;width:100%}.Default-module__table--T4cK3 .Default-module__tr--Ol0lp{display:flex;width:100%;overflow:hidden;flex-wrap:nowrap}.Default-module__table--T4cK3 .Default-module__td--_Vebb{display:inline-flex;align-items:center;height:44px;flex-shrink:0}.Default-module__table--T4cK3 .Default-module__caption--yPiuw{display:table-caption;border-bottom:1px solid var(--color-border);background-color:var(--color-background-modal);padding:0 var(--m-s);border-radius:var(--border-radius-2) var(--border-radius-2) 0 0}.Default-module__table--T4cK3 .Default-module__thead--opqwk .Default-module__tr--Ol0lp .Default-module__td--_Vebb{font-weight:400;white-space:nowrap;padding:var(--m-xxxs) var(--m-s);border-bottom:1px solid var(--color-border);color:var(--color-text-secondary)}.Default-module__table--T4cK3 .Default-module__thead--opqwk .Default-module__tr--Ol0lp .Default-module__td--_Vebb:first-of-type{border-radius:var(--border-radius-2) 0 0 0}.Default-module__table--T4cK3 .Default-module__thead--opqwk .Default-module__tr--Ol0lp .Default-module__td--_Vebb:last-child{border-radius:0 var(--border-radius-2) 0 0}.Default-module__table--T4cK3 .Default-module__tbody--hTpF4 .Default-module__tr--Ol0lp .Default-module__td--_Vebb{vertical-align:middle;padding:var(--m-xxxs) var(--m-s);font-weight:400}.Default-module__table--T4cK3 .Default-module__tbody--hTpF4 .Default-module__tr--Ol0lp .Default-module__td--_Vebb>span,.Default-module__table--T4cK3 .Default-module__tbody--hTpF4 .Default-module__tr--Ol0lp .Default-module__td--_Vebb>small{text-overflow:ellipsis;white-space:nowrap;display:block;overflow:hidden}.Default-module__table--T4cK3 .Default-module__tbody--hTpF4 .Default-module__tr--Ol0lp .Default-module__td--_Vebb.Default-module__highlight--vyUIQ{font-weight:500}.Default-module__table--T4cK3 .Default-module__tbody--hTpF4 .Default-module__tr--Ol0lp .Default-module__td--_Vebb.Default-module__element--dNE5X{padding:0 var(--m-s)}.Default-module__table--T4cK3 .Default-module__tbody--hTpF4 .Default-module__tr--Ol0lp:hover{box-shadow:0 0 0 2px var(--color-border);position:relative}.Default-module__table--T4cK3 .Default-module__tbody--hTpF4 .Default-module__tr--Ol0lp:last-child{border-radius:0 0 var(--border-radius-2) var(--border-radius-2)}.Default-module__table--T4cK3 .Default-module__tbody--hTpF4 .Default-module__tr--Ol0lp:last-child .Default-module__td--_Vebb{border-bottom-color:rgba(0,0,0,0)}.Default-module__table--T4cK3 .Default-module__tbody--hTpF4 .Default-module__tr--Ol0lp:last-child .Default-module__td--_Vebb:first-of-type{border-radius:0 0 0 var(--border-radius-2)}.Default-module__table--T4cK3 .Default-module__tbody--hTpF4 .Default-module__tr--Ol0lp:last-child .Default-module__td--_Vebb:last-child{border-radius:0 0 var(--border-radius-2) 0}.Default-module__table--T4cK3.Default-module__zebra--jw4pa{background-color:var(--color-background-modal)}.Default-module__table--T4cK3.Default-module__zebra--jw4pa .Default-module__tbody--hTpF4 .Default-module__tr--Ol0lp:nth-child(odd) .Default-module__td--_Vebb{background-color:var(--color-background)}.Default-module__table--T4cK3.Default-module__dark--JXBca{background-color:var(--color-background)}.Default-module__table--T4cK3.Default-module__dark--JXBca .Default-module__thead--opqwk .Default-module__tr--Ol0lp .Default-module__td--_Vebb{background-color:var(--color-background-modal)}.Default-module__table--T4cK3.Default-module__light--BJhb4{background-color:var(--color-background-modal)}.Default-module__table--T4cK3.Default-module__transparent--F0KNQ .Default-module__thead--opqwk{background-color:var(--color-background-modal)}.Default-module__table--T4cK3.Default-module__transparent--F0KNQ .Default-module__tbody--hTpF4 .Default-module__tr--Ol0lp:hover{box-shadow:none;position:static}.Default-module__table--T4cK3.Default-module__dark--JXBca .Default-module__tbody--hTpF4 .Default-module__tr--Ol0lp:hover,.Default-module__table--T4cK3.Default-module__light--BJhb4 .Default-module__tbody--hTpF4 .Default-module__tr--Ol0lp:hover{box-shadow:none;position:static}.Default-module__table--T4cK3.Default-module__dark--JXBca .Default-module__tbody--hTpF4 .Default-module__tr--Ol0lp:first-of-type .Default-module__td--_Vebb,.Default-module__table--T4cK3.Default-module__light--BJhb4 .Default-module__tbody--hTpF4 .Default-module__tr--Ol0lp:first-of-type .Default-module__td--_Vebb{padding-top:var(--m-s);height:calc(44px + var(--m-s) - var(--m-xxxs))}.Default-module__table--T4cK3.Default-module__dark--JXBca .Default-module__tbody--hTpF4 .Default-module__tr--Ol0lp:last-of-type .Default-module__td--_Vebb,.Default-module__table--T4cK3.Default-module__light--BJhb4 .Default-module__tbody--hTpF4 .Default-module__tr--Ol0lp:last-of-type .Default-module__td--_Vebb{padding-bottom:var(--m-s);height:calc(44px + var(--m-s) - var(--m-xxxs))}.Default-module__emptyMsg--Hl8vx{display:flex;justify-content:center;align-items:center;margin-top:15vh;text-align:center}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/importer/components/Table/style/Default.module.scss"],
            names: [],
            mappings:
              "AAGA,8BACE,YAAA,CACA,qBAAA,CACA,aAAA,CACA,UAAA,CACA,wBAAA,CACA,gBAAA,CACA,oCAVO,CAWP,qCAAA,CACA,kBAAA,CACA,eAAA,CAEA,4DACE,0BAAA,CAGF,4DACE,aAAA,CACA,aAAA,CACA,UAAA,CAGF,yDACE,YAAA,CACA,UAAA,CACA,eAAA,CACA,gBAAA,CAGF,yDACE,mBAAA,CACA,kBAAA,CACA,WAlCS,CAmCT,aAAA,CAGF,8DACE,qBAAA,CACA,2CAAA,CACA,8CAAA,CACA,oBAAA,CACA,+DAAA,CAKE,kHACE,eAAA,CACA,kBAAA,CACA,gCAAA,CACA,2CAAA,CACA,iCAAA,CAEA,gIACE,0CAAA,CAGF,6HACE,0CAAA,CAQJ,kHACE,qBAAA,CACA,gCAAA,CACA,eAAA,CAEA,+OAEE,sBAAA,CACA,kBAAA,CACA,aAAA,CACA,eAAA,CAGF,mJACE,eAAA,CAGF,iJACE,oBAAA,CAIJ,6FACE,wCAAA,CACA,iBAAA,CAGF,kGACE,+DAAA,CAEA,6HACE,iCAAA,CAEA,2IACE,0CAAA,CAGF,wIACE,0CAAA,CAOV,2DACE,8CAAA,CAKM,8JACE,wCAAA,CAOV,0DACE,wCAAA,CAEA,8IACE,8CAAA,CAIJ,2DACE,8CAAA,CAIA,+FACE,8CAAA,CAIE,gIACE,eAAA,CACA,eAAA,CAUF,mPACE,eAAA,CACA,eAAA,CAGF,yTACE,sBAAA,CACA,8CAAA,CAGF,uTACE,yBAAA,CACA,8CAAA,CAOV,iCACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CACA,iBAAA",
            sourcesContent: [
              "$radius: var(--border-radius-2);\r\n$cellHeight: 44px;\r\n\r\n.table {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1 1 auto;\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n  border-radius: $radius;\r\n  outline: 1px solid var(--color-border);\r\n  table-layout: fixed;\r\n  overflow: hidden;\r\n\r\n  .thead {\r\n    display: table-header-group;\r\n  }\r\n\r\n  .tbody {\r\n    display: block;\r\n    overflow: auto;\r\n    width: 100%;\r\n  }\r\n\r\n  .tr {\r\n    display: flex;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    flex-wrap: nowrap;\r\n  }\r\n\r\n  .td {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    height: $cellHeight;\r\n    flex-shrink: 0;\r\n  }\r\n\r\n  .caption {\r\n    display: table-caption;\r\n    border-bottom: 1px solid var(--color-border);\r\n    background-color: var(--color-background-modal);\r\n    padding: 0 var(--m-s);\r\n    border-radius: var(--border-radius-2) var(--border-radius-2) 0 0;\r\n  }\r\n\r\n  .thead {\r\n    .tr {\r\n      .td {\r\n        font-weight: 400;\r\n        white-space: nowrap;\r\n        padding: var(--m-xxxs) var(--m-s);\r\n        border-bottom: 1px solid var(--color-border);\r\n        color: var(--color-text-secondary);\r\n\r\n        &:first-of-type {\r\n          border-radius: $radius 0 0 0;\r\n        }\r\n\r\n        &:last-child {\r\n          border-radius: 0 $radius 0 0;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .tbody {\r\n    .tr {\r\n      .td {\r\n        vertical-align: middle;\r\n        padding: var(--m-xxxs) var(--m-s);\r\n        font-weight: 400;\r\n\r\n        & > span,\r\n        & > small {\r\n          text-overflow: ellipsis;\r\n          white-space: nowrap;\r\n          display: block;\r\n          overflow: hidden;\r\n        }\r\n\r\n        &.highlight {\r\n          font-weight: 500;\r\n        }\r\n\r\n        &.element {\r\n          padding: 0 var(--m-s);\r\n        }\r\n      }\r\n\r\n      &:hover {\r\n        box-shadow: 0 0 0 2px var(--color-border);\r\n        position: relative;\r\n      }\r\n\r\n      &:last-child {\r\n        border-radius: 0 0 $radius $radius;\r\n\r\n        .td {\r\n          border-bottom-color: transparent;\r\n\r\n          &:first-of-type {\r\n            border-radius: 0 0 0 $radius;\r\n          }\r\n\r\n          &:last-child {\r\n            border-radius: 0 0 $radius 0;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &.zebra {\r\n    background-color: var(--color-background-modal);\r\n\r\n    .tbody {\r\n      .tr {\r\n        &:nth-child(odd) {\r\n          .td {\r\n            background-color: var(--color-background);\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &.dark {\r\n    background-color: var(--color-background);\r\n\r\n    .thead .tr .td {\r\n      background-color: var(--color-background-modal);\r\n    }\r\n  }\r\n\r\n  &.light {\r\n    background-color: var(--color-background-modal);\r\n  }\r\n\r\n  &.transparent {\r\n    .thead {\r\n      background-color: var(--color-background-modal);\r\n    }\r\n    .tbody {\r\n      .tr {\r\n        &:hover {\r\n          box-shadow: none;\r\n          position: static;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &.dark,\r\n  &.light {\r\n    .tbody {\r\n      .tr {\r\n        &:hover {\r\n          box-shadow: none;\r\n          position: static;\r\n        }\r\n\r\n        &:first-of-type .td {\r\n          padding-top: var(--m-s);\r\n          height: calc(#{$cellHeight} + var(--m-s) - var(--m-xxxs));\r\n        }\r\n\r\n        &:last-of-type .td {\r\n          padding-bottom: var(--m-s);\r\n          height: calc(#{$cellHeight} + var(--m-s) - var(--m-xxxs));\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.emptyMsg {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 15vh;\r\n  text-align: center;\r\n}\r\n",
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            table: "Default-module__table--T4cK3",
            thead: "Default-module__thead--opqwk",
            tbody: "Default-module__tbody--hTpF4",
            tr: "Default-module__tr--Ol0lp",
            td: "Default-module__td--_Vebb",
            caption: "Default-module__caption--yPiuw",
            highlight: "Default-module__highlight--vyUIQ",
            element: "Default-module__element--dNE5X",
            zebra: "Default-module__zebra--jw4pa",
            dark: "Default-module__dark--JXBca",
            light: "Default-module__light--BJhb4",
            transparent: "Default-module__transparent--F0KNQ",
            emptyMsg: "Default-module__emptyMsg--Hl8vx",
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/components/Tooltip/style/Tooltip.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/api.js"
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.Tooltip-module__tooltip--_pVFs{display:inline-flex;align-items:center;gap:var(--m-xs)}.Tooltip-module__tooltip--_pVFs .Tooltip-module__icon--yP4lv{position:relative;display:block;cursor:pointer}.Tooltip-module__tooltip--_pVFs.Tooltip-module__multiline--O3hbc .Tooltip-module__message--TeuOd{width:260px;white-space:normal}.Tooltip-module__message--TeuOd{position:absolute;transform:translateX(-50%);background-color:var(--color-background-modal);z-index:3;padding:var(--m-xxs) var(--m-xs);border-radius:var(--border-radius);margin-top:var(--m-xs);box-shadow:0 0 0 1px var(--color-border),0 5px 15px rgba(0,0,0,.2);max-width:300px}.Tooltip-module__message--TeuOd::after,.Tooltip-module__message--TeuOd::before{position:absolute;top:calc(var(--m-xxxs)*1.732*-1);left:50%;border-left:var(--m-xxxs) solid rgba(0,0,0,0);border-right:var(--m-xxxs) solid rgba(0,0,0,0);border-bottom:calc(var(--m-xxxs)*1.732) solid var(--color-border);content:"";font-size:0;line-height:0;width:0;transform:translateX(-50%)}.Tooltip-module__message--TeuOd::after{top:calc(var(--m-xxxs)*1.732*-1 + 2px);border-bottom:calc(var(--m-xxxs)*1.732) solid var(--color-background-modal)}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/importer/components/Tooltip/style/Tooltip.module.scss"],
            names: [],
            mappings:
              "AAGA,gCACE,mBAAA,CACA,kBAAA,CACA,eAAA,CAEA,6DACE,iBAAA,CACA,aAAA,CACA,cAAA,CAGF,iGACE,WAAA,CACA,kBAAA,CAIJ,gCACE,iBAAA,CACA,0BAAA,CACA,8CAAA,CACA,SAAA,CACA,gCAAA,CACA,kCAAA,CACA,sBAAA,CACA,kEAAA,CACA,eAAA,CAEA,+EAEE,iBAAA,CACA,gCAAA,CACA,QAAA,CACA,6CAAA,CACA,8CAAA,CACA,iEAAA,CACA,UAAA,CACA,WAAA,CACA,aAAA,CACA,OAAA,CACA,0BAAA,CAGF,uCACE,sCAAA,CACA,2EAAA",
            sourcesContent: [
              '$side: var(--m-xxxs);\r\n$height: calc($side * 1.732);\r\n\r\n.tooltip {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: var(--m-xs);\r\n\r\n  .icon {\r\n    position: relative;\r\n    display: block;\r\n    cursor: pointer;\r\n  }\r\n\r\n  &.multiline .message {\r\n    width: 260px;\r\n    white-space: normal;\r\n  }\r\n}\r\n\r\n.message {\r\n  position: absolute;\r\n  transform: translateX(-50%);\r\n  background-color: var(--color-background-modal);\r\n  z-index: 3;\r\n  padding: var(--m-xxs) var(--m-xs);\r\n  border-radius: var(--border-radius);\r\n  margin-top: var(--m-xs);\r\n  box-shadow: 0 0 0 1px var(--color-border), 0 5px 15px rgba(0, 0, 0, 0.2);\r\n  max-width: 300px;\r\n\r\n  &::after,\r\n  &::before {\r\n    position: absolute;\r\n    top: calc($height * -1);\r\n    left: 50%;\r\n    border-left: $side solid transparent;\r\n    border-right: $side solid transparent;\r\n    border-bottom: $height solid var(--color-border);\r\n    content: "";\r\n    font-size: 0;\r\n    line-height: 0;\r\n    width: 0;\r\n    transform: translateX(-50%);\r\n  }\r\n\r\n  &::after {\r\n    top: calc($height * -1 + 2px);\r\n    border-bottom: $height solid var(--color-background-modal);\r\n  }\r\n}\r\n',
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            tooltip: "Tooltip-module__tooltip--_pVFs",
            icon: "Tooltip-module__icon--yP4lv",
            multiline: "Tooltip-module__multiline--O3hbc",
            message: "Tooltip-module__message--TeuOd",
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/features/complete/style/Complete.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/api.js"
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.Complete-module__content--WHcJj.Complete-module__content--WHcJj{max-width:1000px;padding-top:var(--m);height:100%;flex:1 0 100px;box-shadow:none;background-color:rgba(0,0,0,0);align-self:center;display:flex;align-items:center;justify-content:center;font-size:var(--font-size-xl);flex-direction:column;gap:var(--m);text-align:center;position:relative}.Complete-module__content--WHcJj.Complete-module__content--WHcJj .Complete-module__icon--b8jJR{width:64px;height:64px;isolation:isolate;position:relative;display:flex;align-items:center;justify-content:center}.Complete-module__content--WHcJj.Complete-module__content--WHcJj .Complete-module__icon--b8jJR::before{content:"";position:absolute;inset:0;border-radius:50%;background-color:var(--color-green-ui);z-index:-1}.Complete-module__content--WHcJj.Complete-module__content--WHcJj .Complete-module__icon--b8jJR svg{width:38%;height:38%;object-fit:contain;color:var(--color-text-on-primary)}.Complete-module__content--WHcJj.Complete-module__content--WHcJj .Complete-module__actions--u2JEl{display:flex;gap:var(--m-l);align-items:center;justify-content:center;margin-top:var(--m-xxl)}.Complete-module__content--WHcJj.Complete-module__content--WHcJj .Complete-module__actions--u2JEl>*{flex:1 0 190px}.Complete-module__content--WHcJj.Complete-module__content--WHcJj .Complete-module__actions--u2JEl button{width:50%}.Complete-module__spinner--ZpW7W{border:1px solid var(--color-border);margin-top:var(--m);padding:var(--m);border-radius:var(--border-radius-1)}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/importer/features/complete/style/Complete.module.scss"],
            names: [],
            mappings:
              "AAAA,iEACE,gBAAA,CACA,oBAAA,CACA,WAAA,CACA,cAAA,CACA,eAAA,CACA,8BAAA,CACA,iBAAA,CAEA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,6BAAA,CACA,qBAAA,CACA,YAAA,CACA,iBAAA,CACA,iBAAA,CAEA,+FACE,UAAA,CACA,WAAA,CACA,iBAAA,CACA,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAEA,uGACE,UAAA,CACA,iBAAA,CACA,OAAA,CACA,iBAAA,CACA,sCAAA,CACA,UAAA,CAGF,mGACE,SAAA,CACA,UAAA,CACA,kBAAA,CACA,kCAAA,CAIJ,kGACE,YAAA,CACA,cAAA,CACA,kBAAA,CACA,sBAAA,CACA,uBAAA,CAEA,oGACE,cAAA,CAGF,yGACE,SAAA,CAKN,iCACE,oCAAA,CACA,mBAAA,CACA,gBAAA,CACA,oCAAA",
            sourcesContent: [
              '.content.content {\r\n  max-width: 1000px;\r\n  padding-top: var(--m);\r\n  height: 100%;\r\n  flex: 1 0 100px;\r\n  box-shadow: none;\r\n  background-color: transparent;\r\n  align-self: center;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: var(--font-size-xl);\r\n  flex-direction: column;\r\n  gap: var(--m);\r\n  text-align: center;\r\n  position: relative;\r\n\r\n  .icon {\r\n    width: 64px;\r\n    height: 64px;\r\n    isolation: isolate;\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    &::before {\r\n      content: "";\r\n      position: absolute;\r\n      inset: 0;\r\n      border-radius: 50%;\r\n      background-color: var(--color-green-ui);\r\n      z-index: -1;\r\n    }\r\n\r\n    svg {\r\n      width: 38%;\r\n      height: 38%;\r\n      object-fit: contain;\r\n      color: var(--color-text-on-primary);\r\n    }\r\n  }\r\n\r\n  .actions {\r\n    display: flex;\r\n    gap: var(--m-l);\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: var(--m-xxl);\r\n\r\n    & > * {\r\n      flex: 1 0 190px;\r\n    }\r\n\r\n    button {\r\n      width: 50%;\r\n    }\r\n  }\r\n}\r\n\r\n.spinner {\r\n  border: 1px solid var(--color-border);\r\n  margin-top: var(--m);\r\n  padding: var(--m);\r\n  border-radius: var(--border-radius-1);\r\n}\r\n',
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            content: "Complete-module__content--WHcJj",
            icon: "Complete-module__icon--b8jJR",
            actions: "Complete-module__actions--u2JEl",
            spinner: "Complete-module__spinner--ZpW7W",
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/features/main/style/Main.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/api.js"
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".Main-module__wrapper--jhy1j{display:flex;flex-direction:column;height:100%;padding:20px 8px 8px 8px}.Main-module__content--Qh3qu{padding:20px;flex:1;overflow:hidden}.Main-module__status--yvLpm{display:flex;align-items:center;justify-content:space-between;gap:var(--m);padding:0 var(--m-s) var(--m-s) var(--m-s)}.Main-module__spinner--adCUr{border:1px solid var(--color-border);margin-top:var(--m);padding:var(--m);border-radius:var(--border-radius-1);position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.Main-module__close--kfHNu.Main-module__close--kfHNu{position:absolute;right:var(--m-xs, 0.5rem);top:var(--m-xs, 0.5rem);border-radius:50%;min-width:calc(var(--m-xl)*36/48);height:calc(var(--m-xl)*36/48);aspect-ratio:1;font-size:var(--font-size-xl);padding:0;background-color:#757575;color:#f8f8f8}.Main-module__close--kfHNu.Main-module__close--kfHNu:hover{background-color:#5d5d5d}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/importer/features/main/style/Main.module.scss"],
            names: [],
            mappings:
              "AAAA,6BACE,YAAA,CACA,qBAAA,CACA,WAAA,CACA,wBAAA,CAGF,6BACE,YAAA,CACA,MAAA,CACA,eAAA,CAGF,4BACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,YAAA,CACA,0CAAA,CAGF,6BACE,oCAAA,CACA,mBAAA,CACA,gBAAA,CACA,oCAAA,CACA,iBAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA,CAKF,qDACE,iBAAA,CACA,yBAAA,CACA,uBAAA,CACA,iBAAA,CACA,iCAPU,CAQV,8BARU,CASV,cAAA,CACA,6BAAA,CACA,SAAA,CACA,wBAAA,CACA,aAAA,CAGF,2DACE,wBAAA",
            sourcesContent: [
              ".wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  padding: 20px 8px 8px 8px;\r\n}\r\n\r\n.content {\r\n  padding: 20px;\r\n  flex: 1;\r\n  overflow: hidden;\r\n}\r\n\r\n.status {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: var(--m);\r\n  padding: 0 var(--m-s) var(--m-s) var(--m-s);\r\n}\r\n\r\n.spinner {\r\n  border: 1px solid var(--color-border);\r\n  margin-top: var(--m);\r\n  padding: var(--m);\r\n  border-radius: var(--border-radius-1);\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n$closeSide: calc(var(--m-xl) * 36 / 48);\r\n\r\n.close.close {\r\n  position: absolute;\r\n  right: var(--m-xs, 0.5rem);\r\n  top: var(--m-xs, 0.5rem);\r\n  border-radius: 50%;\r\n  min-width: $closeSide;\r\n  height: $closeSide;\r\n  aspect-ratio: 1;\r\n  font-size: var(--font-size-xl);\r\n  padding: 0;\r\n  background-color: #757575;\r\n  color: #f8f8f8;\r\n}\r\n\r\n.close.close:hover {\r\n  background-color: #5d5d5d;\r\n}\r\n",
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            wrapper: "Main-module__wrapper--jhy1j",
            content: "Main-module__content--Qh3qu",
            status: "Main-module__status--yvLpm",
            spinner: "Main-module__spinner--adCUr",
            close: "Main-module__close--kfHNu",
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/features/map-columns/style/MapColumns.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/api.js"
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".MapColumns-module__content--O4KzG{height:100%}.MapColumns-module__content--O4KzG form{display:flex;flex-direction:column;height:100%;gap:var(--m)}.MapColumns-module__content--O4KzG form .MapColumns-module__tableWrapper--CHLPr{display:flex;height:100%;overflow-y:auto;padding:1px;margin-right:-20px;padding-right:21px}.MapColumns-module__content--O4KzG form .MapColumns-module__actions--jBb07{display:flex;justify-content:space-between}.MapColumns-module__samples--V2btV{overflow:hidden;text-overflow:ellipsis;line-height:1;white-space:nowrap}.MapColumns-module__samples--V2btV>small{background-color:var(--color-input-background);font-family:monospace;padding:var(--m-xxxxs);border-radius:var(--border-radius-1);font-size:var(--font-size-xs);display:inline-block}.MapColumns-module__samples--V2btV>small+small{margin-left:var(--m-xxxxs)}.MapColumns-module__spinner--rP6gE{border:1px solid var(--color-border);margin-top:var(--m);padding:var(--m);border-radius:var(--border-radius-1)}.MapColumns-module__errorContainer--BaBtD{display:flex;justify-content:center;max-width:60vw}.MapColumns-module__schemalessTextInput--gwtZ9{width:210px}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/importer/features/map-columns/style/MapColumns.module.scss"],
            names: [],
            mappings:
              "AAAA,mCACE,WAAA,CAEA,wCACE,YAAA,CACA,qBAAA,CACA,WAAA,CACA,YAAA,CAEA,gFACE,YAAA,CACA,WAAA,CACA,eAAA,CACA,WAAA,CACA,kBAAA,CACA,kBAAA,CAGF,2EACE,YAAA,CACA,6BAAA,CAKN,mCACE,eAAA,CACA,sBAAA,CACA,aAAA,CACA,kBAAA,CAEA,yCACE,8CAAA,CACA,qBAAA,CACA,sBAAA,CACA,oCAAA,CACA,6BAAA,CACA,oBAAA,CAEA,+CACE,0BAAA,CAKN,mCACE,oCAAA,CACA,mBAAA,CACA,gBAAA,CACA,oCAAA,CAGF,0CACE,YAAA,CACA,sBAAA,CACA,cAAA,CAGF,+CACE,WAAA",
            sourcesContent: [
              ".content {\r\n  height: 100%;\r\n\r\n  form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    gap: var(--m);\r\n\r\n    .tableWrapper {\r\n      display: flex;\r\n      height: 100%;\r\n      overflow-y: auto;\r\n      padding: 1px;\r\n      margin-right: -20px;\r\n      padding-right: 21px;\r\n    }\r\n\r\n    .actions {\r\n      display: flex;\r\n      justify-content: space-between;\r\n    }\r\n  }\r\n}\r\n\r\n.samples {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  line-height: 1;\r\n  white-space: nowrap;\r\n\r\n  & > small {\r\n    background-color: var(--color-input-background);\r\n    font-family: monospace;\r\n    padding: var(--m-xxxxs);\r\n    border-radius: var(--border-radius-1);\r\n    font-size: var(--font-size-xs);\r\n    display: inline-block;\r\n\r\n    & + small {\r\n      margin-left: var(--m-xxxxs);\r\n    }\r\n  }\r\n}\r\n\r\n.spinner {\r\n  border: 1px solid var(--color-border);\r\n  margin-top: var(--m);\r\n  padding: var(--m);\r\n  border-radius: var(--border-radius-1);\r\n}\r\n\r\n.errorContainer {\r\n  display: flex;\r\n  justify-content: center;\r\n  max-width: 60vw;\r\n}\r\n\r\n.schemalessTextInput {\r\n  width: 210px;\r\n}\r\n",
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            content: "MapColumns-module__content--O4KzG",
            tableWrapper: "MapColumns-module__tableWrapper--CHLPr",
            actions: "MapColumns-module__actions--jBb07",
            samples: "MapColumns-module__samples--V2btV",
            spinner: "MapColumns-module__spinner--rP6gE",
            errorContainer: "MapColumns-module__errorContainer--BaBtD",
            schemalessTextInput: "MapColumns-module__schemalessTextInput--gwtZ9",
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/features/row-selection/style/RowSelection.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/api.js"
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".RowSelection-module__content--Wx6T7{flex-grow:1;height:100%}.RowSelection-module__content--Wx6T7 form{display:flex;flex-direction:column;height:100%;gap:var(--m)}.RowSelection-module__content--Wx6T7 form .RowSelection-module__tableWrapper--te1HH{display:flex;overflow-y:auto;padding:1px;margin-right:-20px;padding-right:21px;height:calc(100vh - 160px)}.RowSelection-module__content--Wx6T7 form .RowSelection-module__actions--sWl36{display:flex;justify-content:space-between}.RowSelection-module__samples--Bzxh2{overflow:hidden;text-overflow:ellipsis;line-height:1;white-space:nowrap}.RowSelection-module__samples--Bzxh2>small{background-color:var(--color-input-background);font-family:monospace;padding:var(--m-xxxxs);border-radius:var(--border-radius-1);font-size:var(--font-size-xs);display:inline-block}.RowSelection-module__samples--Bzxh2>small+small{margin-left:var(--m-xxxxs)}.RowSelection-module__spinner--Z5oQG{border:1px solid var(--color-border);margin-top:var(--m);padding:var(--m);border-radius:var(--border-radius-1)}.RowSelection-module__inputRadio--Q_xw1{margin-right:10px}.RowSelection-module__headingCaption--DClOM{padding:12px 0 10px 0;color:var(--color-text-secondary);font-weight:400;height:48px;vertical-align:middle;text-align:center}.RowSelection-module__headingCaption--DClOM span>span:nth-child(1)>span{font-weight:400}.RowSelection-module__warningIcon--JSQBC{margin-right:7px}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/importer/features/row-selection/style/RowSelection.module.scss"],
            names: [],
            mappings:
              "AAAA,qCACE,WAAA,CACA,WAAA,CAEA,0CACE,YAAA,CACA,qBAAA,CACA,WAAA,CACA,YAAA,CAEA,oFACE,YAAA,CACA,eAAA,CACA,WAAA,CACA,kBAAA,CACA,kBAAA,CACA,0BAAA,CAGF,+EACE,YAAA,CACA,6BAAA,CAKN,qCACE,eAAA,CACA,sBAAA,CACA,aAAA,CACA,kBAAA,CAEA,2CACE,8CAAA,CACA,qBAAA,CACA,sBAAA,CACA,oCAAA,CACA,6BAAA,CACA,oBAAA,CAEA,iDACE,0BAAA,CAIN,qCACE,oCAAA,CACA,mBAAA,CACA,gBAAA,CACA,oCAAA,CAGF,wCACE,iBAAA,CAGF,4CACE,qBAAA,CACA,iCAAA,CACA,eAAA,CACA,WAAA,CACA,qBAAA,CACA,iBAAA,CAGA,wEACE,eAAA,CAIJ,yCACE,gBAAA",
            sourcesContent: [
              ".content {\r\n  flex-grow: 1;\r\n  height: 100%;\r\n\r\n  form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    gap: var(--m);\r\n\r\n    .tableWrapper {\r\n      display: flex;\r\n      overflow-y: auto;\r\n      padding: 1px;\r\n      margin-right: -20px;\r\n      padding-right: 21px;\r\n      height: calc(100vh - 160px);\r\n    }\r\n\r\n    .actions {\r\n      display: flex;\r\n      justify-content: space-between;\r\n    }\r\n  }\r\n}\r\n\r\n.samples {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  line-height: 1;\r\n  white-space: nowrap;\r\n\r\n  & > small {\r\n    background-color: var(--color-input-background);\r\n    font-family: monospace;\r\n    padding: var(--m-xxxxs);\r\n    border-radius: var(--border-radius-1);\r\n    font-size: var(--font-size-xs);\r\n    display: inline-block;\r\n\r\n    & + small {\r\n      margin-left: var(--m-xxxxs);\r\n    }\r\n  }\r\n}\r\n.spinner {\r\n  border: 1px solid var(--color-border);\r\n  margin-top: var(--m);\r\n  padding: var(--m);\r\n  border-radius: var(--border-radius-1);\r\n}\r\n\r\n.inputRadio {\r\n  margin-right: 10px;\r\n}\r\n\r\n.headingCaption {\r\n  padding: 12px 0 10px 0;\r\n  color: var(--color-text-secondary);\r\n  font-weight: 400;\r\n  height: 48px;\r\n  vertical-align: middle;\r\n  text-align: center;\r\n\r\n  // TODO: Hacky solution to update the tooltip title text, update this\r\n  span > span:nth-child(1) > span {\r\n    font-weight: 400;\r\n  }\r\n}\r\n\r\n.warningIcon {\r\n  margin-right: 7px;\r\n}\r\n",
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            content: "RowSelection-module__content--Wx6T7",
            tableWrapper: "RowSelection-module__tableWrapper--te1HH",
            actions: "RowSelection-module__actions--sWl36",
            samples: "RowSelection-module__samples--Bzxh2",
            spinner: "RowSelection-module__spinner--Z5oQG",
            inputRadio: "RowSelection-module__inputRadio--Q_xw1",
            headingCaption: "RowSelection-module__headingCaption--DClOM",
            warningIcon: "RowSelection-module__warningIcon--JSQBC",
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/features/uploader/style/Uploader.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/api.js"
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".Uploader-module__content--sOXrD{display:flex;gap:var(--m);height:100%}.Uploader-module__content--sOXrD>*:first-child{flex:1 1 500px;overflow:hidden}.Uploader-module__content--sOXrD>*:last-child{flex-basis:38%}.Uploader-module__box--DuVzG{display:flex;flex-direction:column;gap:var(--m-s)}.Uploader-module__tableContainer--L3NeM{overflow:hidden;overflow-y:scroll;height:100%;border:1px solid var(--color-border);border-radius:var(--border-radius-2)}.Uploader-module__tableContainer--L3NeM>div{outline:none}.Uploader-module__tableContainer--L3NeM .Uploader-module__tbody--nctiU{overflow:auto}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/importer/features/uploader/style/Uploader.module.scss"],
            names: [],
            mappings:
              "AAAA,iCACE,YAAA,CACA,YAAA,CACA,WAAA,CAGE,+CACE,cAAA,CACA,eAAA,CAEF,8CACE,cAAA,CAKN,6BACE,YAAA,CACA,qBAAA,CACA,cAAA,CAGF,wCACE,eAAA,CACA,iBAAA,CACA,WAAA,CACA,oCAAA,CACA,oCAAA,CACA,4CACE,YAAA,CAEF,uEACE,aAAA",
            sourcesContent: [
              ".content {\r\n  display: flex;\r\n  gap: var(--m);\r\n  height: 100%;\r\n\r\n  & > * {\r\n    &:first-child {\r\n      flex: 1 1 500px;\r\n      overflow: hidden;\r\n    }\r\n    &:last-child {\r\n      flex-basis: 38%;\r\n    }\r\n  }\r\n}\r\n\r\n.box {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: var(--m-s);\r\n}\r\n\r\n.tableContainer {\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  border: 1px solid var(--color-border);\r\n  border-radius: var(--border-radius-2);\r\n  > div {\r\n    outline: none;\r\n  }\r\n  .tbody {\r\n    overflow: auto;\r\n  }\r\n}\r\n",
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            content: "Uploader-module__content--sOXrD",
            box: "Uploader-module__box--DuVzG",
            tableContainer: "Uploader-module__tableContainer--L3NeM",
            tbody: "Uploader-module__tbody--nctiU",
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/style/index.scss": (
      module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/css-loader/dist/runtime/sourceMaps.js"
        ),
        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
        ),
        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/css-loader/dist/runtime/api.js"
        ),
        ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
        );
      ___CSS_LOADER_EXPORT___.push([
        module.id,
        ':root{--base-spacing: 24px;--m-xxxxs: calc(var(--base-spacing) / 5);--m-xxxs: calc(var(--base-spacing) / 4);--m-xxs: calc(var(--base-spacing) / 3);--m-xs: calc(var(--base-spacing) / 2);--m-s: calc(var(--base-spacing) * 2 / 3);--m: var(--base-spacing);--m-mm: calc(var(--base-spacing) * 3 / 2);--m-l: calc(var(--base-spacing) * 5 / 3);--m-xl: calc(var(--base-spacing) * 2);--m-xxl: calc(var(--base-spacing) * 5 / 2);--m-xxxl: calc(var(--base-spacing) * 3);--font-size-xs: calc(var(--font-size) * 16 / 17);--font-size-s: calc(var(--font-size) * 13 / 14);--font-size: 0.875rem;--font-size-l: calc(var(--font-size) * 8 / 7);--font-size-xl: calc(var(--font-size) * 9 / 7);--font-size-xxl: calc(var(--font-size) * 12 / 7);--font-size-xxxl: calc(var(--font-size) * 18 / 7);--font-size-h: calc(var(--font-size) * 24 / 7);--font-family: "Inter", sans-serif;--font-family-1: var(--font-family);--font-family-2: "Laxan", sans-serif;--border-radius: 4px;--border-radius-1: var(--border-radius);--border-radius-2: calc(var(--border-radius) * 2);--border-radius-3: calc(var(--border-radius) * 3);--border-radius-4: calc(var(--border-radius) * 4);--border-radius-5: calc(var(--border-radius) * 5);--border-radius-r: 50%;--fast: 0.3s;--speed: 0.4s;--slow: 0.9s;--ease: ease-out;--transition-ui: background-color var(--fast) var(--ease), border-color var(--fast) var(--ease), opacity var(--fast) var(--ease), transform var(--fast) var(--ease), color var(--fast) var(--ease);--blurred: 5px}:root{--color-primary: #7a5ef8;--color-primary-hover: #664ecf;--color-primary-focus: #7a5ef8;--color-primary-disabled: #d3c9fd;--color-primary-button-disabled: #3f3b55;--color-secondary-focus: #1d2939;--color-secondary-disabled: #344054;--color-text-on-primary: #ffffff;--color-text-on-primary-disabled: #667085;--color-text-on-primary-button-disabled: #ffffff;--color-text-on-secondary: #f2f4f7;--color-text-on-secondary-disabled: #475467;--color-success: rgba(18, 183, 106, 0.88);--color-emphasis: #0ba5ec;--color-error: rgba(252, 93, 93, 0.88);--color-attention: rgba(248, 203, 44, 0.88);--color-importer-link: #2275d7;--blue-light-500: #0ba5ec;--color-green-ui: var(--color-progress-bar);--color-green: var(--color-success);--color-blue: #0ba5ec;--color-red: rgba(252, 93, 93, 0.88);--color-yellow: rgba(248, 203, 44, 0.88);--importer-link: var(--color-importer-link)}.CSVImporter-dark{color-scheme:dark;--color-background-main: var(--color-background);--color-background-modal-hover: #2e323c;--color-background-modal-veil: #0e1116;--color-background-modal-shadow: #0e1116;--color-background-modal-shade: #171a20;--color-tertiary: #101828;--color-tertiary-hover: #1d2939;--color-tertiary-focus: #1d2939;--color-tertiary-disabled: #eaecf0;--color-background-menu: #101828;--color-text-strong: #f2f4f7;--color-text-soft: #667085;--color-text-on-tertiary: #ffffff;--color-text-on-tertiary-disabled: #667085;--color-error: #912018;--color-text-error: #f04438;--color-background-error: #f04438;--color-background-error-hover: #d92d20;--color-background-error-soft: #fecdca;--color-input-background-soft: #1d2939;--color-input-border: #344054;--color-input-placeholder: #344054;--color-input-text-disabled: #344054;--color-input-disabled: #171a20;--color-border: #1d2939;--color-background-small-button-selected: #344054;--color-background-small-button-hover: #101828;--color-text-small-button: $base-white;--color-button: #f9f5ff;--color-button-hover: #e4dffe;--color-button-disabled: #e4dffe;--color-button-text: #171a20;--color-button-text-disabled: lighter(#171a20, 10);--color-button-border: transparent;--color-border: #344054;--color-border-soft: #1d2939;--color-icon: #d0d5dd;--color-bisel: rgba(255, 255, 255, 0.05);--color-csv-import-text: var(--color-text);--color-stepper: #30374f;--color-stepper-active: #6ce9a6}.CSVImporter-light{color-scheme:light;--color-background-main: #ffffff;--color-background-modal-hover: #ffffff;--color-background-modal-veil: #0e1116;--color-background-modal-shadow: transparent;--color-background-modal-shade: #f2f4f7;--color-tertiary: #ffffff;--color-tertiary-hover: #f2f4f7;--color-tertiary-focus: #ffffff;--color-tertiary-disabled: #eaecf0;--color-background-menu: #ffffff;--color-text-strong: #101828;--color-text-soft: #667085;--color-text-on-tertiary: #344054;--color-text-on-tertiary-disabled: #667085;--color-error: #fecdca;--color-text-error: #f04438;--color-background-error: #f04438;--color-background-error-hover: #d92d20;--color-background-error-soft: #fecdca;--color-input-background-soft: #d0d5dd;--color-input-border: #344054;--color-input-placeholder: #344054;--color-input-text-disabled: #344054;--color-input-disabled: #f9fafb;--color-border: #1d2939;--color-background-small-button-selected: #f2f4f7;--color-background-small-button-hover: #f9fafb;--color-text-small-button: var(--color-text);--color-button: #ffffff;--color-button-hover: #f2f4f7;--color-button-disabled: #fcfcfd;--color-button-text: var(--color-text-soft);--color-button-text-disabled: #d0d5dd;--color-button-border: #d0d5dd;--color-border: #d0d5dd;--color-border-soft: #eaecf0;--color-icon: #101323;--color-bisel: rgba(0, 0, 0, 0.05);--color-csv-import-text: #130638;--color-stepper: #b9c0d4;--color-stepper-active: #6ce9a6}.csv-importer *{box-sizing:border-box}.csv-importer .container{max-width:1300px;margin:0 auto}',
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/importer/style/vars.scss",
            "webpack://./src/importer/style/themes/common.scss",
            "webpack://./src/importer/style/themes/dark.scss",
            "webpack://./src/importer/style/themes/light.scss",
            "webpack://./src/importer/style/index.scss",
          ],
          names: [],
          mappings:
            "AAAA,MAIE,oBAAA,CACA,wCAAA,CACA,uCAAA,CACA,sCAAA,CACA,qCAAA,CACA,wCAAA,CACA,wBAAA,CACA,yCAAA,CACA,wCAAA,CACA,qCAAA,CACA,0CAAA,CACA,uCAAA,CAIA,gDAAA,CACA,+CAAA,CACA,qBAAA,CACA,6CAAA,CACA,8CAAA,CACA,gDAAA,CACA,iDAAA,CACA,8CAAA,CAEA,kCAAA,CACA,mCAAA,CACA,oCAAA,CAIA,oBAAA,CACA,uCAAA,CACA,iDAAA,CACA,iDAAA,CACA,iDAAA,CACA,iDAAA,CACA,sBAAA,CAIA,YAAA,CACA,aAAA,CACA,YAAA,CACA,gBAAA,CACA,kMAAA,CAKA,cAAA,CCrDF,MAEE,wBAAA,CACA,8BAAA,CACA,8BAAA,CACA,iCAAA,CACA,wCAAA,CAIA,gCAAA,CACA,mCAAA,CAIA,gCAAA,CACA,yCAAA,CACA,gDAAA,CAEA,kCAAA,CACA,2CAAA,CAIA,yCAAA,CACA,yBAAA,CACA,sCAAA,CACA,2CAAA,CAEA,8BAAA,CAEA,yBAAA,CACA,2CAAA,CACA,mCAAA,CACA,qBAAA,CACA,oCAAA,CACA,wCAAA,CACA,2CAAA,CCrCF,kBACE,iBAAA,CAKA,gDAAA,CAEA,uCAAA,CACA,sCAAA,CACA,wCAAA,CACA,uCAAA,CAEA,yBAAA,CACA,+BAAA,CACA,+BAAA,CACA,kCAAA,CAEA,gCAAA,CAKA,4BAAA,CAEA,0BAAA,CAEA,iCAAA,CACA,0CAAA,CAEA,sBAAA,CACA,2BAAA,CACA,iCAAA,CACA,uCAAA,CACA,sCAAA,CAKA,sCAAA,CACA,6BAAA,CACA,kCAAA,CACA,oCAAA,CACA,+BAAA,CAEA,uBAAA,CAEA,iDAAA,CACA,8CAAA,CACA,sCAAA,CAIA,uBAAA,CACA,6BAAA,CACA,gCAAA,CAEA,4BAAA,CACA,kDAAA,CAEA,kCAAA,CAIA,uBAAA,CACA,4BAAA,CAIA,qBAAA,CAIA,wCAAA,CAIA,0CAAA,CAIA,wBAAA,CACA,+BAAA,CClFF,mBACE,kBAAA,CAKA,gCAAA,CAEA,uCAAA,CACA,sCAAA,CACA,4CAAA,CACA,uCAAA,CAEA,yBAAA,CACA,+BAAA,CACA,+BAAA,CACA,kCAAA,CAEA,gCAAA,CAKA,4BAAA,CAEA,0BAAA,CAEA,iCAAA,CACA,0CAAA,CAEA,sBAAA,CACA,2BAAA,CACA,iCAAA,CACA,uCAAA,CACA,sCAAA,CAKA,sCAAA,CACA,6BAAA,CACA,kCAAA,CACA,oCAAA,CACA,+BAAA,CAEA,uBAAA,CAEA,iDAAA,CACA,8CAAA,CACA,4CAAA,CAIA,uBAAA,CACA,6BAAA,CACA,gCAAA,CAEA,2CAAA,CACA,qCAAA,CAEA,8BAAA,CAIA,uBAAA,CACA,4BAAA,CAIA,qBAAA,CAIA,kCAAA,CAIA,gCAAA,CAIA,wBAAA,CACA,+BAAA,CCpEA,gBACE,qBAAA,CAEF,yBACE,gBAAA,CACA,aAAA",
          sourcesContent: [
            ':root {\r\n  // DIMENSIONS\r\n\r\n  // margins and paddings\r\n  --base-spacing: 24px;\r\n  --m-xxxxs: calc(var(--base-spacing) / 5);\r\n  --m-xxxs: calc(var(--base-spacing) / 4);\r\n  --m-xxs: calc(var(--base-spacing) / 3);\r\n  --m-xs: calc(var(--base-spacing) / 2);\r\n  --m-s: calc(var(--base-spacing) * 2 / 3);\r\n  --m: var(--base-spacing);\r\n  --m-mm: calc(var(--base-spacing) * 3 / 2);\r\n  --m-l: calc(var(--base-spacing) * 5 / 3);\r\n  --m-xl: calc(var(--base-spacing) * 2);\r\n  --m-xxl: calc(var(--base-spacing) * 5 / 2);\r\n  --m-xxxl: calc(var(--base-spacing) * 3);\r\n\r\n  // FONTS\r\n\r\n  --font-size-xs: calc(var(--font-size) * 16 / 17);\r\n  --font-size-s: calc(var(--font-size) * 13 / 14);\r\n  --font-size: 0.875rem;\r\n  --font-size-l: calc(var(--font-size) * 8 / 7);\r\n  --font-size-xl: calc(var(--font-size) * 9 / 7);\r\n  --font-size-xxl: calc(var(--font-size) * 12 / 7);\r\n  --font-size-xxxl: calc(var(--font-size) * 18 / 7);\r\n  --font-size-h: calc(var(--font-size) * 24 / 7);\r\n\r\n  --font-family: "Inter", sans-serif;\r\n  --font-family-1: var(--font-family);\r\n  --font-family-2: "Laxan", sans-serif;\r\n\r\n  // BORDERS\r\n\r\n  --border-radius: 4px;\r\n  --border-radius-1: var(--border-radius);\r\n  --border-radius-2: calc(var(--border-radius) * 2);\r\n  --border-radius-3: calc(var(--border-radius) * 3);\r\n  --border-radius-4: calc(var(--border-radius) * 4);\r\n  --border-radius-5: calc(var(--border-radius) * 5);\r\n  --border-radius-r: 50%;\r\n\r\n  // TRANSITIONS\r\n\r\n  --fast: 0.3s;\r\n  --speed: 0.4s;\r\n  --slow: 0.9s;\r\n  --ease: ease-out;\r\n  --transition-ui: background-color var(--fast) var(--ease), border-color var(--fast) var(--ease), opacity var(--fast) var(--ease),\r\n    transform var(--fast) var(--ease), color var(--fast) var(--ease);\r\n\r\n  // BLURRED\r\n\r\n  --blurred: 5px;\r\n}\r\n',
            ":root {\r\n  // BACKGROUND\r\n  --color-primary: #{$primary-600};\r\n  --color-primary-hover: #{$primary-700};\r\n  --color-primary-focus: #{$primary-600};\r\n  --color-primary-disabled: #{$primary-200};\r\n  --color-primary-button-disabled: #3f3b55;\r\n\r\n  // --color-secondary: #{$gray-800};\r\n  // --color-secondary-hover: #{$gray-600};\r\n  --color-secondary-focus: #{$gray-800};\r\n  --color-secondary-disabled: #{$gray-700};\r\n\r\n  // TEXT\r\n\r\n  --color-text-on-primary: #{$base-white};\r\n  --color-text-on-primary-disabled: #{$gray-500};\r\n  --color-text-on-primary-button-disabled: #{$base-white};\r\n\r\n  --color-text-on-secondary: #{$gray-100};\r\n  --color-text-on-secondary-disabled: #{$gray-600};\r\n\r\n  // --color-progress-bar: #{$green-600};\r\n\r\n  --color-success: rgba(18, 183, 106, 0.88);\r\n  --color-emphasis: #{$blue-light-500};\r\n  --color-error: rgba(252, 93, 93, 0.88);\r\n  --color-attention: rgba(248, 203, 44, 0.88);\r\n\r\n  --color-importer-link: #2275d7;\r\n\r\n  --blue-light-500: #{$blue-light-500}; // Deprecated\r\n  --color-green-ui: var(--color-progress-bar); // Deprecated\r\n  --color-green: var(--color-success); // Deprecated\r\n  --color-blue: #{$blue-light-500}; // Deprecated\r\n  --color-red: rgba(252, 93, 93, 0.88); // Deprecated\r\n  --color-yellow: rgba(248, 203, 44, 0.88); // Deprecated\r\n  --importer-link: var(--color-importer-link); // Deprecated\r\n}\r\n",
            ".CSVImporter-dark {\r\n  color-scheme: dark;\r\n\r\n  // BACKGROUND\r\n\r\n  // --color-background: #0e1116;\r\n  --color-background-main: var(--color-background);\r\n  // --color-background-modal: #171a20;\r\n  --color-background-modal-hover: #2e323c;\r\n  --color-background-modal-veil: #0e1116;\r\n  --color-background-modal-shadow: #0e1116;\r\n  --color-background-modal-shade: #171a20;\r\n\r\n  --color-tertiary: #{$gray-900};\r\n  --color-tertiary-hover: #{$gray-800};\r\n  --color-tertiary-focus: #{$gray-800};\r\n  --color-tertiary-disabled: #{$gray-200};\r\n\r\n  --color-background-menu: #{$gray-900};\r\n  // --color-background-menu-hover: #{$gray-800};\r\n\r\n  // TEXT\r\n\r\n  --color-text-strong: #{$gray-100};\r\n  // --color-text: #{$gray-300};\r\n  --color-text-soft: #{$gray-500};\r\n\r\n  --color-text-on-tertiary: #{$base-white};\r\n  --color-text-on-tertiary-disabled: #{$gray-500};\r\n\r\n  --color-error: #{$error-800};\r\n  --color-text-error: #{$error-500};\r\n  --color-background-error: #{$error-500};\r\n  --color-background-error-hover: #{$error-600};\r\n  --color-background-error-soft: #{$error-200};\r\n\r\n  // INPUT\r\n\r\n  // --color-input-background: #{$gray-900};\r\n  --color-input-background-soft: #{$gray-800};\r\n  --color-input-border: #{$gray-700};\r\n  --color-input-placeholder: #{$gray-700};\r\n  --color-input-text-disabled: #{$gray-700};\r\n  --color-input-disabled: #171a20;\r\n\r\n  --color-border: #{$gray-800};\r\n\r\n  --color-background-small-button-selected: #{$gray-700};\r\n  --color-background-small-button-hover: #{$gray-900};\r\n  --color-text-small-button: $base-white;\r\n\r\n  // BUTTON\r\n\r\n  --color-button: #{$primary-50};\r\n  --color-button-hover: #{$primary-100};\r\n  --color-button-disabled: #{$primary-100};\r\n\r\n  --color-button-text: #171a20;\r\n  --color-button-text-disabled: lighter(#171a20, 10);\r\n\r\n  --color-button-border: transparent;\r\n\r\n  // BORDER\r\n\r\n  --color-border: #{$gray-700};\r\n  --color-border-soft: #{$gray-800};\r\n\r\n  // ICONS\r\n\r\n  --color-icon: #{$gray-300};\r\n\r\n  // SHADOW\r\n\r\n  --color-bisel: rgba(255, 255, 255, 0.05);\r\n\r\n  // BRAND\r\n\r\n  --color-csv-import-text: var(--color-text);\r\n\r\n  // STEPPER\r\n\r\n  --color-stepper: #{$gray-cool-800};\r\n  --color-stepper-active: #{$success-300};\r\n}\r\n",
            ".CSVImporter-light {\r\n  color-scheme: light;\r\n\r\n  // BACKGROUND\r\n\r\n  // --color-background: #{$gray-100};\r\n  --color-background-main: #{$base-white};\r\n  // --color-background-modal: #{$base-white};\r\n  --color-background-modal-hover: #{$base-white};\r\n  --color-background-modal-veil: #0e1116;\r\n  --color-background-modal-shadow: transparent;\r\n  --color-background-modal-shade: #{$gray-100};\r\n\r\n  --color-tertiary: #{$base-white};\r\n  --color-tertiary-hover: #{$gray-100};\r\n  --color-tertiary-focus: #{$base-white};\r\n  --color-tertiary-disabled: #{$gray-200};\r\n\r\n  --color-background-menu: #{$base-white};\r\n  // --color-background-menu-hover: #{$gray-100};\r\n\r\n  // TEXT\r\n\r\n  --color-text-strong: #{$gray-900};\r\n  // --color-text: #{$gray-800};\r\n  --color-text-soft: #{$gray-500};\r\n\r\n  --color-text-on-tertiary: #{$gray-700};\r\n  --color-text-on-tertiary-disabled: #{$gray-500};\r\n\r\n  --color-error: #{$error-200};\r\n  --color-text-error: #{$error-500};\r\n  --color-background-error: #{$error-500};\r\n  --color-background-error-hover: #{$error-600};\r\n  --color-background-error-soft: #{$error-200};\r\n\r\n  // INPUT\r\n\r\n  // --color-input-background: #{$base-white};\r\n  --color-input-background-soft: #{$gray-300};\r\n  --color-input-border: #{$gray-700};\r\n  --color-input-placeholder: #{$gray-700};\r\n  --color-input-text-disabled: #{$gray-700};\r\n  --color-input-disabled: #{$gray-50};\r\n\r\n  --color-border: #{$gray-800};\r\n\r\n  --color-background-small-button-selected: #{$gray-100};\r\n  --color-background-small-button-hover: #{$gray-50};\r\n  --color-text-small-button: var(--color-text);\r\n\r\n  // BUTTON (default)\r\n\r\n  --color-button: #{$base-white};\r\n  --color-button-hover: #{$gray-100};\r\n  --color-button-disabled: #{$gray-25};\r\n\r\n  --color-button-text: var(--color-text-soft);\r\n  --color-button-text-disabled: #{$gray-300};\r\n\r\n  --color-button-border: #{$gray-300};\r\n\r\n  // BORDER\r\n\r\n  --color-border: #{$gray-300};\r\n  --color-border-soft: #{$gray-200};\r\n\r\n  // ICONS\r\n\r\n  --color-icon: #{$gray-blue-900};\r\n\r\n  // SHADOW\r\n\r\n  --color-bisel: rgba(0, 0, 0, 0.05);\r\n\r\n  // BRAND\r\n\r\n  --color-csv-import-text: #130638;\r\n\r\n  // STEPPER\r\n\r\n  --color-stepper: #{$gray-cool-300};\r\n  --color-stepper-active: #{$success-300};\r\n}\r\n",
            '@import "design-system/colors";\r\n@import "vars";\r\n@import "themes/common";\r\n@import "themes/dark";\r\n@import "themes/light";\r\n\r\n.csv-importer {\r\n  // font-family: var(--font-family-1);\r\n  // background-color: var(--color-background);\r\n  // color: var(--color-text);\r\n  // font-size: var(--font-size);\r\n  // font-weight: 500;\r\n  // line-height: 1.5;\r\n\r\n  * {\r\n    box-sizing: border-box;\r\n  }\r\n  .container {\r\n    max-width: 1300px;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n',
          ],
          sourceRoot: "",
        },
      ]);
      const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/CSVImporter/style/csv-importer.css": (
      module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/css-loader/dist/runtime/sourceMaps.js"
        ),
        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
        ),
        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/css-loader/dist/runtime/api.js"
        ),
        ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
        );
      ___CSS_LOADER_EXPORT___.push([
        module.id,
        ".CSVImporter {\n  border: none;\n  background-color: transparent;\n  padding: 0 1rem;\n  border-radius: 1.2rem;\n  color: inherit;\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 14px;\n  /* height: 2.4rem; */\n  display: inline-flex;\n  gap: 0.5rem;\n  align-items: center;\n  transition: filter 0.2s ease-out;\n}\n\n.CSVImporter svg {\n  display: block;\n}\n\n.CSVImporter svg path {\n  stroke: currentColor !important;\n}\n\n.CSVImporter:hover,\n.CSVImporter:active {\n  filter: brightness(1.2);\n}\n\n.CSVImporter-dialog::backdrop {\n  background-color: rgba(0, 0, 0, 0.85);\n}\n\n.CSVImporter-dialog {\n  border-radius: 1rem;\n  width: 80vw;\n  height: 100vh;\n  min-width: 907px;\n  border: none;\n  position: fixed;\n  inset: 0;\n  padding: 0;\n  margin: auto;\n}\n\n.CSVImporter-div {\n  border: none;\n  display: block;\n  width: 100%;\n  height: 98vh;\n  overflow-y: hidden;\n}\n\n@media (max-width: 768px) {\n  .CSVImporter-dialog {\n    width: 90vw;\n    min-width: 950px;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/components/CSVImporter/style/csv-importer.css"],
          names: [],
          mappings:
            "AAAA;EACE,YAAY;EACZ,6BAA6B;EAC7B,eAAe;EACf,qBAAqB;EACrB,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,oBAAoB;EACpB,oBAAoB;EACpB,WAAW;EACX,mBAAmB;EACnB,gCAAgC;AAClC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;;EAEE,uBAAuB;AACzB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,QAAQ;EACR,UAAU;EACV,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE;IACE,WAAW;IACX,gBAAgB;EAClB;AACF",
          sourcesContent: [
            ".CSVImporter {\r\n  border: none;\r\n  background-color: transparent;\r\n  padding: 0 1rem;\r\n  border-radius: 1.2rem;\r\n  color: inherit;\r\n  cursor: pointer;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n  /* height: 2.4rem; */\r\n  display: inline-flex;\r\n  gap: 0.5rem;\r\n  align-items: center;\r\n  transition: filter 0.2s ease-out;\r\n}\r\n\r\n.CSVImporter svg {\r\n  display: block;\r\n}\r\n\r\n.CSVImporter svg path {\r\n  stroke: currentColor !important;\r\n}\r\n\r\n.CSVImporter:hover,\r\n.CSVImporter:active {\r\n  filter: brightness(1.2);\r\n}\r\n\r\n.CSVImporter-dialog::backdrop {\r\n  background-color: rgba(0, 0, 0, 0.85);\r\n}\r\n\r\n.CSVImporter-dialog {\r\n  border-radius: 1rem;\r\n  width: 80vw;\r\n  height: 100vh;\r\n  min-width: 907px;\r\n  border: none;\r\n  position: fixed;\r\n  inset: 0;\r\n  padding: 0;\r\n  margin: auto;\r\n}\r\n\r\n.CSVImporter-div {\r\n  border: none;\r\n  display: block;\r\n  width: 100%;\r\n  height: 98vh;\r\n  overflow-y: hidden;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .CSVImporter-dialog {\r\n    width: 90vw;\r\n    min-width: 950px;\r\n  }\r\n}\r\n",
          ],
          sourceRoot: "",
        },
      ]);
      const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
    },
  },
]);
