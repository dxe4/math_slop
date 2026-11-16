# Test finite candidates for a nested real statement

*Medium · [Foundations bridge](index.md)*

From x∈{−1/2,0,1/2,1,2}, return every x for which $\exists\delta>0\ \forall y\in\mathbb R\ (|y-x|<\delta\Rightarrow y^2<1)$ holds. The witness δ may depend on x.

```answer
{"answer":{"kind":"set","expected":["-1/2","0","1/2"],"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

For each candidate with \|x\|≤1/2, try δ=1/4.

</details>

<details>
<summary>Hint 2</summary>

For x=1 or 2, test the universally quantified y equal to x itself.

</details>

<details>
<summary>Worked solution</summary>

An existential radius needs to work for every nearby y, including the center.

1. For x=−1/2,0 or 1/2 choose δ=1/4. Then \|y\|≤\|x\|+\|y−x\|&lt;3/4, so y²&lt;9/16&lt;1.
2. For x=1 or 2, the choice y=x satisfies \|y−x\|=0&lt;δ for every positive δ, but y²&lt;1 is false. Thus no δ can work there.
3. The returned set is {−1/2,0,1/2}. The reasoning checks the witness order and all real y, rather than only the displayed candidate values for y.

</details>
