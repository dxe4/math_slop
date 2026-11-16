# Recognize precisely which binary boards can be switched

*Medium · [Original olympiad-style problems](index.md)*

An $m\times n$ zero-one board starts with every entry zero, where $m,n\ge2$. A move flips every bit in one whole row or one whole column. Prove that a target board $a_{ij}$ is reachable exactly when the sum of the four corner bits of every axis-aligned subrectangle is even.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

In arithmetic modulo two, a reachable board has $a_{ij}=r_i+c_j$.

</details>

<details>
<summary>Hint 2</summary>

For sufficiency, use only the rectangles with corners in row one and column one to express every entry from the first row and column.

</details>

<details>
<summary>Model proof</summary>

The four-corner invariant is also a complete reconstruction rule.

1. A row or column flip affects either zero or two corners of any subrectangle, so corner parity is invariant and initially even. Equivalently each final bit is $r_i+c_j$ modulo two, where $r_i,c_j$ record flip parity.
2. Conversely suppose every rectangle has even corner sum. For rows $1,i$ and columns $1,j$, this gives $a_{ij}=a_{i1}+a_{1j}+a_{11}$ modulo two, including the first row or column by direct cancellation.
3. Choose row parities $r_i=a_{i1}$ and column parities $c_j=a_{1j}+a_{11}$. Then $r_i+c_j=a_{ij}$ for every position. Flip exactly the rows and columns assigned parity one to construct the target.
4. Thus the condition is necessary and sufficient; repeated flips and their order introduce no additional states because the operations commute modulo two.

**Self-assessment rubric**

- Show how every legal flip changes four-corner parity.
- Derive each entry from the first row, first column and corner.
- Specify row and column parities realizing every qualifying target.

</details>
