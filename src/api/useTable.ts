import axios from 'axios'
import { appendQueryParams } from '@/utils/util'

export function getTableSetting() {
	return axios.get('/api/useTable/setting')
}
export function getData(params) {
	const url = appendQueryParams('/api/useTable/data', params)
	return axios.get(url)
}
