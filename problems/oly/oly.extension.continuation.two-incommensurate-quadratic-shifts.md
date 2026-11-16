# Use dense periods to determine a real function

*Hard · [Original olympiad-style problems](index.md)*

Classify continuous $f:\mathbb R\to\mathbb R$ satisfying $f(x+1)-f(x)=2x+1$ and $f(x+\sqrt2)-f(x)=2\sqrt2x+2$ for every real x.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Subtract the square function; the remainder has periods one and square root of two.

</details>

<details>
<summary>Hint 2</summary>

Pigeonhole the fractional parts of successive multiples of the irrational period to obtain nonzero periods tending to zero.

</details>

<details>
<summary>Model proof</summary>

Remove the polynomial part and prove two incommensurate periods force constancy.

1. Let $g(x)=f(x)-x^2$. Both equations become period identities. Every integer combination of one and square root of two is therefore a period, including its negative.
2. For each positive $N$, place the fractional parts of $0,\sqrt2,\ldots,N\sqrt2$ in $N$ equal intervals. Two lie in one interval, giving a nonzero integer combination $h_N$ with $0<|h_N|<1/N$. Irrationality ensures nonzero.
3. For fixed real $x,y$, choose an integer $k_N$ nearest to $(y-x)/h_N$. Then $x+k_Nh_N$ tends to $y$, while periodicity makes $g(x+k_Nh_N)=g(x)$.
4. Continuity yields $g(y)=g(x)$, so it is constant. Hence $f(x)=x^2+C$, and expanding both shifts verifies every real constant.

**Self-assessment rubric**

- Subtract the correct quadratic and obtain both period directions.
- Use pigeonhole and irrationality to obtain nonzero periods tending to zero.
- Approximate any displacement by integer multiples of those periods.
- Use continuity to prove constancy and verify every final function.

</details>
