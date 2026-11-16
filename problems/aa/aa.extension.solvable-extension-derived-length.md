# Prove solvability passes through extensions with a quantitative bound

*Hard · [Abstract algebra problems](index.md)*

Let N be normal in G. Prove G is solvable exactly when N and G/N are solvable. If their derived lengths are a and b, prove the derived length of G is at most a+b. Show the additive bound can be attained, using the derived series $D^jG$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Derived subgroups of N lie in the corresponding derived subgroups of G.

</details>

<details>
<summary>Hint 2</summary>

The bth derived subgroup of G lies in N once the quotient's bth derived group vanishes.

</details>

<details>
<summary>Model proof</summary>

The quotient removes the first part of the series and the normal subgroup removes the rest.

1. Write D^0H=H and D^(j+1)H=\[D^jH,D^jH\]. Subgroup inclusion gives D^jN contained in D^jG, and a surjective homomorphism carries D^jG onto D^j(G/N). Thus solvability of G implies both other solvabilities.
2. Conversely D^b(G/N)=e gives D^bG contained in N. Iterating derived subgroups a more times gives D^(a+b)G contained in D^aN=e. Hence G is solvable with length at most a+b.
3. For G=S3 and N=A3, N and G/N are nontrivial abelian, each of length one. S3 has derived subgroup A3: the sign quotient gives containment and a commutator of transpositions gives a three-cycle. Thus S3 has length two, attaining the bound.

**Self-assessment rubric**

- Control derived series under inclusions and quotient maps.
- Combine the two vanishing stages with the correct number of iterations.
- Verify an extension attaining the additive bound.

</details>
