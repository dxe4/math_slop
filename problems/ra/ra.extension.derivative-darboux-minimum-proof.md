# Prove the intermediate-value property through an interior extremum

*Hard · [Real analysis](index.md)*

Let f be differentiable on an open interval containing \[a,b\]. If $f'(a)<\lambda<f'(b)$, prove some c in (a,b) satisfies f'(c)=lambda. Give a proof that does not assume f' is continuous.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Subtract the line with slope lambda.

</details>

<details>
<summary>Hint 2</summary>

The shifted function decreases immediately to the right of a and increases immediately to the right near b in the derivative sense, excluding both endpoints from its minimum.

</details>

<details>
<summary>Model proof</summary>

A compact minimum of a shifted function supplies the missing derivative value.

1. Set g(x)=f(x)-lambda\*x. Then gprime(a)&lt;0 and gprime(b)&gt;0. Differentiability gives a point just right of a with g below g(a), and a point just left of b with g below g(b).
2. The function g is continuous on \[a,b\], so it attains a minimum. The endpoint exclusions force a minimizer c into (a,b).
3. Fermat's theorem gives gprime(c)=0, hence fprime(c)=lambda. No continuity of the derivative was used; only differentiability and compact attainment of g were needed.

**Self-assessment rubric**

- Translate the target slope and correctly exclude both endpoints.
- Use continuity of the original function to obtain a true interior minimum.
- Recover the desired derivative without invoking derivative continuity.

</details>
