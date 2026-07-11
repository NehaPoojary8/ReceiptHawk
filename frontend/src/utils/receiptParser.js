export const parseReceipt = (text) => {
  const lines = text.split("\n");

  let title = "";
  let amount = "";
  let date = "";
  let category = "Other";

  // Get receipt title
  title = lines[0]?.trim();

  // Extract amount
  const amountMatch = text.match(
    /(total|amount)[^\d]*(\d+(\.\d{1,2})?)/i
  );

  if (amountMatch) {
    amount = amountMatch[2];
  }

  // Extract date
  const dateMatch = text.match(
    /(\d{2}\/\d{2}\/\d{4})/
  );

  if (dateMatch) {
    const parts = dateMatch[1].split("/");

    date = `${parts[2]}-${parts[1]}-${parts[0]}`;
  }

  // Suggest category
  const lowerText = text.toLowerCase();

  if (
    lowerText.includes("kfc") ||
    lowerText.includes("pizza") ||
    lowerText.includes("restaurant")
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