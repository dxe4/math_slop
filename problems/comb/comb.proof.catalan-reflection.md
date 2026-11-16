# Reflect the first forbidden crossing

*Hard · [Combinatorics](index.md)*

For $n\ge1$, consider lattice paths from $(0,0)$ to $(n,n)$ using steps $(1,0)$ and $(0,1)$. Prove that the number staying in $y\le x$ is $\binom{2n}{n}-\binom{2n}{n+1}$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Subtract paths that ever enter the forbidden region from all unrestricted paths.

</details>

<details>
<summary>Hint 2</summary>

For a forbidden path, reflect its prefix through the first point one unit above the diagonal by exchanging horizontal and vertical steps.

</details>

<details>
<summary>Model proof</summary>

A first-crossing reflection bijects forbidden paths with an unrestricted endpoint class.

1. There are $\binom{2n}{n}$ unrestricted paths to $(n,n)$. Call a path bad if it reaches $y=x+1$.
2. For a bad path, find its first such point $(a,a+1)$ and interchange horizontal and vertical steps in the entire prefix ending there. That prefix now ends at $(a+1,a)$.
3. Keeping the remaining steps unchanged gives a path to $(n+1,n-1)$.
4. Conversely, a path to $(n+1,n-1)$ must first reach $x=y+1$ somewhere. Reflecting its prefix through that first point reverses the construction and gives a bad path to $(n,n)$.
5. Thus bad paths are counted by $\binom{2n}{n-1}=\binom{2n}{n+1}$. Subtracting from the unrestricted count proves the formula.

**Self-assessment rubric**

- Count all paths and define the forbidden crossing precisely.
- Specify the first-crossing prefix and compute the changed endpoint.
- Give a valid inverse using a first crossing in the transformed path.
- Count the transformed endpoint class and subtract it from all paths.

</details>
