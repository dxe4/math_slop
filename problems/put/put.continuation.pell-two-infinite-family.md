# Pell two infinite family

*Hard · [Original Putnam-style training](index.md)*

Prove $x^2-2y^2=1$ has infinitely many positive-integer solutions by constructing a recurrence from $3+2\sqrt2$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Use the norm-one multiplicative identity in $\mathbb Z[\sqrt2]$.

</details>

<details>
<summary>Hint 2</summary>

Check positivity and strict growth of the generated solutions.

</details>

<details>
<summary>Model proof</summary>

Both recurrence coordinates stay positive and $x_{k+1}>x_k$, making all solutions distinct. Therefore infinitely many exist.

1. Set $x_1=3,y_1=2$ and define $x_{k+1}=3x_k+4y_k$, $y_{k+1}=2x_k+3y_k$, corresponding to multiplication by $3+2\sqrt2$.
2. The norm satisfies $(3+2\sqrt2)(3-2\sqrt2)=1$ and is multiplicative, so induction gives $x_k^2-2y_k^2=1$ for every $k$.
3. Both recurrence coordinates stay positive and $x_{k+1}>x_k$, making all solutions distinct. Therefore infinitely many exist.

**Self-assessment rubric**

- Construct integer recurrences from multiplication by 3+2√2.
- Prove every generated pair has norm one and positive coordinates.
- Show the pairs are distinct by strict coordinate growth.

</details>
