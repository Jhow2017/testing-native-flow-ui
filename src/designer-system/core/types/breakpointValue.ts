export type BreakpointValue<T> =
    | T
    | { sm?: T; md?: T; lg?: T; [key: string]: any };
