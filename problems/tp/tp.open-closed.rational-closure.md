# Closure of a dense subset

*Easy · [Topology problems](index.md)*

Find the closure of $\mathbb Q$ in the usual real line. Enter it as an interval, using infinity for an infinite endpoint.

```answer
{"answer":{"kind":"interval","expected":"(-infinity, infinity)","checker_scope":"Exact finite set, interval or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Every nonempty open real interval contains a rational number.

</details>

<details>
<summary>Hint 2</summary>

Use the neighborhood characterization of closure for an arbitrary real point.

</details>

<details>
<summary>Worked solution</summary>

Density puts every real point in the closure.

1. Fix any real $x$. Every neighborhood of $x$ contains a nonempty open interval around it.
2. Rational density makes that interval meet $\mathbb Q$, so $x$ is in the closure.
3. Thus the closure is all of $\mathbb R$, entered as $(-\infty,\infty)$.

</details>
