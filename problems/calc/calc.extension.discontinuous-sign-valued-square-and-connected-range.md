# Construct an everywhere-discontinuous function with a constant nonzero square

*Hard · [Calculus](index.md)*

Construct $f:\mathbb R\to\{-1,1\}$ discontinuous at every real point but with f² identically 1. Then prove that every continuous g:R→{−1,1} is constant. You may use density of rationals and irrationals in R.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Assign opposite signs on the two dense classes.

</details>

<details>
<summary>Hint 2</summary>

For a continuous map attaining both signs, apply IVT on an interval joining the corresponding inputs.

</details>

<details>
<summary>Model proof</summary>

A noninjective outer operation can erase discontinuity, while connectedness constrains a genuinely continuous sign-valued map.

1. Define f(x)=1 on rational x and f(x)=−1 on irrational x. Every neighborhood of any a contains both classes and therefore both output signs.
2. Taking tolerance 1 around f(a), there is always a nearby point of the opposite class whose output differs by 2. Thus f is discontinuous at every a, yet f(x)²=1 for every x.
3. If a continuous sign-valued g were not constant, choose u,v with values −1 and 1. On the interval between them IVT would give an input with output 0.
4. That contradicts the range {−1,1}. Hence every continuous such g is constant, though the discontinuous construction need not be.

**Self-assessment rubric**

- Defines a sign-valued function on the two dense classes and verifies its constant square.
- Uses both classes in every neighborhood to refute continuity at each arbitrary point.
- Uses IVT to prove a continuous sign-valued map cannot attain both signs.

</details>
