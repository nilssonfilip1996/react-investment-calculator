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
  let totalInterest = 0;
  console.log(invResults);

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
          {invResults.map((row, i) => {
            const totalInvested = initialInvestment + annualInvestment*(i+1);
            totalInterest += row.interest;
            return (
              <tr>
                <td>{row.year}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
