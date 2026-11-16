# Centroid distance squared

*Medium · [Original Putnam-style training](index.md)*

For $A=(1,2)$, $B=(4,8)$, $C=(7,2)$, find the squared distance from $A$ to the centroid.

```answer
{"answer":{"kind":"integer","expected":"13","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Average the three coordinate vectors.

</details>

<details>
<summary>Hint 2</summary>

Then square the coordinate differences from $A$.

</details>

<details>
<summary>Worked solution</summary>

Its squared length is $3^2+2^2=13$.

1. The centroid is $G=((1+4+7)/3,(2+8+2)/3)=(4,4)$.
2. The vector from $A$ to $G$ is $(3,2)$.
3. Its squared length is $3^2+2^2=13$.

</details>
