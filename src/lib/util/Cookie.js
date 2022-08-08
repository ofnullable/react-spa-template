export const Cookie = {
  parse(str) {
    return str
      .split(';')
      .map((v) => v.trim().split('='))
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  },
};
