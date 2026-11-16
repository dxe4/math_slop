# Log one plus x

*Medium · [Original Putnam-style training](index.md)*

Evaluate $\int_0^1\log(1+x)\,dx$ exactly.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Integrate by parts with the logarithm as the differentiated factor.

</details>

<details>
<summary>Hint 2</summary>

Simplify the remaining rational integral after the boundary term.

</details>

<details>
<summary>Model proof</summary>

The boundary term is $\log2$; therefore the value is $2\log2-1$.

1. Integration by parts gives $\int_0^1\log(1+x)dx=[x\log(1+x)]_0^1-\int_0^1x/(1+x)dx$.
2. Use $x/(1+x)=1-1/(1+x)$, so the second integral is $1-\log2$.
3. The boundary term is $\log2$; therefore the value is $2\log2-1$.

**Self-assessment rubric**

- Choose and evaluate the integration-by-parts boundary term.
- Decompose x/(1+x) and integrate it exactly.
- Combine both terms into 2 log 2 − 1.

</details>
