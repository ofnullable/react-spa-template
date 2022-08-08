export const kebabize = (str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase());

export const camelize = (str) => str.replace(/-./g, ($) => $[1].toUpperCase());
