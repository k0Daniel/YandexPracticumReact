export const isResponseOk = response => {
	return !(response instanceof Error);
};

export const getData = async url => {
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

const normalizeDataObject = obj => {
	return {
		...obj,
		category: obj.categories,
		users: obj.users_permissions_users
	};
};

export const normalizeData = data => {
	return data.map(item => {
		return normalizeDataObject(item);
	});
};

export const getNormalizedGamesDataByCategory = async (url, category) => {
	const data = await getData(`${url}?categories.name=${category}`);
	return isResponseOk(data) ? normalizeData(data) : data;
};

export const getNormalizedGameDataById = async (url, id) => {
	const data = await getData(`${url}/${id}`);
	return isResponseOk(data) ? normalizeDataObject(data) : data;
};

export const authorize = async (url, data) => {
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		});
		if (response.status !== 200) {
			throw new Error('Ошибка авторизации');
		}
		const result = await response.json();
		return result;
	} catch (error) {
		return error;
	}
};
