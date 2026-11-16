# Prove boundedness of a uniform limit from one sufficiently close function

*Hard · [Real analysis](index.md)*

Let each real-valued f\_n be bounded on a nonempty set D, and suppose $f_n\to f$ uniformly there. Prove f is bounded. Do not assume all original bounds on f\_n were bounded by one common number.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Choose one sufficiently late function using a fixed uniform tolerance.

</details>

<details>
<summary>Hint 2</summary>

Only that one function needs its individual finite bound.

</details>

<details>
<summary>Model proof</summary>

Uniform approximation by a single bounded member controls the entire limit.

1. Uniform convergence gives an index N such that \|f(x)-f\_N(x)\|&lt;1 for every x in D.
2. Because this particular f\_N is bounded, some finite M satisfies \|f\_N(x)\|&lt;=M throughout D.
3. The triangle inequality gives \|f(x)\|&lt;=M+1 for every x, proving boundedness without any common bound for the full original family.

**Self-assessment rubric**

- Choose one index close to f over the whole domain.
- Use boundedness of that chosen function only.
- Combine the two estimates into a finite global bound on f.

</details>
