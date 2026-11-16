# Prove projectivity is local under a finite-presentation hypothesis

*Hard · [Abstract algebra problems](index.md)*

Let $M$ be a finitely presented module over a commutative unital ring $R$. Prove M is projective iff M\_P is free over R\_P for every prime P. Prove or justify the Hom-localization step and explain where finite presentation is needed. You may use Nakayama's lemma.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A finite projective module over a local ring is free by choosing a residue-field basis and splitting its lift.

</details>

<details>
<summary>Hint 2</summary>

For the reverse direction, local splittings of one finite presentation produce scalars a with pi\*h=a\*id; these scalars form the unit ideal.

</details>

<details>
<summary>Model proof</summary>

Finite relations let local splitting maps be cleared to global maps, and an ideal of local certificates produces one global splitting.

1. If M is finitely generated projective, localizing a direct-summand presentation preserves projectivity. Over a local ring choose lifts of a basis of M/mM. Nakayama makes the resulting finite free map onto; it splits, and its finitely generated kernel has zero residue quotient by the chosen dimension. Nakayama kills that kernel, so the local module is free.
2. For finitely presented M, the natural map Hom\_R(M,N)\_P to Hom\_(R\_P)(M\_P,N\_P) is an isomorphism: finitely many generator images allow common denominator clearing, and finitely many defining relations allow one further multiplier outside P to make those images an actual global homomorphism. The same finite generator argument clears a map whose localization is zero.
3. Choose a finite free surjection pi:R^n to M. If M\_P is free, the localized surjection has a splitting s\_P. By the Hom isomorphism write s\_P as s/u with u outside P and s:M to R^n. Then pi\*s-u\*id has zero localization; finite generation of M yields v outside P killing that map. Hence h=v\*s satisfies pi\*h=(v\*u)\*id, with a=v\*u outside P.
4. The scalars a for which some h satisfies pi\*h=a\*id form an ideal J. The preceding step shows J is contained in no prime, hence J=R. Thus1 belongs to J and pi has a global splitting. M is a direct summand of R^n and projective. Finite presentation was essential for clearing the finite relation constraints in Hom localization.

**Self-assessment rubric**

- Use projectivity, a residue basis and Nakayama without assuming a kernel is zero prematurely.
- Explain the distinct finite-generator and finite-relation denominator steps.
- Produce a global splitting certificate with scalar outside each prime.
- Turn the certificates into an actual global splitting and identify the finiteness hypothesis.

</details>
