const apiAdapter = require('../../../apiAdapter');
const { URL_SERVICE_ORGANIZER } = process.env;

const api = apiAdapter(URL_SERVICE_ORGANIZER);

module.exports = async (req, res) => {
	try {
		const organizer = await api.get('/api/organizers');
		return res.json(organizer.data);
	} catch (error) {
		if (error.code === 'ECONNREFUSED') {
			return res
				.status(500)
				.json({ status: 'error', message: 'service unavailable' });
		}

		const { status, data } = error.response;
		return res.status(status).json(data);
	}
};