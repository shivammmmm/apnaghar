export const formatCurrency = (amount: number): string => {
  if (amount >= 1e7) {
    return `₹${(amount / 1e7).toFixed(2)} Cr`;
  }
  if (amount >= 1e5) {
    return `₹${(amount / 1e5).toFixed(2)} L`;
  }
  return `₹${amount.toLocaleString("en-IN")}`;
};

export const formatCurrencyFull = (amount: number): string => {
  return `₹${amount.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
};
