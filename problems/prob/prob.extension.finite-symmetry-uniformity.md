# A transitive symmetry forces a uniform law

*Medium · [Probability problems](index.md)*

A finite group $G$ acts transitively on a nonempty finite set $S$. A random variable $X$ takes values in $S$, and $gX$ has the same law as $X$ for every $g\in G$. Prove that $X$ is uniform on $S$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic-rubric self-assessment only; no automatic correctness verdict or graded objective-slot evidence."}}
```

<details>
<summary>Hint 1</summary>

Transitivity lets you send any chosen point of $S$ to any other by one group element.

</details>

<details>
<summary>Hint 2</summary>

Apply invariance to the singleton target event and use that each group action is a bijection. Only then use total probability one.

</details>

<details>
<summary>Model proof</summary>

Transitivity and law invariance make all singleton masses equal.

1. For arbitrary $x,y\in S$, choose $g\in G$ with $gx=y$, using transitivity.
2. Law invariance gives $P(X=y)=P(gX=y)$. Since $g$ is a bijection, $gX=y$ is equivalent to $X=x$, so these two singleton masses are equal.
3. Let their common value be $c$. The disjoint singleton events cover $S$, so $|S|c=1$ and $c=1/|S|$. This is the uniform law.

Transitivity chooses a bijection sending any $x$ to any $y$. Law invariance makes their masses equal, and the finite singleton masses sum to one, forcing $1/|S|$ each.

**Self-assessment rubric**

- Choose a group element relating arbitrary points, not merely one special pair.
- Use invariance and bijectivity to equate their singleton probabilities.
- Use finiteness, nonemptiness and total probability one to obtain the common mass.

</details>
