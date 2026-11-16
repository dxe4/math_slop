# Prove the factorial series defines an irrational number

*Hard · [Number theory](index.md)*

Using $e=\sum_{k=0}^{\infty}1/k!$, prove e is irrational by clearing a proposed rational denominator and bounding the remaining positive tail strictly below one. Justify a uniform bound on that whole tail.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Choose N at least the proposed denominator and at least two.

</details>

<details>
<summary>Hint 2</summary>

After multiplying by N!, compare each successive tail denominator with a power of N+1.

</details>

<details>
<summary>Model proof</summary>

Factorial divisibility makes a finite prefix integral while the positive remainder becomes too small to be an integer.

1. Suppose e=A/B with integers B&gt;0. Choose N≥max(B,2), so B divides N! and N!e is an integer. The finite sum Σ\_{k=0}^N N!/k! is also an integer.
2. Their difference is the positive integer R=Σ\_{j=1}∞1/\[(N+1)(N+2)⋯(N+j)\].
3. Each denominator is at least (N+1)ʲ, with strict inequality for j≥2. Thus 0&lt;R&lt;Σ\_{j=1}∞(N+1)^{−j}=1/N&lt;1.
4. No positive integer is strictly below one. This contradiction proves e irrational; only the stated series and a valid full-tail estimate were used.

**Self-assessment rubric**

- Chooses N making both the rational value and finite factorial prefix integral.
- Identifies their difference as an explicitly positive tail.
- Controls every tail term by one convergent geometric series with strict inequality.
- Uses the incompatible positive-integer bound to reject every rational representation.

</details>
