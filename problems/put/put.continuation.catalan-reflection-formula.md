# Catalan reflection formula

*Hard · [Original Putnam-style training](index.md)*

Prove the number of lattice paths from $(0,0)$ to $(n,n)$ with east/north steps and never going above $y=x$ is $\binom{2n}{n}/(n+1)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Count all paths and reflect a bad path at its first step above the diagonal.

</details>

<details>
<summary>Hint 2</summary>

Identify the endpoint class of reflected paths and subtract.

</details>

<details>
<summary>Model proof</summary>

The valid count is $\binom{2n}{n}-\binom{2n}{n+1}=\binom{2n}{n}/(n+1)$.

1. All paths have $n$ east and $n$ north steps, so there are $\binom{2n}{n}$.
2. For a bad path, reflect (swap east and north in) the prefix through its first visit to $y=x+1$; this bijects with paths having $n+1$ east and $n-1$ north steps, counted by $\binom{2n}{n+1}$.
3. The valid count is $\binom{2n}{n}-\binom{2n}{n+1}=\binom{2n}{n}/(n+1)$.

**Self-assessment rubric**

- Count all balanced east/north paths.
- Construct a reversible reflection at first crossing of y=x+1.
- Count reflected paths and simplify the binomial difference.

</details>
