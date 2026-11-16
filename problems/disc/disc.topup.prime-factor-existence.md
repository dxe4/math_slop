# Prove existence of prime factors by strong induction

*Medium · [Discrete mathematics](index.md)*

Prove by strong induction that every integer $n\geq2$ is a finite product of primes. Do not assume uniqueness of prime factorization.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A prime n already supplies a one-factor product.

</details>

<details>
<summary>Hint 2</summary>

A composite n splits into factors strictly between one and n, both covered by the strong hypothesis.

</details>

<details>
<summary>Model proof</summary>

The composite case needs factorization results for two possibly different smaller inputs.

1. The base n=2 is prime and is a one-factor product.
2. Assume all integers from two through n-1 are products of primes. If n is prime, stop with its one-factor product.
3. If n is composite, write n=ab with 2&lt;=a,b&lt;n. Both factors are finite prime products by the hypothesis, and concatenating those products gives one for n.
4. This proves existence for all n&gt;=2 without any uniqueness assertion.

**Self-assessment rubric**

- Start at two and state the full smaller-integer hypothesis.
- Cover both possibilities for n.
- Check both factors lie in the permitted hypothesis range and combine their products.

</details>
