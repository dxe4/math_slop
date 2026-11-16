# Find the nilpotence length of a projective-space class

*Medium · [Topology problems](index.md)*

Use $H^*(\mathbb{RP}^3;\mathbb F_2)=\mathbb F_2[t]/(t^4)$ with \|t\|=1. What is the least positive k for which tᵏ=0? In your argument distinguish this from the largest nonzero exponent and from the integral H¹ group.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The ring presentation lists the first imposed power relation.

</details>

<details>
<summary>Hint 2</summary>

Its basis is 1,t,t²,t³; characteristic two removes the usual odd-degree sign obstruction.

</details>

<details>
<summary>Worked solution</summary>

Coefficient choice allows a nonzero square of a degree-one class.

1. The residue classes 1,t,t²,t³ form a graded F₂ basis, so each of t,t²,t³ is nonzero.
2. The defining relation kills t⁴ and every larger power. Therefore the least positive zero exponent is 4, while the largest nonzero exponent is 3.
3. Graded commutativity does not force t²=0 in characteristic two. Integrally H¹(RP³;Z)=0, so the displayed mod-two class must not be treated as an integral degree-one generator.

</details>
