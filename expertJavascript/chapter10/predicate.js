function predicate (verdict, value) {
	return verdict(value === flipSign(flipSign(value)));
}