# Distinguish existence of a zero from uniqueness

*Hard · [Real analysis](index.md)*

Explain why a continuous real f on $[a,b]$, a&lt;b, with f(a)&lt;0&lt;f(b) has an interior zero. Show the hypotheses do not guarantee exactly one zero by a concrete polynomial example on \[-2,2\].

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Apply the intermediate value theorem to value zero.

</details>

<details>
<summary>Hint 2</summary>

A cubic with three distinct real roots can still have opposite signs at the two endpoints.

</details>

<details>
<summary>Model proof</summary>

An existence theorem need not supply uniqueness.

1. The intermediate value theorem applies to the continuous function and places a zero in \[a,b\]; the strict endpoint signs exclude both endpoints.
2. On \[-2,2\], take f(x)=x(x-1)(x+1). Its endpoint values are negative six and positive six.
3. This continuous polynomial has three distinct interior zeros -1,0,1, so the hypotheses guarantee existence but not uniqueness.

**Self-assessment rubric**

- Apply continuity and the strict endpoint signs on the stated interval.
- Verify a concrete continuous example and its endpoint signs.
- Identify its distinct zeros and state the limited theorem conclusion.

</details>
