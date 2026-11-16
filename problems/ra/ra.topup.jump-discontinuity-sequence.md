# Use a convergent domain sequence to expose a jump

*Hard · [Real analysis](index.md)*

Define $f(x)=0$ for x&lt;0 and f(x)=1 for x&gt;=0. Prove discontinuity at zero using a sequence, and also give a direct positive tolerance that no radius can satisfy.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Approach zero from the side with a different function value.

</details>

<details>
<summary>Hint 2</summary>

Use one tolerance smaller than the jump size.

</details>

<details>
<summary>Model proof</summary>

A one-sided sequence and a fixed output gap refute continuity in complementary ways.

1. The domain sequence x\_n=-1/n tends to zero but f(x\_n)=0 for every n, whereas f(0)=1. This contradicts the sequential consequence of continuity.
2. Directly choose tolerance one half. For any delta&gt;0, the point x=-delta/2 lies within delta of zero and has output error one.
3. Thus no positive radius works for that tolerance, proving discontinuity without changing the central value.

**Self-assessment rubric**

- Give a valid domain sequence tending to zero and compare its image with the central value.
- Choose a positive tolerance independent of the proposed radius.
- Construct a violating point for every positive radius.

</details>
