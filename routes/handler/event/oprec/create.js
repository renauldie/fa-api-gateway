const apiAdapter = require('../../../apiAdapter');
const { URL_SERVICE_EVENT } = process.env;

const api = apiAdapter(URL_SERVICE_EVENT);

module.exports = async (req, res) => {
	try {
		const oprec = await api.post('/api/oprec', req.body);
		return res.json(oprec.data);
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
