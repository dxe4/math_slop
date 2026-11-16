# Identify the exact obstruction to matching two sampling laws

*Hard · [Probability problems](index.md)*

Let $1\le k\le n$. On ordered $k$-tuples from $\{1,\ldots,n\}$, let $P_{n,k}$ be iid uniform sampling and $Q_{n,k}$ be uniform sampling without replacement. Determine their exact total variation distance, using $\|P-Q\|_{TV}=\sup_A|P(A)-Q(A)|$. Construct a coupling attaining the largest possible equality probability and prove that, if $k/\sqrt n\to c\in[0,\infty)$, the distance tends to $1-e^{-c^2/2}$. The collision probability alone is not a coupling proof.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

The without-replacement law is a conditional version of the iid law on the event of distinct entries.

</details>

<details>
<summary>Hint 2</summary>

Split the iid law according to that event. For the limit, control the error in the logarithm of its probability.

</details>

<details>
<summary>Model proof</summary>

The support restriction provides a sharp lower bound, matched by conditional sampling.

1. Let $D$ be the event of distinct entries and $a=P_{n,k}(D)=(n)_k/n^k$. On $D$, $P_{n,k}=aQ_{n,k}$, while $Q_{n,k}$ gives zero mass to $D^c$. Thus $P_{n,k}=aQ_{n,k}+(1-a)R$, where $R=P_{n,k}(\cdot\mid D^c)$ when $a<1$.
2. The event $D^c$ gives total variation at least $1-a$. For every event $A$, the decomposition gives $|P_{n,k}(A)-Q_{n,k}(A)|=(1-a)|R(A)-Q_{n,k}(A)|\le1-a$, proving equality.
3. Construct a pair by probability $a$ drawing one $Q_{n,k}$ tuple and using it for both coordinates; otherwise draw the first coordinate from $R$ and the second independently from $Q_{n,k}$. The marginals are $P_{n,k},Q_{n,k}$. In the second branch equality is impossible because only the first tuple has a repeat. Equality probability is therefore $a$, and no coupling can exceed it since its first coordinate must lie in $D$ whenever the coordinates agree. If $k=1$, simply use the identical tuple.
4. When $k/\sqrt n\to c<\infty$, $k/n\to0$ and $\log a=\sum_{j=0}^{k-1}\log(1-j/n)=-k(k-1)/(2n)+O(k^3/n^2)\to-c^2/2$. Therefore $1-a\to1-e^{-c^2/2}$.

**Self-assessment rubric**

- Identify the precise conditional law and disjoint support decomposition.
- Prove the event lower bound and construct a coupling with matching equality probability.
- Control the logarithmic remainder at the stated scaling, including zero limit.

</details>
