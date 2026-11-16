# Prove generator lifting and exhibit failure without finite generation

*Hard · [Abstract algebra problems](index.md)*

Let R be commutative unital, I contained in J(R), and M finitely generated. Prove M=IM implies M=0, and deduce that generators of M/IM lift to generators of M. Show finite generation cannot be dropped using $R=Z_{(p)}$ and M=Q.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Express each module generator as an I-linear combination of the same finite set.

</details>

<details>
<summary>Hint 2</summary>

The adjugate supplies a determinant in1+I that annihilates M and is a unit.

</details>

<details>
<summary>Model proof</summary>

A finite determinant argument kills the module, while a divisible infinite module escapes it.

1. Choose generators m\_1,...,m\_r. From M=IM write m\_i=sum\_j a\_ij\*m\_j with all a\_ij in I. The matrix Id-A annihilates the generator column. Multiplying by its adjugate shows det(Id-A) annihilates every generator, hence M. This determinant is1+j with j in I contained in J(R), so it is a unit and M=0.
2. If chosen lifts generate a submodule N and their images generate M/IM, then M=N+IM. The finitely generated quotient M/N satisfies M/N=I\*(M/N), so the first result makes M/N=0 and N=M.
3. For the local ring Z\_(p), I=(p) is its Jacobson radical, yet p\*Q=Q and Q is nonzero. It is not finitely generated over Z\_(p): any finite list of rationals has p-adic valuations bounded below, as do all their Z\_(p)-linear combinations, whereas Q has arbitrarily negative such valuations. Thus the missing finite-generation hypothesis matters.

**Self-assessment rubric**

- Construct the coefficient matrix inside I using actual finite module generators.
- Use the adjugate and radical unit property to annihilate the module.
- Apply the lemma to the correct finitely generated quotient.
- Verify both IM=M and the failure of finite generation in the stated local ring.

</details>
