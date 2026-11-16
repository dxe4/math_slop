# Distinguish a conditional version from its values on a null cell

*Easy · [Probability problems](index.md)*

On $\Omega=\{a,b,c\}$, let $P(a)=P(b)=1/2$ and $P(c)=0$. Let $\mathcal G$ have atoms $\{a,b\}$ and $\{c\}$, and let $X(a)=0$, $X(b)=2$, $X(c)=100$. How many of the following vectors, listed in the order $(a,b,c)$, define versions of $E[X\mid\mathcal G]$: $(1,1,0)$, $(1,1,7)$, $(0,2,0)$?

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the requested exact finite observation is checked; no unrestricted explanation is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

A conditional expectation must be constant on every conditioning atom.

</details>

<details>
<summary>Hint 2</summary>

Its integral condition constrains the positive-probability atom but cannot determine a value on a null atom.

</details>

<details>
<summary>Worked solution</summary>

Almost-sure identification leaves the null-cell value free while measurability still matters.

1. On $\{a,b\}$, any $\mathcal G$-measurable candidate must be constant. The conditional integral identity makes that constant $(0+2)/2=1$.
2. The atom $\{c\}$ has probability zero, so assigning it either finite value $0$ or $7$ leaves every conditional integral unchanged. Thus the first two candidates are valid.
3. The third candidate is not constant on $\{a,b\}$ and hence is not $\mathcal G$-measurable. Exactly two listed candidates are versions.

</details>
