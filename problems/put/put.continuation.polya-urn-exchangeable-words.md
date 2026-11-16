# Polya urn exchangeable words

*Hard · [Original Putnam-style training](index.md)*

An urn starts with $r>0$ red and $b>0$ blue balls and adds one ball of the drawn color after each draw. Prove every length-$n$ color word with $k$ reds has the same probability, and give that probability.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Write the path probability as a product of conditional numerators and common denominators.

</details>

<details>
<summary>Hint 2</summary>

Collect red and blue numerator factors independently of their order.

</details>

<details>
<summary>Model proof</summary>

The probability is $(r)_k(b)_{n-k}/(r+b)_n$ in rising-factorial notation, depending only on $k$. Therefore the color sequence is exchangeable.

1. At draw $j+1$, the denominator is $r+b+j$, regardless of the preceding color sequence.
2. Across a word with $k$ red draws, red numerators are $r(r+1)\cdots(r+k-1)$; blue numerators are $b(b+1)\cdots(b+n-k-1)$, regardless of their interleaving.
3. The probability is $(r)_k(b)_{n-k}/(r+b)_n$ in rising-factorial notation, depending only on $k$. Therefore the color sequence is exchangeable.

**Self-assessment rubric**

- Write sequential probability with denominator rising from r+b.
- Collect red and blue numerator rising factorials independent of order.
- Give the exact probability and infer exchangeability.

</details>
