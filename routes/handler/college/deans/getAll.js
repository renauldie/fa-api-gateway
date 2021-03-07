const apiAdapter = require('../../../apiAdapter');
const { URL_SERVICE_COLLEGE } = process.env;

const api = apiAdapter(URL_SERVICE_COLLEGE);

module.exports = async (req, res) => {
	try {
		const dean = await api.get('/api/deans');
		return res.json(dean.data);
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
