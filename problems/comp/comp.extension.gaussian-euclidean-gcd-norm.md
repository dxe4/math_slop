# Compute an associate-invariant gcd value through Gaussian Euclidean division

*Medium · [Computational arithmetic problems](index.md)*

In the Gaussian integers, find the norm of a gcd of $11+7i$ and 7-i. Gcds may differ by a unit, so return only their common norm.

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Choose a nearby Gaussian integer quotient so the remainder norm decreases.

</details>

<details>
<summary>Hint 2</summary>

A zero remainder on the next division identifies the gcd up to a unit.

</details>

<details>
<summary>Worked solution</summary>

The Euclidean norm gives an exact gcd algorithm with a unit-independent final answer.

1. Use quotient 1+i: (11+7i)-(1+i)(7-i)=3+i, whose norm ten is smaller than the divisor norm fifty.
2. The next division is exact, since 7-i=(2-i)(3+i).
3. Thus a gcd is 3+i, up to a Gaussian unit, and its norm is ten.

</details>
