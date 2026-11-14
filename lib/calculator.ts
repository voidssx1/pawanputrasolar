export type Estimate = {
  bill: number;
  kw: number;
  gross: number;
  batteryCost: number;
  total: number;
  centralSubsidy: number;
  stateTopUp: number;
  subsidy: number;
  net: number;
  monthlySaving: number;
  newBill: number;
  payback: number;
};

export const UNIT_RATE = 8;
export const YIELD_PER_KW_DAY = 4.2;
export const RESIDENTIAL_COST_PER_KW = 58000;
export const BATTERY_COST_PER_KW = 30000;

export function estimate(bill: number, withBattery = false): Estimate {
  const rawKw = bill / UNIT_RATE / 30 / YIELD_PER_KW_DAY;
  const kw = Math.min(20, Math.max(1, Math.round(rawKw * 2) / 2));
  const gross = Math.round(kw * RESIDENTIAL_COST_PER_KW);
  const centralSubsidy = Math.min(
    78000,
    30000 * Math.min(kw, 2) + 18000 * Math.max(0, Math.min(kw - 2, 1)),
  );
  const stateTopUp = 10000 * Math.min(kw, 3);
  const subsidy = centralSubsidy + stateTopUp;
  const batteryCost = withBattery ? Math.round(kw * BATTERY_COST_PER_KW) : 0;
  const total = gross + batteryCost;
  const net = Math.max(0, total - subsidy);
  const monthlyGeneration = kw * YIELD_PER_KW_DAY * 30;
  const monthlySaving = Math.round(Math.min(bill * 0.9, monthlyGeneration * UNIT_RATE));
  const payback = monthlySaving > 0 ? net / (monthlySaving * 12) : 0;

  return {
    bill,
    kw,
    gross,
    batteryCost,
    total,
    centralSubsidy,
    stateTopUp,
    subsidy,
    net,
    monthlySaving,
    newBill: Math.max(0, bill - monthlySaving),
    payback,
  };
}

const inrFormatter = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 0,
});

export function inr(value: number) {
  return `₹${inrFormatter.format(Math.round(value))}`;
}

export function inrCompact(value: number) {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)} Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(2)} L`;
  return inr(value);
}
