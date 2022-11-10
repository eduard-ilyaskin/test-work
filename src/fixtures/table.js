function createData(number, bank, time, sum, rest, status) {
  return { number, bank, time, sum, rest, status };
}

export const TABLE_STATUS = { ACTIVE: "active", REPAID: "repaid", EXPIRED: "expired" };

export const rows = [
  createData("№2118213", "Спитамен банк", "12 месяцев", "8000 TJS", "3750 TJS", "active"),
  createData("№2118250", "Первый Мик. Фин.", "24 месяцев", "10000 TJS", "9700 TJS", "active"),
  createData("№2117465", "Спитамен банк", "6 месяцев", "5000 TJS", "0 TJS", "repaid"),
  createData("№2116895", "Спитамен банк", "12 месяцев", "10000 TJS", "0 TJS", "repaid"),
];
