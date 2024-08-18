export function mostProfitableDepartment(salesData) {
  const departments = {};

  for (const sale of salesData) {
    if (!departments[sale.department]) {
      departments[sale.department] = 0;
    }
    departments[sale.department] += sale.sales;
  }

  let maxSales = 0;
  let profitableDepartment = '';

  for (const department in departments) {
    if (departments[department] > maxSales) {
      maxSales = departments[department];
      profitableDepartment = department;
    }
  }

  return profitableDepartment;
}
