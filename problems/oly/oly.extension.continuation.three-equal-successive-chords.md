# Distinguish chord equality from a diameter assumption

*Medium · [Original olympiad-style problems](index.md)*

Distinct points $A,B,C,D$ occur in this order on a circle, with $AB=BC=CD$ and $\angle BAD=75^\circ$. Find $\angle ABD$ in degrees.

```answer
{"answer":{"kind":"rational","expected":{"numerator":135,"denominator":2},"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The angle at $A$ intercepts the consecutive arcs $BC$ and $CD$.

</details>

<details>
<summary>Hint 2</summary>

Equal chords have equal minor arcs. Show none of the three corresponding consecutive arcs can be major.

</details>

<details>
<summary>Worked solution</summary>

The three equal successive arcs leave a fourth arc whose half determines the requested angle.

1. Let the common minor arc measure for the three equal chords be $\theta$. If any of the corresponding successive arcs were the major arc $360^\circ-\theta$, the other two would each have measure at least $\theta$, and their sum would exceed $360^\circ$. Thus all three consecutive arcs have measure $\theta$.
2. The angle $BAD$ intercepts arcs $BC$ and $CD$, so $75^\circ=(\theta+\theta)/2=\theta$.
3. The remaining arc $DA$, not containing $B$, has measure $360^\circ-225^\circ=135^\circ$. Therefore $\angle ABD=135^\circ/2$.

</details>
