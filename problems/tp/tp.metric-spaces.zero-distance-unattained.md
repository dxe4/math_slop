# Distance zero without a nearest point

*Medium · [Topology problems](index.md)*

In the usual real line, let $A=\{1/n:n\ge1\}$. Find $d(0,A)=\inf_{a\in A}|a|$.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A set distance is an infimum, so it need not be attained by any member.

</details>

<details>
<summary>Hint 2</summary>

Find arbitrarily small positive distances and a lower bound valid for all of them.

</details>

<details>
<summary>Worked solution</summary>

An unattained infimum still determines the exact distance to a set.

1. Every distance is $1/n>0$, so zero is a lower bound.
2. For every $\varepsilon>0$, choosing $n>1/\varepsilon$ gives a distance below $\varepsilon$.
3. The infimum is $0$, although no point of $A$ attains it.

</details>
