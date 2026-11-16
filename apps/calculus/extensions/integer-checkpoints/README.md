# Exact whole number feedback in calculus

Count questions require a whole number. Chapter 14's least-panel checkpoint used to accept `28.9999999999999999`, `29.0000000000000001`, and `sqrt(841.00000000000001)` as 29 because conversion to a JavaScript Number rounded them before the integer test. The `integer` checkpoints now compare the entered decimal, ratio, or square root exactly with the expected safe integer. General decimal checkpoints keep their existing tolerances.

The exact check preserves equivalent forms such as `29.0000`, `2.9e1`, `58/2`, `sqrt(841)`, and `sqrt(3364)/2`. It handles sign and zero separately, and represents a decimal as an integer coefficient and a power of ten. Comparison never expands a large power of ten. Nonzero rational multiples of pi or e cannot be integers. The ordinary numeric parser still decides which forms are supported and whether their approximate evaluation is finite; this change does not add expression syntax or check written reasoning.

A separate queue correction makes an empty or entirely invalid written-exam bank return an empty queue. The old count calculation forced one item even when no item existed and then read `chapterId` from `undefined`.

## Verification

Run the combined current verification from the calculus directory with `npm run check:current`; its [coverage and requirements](../current-checks/README.md) are explicit. The focused checks remain available:

```sh
node extensions/integer-checkpoints/regressions.mjs
node scripts/practice-numeric-parser-regressions.mjs
node scripts/numeric-check-regressions.mjs
node extensions/current-checks/source-and-labs.mjs
node scripts/publication-audit-training-edition.mjs
node extensions/current-checks/reading.mjs
```

The new regression loads the accepted historical evaluator directly from its unchanged source snapshot and reproduces six false acceptances and both empty-bank crashes. It then checks corrected behavior, valid equivalent forms, all 115 authored numerical examples, and exact perturbations on both sides of every one of the eight integer checkpoints. Existing checks pass for 114 guarded wrong-result feedback windows, 56 independently calculated checkpoints, all 28 chapters and laboratory defaults, the publication inventory, and the 61-page static reading edition. Syntax checks pass for the changed and new JavaScript.

The standard `npm test` command stops inside the unchanged historical gate chain because `calculus-nonlinear-limits-2026-10-11.log` is absent. The sealed October 12 manifest pins 559 sources from that edition, including its old source and package bytes. `scripts/validate-training-edition.mjs` belongs to that historical chain; `scripts/check-segmented-reading.mjs` pins its earlier 28,701-expression reading inventory. For current development, use the commands above: the current reading check preserves all 29,484 ordered expressions and verifies their source spans, links and assets. Historical snapshots, manifests, and gate assertions remain unchanged. The independent current checks do not claim that the frozen historical publication gate passed. The integer-feedback correction itself affects feedback and queue construction, so it does not require a lesson or print rebuild; later lesson revisions have their own current acceptance evidence.

## Technical reference

The ECMAScript specification defines [Number.isInteger](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.isinteger) on the already represented Number, while the [BigInt numeric type](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types-bigint-type) supports exact integer operations. The small exact helper uses BigInt coefficients after the existing parser has validated the entered form.
