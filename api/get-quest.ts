import { axios } from './axios'

export const getQuest = async (id: string) => {
	const { data } = await axios.get(`/api/quests/${id}`)

	return data
}