import { mkdirSync, writeFileSync } from "node:fs";

// The funniest one-line warning label for a time machine:
// a straight-faced safety notice about meeting your past self.
const label =
  "WARNING: Do not approach your past self. He has already filed a complaint against you. It was upheld.";

if (label.length === 0 || label.length > 120) {
  throw new Error(`label must be 1 to 120 characters, got ${label.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", label, "utf8");
console.log(`wrote ${label.length} characters to /output/entry.txt`);
