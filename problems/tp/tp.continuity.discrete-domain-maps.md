# Maps out of a discrete domain

*Easy · [Topology problems](index.md)*

Let $X=\{0,1\}$ be discrete, and let $Y=\{0,1\}$ have topology $\{\varnothing,\{1\},Y\}$. How many maps $X\to Y$ are continuous?

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Every subset of a discrete domain is open.

</details>

<details>
<summary>Hint 2</summary>

Once continuity imposes no restriction, count all functions.

</details>

<details>
<summary>Worked solution</summary>

Every map from a discrete space is continuous.

1. The preimage of any target open set is a subset of the discrete domain and is therefore open.
2. Thus all maps are continuous.
3. Each of the two domain points has two possible images, giving $2^2=4$ maps.

</details>
