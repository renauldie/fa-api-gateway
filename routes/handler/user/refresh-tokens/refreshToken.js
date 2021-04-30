const jwt = require('jsonwebtoken');
const apiAdapter = require('../../../apiAdapter');
const {
	URL_SERVICE_USER,
	JWT_SECRET,
	JWT_SECRET_REFRESH_TOKEN,
	JWT_REFRESH_TOKEN_EXPIRED,
} = process.env;

const api = apiAdapter(URL_SERVICE_USER);

module.exports = async (req, res) => {
	try {
		const refreshToken = req.body.refresh_token;
		const npm = req.body.npm;

		if (!refreshToken || !npm) {
			return res.status(400).json({
				status: 'error',
				message: 'invalid token',
			});
		}

		await api.get('/refresh-tokens', {
			params: { refresh_token: refreshToken },
		});

		jwt.verify(refreshToken, JWT_SECRET_REFRESH_TOKEN, (err, decoded) => {
			if (err) {
				return res.status(403).json({
					status: 'error',
					message: err.message,
				});
			}

			if (npm !== decoded.data.npm) {
				return res.status(400).json({
					status: 'error',
					message: 'npm not valid',
				});
			}

			const token = jwt.sign({ data: decoded.data }, JWT_SECRET, {
				expiresIn: JWT_REFRESH_TOKEN_EXPIRED,
			});

			return res.json({
				status: 'success',
				data: {
					token,
				},
			});
		});
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
