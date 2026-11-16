# Derive the incenter–circumcenter identity synthetically

*Hard · [Original olympiad-style problems](index.md)*

For a nondegenerate triangle with incenter $I$, circumcenter $O$, inradius $r$ and circumradius $R$, prove $OI^2=R^2-2Rr$. Deduce $R\ge2r$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Let the internal bisector $AI$ meet the circumcircle again at $D$. Show $ID=BD=CD$.

</details>

<details>
<summary>Hint 2</summary>

Use $AI=r/\sin(A/2)$, $BD=2R\sin(A/2)$ and the power of the interior point $I$.

</details>

<details>
<summary>Model proof</summary>

The angle-bisector chord turns the power of the incenter into a product involving both radii.

1. The point $D$ is the midpoint of the arc $BC$ not containing $A$, so $BD=CD$. The angles $DBI$ and $BID$ both equal $90^\circ-C/2$: the former is $A/2+B/2$, and the latter is supplementary to $BIA=90^\circ+C/2$. Hence $ID=BD$.
2. If the incircle touches $AB$ at $T$, the right triangle $AIT$ gives $AI=r/\sin(A/2)$. The chord formula gives $BD=2R\sin(A/2)$. Thus $AI\cdot ID=2Rr$.
3. The incenter lies strictly inside the circumdisk. Along the chord $AD$, $A,I,D$ occur in that order, so the positive product $AI\cdot ID$ equals $R^2-OI^2$ by the intersecting-chord power identity. Rearrangement proves the formula.
4. Since $OI^2\ge0$ and $R>0$, $R(R-2r)\ge0$, giving $R\ge2r$. No claim about an arbitrary interior point can replace the angle-bisector argument.

**Self-assessment rubric**

- Prove ID equals the arc-midpoint chord BD using both angle values.
- Compute AI times ID as 2Rr with positive half-angle factors.
- Use the interior-point sign to obtain R squared minus OI squared.
- Deduce the inequality from the squared-distance identity.

</details>
