# A butterfly configuration with finite intersections

*Hard · [Original olympiad-style problems](index.md)*

A chord $PQ$ of a circle has midpoint $M$. Two other distinct chords $AB$ and $CD$ pass through $M$, with all six endpoints distinct. Suppose $AD$ and $BC$ meet line $PQ$ at finite points $X,Y$, respectively. Prove $MX=MY$ and that $X,Y$ lie on opposite sides of $M$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Set $M=(0,0)$, $PQ$ on the horizontal axis, and write the circle as $x^2+y^2+2fy-c^2=0$.

</details>

<details>
<summary>Hint 2</summary>

Parametrize the two other lines by $(\alpha t,t)$ and $(\beta s,s)$. Their root pairs have the same reciprocal sum $2f/c^2$.

</details>

<details>
<summary>Model proof</summary>

An equality of reciprocal sums forces the two cross-chord intercepts to be negatives.

1. Write $P=(-c,0)$ and $Q=(c,0)$ with $c>0$. The circle equation has no linear $x$ term, hence the stated form. Neither additional chord is horizontal, so take $A=(\alpha t,t)$, $B=(\alpha t\prime,t\prime)$, $C=(\beta s,s)$, $D=(\beta s\prime,s\prime)$, where $\alpha\ne\beta$ and all four parameters are nonzero.
2. The first chord parameters are roots of $(1+\alpha^2)t^2+2ft-c^2=0$, so $1/t+1/t\prime=2f/c^2$. The analogous sum $1/s+1/s\prime$ is identical.
3. Intersecting $AD$ and $BC$ with $y=0$ gives $x_X=ts\prime(\alpha-\beta)/(s\prime-t)$ and $x_Y=t\prime s(\alpha-\beta)/(s-t\prime)$. Denominators are nonzero by the finite-intersection hypothesis, and numerators are nonzero by the distinct-chord hypotheses.
4. Thus $1/x_X+1/x_Y=[1/t+1/t\prime-1/s-1/s\prime]/(\alpha-\beta)=0$. Therefore $x_Y=-x_X\ne0$, proving both equal distances and opposite sides.

**Self-assessment rubric**

- Use the midpoint to remove the linear horizontal term.
- Compute and equate the two reciprocal root sums.
- Derive both nonzero finite horizontal intercept formulas.
- Convert the zero reciprocal sum into xY=-xX.

</details>
