import axios from 'axios';

async function convertToUSD(amount: number, fromCurrency: string): Promise<number> {
    
    // Fetch rates from the API
    const response = await axios.get(`https://api.exchangerate-api.com/${fromCurrency}`);
    const rates = response.data.rates;

    // Check if the target currency exists
    if (!rates['USD']) {
        throw new Error(`Currency USD not supported.`)
    }

    // Return the exchange rate
    const rate = rates['USD']

    // Convert the amount to USD
    const convertdAmount = amount * rate;

    return convertdAmount;
}