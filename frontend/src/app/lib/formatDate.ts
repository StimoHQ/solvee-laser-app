const formatDate = (timestamp: number) => {
	const date = new Date(timestamp * 1000);

	const d = String(date.getUTCDate()).padStart(2, "0");
	const m = String(date.getUTCMonth() + 1).padStart(2, "0");
	const y = date.getUTCFullYear();
	return `${d}.${m}.${y}`;
};

export default formatDate;
