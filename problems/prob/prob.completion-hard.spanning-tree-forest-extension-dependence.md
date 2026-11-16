# Derive forest extension counts and edge dependence

*Hard · [Probability problems](index.md)*

Let $T$ be a uniform labelled spanning tree of $K_n$, $n\ge4$. For a fixed forest $F$ with component sizes $s_1,\ldots,s_c$, prove that the number of trees containing $F$ is $n^{c-2}\prod_i s_i$ (interpret the connected case separately). You may use the ordinary Pruefer bijection and Cayley count. Deduce the joint laws of two distinct edge indicators when their edges are disjoint and when they share a vertex, and determine their covariance.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Contract each forest component; a contracted edge has a number of endpoint lifts depending on its two component sizes.

</details>

<details>
<summary>Hint 2</summary>

Sum the resulting degree weights using occurrences in a Pruefer word.

</details>

<details>
<summary>Model proof</summary>

Weighted tree enumeration converts component sizes into exact extension probabilities.

1. If $c=1$, $F$ is already a spanning tree and has one extension, agreeing with $n^{-1}s_1=1$. For $c\ge2$, any extension adds a tree on the $c$ components. A component edge $ij$ can be lifted in $s_i s_j$ ways, independently over its edges, so a contracted tree $H$ contributes $\prod_i s_i^{\deg_H(i)}$.
2. The Pruefer word of $H$ has length $c-2$, and label $i$ occurs $\deg_H(i)-1$ times. Thus summing its weights gives $\sum_H\prod_i s_i^{\deg_H(i)}=(\prod_i s_i)(\sum_i s_i)^{c-2}=n^{c-2}\prod_i s_i$. The empty word also gives the correct $c=2$ case.
3. For one fixed edge the components have sizes $2,1,\ldots,1$, so its probability is $2n^{n-3}/n^{n-2}=2/n$. Two disjoint edges give sizes $2,2,1,\ldots$, hence joint probability $4/n^2$; their Bernoulli indicators are independent.
4. Two adjacent edges instead give one component of size $3$, hence joint probability $3/n^2$. Their covariance is $3/n^2-(2/n)^2=-1/n^2$. This compares genuine independence with negative dependence using the exact extension law.

**Self-assessment rubric**

- Explain why extensions correspond to component trees and independent endpoint choices.
- Derive the weighted sum rather than assuming an unweighted contraction count.
- Compute both joint laws and the resulting independence or covariance.

</details>
