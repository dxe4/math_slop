# Prove the local product decomposition of a finite commutative ring

*Hard · [Abstract algebra problems](index.md)*

Prove every nonzero finite commutative unital ring is a finite product of local rings $R_i$. Use its distinct maximal ideals, a nilpotent Jacobson radical and powers in the Chinese remainder theorem. Justify why every prime ideal is maximal and why each factor is local.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A finite integral domain is a field.

</details>

<details>
<summary>Hint 2</summary>

Distinct maximal ideals and their sufficiently high powers stay pairwise comaximal.

</details>

<details>
<summary>Model proof</summary>

Finite nilpotence lets the Chinese remainder map become injective as well as surjective.

1. There are finitely many ideals. Every prime ideal is maximal because its quotient is a finite domain and hence a field. Thus J, the intersection of the distinct maximal ideals m\_1,...,m\_s, is the nilradical. It is a finite, hence finitely generated, nil ideal, so J^N=0 for some N by the finite-generator nilpotence bound.
2. Distinct maximal ideals are comaximal, and their Nth powers are still pairwise comaximal: expand1=(a+b)^(2N-1) with a in one and b in the other. For comaximal ideals their intersection is their product, so intersection\_i m\_i^N=product\_i m\_i^N=J^N=0.
3. The Chinese remainder theorem gives R isomorphic to product\_i R/m\_i^N. A maximal ideal of the ith factor corresponds to a maximal ideal of R containing m\_i^N. Primality forces it to contain m\_i and hence equal m\_i. Thus each quotient has exactly one maximal ideal, proving it is local.

**Self-assessment rubric**

- Explain prime maximality and prove a common nilpotence exponent exists.
- Keep comaximality after powers and identify the zero kernel.
- Use ideal correspondence to prove each factor has exactly one maximal ideal.

</details>
