const apiAdapter = require('../../../apiAdapter');
const { URL_SERVICE_COLLEGE } = process.env;

const api = apiAdapter(URL_SERVICE_COLLEGE);

module.exports = async (req, res) => {
	try {
		const userId = req.user.data.id;

		const id = req.params.id;
		const userCourses = await api.delete(`/api/user-courses/${id}`, {
			user_id: userId,
		});

		return res.json(userCourses.data);
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
