# An orthic area without finding the altitudes

*Medium · [Original olympiad-style problems](index.md)*

An acute triangle $ABC$ has $BC=4$, $CA=5$, $AB=6$. The altitude feet are $D\in BC$, $E\in CA$, $F\in AB$. Find $[DEF]/[ABC]$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":27,"denominator":256},"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Use the three right-angle circles to express the orthic sides in terms of the original sides and cosines.

</details>

<details>
<summary>Hint 2</summary>

The orthic angle at $D$ is $180^\circ-2A$; compare the two area formulas using the sides adjacent to $A$ and $D$.

</details>

<details>
<summary>Worked solution</summary>

The general acute-triangle ratio is $2\cos A\cos B\cos C$.

1. The cyclic quadrilaterals formed by the altitude feet give $DE=c\cos C$ and $DF=b\cos B$. The angle between these sides inside the orthic triangle is $180^\circ-2A$.
2. Therefore $[DEF]=bc\cos B\cos C\sin(2A)/2$, whereas $[ABC]=bc\sin A/2$. Division gives $2\cos A\cos B\cos C$.
3. The cosine rule gives $\cos A=3/4$, $\cos B=9/16$, $\cos C=1/8$, all positive, confirming acuteness. Substitution gives $27/256$.

</details>
