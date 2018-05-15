TelemetryDiagnosticControls = function () {

	this._diagnosticChannelConnectionString = function () {
		return '*111#';
	};
	this._diagnosticInfo = '';
	this._telemetryClient = new TelemetryClient();
};

TelemetryDiagnosticControls.prototype = {

	readDiagnosticInfo: function () {
		return this._diagnosticInfo;
	},

	writeDiagnosticInfo: function (newValue) {
		this._diagnosticInfo = newValue;
	},

	disconnectClient: function () {
		this._telemetryClient.disconnect();
	},

	connectToClient: function () {
		var retryLeft = 3;
		while (this._telemetryClient.onlineStatus() === false && retryLeft > 0) {
			this._telemetryClient.connect(this._diagnosticChannelConnectionString);
			retryLeft -= 1;
		}
	},

	checkTransmission: function () {

		this.writeDiagnosticInfo('');
		this.disconnectClient();
		this.connectToClient()
		
		 if (this._telemetryClient.onlineStatus() === false) {
		 	throw 'Unable to connect';
		 }

		// this._telemetryClient.send(TelemetryClient.diagnosticMessage());
		// this._diagnosticInfo = this._telemetryClient.receive();*/
	}
};