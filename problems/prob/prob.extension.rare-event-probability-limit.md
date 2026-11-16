# One rare-event probability

*Easy · [Probability problems](index.md)*

For each integer $n\ge1$, let $X_n$ equal one with probability $1/n$ and zero otherwise. At $n=4$, find $P(|X_n|>1/2)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Checks a single marginal probability at index four only; it does not establish a mode of convergence."}}
```

<details>
<summary>Hint 1</summary>

Check which of the two possible values satisfies the strict absolute-value condition.

</details>

<details>
<summary>Hint 2</summary>

Use the supplied mass of that support value at the requested index; no joint dependence information is needed.

</details>

<details>
<summary>Worked solution</summary>

The deviation event is the value-one event.

1. The value zero does not exceed the absolute threshold $1/2$, while the value one does.
2. Thus $P(|X_n|>1/2)=P(X_n=1)=1/n$ for each positive integer $n$.
3. At $n=4$ the probability is $1/4$. A claim about almost-sure convergence would require more than this single marginal calculation.

Exactly the success outcome is included, giving probability $1/4$.

</details>
