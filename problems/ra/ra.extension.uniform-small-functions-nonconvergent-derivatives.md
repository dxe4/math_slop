# Evaluate the derivative obstruction at one fixed point

*Easy · [Real analysis](index.md)*

On R let $f_n(x)=\sin(nx)/n$, which tends uniformly to zero by \|f\_n\|&lt;=1/n. Find f\_n'(0) for every n.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested uniform error or derivative observation only; no interchange theorem is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Differentiate before evaluating the point.

</details>

<details>
<summary>Hint 2</summary>

Uniform smallness of the functions does not by itself make their derivatives small.

</details>

<details>
<summary>Worked solution</summary>

A vanishing amplitude can conceal a persistent derivative at a fixed point.

1. Differentiation gives f\_nprime(x)=cos(nx).
2. At zero, cos(0)=1 for every n.
3. Thus f\_nprime(0)=1, whereas the derivative of the uniform limit is zero.

</details>
