# Detect an impossible functional symmetry

*Medium · [Original olympiad-style problems](index.md)*

How many functions $f:\mathbb R\to\mathbb R$ satisfy $f(x)+f(1-x)=x$ for every real $x$?

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The left side is unchanged when the input is replaced by its reflection about one half.

</details>

<details>
<summary>Hint 2</summary>

Compare the two required values at zero and one.

</details>

<details>
<summary>Worked solution</summary>

Use an input symmetry before trying to construct a function.

1. At zero, the equation demands $f(0)+f(1)=0$.
2. At one, it demands the identical left side equal one.
3. These statements contradict each other, so there are no functions.

</details>
