# The most informative private binary channel at the midpoint

*Hard · [Statistics and probability](index.md)*

Let $X\sim\operatorname{Bernoulli}(p)$ and release one binary $Z$ through a fixed channel with $a=P(Z=1\mid X=1)\ge b=P(Z=1\mid X=0)$. For a fixed $\varepsilon>0$, require $P(Z=z\mid X=x)\le e^\varepsilon P(Z=z\mid X=x')$ for every $z,x,x'$. Determine the largest possible Fisher information about $p$ at $p=1/2$, and characterize all optimizing channels under the ordering $a\ge b$. Include constant-output channels.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Use the channel mean and difference as coordinates instead of its two raw probabilities.

</details>

<details>
<summary>Hint 2</summary>

Translate privacy for each output into two bounds on the difference, then maximize the information under those bounds.

</details>

<details>
<summary>Model proof</summary>

The two output privacy constraints meet at a symmetric randomized-response channel.

1. Write $r=e^\varepsilon$, $t=(r-1)/(r+1)$, $q=(a+b)/2$, and $d=a-b\ge0$. At $p=1/2$, the output success probability is $q$ and its derivative with respect to $p$ is $d$, giving information $d^2/[q(1-q)]$ when $0<q<1$. Constant-output channels have information zero.
2. The active privacy inequalities are $a\le rb$ and $1-b\le r(1-a)$. They give $d\le2tq$ and $d\le2t(1-q)$; the reverse inequalities are automatic under the stated ordering.
3. Therefore information is at most $4t^2\min(q^2,(1-q)^2)/[q(1-q)]\le4t^2$. Equality in the second inequality requires $q=1/2$, and then equality in the first requires $d=t$.
4. The unique ordered optimizer is $a=r/(r+1)$ and $b=1/(r+1)$, which satisfies all privacy inequalities and attains $4\tanh^2(\varepsilon/2)$. This is a channel-design statement at the midpoint, not an assertion of uniform optimality at every parameter.

**Self-assessment rubric**

- Compute the information in the channel mean and contrast coordinates.
- Translate both relevant output privacy inequalities.
- Prove the global upper bound and its equality conditions.
- Verify the optimizer and include constant-output cases.

</details>
