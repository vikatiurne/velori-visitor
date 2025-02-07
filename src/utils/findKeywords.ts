export const findKeywords = (text: string): string[] => {
  const keywords = ['замовлю', 'буду', 'принеси', 'приготуй', 'хочу'];

  const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
  console.log('Message:', text.match(regex));

  const matches = text.match(regex);


  return matches ? Array.from(new Set(matches)) : [];
};
