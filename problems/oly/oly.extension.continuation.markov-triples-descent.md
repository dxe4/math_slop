# Generate all positive Markov triples

*Hard · [Original olympiad-style problems](index.md)*

Prove every positive integer solution of $x^2+y^2+z^2=3xyz$ can be obtained from $(1,1,1)$ using coordinate permutations and replacements $(x,y,z)\mapsto(x,y,3xy-z)$. Prove every replacement applied to a positive solution stays positive.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Treat the equation as a monic quadratic in the largest coordinate.

</details>

<details>
<summary>Hint 2</summary>

For sorted coordinates, evaluate that quadratic at the middle coordinate and isolate the case where the first two are one.

</details>

<details>
<summary>Model proof</summary>

Use Vieta descent with an explicitly controlled positive second root.

1. Sort a solution so $x\le y\le z$. The other root in the quadratic for $z$ is $z^\prime=3xy-z$, an integer whose product with $z$ is $x^2+y^2>0$. Thus it is positive and the replacement preserves the equation.
2. For $f(t)=t^2-3xyt+x^2+y^2$, $f(y)=x^2-(3x-2)y^2\le3x^2(1-x)\le0$. Equality is possible only when $x=y=1$.
3. Outside that exceptional case, the strict negative value places $y$ strictly between the two roots. Hence $0<z^\prime<y\le z$, so replacing the largest coordinate strictly lowers the maximum after sorting.
4. When $x=y=1$, the equation gives $z=1$ or $2$. The second replaces to one, and the first is the base triple. Repeated descent terminates because the positive integer maximum decreases.
5. Reverse the steps to obtain every solution from the base. For any coordinate of any positive solution, the Vieta product of that coordinate with its replacement is the sum of the other two squares, so all allowed replacements stay positive.

**Self-assessment rubric**

- Use the Vieta product to keep the replacement positive.
- Prove the quadratic sign and identify its exact equality exception.
- Give a strictly decreasing measure and reach the base.
- Prove all reversed moves preserve positivity and the equation.

</details>
