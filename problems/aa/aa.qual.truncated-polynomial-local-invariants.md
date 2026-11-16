# Count units, nilpotents and idempotents in one local algebra

*Medium · [Abstract algebra problems](index.md)*

In $R=\mathbb F_5[e]/(e^3)$, return units, nilpotent\_elements and idempotent\_elements, including zero wherever its definition permits.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"units":"100","nilpotent_elements":"25","idempotent_elements":"2"},"checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Use the constant coefficient to distinguish units from the maximal ideal.

</details>

<details>
<summary>Hint 2</summary>

For idempotents in a local ring, either the element or one minus it is a unit.

</details>

<details>
<summary>Worked solution</summary>

The unique maximal ideal controls three different finite-ring invariants.

1. Each element is a+be+ce^2, so R has 125 elements. It is a unit exactly when a is nonzero, giving 100 units.
2. It is nilpotent exactly when a=0: the resulting ideal (e) is nilpotent, while a nonzero constant remains nonzero in the field quotient. Thus there are twenty-five nilpotents.
3. The ring is local with maximal ideal (e). For an idempotent z, z(1-z)=0 and one of z,1-z is a unit, forcing z=1 or z=0. There are two idempotents.

</details>
