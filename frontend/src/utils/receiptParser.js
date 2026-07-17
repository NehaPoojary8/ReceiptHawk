export const parseReceipt = (text) => {
  const lines = text.split("\n");

  let title = "";
  let amount = "";
  let date = "";
  let category = "Other";

  // Get receipt title
  const titleLine = lines.find(
  line =>
    line.toLowerCase().includes("shake") ||
    line.toLowerCase().includes("factory") ||
    line.toLowerCase().includes("restaurant") ||
    line.toLowerCase().includes("cafe")
);

title = titleLine ? titleLine.trim() : "";

  // Extract amount
  const amountMatch = text.match(
  /Grand\s*Total[^0-9]*(\d+(\.\d{1,2})?)/i
);

if (amountMatch) {
  amount = amountMatch[1];
}

  // Extract date
 const dateMatch = text.match(
  /Date[:\s]*(\d{2})\/(\d{2})\/(\d{2,4})/i
);

if (dateMatch) {

  let year = dateMatch[3];

  if (year.length === 2) {
    year = "20" + year;
  }

  date = `${year}-${dateMatch[2]}-${dateMatch[1]}`;
}

  // Suggest category
  const lowerText = text.toLowerCase();

  if (
  lowerText.includes("shake") ||
  lowerText.includes("factory") ||
  lowerText.includes("burger") ||
  lowerText.includes("pizza") ||
  lowerText.includes("restaurant") ||
  lowerText.includes("cafe") ||
  lowerText.includes("coffee") ||
  lowerText.includes("food")
) {
  category = "Food";
} else if (
  lowerText.includes("uber") ||
  lowerText.includes("ola")
) {
  category = "Travel";
} else if (
  lowerText.includes("amazon") ||
  lowerText.includes("myntra")
) {
  category = "Shopping";
}

  return {
    title,
    amount,
    date,
    category,
  };
};