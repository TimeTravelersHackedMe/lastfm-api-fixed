var defaultOptions = function (params, callback, key) {
	var options = params || {};

	options.handlers = {
		'success' : function (rsp) {
			console.log(rsp);
			if (key) { rsp = rsp[key]; }

			if (rsp && typeof callback === 'function') {
				callback(null, rsp);
			} else {
				callback(new Error("Not found"));
			}
		},
		'error' : function (err) {
			console.log(err);
			if (typeof callback === 'function') {
				callback(err);
			}
		}
	};

	return options;
};

exports.defaultOptions = defaultOptions;
