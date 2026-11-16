# Prove two nonzero fourth powers cannot sum to a square

*Hard · [Original olympiad-style problems](index.md)*

Prove there are no positive integers $x,y,z$ with $x^4+y^4=z^2$. Give a strictly decreasing integer descent, not only congruence exclusions.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Choose a solution with smallest $z$ and apply primitive Pythagorean parametrization to the square legs.

</details>

<details>
<summary>Hint 2</summary>

The resulting coprime factors force one parameter to be a square and the other twice a square; a second square-factor split produces a smaller solution.

</details>

<details>
<summary>Model proof</summary>

Descend through two primitive right-triangle factorizations.

1. Choose a solution with least positive $z$. It is primitive in $x,y$, since dividing their gcd also divides $z$ by its square and gives a smaller solution. After swapping, take $x$ odd and $y$ even.
2. Primitive Pythagorean parametrization gives $x^2=u^2-v^2$, $y^2=2uv$, $z=u^2+v^2$, with $u>v$ coprime and of opposite parity. The case $u$ even, $v$ odd would make $x^2$ three modulo four, so $u$ is odd and $v$ even.
3. From the coprime product $u(v/2)=(y/2)^2$, write $u=a^2$ and $v=2b^2$ with positive integers. Also $(u-v)(u+v)=x^2$ has coprime odd factors, so write $u+v=r^2$, $u-v=s^2$ with coprime odd $r>s>0$.
4. Then $(r+s)(r-s)=2v=4b^2$. The positive halves $(r+s)/2,(r-s)/2$ are coprime, since a common divisor would divide both $r,s$. Their product is $b^2$, so they are $t^2,w^2$ with positive $t>w$.
5. Thus $r=t^2+w^2$, $s=t^2-w^2$, and $u=(r^2+s^2)/2=t^4+w^4=a^2$. This is a new positive solution $(t,w,a)$ of the original equation.
6. But $a^2=u<z$, so $a<z$, contradicting the minimal choice. Every factor and descent variable was positive, so the argument cannot terminate in a hidden zero-leg solution.

**Self-assessment rubric**

- Choose a valid minimal primitive solution and its parity.
- Justify both coprime factor splits in the first parametrization.
- Obtain the two new positive square halves with proved coprimality.
- Construct a genuine new solution with a smaller final square root.

</details>
