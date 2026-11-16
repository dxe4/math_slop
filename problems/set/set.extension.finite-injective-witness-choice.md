# Choose a compatible bijective witness function

*Easy · [Set theory](index.md)*

Let $D=\{0,1,2\}$ and $P(x,y)$ mean $x\le y$. Find the unique bijection $f:D\to D$ satisfying $P(x,f(x))$ for every $x\in D$. Return $[f(0),f(1),f(2)]$.

```answer
{"answer":{"kind":"vector","expected":["0","1","2"],"checker_scope":"Only the requested finite witness-function coordinates are checked; no unrestricted argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Start with the largest input, which has the fewest permitted witnesses.

</details>

<details>
<summary>Hint 2</summary>

After each forced choice, use injectivity to remove its image from the remaining choices.

</details>

<details>
<summary>Worked solution</summary>

The quantifier supplies pointwise inequalities, while bijectivity links the witness choices.

1. The condition at $x=2$ forces $f(2)=2$, because no larger element lies in $D$.
2. At $x=1$ the permitted values are $1,2$, but injectivity excludes the already used value $2$, so $f(1)=1$.
3. Bijectivity leaves $f(0)=0$. This map indeed satisfies every inequality, and the forced choices prove uniqueness.

</details>
