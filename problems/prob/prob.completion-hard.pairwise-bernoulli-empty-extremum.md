# Find a sharp empty-state probability under pairwise independence

*Hard · [Probability problems](index.md)*

Four Bernoulli variables $X_1,\ldots,X_4$ satisfy $P(X_i=1)=1/3$ and are pairwise independent; mutual independence is not assumed. Find the largest possible value of $P(X_1=X_2=X_3=X_4=0)$. The worked justification must include an attaining joint law.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Only the requested exact bounded result is checked; the construction, proof and optimality argument remain personal mathematical work, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Aggregate the indicators into their sum, whose first two moments are fixed even without mutual independence.

</details>

<details>
<summary>Hint 2</summary>

Use a second-moment inequality on the event that the sum is positive, then look for a law concentrating the positive sum at one value.

</details>

<details>
<summary>Worked solution</summary>

A sharp second-moment event bound suggests the support of an extremal dependent construction.

1. Put $S=\sum_iX_i$. Pairwise independence gives $ES=4/3$ and $ES^2=4/3+2\binom42/9=8/3$.
2. Cauchy-Schwarz applied to $S\mathbf1_{\{S>0\}}$ gives $(ES)^2\le P(S>0)ES^2$, hence $P(S=0)\le1-(16/9)/(8/3)=1/3$.
3. Construct a law that is all zero with probability $1/3$, and otherwise chooses a uniformly random two-element subset of $\{1,2,3,4\}$ as the locations of the ones.
4. Each marginal success probability is $(2/3)(2/4)=1/3$, and each pair succeeds with probability $(2/3)/6=1/9$, proving pairwise independence of the Bernoulli pairs. The empty-state probability is $1/3$, attaining the bound.

</details>
