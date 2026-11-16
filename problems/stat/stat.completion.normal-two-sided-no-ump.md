# Why a two-sided normal alternative has no UMP test

*Hard · [Statistics and probability](index.md)*

Observe $X\sim N(\theta,1)$. For $0<\alpha<1/2$, prove there is no level-$\alpha$ test of $\theta=0$ that is most powerful against every alternative $\theta\ne0$, even allowing randomization. You may use the Neyman–Pearson lemma and its uniqueness conclusion when the likelihood ratio has a continuous null distribution.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Compare the likelihood-ratio orderings for a positive and a negative fixed alternative.

</details>

<details>
<summary>Hint 2</summary>

A uniformly most powerful test would have to equal both unique simple-alternative optimizers almost surely under the same null law.

</details>

<details>
<summary>Model proof</summary>

The positive and negative alternatives require incompatible rejection tails.

1. For fixed $a>0$, $dP_a/dP_0=\exp(aX-a^2/2)$ is strictly increasing in $X$. Neyman–Pearson therefore gives the unique most-powerful level-$\alpha$ test $\varphi_+(X)=1_{\{X>z_{1-\alpha}\}}$, up to null sets.
2. For the alternative $-a$, the ratio $\exp(-aX-a^2/2)$ is strictly decreasing. The unique optimizer is $\varphi_-(X)=1_{\{X<-z_{1-\alpha}\}}$. Each test has exact size $\alpha$, since the normal law is continuous.
3. A UMP test would have to attain both simple-alternative optima, hence coincide with both indicators $P_0$-almost surely. But their rejection sets are disjoint for $\alpha<1/2$ and each has positive probability.
4. The two indicators differ on a set of probability $2\alpha>0$, a contradiction. Randomization cannot evade the unique-optimizer condition. This does not rule out optimal tests under an added unbiasedness or invariance restriction.

**Self-assessment rubric**

- Identify the likelihood-ratio orderings for the two signs.
- Apply the uniqueness part of Neyman–Pearson at the stated size.
- Derive the contradiction on a positive-probability set.

</details>
