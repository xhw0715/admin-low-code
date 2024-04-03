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

export const a = 1
