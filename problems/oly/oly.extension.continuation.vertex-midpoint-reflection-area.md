# A triangle move preserving area but reversing orientation

*Medium · [Original olympiad-style problems](index.md)*

Three noncollinear points $A,B,C$ are given. A move replaces one vertex by its reflection in the midpoint of the other two. Prove that no finite sequence can make the three points collinear. Show exactly how the signed doubled area changes at one move.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

For a move at $A$, write $A\prime=B+C-A$.

</details>

<details>
<summary>Hint 2</summary>

Compare $\det(B-A\prime,C-A\prime)$ with $\det(B-A,C-A)$.

</details>

<details>
<summary>Model proof</summary>

The midpoint reflection swaps the determinant factors up to signs.

1. Put $u=B-A$ and $v=C-A$. Then $A\prime=A+u+v$, so $B-A\prime=-v$ and $C-A\prime=-u$.
2. The new signed doubled area is $\det(-v,-u)=\det(v,u)=-\det(u,v)$. Thus a move reverses orientation while preserving the positive area magnitude.
3. The same calculation applies cyclically to either other moved vertex. Since the initial determinant is nonzero, its absolute value remains nonzero after every finite sequence; collinearity is impossible.

**Self-assessment rubric**

- Write the correct reflected vertex formula.
- Compute the determinant change exactly, including its sign.
- Propagate the nonzero area invariant through arbitrary moves.

</details>
