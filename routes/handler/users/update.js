const apiAdapter = require('../../apiAdapter');
const { URL_SERVICE_USER } = process.env;

const api = apiAdapter(URL_SERVICE_USER);

module.exports = async (req, res) => {
	try {
		const id = req.user.data.id;
		const user = await api.put(`/users/${id}`, req.body);
		return res.json(user.data);

		// checking decoded jwt :)
		// return res.json(req.user);
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
