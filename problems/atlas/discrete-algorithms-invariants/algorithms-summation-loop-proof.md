# Prove a summation loop

*Difficulty 3 of 5 · [Discrete algorithms and invariants](index.md) · exercise 4 of 4*

Consider the pseudocode `s=0; k=1; while k≤n do s=s+k; k=k+1`. Prove that for every integer $n\ge0$ the algorithm terminates with $s=n(n+1)/2$.

<details>
<summary>Hint 1</summary>

Use the invariant $s=k(k-1)/2$ at the top of the loop

</details>

<details>
<summary>Hint 2</summary>

Check initialization, preservation, and termination separately

</details>

<details>
<summary>Worked solution</summary>

At the first loop test, $k=1$ and $s=0=1\cdot0/2$, so the invariant $s=k(k-1)/2$ holds. If it holds for the current $k\le n$, the update makes $s'=k(k-1)/2+k=k(k+1)/2$. Then $k'=k+1$, so $s'=k'(k'-1)/2$ and the invariant is preserved. Each iteration increases $k$, so eventually $k=n+1$ and the loop stops. Substituting $k=n+1$ in the invariant gives $s=(n+1)n/2$. For $n=0$ the loop performs no iterations and the same conclusion gives $s=0$.

**Answer.** The invariant $s=k(k-1)/2$ yields $s=n(n+1)/2$ when $k=n+1$.

</details>

*Tags: loop invariant, correctness proof, summation*
