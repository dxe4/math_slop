# Use a uniform majorant for a function series

*Easy · [Real analysis](index.md)*

Functions on a set D satisfy $|f_n(x)|\le3^{-n}$ for every x and n&gt;=1. The Weierstrass M-test gives uniform absolute convergence. What bound follows for the absolute value of their sum at any x?

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested uniform error or derivative observation only; no interchange theorem is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Sum the common scalar majorants.

</details>

<details>
<summary>Hint 2</summary>

The bound is independent of the domain point.

</details>

<details>
<summary>Worked solution</summary>

A summable majorant controls the entire function series uniformly.

1. The triangle inequality bounds the sum's modulus by sum\_(n=1)^infinity 3^(-n).
2. This geometric sum has first term 1/3 and ratio 1/3.
3. Its sum is (1/3)/(1-1/3)=1/2, giving the common bound.

</details>
