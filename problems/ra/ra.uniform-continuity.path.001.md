# Choose a radius that works for every affine input pair

*Medium · [Real analysis](index.md)*

On R let $f(x)=7x-1$. At $\varepsilon =1/14$, give any positive rational δ for which every real pair x,y with $|x-y|<\delta$ satisfies \|$f(x)-f(y)$\|&lt;$1/14$. Enter δ as your witness. You may choose a conservative radius; the task does not require the largest one. Your radius must work independently of x and y. In your optional explanation, justify the whole implication and give an input pair that defeats any radius above the valid range.

```answer
{"answer":{"kind":"rational_interval_witness_with_open_reasoning","expected_constraints":{"minimum_exclusive":"0","maximum_inclusive":"1/98"},"checker_scope":"Checks exact membership in the mathematically derived rational-witness interval for this one fixed-tolerance task. The explanation is an unassessed draft. This does not verify a proof of continuity or uniform continuity for every positive tolerance."}}
```

<details>
<summary>Hint 1</summary>

Use the exact identity \|$f(x)-f(y) |=7|x-y|$.

</details>

<details>
<summary>Hint 2</summary>

A positive radius may be smaller than the sharp one. To refute an oversized radius, look for an input gap giving output error exactly ε.

</details>

<details>
<summary>Worked solution</summary>

One global radius controls every input pair. An exact identity describes all admissible witnesses and an explicit pair refutes an oversized choice.

1. For all real x,y, \|$f(x)-f(y) |=7|x-y|$. Every positive rational $\delta \leq (1/14)/7=1/98$ therefore gives output error &lt;$7\delta \leq 1/14$.
2. For example $1/196, 1/1000$ and $1/98$ are all correct witnesses. The sharp boundary is included because the input distance is strictly less than δ.
3. If $\delta >1/98$, choose $x=0$ and $y=1/98$. The input distance is below δ while the output distance is exactly 1/14, so the strict output requirement fails.
4. This task uses one fixed tolerance and checks its numerical witness. A full proof of uniform continuity must handle every $\varepsilon >0$; choosing $\delta =\varepsilon /7$ does so, independently of x and y.

</details>
