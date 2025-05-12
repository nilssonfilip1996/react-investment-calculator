import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ inputData }) {
  const initialInvestment = inputData[0].value;
  const annualInvestment = inputData[1].value;
  const expectedReturn = inputData[2].value;
  const duration = inputData[3].value;

  const invResults = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  function generateTableRows() { // Returns an array of tr with data in the columns matching the thead.
    let totalInterest = 0;
  
    return (invResults.map((row, i) => {
      const totalInvested = initialInvestment + annualInvestment*(i+1);
      totalInterest += row.interest;
      return (
        <tr key={row.year}>
          <td>{row.year}</td>
          <td>{formatter.format(row.valueEndOfYear)}</td>
          <td>{formatter.format(row.interest)}</td>
          <td>{formatter.format(totalInterest)}</td>
          <td>{formatter.format(totalInvested)}</td>
        </tr>
      );
    }))
  }

  return (
    <div className="center">
      <table id="result">
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Investment Value</th>
            <th scope="col">Interest (Year)</th>
            <th scope="col">Total Interest</th>
            <th scope="col">Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {generateTableRows()}
        </tbody>
      </table>
    </div>
  );
}
