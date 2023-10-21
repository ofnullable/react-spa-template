const query = (maxWidth) => `
  @media (max-width: ${maxWidth}px)
`;

export const Media = {
  xsmall: query(375),
  small: query(768),
  medium: query(1024),
  large: query(1280),
  xlarge: query(1440),
  xxlarge: query(1920),
  custom: query,
};
