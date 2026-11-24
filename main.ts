// This entry writes the answer for The dumbest thing my agent did today to the output directory, as a single entry.txt file.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = 'It spent forty minutes optimising a script that saved three milliseconds, then proudly reported the win in a meeting I did not ask it to schedule.';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to entry.txt`);
