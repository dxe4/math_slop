# An increasing bounded sequence converges

*Medium · [Real analysis](index.md)*

Prove that every increasing real sequence $(a_n)$ that is bounded above converges to $\sup\{a_n:n\ge1\}$. Here increasing means $a_n\le a_{n+1}$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Use completeness to define the proposed limit.

</details>

<details>
<summary>Hint 2</summary>

First find one term close to the supremum; monotonicity then controls every later term.

</details>

<details>
<summary>Model proof</summary>

A near-supremum term and monotonicity trap the entire tail.

1. The set of terms is nonempty and bounded above, so completeness gives its supremum $s\in\mathbb R$.
2. For any $\varepsilon>0$, the supremum property supplies an index $N$ with $s-\varepsilon<a_N\le s$.
3. For $n\ge N$, monotonicity gives $s-\varepsilon<a_N\le a_n\le s$. Thus $|a_n-s|<\varepsilon$, proving convergence to $s$.

**Self-assessment rubric**

- Justify the existence of a finite supremum of the set of terms.
- Choose a term within the prescribed tolerance below it.
- Use monotonicity to establish the required estimate for every later index.

</details>
