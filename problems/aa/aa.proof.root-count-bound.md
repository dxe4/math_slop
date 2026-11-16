# Bound the roots of a polynomial

*Medium · [Abstract algebra problems](index.md)*

Let $F$ be a field. Prove that a nonzero polynomial $p\in F[x]$ of degree $n$ has at most $n$ distinct roots in $F$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Induct on the degree, treating a nonzero constant separately.

</details>

<details>
<summary>Hint 2</summary>

If a root exists, factor out its linear factor and examine any different root.

</details>

<details>
<summary>Model proof</summary>

The factor theorem reduces the degree while preserving all other roots.

1. For $n=0$, a nonzero constant has no roots. Assume the result for degree $n-1$.
2. If $p$ has no root there is nothing to prove. Otherwise choose a root $a$, and write $p(x)=(x-a)q(x)$ with $\deg q=n-1$.
3. For a distinct root $b$, $0=(b-a)q(b)$, and $b-a\ne0$ is invertible in the field. Thus $q(b)=0$.
4. By induction, $q$ has at most $n-1$ distinct roots. Including $a$ gives at most $n$ for $p$.

**Self-assessment rubric**

- Handle degree zero and state an induction hypothesis.
- Use the factor theorem with the correct degree drop.
- Use the field hypothesis to place every other root in the smaller polynomial.
- Conclude the bound on distinct roots, including the chosen root only once.

</details>
