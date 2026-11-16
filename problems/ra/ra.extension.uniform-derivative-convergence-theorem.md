# Recover a function limit from one anchor and convergent derivatives

*Medium · [Real analysis](index.md)*

Let f\_n be C^1 on \[a,b\]. Suppose f\_n(x\_0) converges for one x\_0 in \[a,b\] and $f_n'$ converges uniformly to g. Prove f\_n converges uniformly to a C^1 function f with f'=g.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Write each function as its anchored value plus an integral of its derivative.

</details>

<details>
<summary>Hint 2</summary>

The uniform derivative limit is continuous.

</details>

<details>
<summary>Model proof</summary>

One anchor fixes the constants while the derivative limit controls all remaining variation.

1. The uniform limit g of the continuous derivatives is continuous. Let c=lim f\_n(x\_0) and define f(x)=c+integral\_(x\_0)^x g(t) dt.
2. The fundamental theorem gives f C^1 with fprime=g, and f\_n(x)=f\_n(x\_0)+integral\_(x\_0)^x f\_nprime(t) dt.
3. Hence sup \|f\_n-f\|&lt;=\|f\_n(x\_0)-c\|+(b-a)\*sup \|f\_nprime-g\|, tending to zero. Thus convergence is uniform and the derivative assertion follows without using an invalid general derivative interchange.

**Self-assessment rubric**

- Define the candidate limit with its correct constant.
- Justify continuity and the fundamental-theorem step.
- Bound the full-domain error by the anchor and derivative errors.

</details>
