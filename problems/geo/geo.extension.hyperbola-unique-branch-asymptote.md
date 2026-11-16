# Prove a branch has exactly one asymptote

*Hard · [Geometry and trigonometry problems](index.md)*

For $a,b>0$, consider the upper-right hyperbola branch $y=b\sqrt{x^2/a^2-1}$ as $x\to+\infty$. Prove that exactly one straight line has perpendicular distance to the branch tending to zero, and identify it. Treat vertical lines as well.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Rationalize the difference between $bx/a$ and the branch ordinate.

</details>

<details>
<summary>Hint 2</summary>

If distance to $y=mx+k$ tends to zero, first divide its residual by $x$ to identify $m$, then inspect the remaining constant.

</details>

<details>
<summary>Model proof</summary>

Obtain an exact error formula and use it for uniqueness.

1. Let $u=x/a\ge1$. Rationalization gives $bx/a-y=b(u-\sqrt{u^2-1})=b/(u+\sqrt{u^2-1})\to0$.
2. The perpendicular distance to $y=(b/a)x$ is that vertical residual divided by $\sqrt{1+(b/a)^2}$, so it tends to zero.
3. For any nonvertical line $y=mx+k$, tending-to-zero distance means $y-mx-k\to0$. Dividing by $x$ and using $y/x\to b/a$ forces $m=b/a$.
4. The exact residual already tends to zero for this slope, so $y-(b/a)x-k\to-k$. It can tend to zero only for $k=0$.
5. The distance to a vertical line $x=h$ is $|x-h|\to\infty$. Thus no vertical line qualifies, and the unique asymptote is $y=(b/a)x$.

**Self-assessment rubric**

- Derive an exact positive error expression tending to zero.
- Translate ordinate error to the actual perpendicular distance.
- Force both the candidate slope and intercept from the limiting residual.
- Exclude all vertical lines explicitly.

</details>
