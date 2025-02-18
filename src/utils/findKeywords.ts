export const findKeywords = (text: string): string[] => {
  const keywords = ['замовлю', 'буду', 'принеси', 'приготуй', 'хочу'];

  const regex = new RegExp(`(${keywords.join('|')})`, 'gi');

  const matches = text.match(regex);


  return matches ? Array.from(new Set(matches)) : [];
};
