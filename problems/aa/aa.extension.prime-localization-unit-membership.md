# Separate an invalid denominator from a nonunit element

*Easy · [Abstract algebra problems](index.md)*

In $Z_{(5)}=\{a/b\in Q:5\text{ does not divide }b\}$, count which of2/3,5/2,10/7,7/5 are units of this ring.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested localized invariant only; no local-to-global theorem is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

A denominator divisible by five may prevent membership after reduction.

</details>

<details>
<summary>Hint 2</summary>

For a valid reduced fraction, the numerator must also avoid five to be a unit.

</details>

<details>
<summary>Worked solution</summary>

A local ring distinguishes membership from invertibility.

1. The first three fractions belong to the ring;7/5 does not because its reduced denominator contains five.
2. Of the valid fractions,2/3 has inverse3/2 in the ring. The inverses2/5 and7/10 of the other two have forbidden reduced denominators.
3. Thus exactly one listed number is a unit.

</details>
