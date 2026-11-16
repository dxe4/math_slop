# Generate a sum from a joint law

*Medium · [Probability problems](index.md)*

Binary $X,Y$ have joint masses $P(0,0)=P(1,1)=1/6$ and $P(1,0)=P(0,1)=1/3$. Find the polynomial $E[x^{X+Y}]$, with no excluded real inputs.

```answer
{"answer":{"kind":"expression","expected":"(1+4*x+x^2)/6","domain":{"variable":"x","excluded":[]},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Group the joint outcomes by their coordinate sum.

</details>

<details>
<summary>Hint 2</summary>

Both unequal-coordinate outcomes contribute to the same power.

</details>

<details>
<summary>Worked solution</summary>

The sum distribution follows by collecting equal powers from the joint law.

1. The sum is $0$ with probability $1/6$, $1$ with probability $2/3$, and $2$ with probability $1/6$.
2. Thus the polynomial is $1/6+(2/3)x+x^2/6$.
3. Equivalently it is $(1+4x+x^2)/6$, defined at every real input.

</details>
