var Console = new Object();

Console.useSoCoCareLog = false;


Console.createXMLHttpRequest = function() {
    if (window.XMLHttpRequest) {
        try {
            return new XMLHttpRequest();
        } catch (err) {
            console.error(err.message);
        }
    }

    if (window.createRequest) {
        try {
            return window.createRequest();
        } catch (err) {
            console.error(err.message);
        }
    }

    try {
        return new ActiveXObject("Microsoft.XMLHTTP");
    } catch (err) {
        console.error(err.message);
    }

    return null;
};


Console.getLogString = function(severity, msg) {
    var object = new Object();
    object.date = (new Date()).toString();
    object.severity = severity;
    object.msg = msg;

    return JSON.stringify(object);
};

Console.sendLog = function(severity, msg) {
	var tenant = gSession.getTenant();
	if (tenant == null) {
		return ;
	}

	var tenantId = -1;
	if (typeof(tenant) == "string") {
		tenantId = tenant;
	} else {
		tenantId = tenant.getId();
	}

	var lvUrl = encodeURI(gSession.getAdminUrl() + "/tenants/" + tenantId + "/logs/" + gSession.getUsername());

	var lvXMLHttpRequest = Console.createXMLHttpRequest();

	if (lvXMLHttpRequest == null) {
		return ;
	}

	try {
		lvXMLHttpRequest.open("POST", lvUrl, true);

		if (typeof(gSession.getAuthenticationHeader) == "function") {
			lvXMLHttpRequest.setRequestHeader('Authorization', 'Basic ' + btoa(gSession.getAuthenticationHeader()));
		}

		lvXMLHttpRequest.setRequestHeader("Content-type", "application/json");

		lvXMLHttpRequest.send(encodeURIComponent(Console.getLogString(severity, msg)));
	} catch (err) {
//		console.error(new Date(), err);
	}

	return;
};


Console.log = function() {
	try {
		if (Console.useSoCoCareLog) {
			Console.sendLog("LOG", JSON.stringify(Array.prototype.slice.call(arguments, 0)));
			// return ;
		}

		if (!window.console) {
			return ;
		}

		if (gSession.getUseVCCBridge()) {
			console.log(JSON.stringify(Array.prototype.slice.call(arguments, 0)));
		} else {
			console.log(new Date(), Array.prototype.slice.call(arguments, 0));
		}
	} catch (err) {
//		console.error(new Date(), JSON.stringify(Array.prototype.slice.call(arguments, 0)));
	}
};


Console.debug = function() {
	try {
		if (Console.useSoCoCareLog) {
			Console.sendLog("DEBUG", JSON.stringify(Array.prototype.slice.call(arguments, 0)));
			// return ;
		}

		if (!window.console) {
			return ;
		}

		if (gSession.getUseVCCBridge()) {
			console.log(JSON.stringify(Array.prototype.slice.call(arguments, 0)));
		} else {
			console.log(new Date(), Array.prototype.slice.call(arguments, 0));
		}
	} catch (err) {
//		console.error(new Date(), err);
	}
};


Console.info = function() {
	try {
		if (Console.useSoCoCareLog) {
			Console.sendLog("INFO", JSON.stringify(Array.prototype.slice.call(arguments, 0)));
			// return ;
		}

		if (!window.console) {
			return ;
		}

		if (gSession.getUseVCCBridge()) {
			console.log(JSON.stringify(Array.prototype.slice.call(arguments, 0)));
		} else {
			console.log(new Date(), Array.prototype.slice.call(arguments, 0));
		}
	} catch (err) {
//		console.error(new Date(), err);
	}
};


Console.warn = function() {
	try {
		if (Console.useSoCoCareLog) {
			Console.sendLog("WARN", JSON.stringify(Array.prototype.slice.call(arguments, 0)));
			// return ;
		}

		if (!window.console) {
			return ;
		}

		if (gSession.getUseVCCBridge()) {
			console.log(JSON.stringify(Array.prototype.slice.call(arguments, 0)));
		} else {
			console.log(new Date(), Array.prototype.slice.call(arguments, 0));
		}
	} catch (err) {
//		console.error(new Date(), err);
	}
};


Console.error = function() {
	try {
		if (Console.useSoCoCareLog) {
			Console.sendLog("ERROR", JSON.stringify(Array.prototype.slice.call(arguments, 0)));
			// return ;
		}

		if (!window.console) {
			return ;
		}

		if (gSession.getUseVCCBridge()) {
			console.log(JSON.stringify(Array.prototype.slice.call(arguments, 0)));
		} else {
			console.log(new Date(), Array.prototype.slice.call(arguments, 0));
		}
	} catch (err) {
//		console.error(new Date(), err);
	}
};


Console.groupCollapsed = function() {
	try {
		if (Console.useSoCoCareLog) {
			Console.sendLog("LOG", JSON.stringify(Array.prototype.slice.call(arguments, 0)));
			// return ;
		}

		if (!window.console) {
			return ;
		}

		if (gSession.getUseVCCBridge()) {
			console.log(JSON.stringify(Array.prototype.slice.call(arguments, 0)));
		} else {
			console.log(new Date(), Array.prototype.slice.call(arguments, 0));
		}
	} catch (err) {
//		console.error(new Date(), err);
	}
};


Console.groupEnd = function() {
	try {
		if (Console.useSoCoCareLog) {
			Console.sendLog("LOG", JSON.stringify(Array.prototype.slice.call(arguments, 0)));
			// return ;
		}

		if (!window.console) {
			return ;
		}

		if (gSession.getUseVCCBridge()) {
			console.log(JSON.stringify(Array.prototype.slice.call(arguments, 0)));
		} else {
			console.log(new Date(), Array.prototype.slice.call(arguments, 0));
		}
	} catch (err) {
//		console.error(new Date(), err);
	}
};


Console.setUseSoCoCareLog = function(useSoCoCareLog) {
	Console.useSoCoCareLog = useSoCoCareLog;
};

