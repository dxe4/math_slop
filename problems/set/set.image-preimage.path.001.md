# Construct a failure of direct-image intersection equality

*Hard · [Set theory](index.md)*

Construct any total function f:$\{1,2,3,4,5,6\}\to \{0,1,2\}$ and subsets A,B of its domain for which $f(A\cap B)$ is a PROPER subset of $f(A)\cap f(B)$. Enter exactly six comma-separated outputs in $f(1),f(2)$,...,$f(6)$ order, without braces, preserving repeated outputs. Each output must be an exact integer in $\{0,1,2\}$; integer-valued fractions and decimals are allowed. Enter A and B as ordinary integer sets from $1$ to $6$, optionally in braces; use {} for empty. Their order and repeated members do not change a set. Overlapping subsets and unused codomain values are allowed; no particular collision recipe is required. Each map/set text field permits $2,048$ characters, each integer entry at most $80$ digits, and each set at most $100$ entries. In your optional explanation, compare both actual image sets and identify an output missing from the left side. The counterexample request adapts Jiří Lebl, Basic Analysis §0.3, Exercise 0.3.4(b); this bounded map-and-subset interaction is newly authored.

*Source: Jiří Lebl, Basic Analysis: Introduction to Real Analysis, Volume I, §0.3, Exercise 0.3.4(b) (https://www.jirka.org/ra/html/sec\_basicset.html). Adapted direct-image intersection counterexample request. Euler fixes finite sets and authors the bounded map/subset editor, examples and explanations. CC BY-SA 4.0 is selected from the source’s dual licence for adapted components; new Euler educational material uses the same licence: https://creativecommons.org/licenses/by-sa/4.0/*

```answer
{"answer":{"kind":"finite_image_counterexample_with_open_reasoning","expected_constraints":{"model":"six_to_three_strict_intersection"},"checker_scope":"Checks the complete declared six-output map and both finite subsets, accepting exactly strict image-intersection inclusion. All permitted ordered maps and subsets are allowed, including overlap, empty sets as well-formed but insufficient choices, repeated set members and non-surjective maps. Wrong count, syntax, resources or declared domain/codomain are invalid; valid objects without strictness are incorrect. Optional writing and unrestricted proofs remain unassessed."}}
```

<details>
<summary>Hint 1</summary>

Compare the image of the shared INPUTS with the OUTPUTS shared by both images. The same output can come from different inputs.

</details>

<details>
<summary>Hint 2</summary>

A shared input with that output may already put it on the left side. Find an output reached on both sides but not by any input in $A\cap B$.

</details>

<details>
<summary>Worked solution</summary>

Different inputs can share an output, so shared outputs need not come from shared inputs.

1. Every output of $f(A\cap B)$ is reached by one input belonging to both A and B, so it belongs to both images. Thus $f(A\cap B)\subseteq f(A)\cap f(B)$ for every function.
2. Strictness requires at least one output y attained by some input in A and some input in B, but by no input in $A\cap B$. In fiber notation, $f^{-1}$({y}) meets A and B separately while missing $A\cap B$.
3. For example, outputs $0,0,1,1,2,2$ with $A=\{1,3\}$ and $B=\{2,3\}$ give $A\cap B=\{3\}, f(A\cap B)=\{1\}$, and $f(A)\cap f(B)=\{0,1\}$. The missing output $0$ makes the inclusion strict even though A and B overlap.
4. Disjoint subsets and unused codomain values are also allowed. The constant map with all six outputs $0$ and $A=\{1\}, B=\{2\}$ has empty left image and right image {0}, so it is another valid construction.
5. A collision across A and B alone is insufficient. For that same constant map but $A=\{1,3\}, B=\{2,3\}$, the shared input $3$ already supplies $0$; both sides equal $\{0\}$. Likewise, changing the ordered map to $0,1,0,1,2,2$ with these overlapping subsets gives equality rather than strictness.
6. The six outputs define a total ordered function: repeated values are retained, and changing their positions can change the result. A and B are sets: order and repeated equivalent integer entries do not change them.
7. The checker compares the actual finite images for your declared map and subsets. It accepts every permitted strict counterexample, not one prescribed recipe. Optional written arguments and unrestricted set-theoretic proofs remain unassessed.

</details>
