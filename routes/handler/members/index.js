const create = require('./create');
const get = require('./get');
const getAll = require('./getAll');
const update = require('./update');
const giveAccess = require('./give-access');
const removeAccess = require('./remove-access');
const destroy = require('./destroy');

module.exports = {
	create,
	get,
	getAll,
	update,
  giveAccess,
  removeAccess,
	destroy,
};
