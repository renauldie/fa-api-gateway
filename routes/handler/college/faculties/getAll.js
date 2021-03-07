const apiAdapter = require('../../../apiAdapter');
const { URL_SERVICE_COLLEGE } = process.env;

const api = apiAdapter(URL_SERVICE_COLLEGE);

module.exports = async (req, res) => {
	try {
		const faculty = await api.get('/api/faculties');
		return res.json(faculty.data);
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
