export const interestRatesTableData = (interestRates) => {
    const data = [];
    interestRates.map((interestRate) => {
        const {term, monthly, annualy, maturity} = interestRate; 
        const row = [term, monthly, annualy, maturity];
        data.push(row);
    });
    return data;
} 