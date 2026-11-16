# Two coordinate additive value

*Medium · [Original Putnam-style training](index.md)*

An additive map $F:\mathbb Z^2\to\mathbb Z$ satisfies $F(1,0)=2$ and $F(0,1)=3$. Find $F(4,-2)$.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Decompose the input into integer multiples of two basis vectors.

</details>

<details>
<summary>Hint 2</summary>

Use additivity also for negative multiples.

</details>

<details>
<summary>Worked solution</summary>

The result is $4\cdot2-2\cdot3=2$.

1. $(4,-2)=4(1,0)-2(0,1)$.
2. Additivity implies $F(4,-2)=4F(1,0)-2F(0,1)$.
3. The result is $4\cdot2-2\cdot3=2$.

</details>
