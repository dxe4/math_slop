# Approach a supremum from below

*Easy · [Real analysis](index.md)*

Let $A\subseteq\mathbb R$ be nonempty and bounded above, with $s=\sup A$. Prove that for every $\varepsilon>0$ there exists $a\in A$ such that $s-\varepsilon<a\le s$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

An upper bound smaller than the least upper bound cannot bound the entire set.

</details>

<details>
<summary>Hint 2</summary>

Negate the assertion that the smaller number is an upper bound.

</details>

<details>
<summary>Model proof</summary>

Leastness of the upper bound supplies the desired near-maximizer.

1. Fix $\varepsilon>0$. Since $s-\varepsilon<s$ and $s$ is the least upper bound, $s-\varepsilon$ is not an upper bound for $A$.
2. There is therefore $a\in A$ with $a>s-\varepsilon$.
3. As $s$ is an upper bound, $a\le s$. These inequalities give the required conclusion.

**Self-assessment rubric**

- Begin with an arbitrary positive tolerance.
- Explain why the smaller number is not an upper bound.
- Obtain an element above that number and retain the original upper bound.

</details>
