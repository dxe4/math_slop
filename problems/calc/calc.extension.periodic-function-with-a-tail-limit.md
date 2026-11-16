# Prove a periodic function with a full tail limit is constant

*Hard · [Calculus](index.md)*

Let f:R→R have period 1 and a finite limit L as $x\to+\infty$. Prove f is identically L without assuming continuity. Then show convergence only of f(n) along positive integers would not suffice, by an explicit nonconstant periodic example.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

For a fixed real x, compare f(x) with f(x+n).

</details>

<details>
<summary>Hint 2</summary>

The translated arguments tend to infinity, unlike a claim restricted to a single integer sampling grid.

</details>

<details>
<summary>Model proof</summary>

Periodicity repeats each individual value arbitrarily far into the same controlled tail.

1. For fixed x and every positive integer n, periodicity gives f(x+n)=f(x).
2. The arguments x+n tend to positive infinity. The assumed full tail limit therefore forces the constant sequence f(x+n) to converge to L, so f(x)=L.
3. This holds for every real x, proving constancy without continuity.
4. For the weaker integer-sample claim, f(x)=sin(2πx) is nonconstant and period one, while f(n)=0 for all integers. Its values at n+1/4 are 1, so it has no full tail limit and does not contradict the theorem.

**Self-assessment rubric**

- Uses the period to keep f(x+n) fixed for each arbitrary real x.
- Applies the real tail limit to those translated arguments and obtains f(x)=L.
- Verifies a nonconstant period-one example with convergent integer samples but no full tail limit.

</details>
