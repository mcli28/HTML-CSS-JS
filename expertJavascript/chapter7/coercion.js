var num = '1';

// Bad implicit coercion
num = +num;

// Good expressive conversion
num = Number(num);