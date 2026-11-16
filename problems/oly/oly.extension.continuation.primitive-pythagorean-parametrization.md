# Derive every primitive integer right triangle

*Hard · [Original olympiad-style problems](index.md)*

Prove that every primitive positive integer solution of $a^2+b^2=c^2$, after possibly swapping the legs, has $a=m^2-n^2$, $b=2mn$, $c=m^2+n^2$, with $m>n\ge1$ coprime and of opposite parity. Prove the converse.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Exactly one leg is even. Factor the odd-leg relation as $((c+a)/2)((c-a)/2)=(b/2)^2$.

</details>

<details>
<summary>Hint 2</summary>

The two factors are coprime, so each is a square.

</details>

<details>
<summary>Model proof</summary>

Combine parity, coprime factor splitting and a primitive converse.

1. Primitive legs cannot both be even, and both odd would give a hypotenuse square congruent to two modulo four. Thus take $a$ odd and $b$ even; then $c$ is odd.
2. The positive integers $u=(c+a)/2$, $v=(c-a)/2$ satisfy $uv=(b/2)^2$. A common divisor of $u,v$ divides both $a,c$, which are coprime as any common prime would also divide $b$. Thus $\gcd(u,v)=1$.
3. Unique factorization forces $u=m^2$, $v=n^2$ with $m>n\ge1$ and coprime parameters. Adding and subtracting gives the displayed formulas, and positive $b$ gives $b=2mn$.
4. The odd leg requires opposite parameter parity. Conversely, the formulas satisfy Pythagoras by expansion. Any odd prime dividing both legs would divide both parameters, while the parity conditions exclude a common factor two.
5. Thus the converse triples are primitive and positive, and the derivation covers every primitive solution.

**Self-assessment rubric**

- Prove exactly one leg is even.
- Factor into positive coprime integer halves.
- Derive the parameters and their necessary conditions.
- Verify the equation and exclude every common prime in the converse.

</details>
