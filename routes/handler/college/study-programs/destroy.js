const apiAdapter = require('../../../apiAdapter');
const { URL_SERVICE_COLLEGE } = process.env;

const api = apiAdapter(URL_SERVICE_COLLEGE);

module.exports = async (req, res) => {
	try {
		const id = req.params.id;
		const studyProgram = await api.delete(`/api/study-programs/${id}`);
		return res.json(studyProgram.data);
	} catch (error) {
		if (error.code === 'ECONNREFUSED') {
			return res.status(500).json({
				status: 'error',
				message: 'service unavailable',
			});
		}

		const { status, data } = error.response;
		retur;
	}
};
