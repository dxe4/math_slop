# Analyze a noncompact escape missed by critical-point minimization

*Hard · [Calculus](index.md)*

For $f(x,y)=x^2+(xy-1)^2$ on R², find the infimum, prove it is not attained, and find and classify every critical point. Explain why searching only critical values cannot locate the infimum.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

A curve with xy=1 makes one square vanish while x can approach zero.

</details>

<details>
<summary>Hint 2</summary>

In the critical equations first use f\_y=2x(xy−1)=0 to separate the cases.

</details>

<details>
<summary>Model proof</summary>

A nonnegative function can approach its greatest lower bound along an unbounded curved path.

1. The function is nonnegative. Along (x,y)=(1/n,n) it equals 1/n²→0, so its infimum is 0. Attainment would require x=0 and xy−1=0 simultaneously, impossible.
2. The partials are f\_x=2x+2y(xy−1) and f\_y=2x(xy−1). If xy=1, f\_x=2x≠0. If x=0, f\_x=−2y=0 forces y=0. Thus the origin is the only critical point.
3. At the origin the Hessian is \[\[2,−2\],\[−2,0\]\], with determinant −4. It is indefinite, so the critical point is a saddle, with value f(0,0)=1.
4. The minimizing sequence escapes to infinity in y. There is no minimizing point and no critical point of value zero. Compactness or coercivity cannot be silently assumed from a sum-of-squares formula.

**Self-assessment rubric**

- Constructs a sequence tending to value zero and proves nonnegativity.
- Shows simultaneous vanishing of the two squares is impossible.
- Solves both critical cases without losing or introducing points.
- Computes the indefinite Hessian and explains the noncompact minimizing escape.

</details>
