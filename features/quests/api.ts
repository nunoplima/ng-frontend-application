import axios from 'axios'

export const getQuests = async () => {
	const { data } = await axios.get(`${process.env.BASE_URL || 'http://localhost:3000'}/api/quests`)

	return data
}