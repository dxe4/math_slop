# Derive a power law from one-point continuity

*Hard · [Original olympiad-style problems](index.md)*

Let $f:(0,\infty)\to(0,\infty)$ be multiplicative, continuous at one, and satisfy $f(2)=8$. Prove $f(x)=x^3$ for every positive real x.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Set $g(t)=\log f(e^t)$ to turn products into sums.

</details>

<details>
<summary>Hint 2</summary>

Continuity at one becomes continuity of this additive function at zero.

</details>

<details>
<summary>Model proof</summary>

Use logarithmic coordinates with the precise regularity point.

1. Positivity permits the logarithm and multiplicativity gives $f(1)=1$. The transformed function satisfies $g(s+t)=g(s)+g(t)$.
2. As $t$ tends to zero, $e^t$ tends to one, so the stipulated continuity makes $g$ continuous at zero.
3. Additivity then gives $g(t)=ct$ by rational approximation. Thus $f(x)=x^c$ for every positive real input.
4. The given value fixes $2^c=8$, hence $c=3$. The cubic function satisfies all assumptions. Without continuity, the additive transformed equation alone would not justify the linear classification.

**Self-assessment rubric**

- Justify logarithms and the transformed additive equation.
- Translate continuity at the stated point correctly.
- Extend the rational linear law to every real argument.
- Determine the exponent and verify the resulting function.

</details>
