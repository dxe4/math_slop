# Find a sharp derivative-energy minimum with a prescribed average

*Hard · [Calculus](index.md)*

Among C¹ real f on \[0,1\] with f(0)=0,f(1)=1 and $\int_0^1f=0$, find the minimum of ∫₀¹(f′)² and prove the unique minimizer. Construct it by subtracting a quadratic with the same constraints; no variational existence theorem is needed.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Seek q(x)=ax²+bx satisfying both endpoint data and the integral constraint.

</details>

<details>
<summary>Hint 2</summary>

For f=q+h the cross derivative term integrates to zero because h has zero endpoints and zero integral.

</details>

<details>
<summary>Model proof</summary>

A constraint-matching polynomial makes the energy split into a fixed minimum and a nonnegative residual.

1. The conditions a+b=1 and a/3+b/2=0 give q(x)=3x²−2x. It has the required endpoints and zero integral. Its derivative energy is ∫₀¹(6x−2)²dx=4.
2. For any admissible f write h=f−q. Then h(0)=h(1)=0 and ∫h=0. Expanding the energy gives ∫(f′)²=4+2∫q′h′+∫(h′)².
3. Integration by parts gives ∫q′h′=\[q′h\]₀¹−∫q″h=0−6∫h=0. Hence every energy is 4+∫(h′)²≥4.
4. Equality forces the continuous nonnegative (h′)² to vanish everywhere, so h is constant and its endpoints make it zero. Thus q is the unique minimizer and the exact minimum is 4.

**Self-assessment rubric**

- Solves the endpoint and moment equations for q and computes its energy.
- Uses both zero endpoint values and zero moment of h to make the cross term vanish.
- Writes the energy as 4 plus a nonnegative residual and exhibits attainment.
- Uses continuity of the squared derivative and endpoints to prove the equality case is only q.

</details>
