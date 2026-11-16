# Classify unequal bases with equal cross-powers

*Medium · [Original olympiad-style problems](index.md)*

Using the reduced rational ratio $b/a$, find all positive integer pairs with $a<b$ and $a^b=b^a$. Give a proof of the complete classification.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Write $b/a=m/n$ in lowest terms and take the positive $a$th root of the equation.

</details>

<details>
<summary>Hint 2</summary>

Raising to power $n$ makes an integer equal to $(m/n)^n$; then bound $2^{m-1}$ against $m$.

</details>

<details>
<summary>Model proof</summary>

Exploit the supplied reduced-ratio substitution.

1. The case $a=1$ would force $b=1$, excluded. Thus $a\ge2$. Write $b/a=m/n>1$ with coprime positive $m,n$.
2. Taking a positive $a$th root and rearranging gives $a^{(m-n)/n}=m/n$, so $a^{m-n}=m^n/n^n$. The left side is an integer, and coprimality forces $n=1$.
3. Therefore $a^{m-1}=m$ with integer $m\ge2$. For $m\ge3$, $2^{m-1}>m$ by induction from $m=3$, impossible since $a\ge2$.
4. Thus $m=2$, $a=2$, $b=4$. Direct substitution verifies $2^4=4^2$, completing both directions.

**Self-assessment rubric**

- Use a positive reduced ratio and justify the root and exponent operations.
- Force the reduced denominator to one by integrality.
- Exclude larger ratios and verify the remaining ordered pair.

</details>
