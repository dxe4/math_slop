# Apollonius vector median

*Hard · [Original Putnam-style training](index.md)*

If $M$ is the midpoint of side $BC$ of triangle $ABC$, prove $AB^2+AC^2=2AM^2+\tfrac12BC^2$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Write $B=M+v$ and $C=M-v$ in vector coordinates.

</details>

<details>
<summary>Hint 2</summary>

Expand the two squared norms from $A$.

</details>

<details>
<summary>Model proof</summary>

Here $|a|=AM$ and $BC=2|v|$, so $2|v|^2=BC^2/2$, as claimed.

1. Take $M$ as origin, so $B=v$, $C=-v$, and write $A=a$. Then $AB^2=|a-v|^2$ and $AC^2=|a+v|^2$.
2. Adding cancels the cross terms and gives $AB^2+AC^2=2|a|^2+2|v|^2$.
3. Here $|a|=AM$ and $BC=2|v|$, so $2|v|^2=BC^2/2$, as claimed.

**Self-assessment rubric**

- Write B and C as opposite vectors from M.
- Expand squared side lengths and cancel cross terms.
- Convert vector norms back to AM and BC.

</details>
