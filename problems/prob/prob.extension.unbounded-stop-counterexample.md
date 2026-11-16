# An almost-surely finite stop can change the mean

*Medium · [Probability problems](index.md)*

A simple symmetric random walk starts at $S_0=0$ with its natural filtration. Let $T=\inf\{n\ge0:S_n=1\}$. You may use that $T<\infty$ almost surely. Explain rigorously why $E[S_T]=1$ while $E[S_0]=0$, and why the bounded-stopping proof cannot pass directly from $T\wedge n$ to $T$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

At its almost-surely finite first hit, the walk equals the target exactly.

</details>

<details>
<summary>Hint 2</summary>

For each truncated stop the expectation is preserved, while the stopped values converge almost surely. Compare their expected absolute distance from the terminal value to diagnose the missing limit justification.

</details>

<details>
<summary>Model proof</summary>

Almost-sure convergence of stopped values alone does not permit passage of expectations.

1. By the allowed hitting fact and the definition of $T$, $S_T=1$ almost surely, so it is integrable and $E[S_T]=1$, whereas $E[S_0]=0$.
2. For each finite $n$, $T\wedge n$ is a bounded stopping time. Bounded optional stopping gives $E[S_{T\wedge n}]=0$. Since $T$ is finite almost surely, these stopped values eventually equal one on almost every path.
3. Before the first hit, a unit-step walk cannot be above zero, so $S_{T\wedge n}\le1$ always. Consequently $E[|S_{T\wedge n}-1|]=E[1-S_{T\wedge n}]=1$ for every $n$: there is no L1 convergence. Uniform integrability is also impossible, because almost-sure convergence plus uniform integrability would force L1 convergence and convergence of the means. Thus the unbounded limit requires hypotheses absent here; bounded optional stopping itself is not contradicted.

Truncated means remain zero but the terminal value is one; the L1 distance to one stays one, so passing expectations is invalid.

**Self-assessment rubric**

- Use the allowed almost-sure finiteness to identify the integrable terminal value and mean.
- Apply bounded stopping at each truncated time and establish almost-sure convergence of stopped values.
- Demonstrate the failure of an expectation-limit justification, for example through the nonvanishing L1 distance and consequent lack of uniform integrability.

</details>
