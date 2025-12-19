export const avitoIsOn = (): boolean => {
	return parseInt(process.env.AVITO_IS_ON ?? "0", 10) === 1;
};
