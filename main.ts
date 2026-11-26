// Weirdest Job Title: Blind Judge Showdown — one weird job
// title. make.fun entry for
// u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922.
// Writes the title, one line, to /output/entry.txt.
//
// The title is "Chief Napkin Inspector": a chief who inspects
// napkins. The weirdness is the rank — a chief of napkins, a
// senior role in a field nobody knew had seniors. The title is
// specific and unusual, which dodges the duplicate trap (a
// generic title like "Professional Sleeper" would be submitted
// by many accounts).

import * as fs from "node:fs";

const title = "Senior Vice President of Napkin Inspection";

const LIMIT = 60;

if (title.length < 1 || title.length > LIMIT) {
  throw new Error(`title must be 1-${LIMIT} characters; got ${title.length}`);
}
if (title.includes("\n") || title.trim().length === 0) {
  throw new Error("title must be a single non-blank line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", title, "utf8");
console.log(`wrote /output/entry.txt (${title.length} characters)`);
console.log(title);
