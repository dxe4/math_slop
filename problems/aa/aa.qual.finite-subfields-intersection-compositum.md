# Compute both operations in a finite-field subfield lattice

*Medium · [Abstract algebra problems](index.md)*

Inside $\mathbb F_{2^{12}}$, let E=F\_(2^4) and F=F\_(2^6) be the unique subfields of those sizes. Return intersection\_size and compositum\_size.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"intersection_size":"4","compositum_size":"4096"},"checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Subfield degrees divide the ambient extension degree.

</details>

<details>
<summary>Hint 2</summary>

Intersection uses the gcd of the two degrees, while the generated compositum uses their lcm.

</details>

<details>
<summary>Worked solution</summary>

The divisor lattice of finite-field degrees computes both field operations.

1. Subfields of F\_(2^12) correspond to divisors of twelve. The intersection of degrees four and six has degree gcd(4,6)=2.
2. Their compositum has degree lcm(4,6)=12, the full ambient field.
3. Thus the sizes are 2^2=4 and 2^12=4096.

</details>
