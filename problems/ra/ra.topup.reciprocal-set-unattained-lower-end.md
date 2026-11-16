# Compute bounds of a shifted reciprocal set

*Medium · [Real analysis](index.md)*

For $S=\{-2+1/n:n=1,2,3,\ldots\}$, return infimum and supremum as exact numbers.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"infimum":"-2","supremum":"-1"},"checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The reciprocal values decrease toward zero without reaching it.

</details>

<details>
<summary>Hint 2</summary>

Check separately whether each bound belongs to the set.

</details>

<details>
<summary>Worked solution</summary>

A limit endpoint can be an unattained infimum while the other endpoint is a maximum.

1. Every set element is strictly greater than negative two, and values approach negative two as n grows, so the infimum is negative two and is not attained.
2. The largest reciprocal is one at n=1, giving the element negative one.
3. Thus the supremum is negative one and is attained.

</details>
