// 数据对象根据某个key去重
export const getUniqueArray = (array, key) => {
	const newArr = []
	array.forEach((item) => {
		if (newArr.findIndex((item1) => item1[key] === item[key]) === -1) {
			newArr.push(item)
		}
	})
	return newArr
}

// url拼接参数
export function appendQueryParams(url, params) {
	const queryString = Object.keys(params)
		.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
		.join('&')

	return url + (url.includes('?') ? '&' : '?') + queryString
}

// url解析参数
export function parseQueryParams(url) {
	const queryString = url.split('?')[1]
	if (!queryString) {
		return {}
	}

	const params = {}
	const keyValuePairs = queryString.split('&')
	keyValuePairs.forEach((keyValue) => {
		const [key, value] = keyValue.split('=')
		params[decodeURIComponent(key)] = decodeURIComponent(value)
	})

	return params
}
