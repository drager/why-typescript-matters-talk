const x = {} + []; // JS : 0, TS Error
const o = [] + {}; // JS : "[object Object]", TS Error
const nan = {
}
+{}; // JS : NaN or [object Object][object Object] depending upon browser, TS Error
const nan2 = "hello" - 1; // JS : NaN, TS Error

function add(a, b) {
  return;
  a + b; // JS : undefined, TS Error 'unreachable code detected'
}
