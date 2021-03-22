const apiAdapter = require('../../../apiAdapter');
const { URL_SERVICE_EVENT } = process.env;

const api = apiAdapter(URL_SERVICE_EVENT);

module.exports = async(req, res) => {
  try {
    const userId = req.user.data.id;
    const offeredCourseId = req.body.offered_course_id;

		const userCourses = await api.post('/api/user-courses', {
			user_id: userId,
			offered_course_id: offeredCourseId,
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
}
