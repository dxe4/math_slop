# Use iteration toward a continuity point to force a constant

*Hard · [Calculus](index.md)*

Let f:R→R satisfy $f(x)=f(x/2)$ for every real x and be continuous at zero. Prove f is constant. Then show the continuity assumption cannot be removed by giving an explicit nonconstant solution of the same identity.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Iterate the identity with one fixed x, rather than varying x between steps.

</details>

<details>
<summary>Hint 2</summary>

The arguments tend to zero, where continuity is available; for the counterexample distinguish zero from every nonzero input.

</details>

<details>
<summary>Model proof</summary>

A functional identity transports each value along a sequence approaching one known continuity point.

1. Repeated application gives f(x)=f(x/2ⁿ) for every nonnegative integer n and every fixed x.
2. The inputs x/2ⁿ tend to zero, so continuity at zero gives f(x/2ⁿ)→f(0). The left side is the constant value f(x), hence f(x)=f(0).
3. Since x was arbitrary, f is constant on R; no continuity away from zero was needed.
4. Without that assumption, define f(0)=0 and f(x)=1 for x≠0. Halving preserves zero versus nonzero, so the identity holds, but this f is nonconstant and discontinuous at zero.

**Self-assessment rubric**

- Derives the identity at x/2ⁿ for each fixed arbitrary x.
- Uses only continuity at zero to identify every value with f(0).
- Gives and verifies a nonconstant counterexample when that continuity is omitted.

</details>
