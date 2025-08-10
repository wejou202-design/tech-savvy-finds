export const affiliates = {
  amazonTag: 'eligeinteligente-21', // Reemplaza por tu tag real de Amazon
  softwareRefParam: 'ref=eligeinteligente',
};

export const buildAmazonUrl = (base: string) => {
  const sep = base.includes('?') ? '&' : '?';
  return `${base}${sep}tag=${affiliates.amazonTag}&ascsubtag=ei`;
};

export const buildSoftwareUrl = (base: string) => {
  const sep = base.includes('?') ? '&' : '?';
  return `${base}${sep}${affiliates.softwareRefParam}`;
};
