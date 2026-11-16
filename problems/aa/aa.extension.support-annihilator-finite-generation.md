# Prove closed support and expose the infinite-generation boundary

*Hard · [Abstract algebra problems](index.md)*

For a finitely generated R-module M over a commutative ring, prove $Supp(M)=V(Ann(M))$. Show finite generation matters by taking M as the direct sum over prime integers p of Z/p and comparing its localization at the zero prime with its annihilator.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

If a localization vanishes, clear denominators for each member of one finite generating set.

</details>

<details>
<summary>Hint 2</summary>

An element of an infinite direct sum has only finitely many nonzero torsion components.

</details>

<details>
<summary>Model proof</summary>

A common annihilating denominator is a finite-generation feature.

1. If Ann(M) contains a outside a prime P, then a becomes a unit killing M\_P, so that localization is zero. Conversely, if M\_P=0 and m\_1,...,m\_r generate M, choose s\_i outside P killing m\_i; their product s lies outside P and annihilates every generator, so s belongs to Ann(M). This proves the support equality.
2. For M=direct sum\_p Z/p, an integer annihilates M only if divisible by every prime, so Ann(M)=0.
3. Localizing at the zero prime inverts every nonzero integer. Each element of M has finite support and is killed by a product of finitely many primes, so M\_(0)=0. Yet the zero prime belongs to V(0), showing the equality fails for this infinitely generated module.

**Self-assessment rubric**

- Prove both inclusions using one finite generating set.
- Compute the annihilator over all prime components.
- Explain why every individual element vanishes at the zero prime despite the zero annihilator.

</details>
