# Normalize both points before applying Schwarz's lemma

*Hard · [Complex analysis problems](index.md)*

Let f map the unit disk holomorphically into itself, with $f(1/2)=1/3$. Find the sharp upper bound on \|f'(1/2)\|, and justify sharpness in the worked argument.

```answer
{"answer":{"kind":"rational","expected":{"numerator":32,"denominator":27},"checker_scope":"Exact requested invariant or sharp bound only; the analytic justification remains a worked model rather than an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

Move the source point and target point separately to zero by disk automorphisms.

</details>

<details>
<summary>Hint 2</summary>

Differentiate the normalized map at zero and use Schwarz's lemma.

</details>

<details>
<summary>Worked solution</summary>

Automorphism normalization gives the derivative bound at a noncentral point.

1. For real a=1/2 and b=1/3, put phi\_a(z)=(z-a)/(1-a\*z) and similarly phi\_b. The map g=phi\_b composed with f composed with inverse(phi\_a) fixes zero.
2. Schwarz's lemma gives \|g'(0)\|&lt;=1. The chain rule gives \|g'(0)\|=\|f'(a)\|\*(1-a^2)/(1-b^2).
3. Consequently \|f'(a)\|&lt;=(1-1/9)/(1-1/4)=32/27. Equality is attained by f=inverse(phi\_b) composed with phi\_a, which sends a to b.

</details>
