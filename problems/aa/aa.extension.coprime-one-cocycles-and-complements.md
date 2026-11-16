# Average a one-cocycle to conjugate every complement

*Hard · [Abstract algebra problems](index.md)*

Let a finite group Q act on an abelian group A, and suppose multiplication by \|Q\| is an automorphism of A. A one-cocycle satisfies $d(xy)=d(x)+x\cdot d(y)$. Prove d(x)=a-x\*a for some a in A, and deduce every complement to A in A semidirect Q is conjugate to the standard Q by an element of A.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Sum the cocycle identity over y and reindex xy.

</details>

<details>
<summary>Hint 2</summary>

A complement is the graph of a section, whose A coordinate is a one-cocycle.

</details>

<details>
<summary>Model proof</summary>

Coprime-style averaging removes the obstruction to conjugating complements.

1. Let S=sum\_(y in Q) d(y). Reindexing the cocycle identity gives S=\|Q\|\*d(x)+x\*S for every x. Let a be the unique element with \|Q\|\*a=S. The action commutes with integer multiplication and hence its inverse, so d(x)=a-x\*a.
2. Any complement projects isomorphically onto Q, so its elements have form (d(x),x). The subgroup condition is exactly the one-cocycle identity.
3. Conjugating the standard (0,x) by (a,e) gives (a-x\*a,x), its graph. Thus the entire complement is that conjugate of the standard Q. This argument uses the invertibility assumption exactly in dividing S.

**Self-assessment rubric**

- Reindex the finite sum and divide legitimately in A.
- Derive the cocycle from the full complement condition.
- Compute the conjugation with the correct sign and identify the whole subgroup.

</details>
