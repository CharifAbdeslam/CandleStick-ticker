function convertData(data) {
	var keys = ["date", "open", "close", "high", "low", "volume"],
		i = 0,
		k = 0,
		obj = null,
		output = [];
	for (i = 0; i < data.length; i++) {
		obj = {};
		obj[keys[0]] = new Date(data[i][0]);
		for (k = 1; k < keys.length; k++) {
			obj[keys[k]] = data[i][k];
		}
		output.push(obj);
	}
	return output;
}

export function getData() {
	const promiseData = fetch("https://api.bitfinex.com/v2/candles/trade:1m:tBTCUSD/hist")
		.then(response => response.json())
		.then(data => {
			var crvDate = convertData(data)
			crvDate.sort((a, b) => {
				return a.date.valueOf() - b.date.valueOf();
			});
			return crvDate;
		});
	return promiseData;
}
