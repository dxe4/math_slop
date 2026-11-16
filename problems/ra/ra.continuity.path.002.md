# Find a sequential discontinuity witness

*Medium · [Real analysis](index.md)*

On R, let $f(x)=0$ for $x<0$ and $f(x)=1$ for $x\geq 0$. Which sequence demonstrates discontinuity at $0$? Select the mathematically correct statement from the four alternatives.

**Options**

1. $x_{n}=-1/n$, because $x_{n}\to 0$ but $f(x_{n})=0$ does not tend to $f(0)=1$.
2. $x_{n}=1/n$, because $f(x_{n})=1$ tends to $f(0)=1$.
3. $x_{n}=-n$, because $f(x_{n})=0$ for all n.
4. The constant sequence $x_{n}=0$ proves discontinuity because every image equals $f(0)$.

```answer
{"answer":{"kind":"multiple_choice","expected":"x_n_1_n","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["x_n_1_n","to_f_0_1","x_n_n_because","the_constant_sequenc"]}
```

<details>
<summary>Hint 1</summary>

The input sequence must actually approach $0$.

</details>

<details>
<summary>Hint 2</summary>

Its image limit must differ from the value $f(0)$.

</details>

<details>
<summary>Worked solution</summary>

One domain sequence with the wrong image limit certifies discontinuity.

1. The sequence $-1/n$ lies in the domain and tends to $0$. Its images are all $0$, while $f(0)=1$.
2. Thus A violates the sequential continuity requirement. B satisfies it for that sequence, and C does not approach the point.

</details>
