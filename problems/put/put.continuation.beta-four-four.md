# Beta four four

*Medium · [Original Putnam-style training](index.md)*

Evaluate $\int_0^1 x^3(1-x)^3\,dx$ exactly.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":140},"checker_scope":"Checks only the exact bounded result; derivation and domain assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Expand the cubic factor or use a beta recurrence.

</details>

<details>
<summary>Hint 2</summary>

If expanding, combine four rational antiderivatives only at the end.

</details>

<details>
<summary>Worked solution</summary>

With denominator $140$, this equals $(35-84+70-20)/140=1/140$.

1. Expand $x^3(1-x)^3=x^3-3x^4+3x^5-x^6$.
2. Termwise integration on $[0,1]$ gives $1/4-3/5+3/6-1/7$.
3. With denominator $140$, this equals $(35-84+70-20)/140=1/140$.

</details>
