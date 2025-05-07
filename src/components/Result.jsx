import { calculateInvestmentResults } from "../util/investment";

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
            return (
              <tr>
                <td>{row.year}</td>
                <td>{row.valueEndOfYear}</td>
                <td>{row.interest}</td>
                <td>{row.inte}</td>
                <td>{row.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
