// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Weekly report: I summarized six meetings I never attended, and my minutes are now company policy.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
