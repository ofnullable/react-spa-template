const query = (maxWidth) => `
  @media (max-width: ${maxWidth}px)
`;

export const media = {
  xxlarge: query(1920),
  xlarge: query(1440),
  large: query(1200),
  medium: query(1024),
  small: query(768),
  xsmall: query(375),
  custom: query,
};
