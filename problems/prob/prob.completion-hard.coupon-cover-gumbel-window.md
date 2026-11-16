# Derive the limiting coupon-cover window

*Hard · [Probability problems](index.md)*

Draw iid uniform labels from $\{1,\ldots,n\}$ and let $T_n$ be the first time every label has appeared. Prove for every real $c$ that $P(T_n\le n\log n+cn)\to\exp(-e^{-c})$, interpreting the time bound by its integer floor. You may use the factorial-moment Poisson criterion, but must derive the missing-label moments and pass carefully from a count limit to the cover-time event.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

At a fixed deterministic time, count missing labels instead of analysing the stopping time directly.

</details>

<details>
<summary>Hint 2</summary>

For a fixed collection of labels, compute the chance that every draw avoids that collection.

</details>

<details>
<summary>Model proof</summary>

Missing labels become asymptotically Poisson in the logarithmic cover window.

1. Put $m_n=\lfloor n\log n+cn\rfloor$ and let $M_n$ count labels not seen in the first $m_n$ draws. For fixed $k$, expanding the falling factorial over ordered distinct labels gives $E(M_n)_k=(n)_k(1-k/n)^{m_n}$.
2. For fixed $k$, $\log(n)_k=k\log n+O(1/n)$ and $m_n\log(1-k/n)=-k\log n-kc+O((\log n)/n)$. Thus $E(M_n)_k\to e^{-kc}$, including the zeroth factorial moment one.
3. The allowed criterion gives $M_n\Rightarrow\operatorname{Poisson}(e^{-c})$. Since the variables are nonnegative integers, $P(M_n=0)=P(M_n\le1/2)$, and $1/2$ is a continuity point of the limiting distribution. Hence this probability tends to $\exp(-e^{-c})$.
4. The events $\{T_n\le m_n\}$ and $\{M_n=0\}$ are identical. The floor changes the logarithmic estimate by $O(1/n)$ only. This establishes the entire stated limiting distribution rather than just the expected coupon-collector scale.

**Self-assessment rubric**

- Derive the exact joint avoidance factorial moments.
- Control the logarithmic expansion including the integer floor.
- Use an appropriate continuity point to recover the zero-count event and the cover-time limit.

</details>
