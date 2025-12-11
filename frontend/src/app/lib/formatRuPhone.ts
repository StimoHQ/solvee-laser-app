export function formatRuPhone(input: string): string {
	const digits = input.replace(/\D/g, "").replace(/^8/, "7"); // нормализуем 8 -> 7
	if (digits.length < 11) return input; // можно вернуть как есть или дополнять логику

	const d = digits.slice(0, 11);
	const country = d[0]; // 7
	const a = d.slice(1, 4); // 995
	const b = d.slice(4, 7); // 562
	const c = d.slice(7, 9); // 27
	const e = d.slice(9, 11); // 76

	return `+${country} (${a}) ${b}-${c}-${e}`;
}
