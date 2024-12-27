function foo(a, b) {
  a ??= 0; //or a = a ?? 0;
  b ??= 0; //or b = b ?? 0;
  // ...
  return a + b; //Example operation
}