# Shift an affine recurrence before reducing a large index

*Medium · [Computational arithmetic problems](index.md)*

Let $a_0=0$ and $a_{n+1}\equiv3a_n+4\pmod{17}$, with each $a_n$ chosen in $\{0,\ldots,16\}$. Find $a_{100}$.

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Find a constant shift $b_n=a_n+c$ that removes the additive term from the recurrence.

</details>

<details>
<summary>Hint 2</summary>

Reduce the resulting power using repeated squaring modulo $17$, then undo the shift.

</details>

<details>
<summary>Worked solution</summary>

A fixed-point shift converts a long affine iteration into modular exponentiation.

1. With $b_n=a_n+2$, the recurrence is $b_{n+1}\equiv3b_n\pmod{17}$ and $b_0=2$.
2. Thus $a_{100}\equiv2\cdot3^{100}-2\pmod{17}$.
3. Repeated squaring gives $3^4\equiv13$ and $3^8\equiv-1$, hence $3^{16}\equiv1$ and $3^{100}\equiv3^4\equiv13$.
4. The result is $2\cdot13-2=24\equiv7\pmod{17}$.

</details>
