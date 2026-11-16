# Recover a nontrivial idempotent from a disconnected prime spectrum

*Hard · [Abstract algebra problems](index.md)*

For a nonzero commutative unital ring R, equip Spec R with basic opens $D(f)=\{P:f\notin P\}$. Prove Spec R is disconnected exactly when R has an idempotent other than zero and one. Justify the finite-cover and nilpotence steps without a Noetherian hypothesis.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Basic opens cover the spectrum exactly when their generators generate the unit ideal.

</details>

<details>
<summary>Hint 2</summary>

For a clopen partition, finite generating ideals I,J have I+J=R and a nilpotent product ideal; raise powers before using Chinese-remainder-style separation.

</details>

<details>
<summary>Model proof</summary>

Quasi-compactness and finite nilpotence turn an open partition into an algebraic projection.

1. Spec R is quasi-compact: refine an open cover by basic D(f)'s. If their generators formed a proper ideal, a maximal ideal containing it would miss the whole cover. Thus one is a finite linear combination of those generators and finitely many basic opens suffice. Closed subsets, hence clopen subsets, are also quasi-compact.
2. Given a nonempty disjoint clopen partition U,V, choose finite basic covers U=D(I),V=D(J) by finitely generated ideals. Covering gives I+J=R. Disjointness makes every element of IJ lie in every prime, hence nilpotent. The finitely generated ideal IJ is therefore nilpotent by the finite-generator exponent bound: choose N with(IJ)^N=0.
3. From I+J=R, a binomial expansion of1=(i+j)^(2N-1) gives I^N+J^N=R. Choose e in I^N with1-e in J^N. Then e(1-e)=0, so e is idempotent. On U every prime contains J and hence1-e but omits e; on V every prime contains I and hence e. Thus D(e)=U, and nonemptiness of both pieces makes e different from zero and one.
4. Conversely a nontrivial idempotent e gives disjoint opens D(e),D(1-e) covering Spec R because e(1-e)=0 and e+(1-e)=1. Both are nonempty: a nonzero idempotent is not nilpotent, so it is omitted by some prime, and likewise for1-e. Thus this is a genuine disconnection.

**Self-assessment rubric**

- Derive finite basic covers rather than assume the spectrum Noetherian.
- Use prime intersection and finite generation to obtain a uniform nilpotence power.
- Raise powers, construct e and identify both clopen sides.
- Verify covering, disjointness and nonemptiness for a nontrivial idempotent.

</details>
