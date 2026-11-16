# List both solutions in a specified turn

*Medium · [Geometry and trigonometry problems](index.md)*

Find every $q\in[0,2)$ satisfying $\sin(q\pi)=1/2$. Enter the finite set of rational values of $q$.

```answer
{"answer":{"kind":"set","expected":["1/6","5/6"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The reference angle is $\pi/6$.

</details>

<details>
<summary>Hint 2</summary>

Sine is positive in the first and second quadrants; use the interval to exclude other turns.

</details>

<details>
<summary>Worked solution</summary>

Combine symmetry with the interval restriction.

1. The first-quadrant solution is $q\pi=\pi/6$.
2. The second-quadrant solution is $q\pi=\pi-\pi/6=5\pi/6$.
3. No other angle in $[0,2\pi)$ has the same positive sine. Thus the set is $\{1/6,5/6\}$.

</details>
