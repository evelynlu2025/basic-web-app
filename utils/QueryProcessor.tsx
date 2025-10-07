export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "evelyn";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "evelynlu";
  }

  const addMatch = query.match(/what\s+is\s+(-?\d+)\s*(?:\+|plus)\s*(-?\d+)\??/i);
  if (addMatch) {
    const x = parseFloat(addMatch[1]);
    const y = parseFloat(addMatch[2]);
    return (x + y).toString();
  }

  const largestMatch = query.match(
    /which\s+of\s+the\s+following\s+numbers\s+is\s+the\s+largest[:\s]+([\d,\s-]+)/i
  );
  if (largestMatch) {
    const nums = largestMatch[1]
      .split(/[,\s]+/) // split by commas or spaces
      .filter(Boolean) // remove empty strings
      .map(parseFloat);

    if (nums.length > 0 && nums.every((n) => !isNaN(n))) {
      return Math.max(...nums).toString();
    }
  }

  return "";
}
