describe('Telemetry System', function () {

	describe('TelemetryDiagnosticControls', function () {

		var telemetryDiagnosticControls = new TelemetryDiagnosticControls();		

		it('clean previous diagnostic info', function() {
			telemetryDiagnosticControls.writeDiagnosticInfo('');
			expect(telemetryDiagnosticControls._diagnosticInfo).toBe('')
		});

		it('previous connection should be closed', function() {
			telemetryDiagnosticControls.disconnectClient()
			expect(telemetryDiagnosticControls._telemetryClient.onlineStatus()).toBe(false)
		});

		it('check if client connection has been successfully established', function () {
			 spyOn(telemetryDiagnosticControls._telemetryClient, "onlineStatus").andCallFake(function () {
			 	return false;
			 });
			 expect(telemetryDiagnosticControls.checkTransmission()).toThrow('Unable to connect')
			

		});

		// it('CheckTransmission() should send a diagnostic message and receive a status message response', function () {

		// 	target.checkTransmission();

		// 	var result = target.readDiagnosticInfo();
		// 	console.log(result, 'result')
		// });

	});

});
