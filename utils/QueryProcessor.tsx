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
  
  const match = query.match(/what\s+is\s+(-?\d+)\s*\+\s*(-?\d+)\??/i);
  if (match) {
    const x = parseFloat(match[1]);
    const y = parseFloat(match[2]);
    return (x + y).toString();
  }

  return "";
}
