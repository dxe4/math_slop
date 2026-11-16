# Bound a quadratic count

*Medium · [Discrete mathematics](index.md)*

For every integer $n\geq 3, T(n)=2n^{2}+3n$. Find the smallest positive integer C satisfying T(n)≤Cn² for every $n\geq 3$. $N=3$ is fixed.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Checks only this authored find-smallest-integer-factor task. Does not certify unrestricted proof validity, general construction ability or full mastery of asymptotic bounds."}}
```

<details>
<summary>Hint 1</summary>

For $n\geq 3, 3n\leq n^{2}$.

</details>

<details>
<summary>Hint 2</summary>

At $n=3$ test whether $C=2$ can work.

</details>

<details>
<summary>Worked solution</summary>

An eventual bound uses fixed constants before the later arbitrary input. These tasks apply explicit inequalities, without calculus or claims of general asymptotic-proof mastery.

1. The full tail obeys $T(n)\leq 3n^{2}$.
2. At n=3, T=27=3·9, so any integer $C\leq 2$ fails. Thus $C=3$ is smallest.

</details>
