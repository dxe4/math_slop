# An exponential residual tail

*Medium · [Probability problems](index.md)*

Let $T$ have exponential rate $2$. With natural logarithm, find $P(T>1+(\log2)/2\mid T>1)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks the conditional residual tail for the specified exponential rate and elapsed time only."}}
```

<details>
<summary>Hint 1</summary>

The later-tail event lies inside the conditioning event.

</details>

<details>
<summary>Hint 2</summary>

Use the ratio of exponential survival probabilities; the elapsed-time factor cancels.

</details>

<details>
<summary>Worked solution</summary>

Derive the memoryless calculation directly from the tail ratio.

1. Set $a=(\log2)/2>0$. The survival function is $P(T>t)=e^{-2t}$, so the conditioning event has positive mass $e^{-2}$.
2. Containment gives $P(T>1+a\mid T>1)=e^{-2(1+a)}/e^{-2}=e^{-2a}$.
3. Substitution yields $e^{-\log2}=1/2$. This calculation explains the exponential residual-lifetime property rather than assuming an unspecified conditional law.

The elapsed-time factor cancels, leaving $e^{-2(\log2)/2}=1/2$.

</details>
