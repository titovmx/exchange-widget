import axios from 'axios';

const apiKey = '9bc23837d9a45a9953b05603e7490577';
const url = 'http://data.fixer.io/api/';
const currencies = ['GBP', 'USD', 'EUR'];
let cachedResponse = null;

class Rate {
  static get(base) {
    const symbols = currencies.join(',');
    return axios.get(`${url}latest?access_key=${apiKey}&base=${base}&symbols=${symbols}`).then(response => {
      if (response.data.success) {
        cachedResponse = response.data;
        return response.data;
      } else {
        if (!cachedResponse) {
          throw new Error(response.data.error.type);
        }
        // hack api base currency restriction
        const baseRate = cachedResponse.rates[base];
        const rates = {};
        for (let [name, rate] of Object.entries(cachedResponse.rates)) {
          rates[name] = rate / baseRate;
        }
        return {
          ...cachedResponse,
          base: base,
          rates,
        };
      }
    });
  }
}

export default Rate;
