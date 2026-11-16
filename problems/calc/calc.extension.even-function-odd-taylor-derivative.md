# Use parity to identify an odd derivative at the center

*Easy · [Calculus](index.md)*

Let f be even and C³ near zero. Find $f‴(0)$.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

An even function has matching expansions at x and −x.

</details>

<details>
<summary>Hint 2</summary>

The odd Taylor coefficients must vanish.

</details>

<details>
<summary>Worked solution</summary>

Parity removes odd-order terms at the symmetry center.

1. Differentiating f(−x)=f(x) three times gives −f‴(−x)=f‴(x).
2. At x=0 this says −f‴(0)=f‴(0).
3. Hence f‴(0)=0.

</details>
