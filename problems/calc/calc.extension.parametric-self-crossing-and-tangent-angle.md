# Locate every self-crossing and its tangent angle

*Hard · [Calculus](index.md)*

For $r(t)=(t^2,t^3-t)$, t∈R, find its unique geometric self-intersection and the squared cosine of the angle between its two tangent lines there. Return \[intersection x, intersection y, squared cosine\]. Prove no other self-intersection was missed.

```answer
{"answer":{"kind":"vector","expected":["1","0","0"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

If r(t)=r(s) with t≠s, the first coordinate forces s=−t.

</details>

<details>
<summary>Hint 2</summary>

Use the second coordinate to locate the distinct parameter pair, then compare their velocity vectors.

</details>

<details>
<summary>Worked solution</summary>

A crossing is equality at distinct parameters, and its angle requires both local tangent directions.

1. Equality of first coordinates gives s²=t². Distinct parameters force s=−t with t≠0. Equality of the odd second coordinates then gives t³−t=0, so t=±1.
2. Both parameters give the single point (1,0). The discarded t=0 would have s=t and is not a self-intersection, so this list is exhaustive.
3. The velocities are r′(1)=(2,2) and r′(−1)=(−2,2), both nonzero. Their dot product is −4+4=0, hence the tangent lines are perpendicular.
4. The squared cosine is zero, and the requested vector is \[1,0,0\].

</details>
