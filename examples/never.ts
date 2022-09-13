function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

function infiniteLoop(): never {
  while (true) {}
}
