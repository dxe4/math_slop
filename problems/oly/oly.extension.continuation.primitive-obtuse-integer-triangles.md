# Construct infinitely many primitive 120-degree triangles

*Hard · [Original olympiad-style problems](index.md)*

Construct infinitely many pairwise distinct primitive integer triangles having an angle of $120^\circ$. Primitive means the three side lengths have gcd one. Prove positivity, strict triangle inequalities, the angle and primitivity.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Seek $c^2=a^2+ab+b^2$ using $a=t^2-1$, $b=2t+1$.

</details>

<details>
<summary>Hint 2</summary>

Take $t$ divisible by three to remove the only possible common prime.

</details>

<details>
<summary>Model proof</summary>

Build a quadratic identity and control its exact gcd.

1. For any $t=3k$ with $k\ge1$, set $a=t^2-1$, $b=2t+1$, $c=t^2+t+1$. Expansion gives $c^2=a^2+ab+b^2$.
2. All sides are positive. Because $a,b>0$, $c^2<(a+b)^2$ and $c^2>(a-b)^2$, so the strict triangle inequalities hold.
3. Cosine law gives the angle opposite $c$ cosine negative one half, hence exactly $120^\circ$.
4. A common divisor of $a,b$ is odd and divides $4a-(2t-1)b=-3$. But $t$ is divisible by three, so $b\equiv1\pmod3$. Thus $\gcd(a,b)=1$, forcing the three-side gcd one.
5. The side $c$ strictly grows with $t$, so the triangles are distinct and infinite.

**Self-assessment rubric**

- Give an infinite integer parameter family satisfying the required quadratic identity.
- Verify positivity and both strict triangle bounds.
- Use cosine law to identify the angle rather than a sketch.
- Prove the gcd claim and distinguish infinitely many triangles.

</details>
