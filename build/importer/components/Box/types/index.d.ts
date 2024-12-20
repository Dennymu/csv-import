export type BoxVariant = "fluid" | "mid" | "wide" | "space-l" | "space-mid" | "space-none" | "bg-shade";
export type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
    variants?: BoxVariant[];
};
export declare const boxVariants: BoxVariant[];
