import { axios } from './axios'

export const getQuests = async () => {
	const { data } = await axios.get('/api/quests')

	return data
}