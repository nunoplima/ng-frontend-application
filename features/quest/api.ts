import axios from 'axios'

export const getQuest = async (id: string) => {
	const { data } = await axios.get(`${process.env.BASE_URL || 'http://localhost:3000'}/api/quests/${id}`)

	return data
}