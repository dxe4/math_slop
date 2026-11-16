# The geometric lack of memory

*Medium · [Probability problems](index.md)*

Let $T$ count independent Bernoulli trials through the first success, with $0<p\le1$ the common success probability. For nonnegative integers $m,n$ with $P(T>m)>0$, prove $P(T>m+n\mid T>m)=P(T>n)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

For a positive integer $k$, the event $T>k$ requires the first $k$ trials all to fail; also handle $k=0$.

</details>

<details>
<summary>Hint 2</summary>

The event in the conditional numerator is contained in the conditioning event. For $p<1$, divide the tail probabilities; for $p=1$, check which conditioning events are allowed.

</details>

<details>
<summary>Model proof</summary>

Geometric tail probabilities factor into an elapsed and a remaining portion.

1. For $0<p<1$ and $k\ge0$, independence gives $P(T>k)=(1-p)^k$, with $P(T>0)=1$. Since $m+n\ge m$, the intersection in the conditional numerator is $\{T>m+n\}$.
2. The positive denominator permits $P(T>m+n\mid T>m)=(1-p)^{m+n}/(1-p)^m=(1-p)^n=P(T>n)$.
3. If $p=1$, then $T=1$ almost surely. The condition $P(T>m)>0$ forces $m=0$, and conditioning on $T>0$ changes no probability, proving the identity also in this case without dividing by zero.

For $p<1$, the tail ratio is $(1-p)^{m+n}/(1-p)^m=(1-p)^n$. At $p=1$, the allowed condition has $m=0$ and the identity is immediate.

**Self-assessment rubric**

- Derive the geometric tail from independent failures and retain $P(T>0)=1$.
- Use event containment and a positive conditioning denominator to compute the ratio for $p<1$.
- Treat $p=1$ separately and identify the only allowed elapsed time.

</details>
