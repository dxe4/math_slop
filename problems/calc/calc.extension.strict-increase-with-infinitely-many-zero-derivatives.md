# Prove strict increase without a strictly positive derivative everywhere

*Hard · [Calculus](index.md)*

Prove $f(x)=x-\sin x$ is strictly increasing on R although f′ vanishes at infinitely many inputs. Give exactly those zero-derivative locations. Angles are radians; do not use the false inference that f′≥0 alone always gives strict increase.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Differentiate and locate every zero using cosine.

</details>

<details>
<summary>Hint 2</summary>

Every nonempty interval contains a smaller interval where the derivative is strictly positive; combine that with nondecrease on the rest.

</details>

<details>
<summary>Model proof</summary>

Isolated stationary points do not prevent strict growth across any positive-length interval.

1. The derivative is f′(x)=1−cos x≥0, with equality exactly at x=2πk for integers k. By the mean value theorem f is nondecreasing.
2. Given a&lt;b, the discrete zero set cannot fill (a,b). Choose a point there with positive derivative and a closed subinterval \[u,v\]⊂(a,b) on which the derivative stays positive by continuity.
3. The mean value theorem gives f(v)&gt;f(u). Nondecrease gives f(a)≤f(u)&lt;f(v)≤f(b), hence f(a)&lt;f(b).
4. Thus f is strictly increasing, while its derivative has the infinite zero set {2πk:k∈Z}. The extra interval argument supplies strictness that the weak derivative sign alone would not.

**Self-assessment rubric**

- Computes the nonnegative derivative and its exact stationary set.
- Finds a positive-derivative subinterval inside every nonempty interval.
- Combines strict growth there with global nondecrease to prove f(a)&lt;f(b).

</details>
