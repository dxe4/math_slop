# Find nonunique limits in a non-Hausdorff quotient

*Medium · [Topology problems](index.md)*

Form Y from two usual real lines by identifying their copies of every nonzero real number, leaving two distinct origins $o_1,o_2$. Let $x_n$ be the common image of $1/n$. Among $o_1,o_2$ and the common image of one, return the labels of all limits of this sequence, using o\_1,o\_2 for the origins.

```answer
{"answer":{"kind":"set","expected":["o_1","o_2"],"checker_scope":"Only the requested finite set, interval or count in the stated topology is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

An open neighborhood of either origin pulls back to an interval neighborhood in its corresponding copy.

</details>

<details>
<summary>Hint 2</summary>

A neighborhood of a nonzero point can avoid sufficiently small positive real numbers.

</details>

<details>
<summary>Worked solution</summary>

Quotient neighborhoods can permit the same sequence to approach distinct points.

1. Every neighborhood of $o_1$ contains the image of all sufficiently small positive inputs in the first copy, hence a tail of the given sequence.
2. The identical argument applies to $o_2$ using the second copy.
3. The image of a small interval around one is an open neighborhood of that point and misses all sufficiently late terms. Thus the listed limit labels are exactly $o_1,o_2$.

</details>
