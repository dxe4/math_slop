# Prove a prime-degree translation polynomial irreducible

*Hard · [Original olympiad-style problems](index.md)*

For every prime p, prove $x^p-x-1$ is irreducible over the rational numbers by first working modulo p.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Over the field of p residues the polynomial is unchanged by translating its input by one and has no field root.

</details>

<details>
<summary>Hint 2</summary>

Translate a hypothetical monic irreducible factor. Its orbit has either one or p members; compare degrees and rule out invariance of a smaller-degree polynomial.

</details>

<details>
<summary>Model proof</summary>

Use finite translation orbits of factors instead of searching for rational roots alone.

1. In the residue field, binomial divisibility gives $P(x+1)=P(x)$ and Fermat gives $P(a)=-1$ for every field element, so there is no linear factor.
2. If P were reducible there, choose a monic irreducible factor f of degree d less than p. Every translate $f(x+i)$ is again a monic irreducible factor of P.
3. Translation by one generates a group of prime order, so its orbit on f has size one or p. If size p, the distinct factors have total degree pd, forcing d one because P has degree p; this contradicts absence of roots.
4. If size one, $f(x+1)=f(x)$. But for $1\le d<p$, the leading term of their difference has coefficient d times the nonzero leading coefficient and degree $d-1$, nonzero in the field. This is impossible.
5. Thus the reduction is irreducible. A rational factorization of the monic integer polynomial would give monic integer factors, whose positive degrees survive reduction, contradicting that result.

**Self-assessment rubric**

- Establish both finite-field translation symmetry and absence of linear roots.
- Explain why all translates divide P and why orbit sizes are one or p.
- Rule out each orbit size with exact degree or leading-coefficient reasoning.
- Justify passing from modular irreducibility to rational irreducibility.

</details>
