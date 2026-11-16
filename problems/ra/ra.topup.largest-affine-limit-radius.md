# Find the largest strict affine limit radius

*Medium · [Real analysis](index.md)*

For $f(x)=4x-7$, at x=2 and tolerance epsilon=3/10 around limit 1, find the largest positive delta such that 0&lt;\|x-2\|&lt;delta implies \|f(x)-1\|&lt;3/10.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":40},"checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The output error is exactly four times the input distance.

</details>

<details>
<summary>Hint 2</summary>

The open input condition permits the threshold radius itself, but no larger radius.

</details>

<details>
<summary>Worked solution</summary>

An exact linear error gives both a sufficient and an optimal radius.

1. The error identity is \|f(x)-1\|=4\|x-2\|.
2. The radius 3/40 works because the input inequality is strict.
3. Any larger radius admits an input distance between 3/40 and that radius, where the output error is at least the tolerance, proving maximality.

</details>
