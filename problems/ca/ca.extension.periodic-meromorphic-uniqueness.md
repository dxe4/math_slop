# Identify a periodic function from poles and two end limits

*Hard · [Complex analysis problems](index.md)*

Let f be 1-periodic and meromorphic on the plane, with only simple poles at the integers, each of residue one. Suppose uniformly for 0&lt;=Re z&lt;=1 that $f(z)\to-i\pi$ as Im z tends to positive infinity and f(z) tends to i\*pi as Im z tends to negative infinity. Prove f(z)=pi\*cot(pi\*z).

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Cancel the prescribed principal parts.

</details>

<details>
<summary>Hint 2</summary>

Periodicity reduces a global bound to a vertical strip, whose two tails are controlled.

</details>

<details>
<summary>Model proof</summary>

Pole cancellation and strip asymptotics reduce the problem to Liouville's theorem.

1. The function h=f-pi\*cot(pi\*z) has removable singularities at all integers because both functions have the same simple principal parts. Thus h extends to an entire 1-periodic function.
2. The exponential formula for cotangent shows pi\*cot(pi\*z) has the stated uniform limits in the upper and lower strip tails. Hence h tends uniformly to zero there. Its modulus is also bounded on the compact middle part of the closed strip, using its removable extensions.
3. Periodicity makes h bounded on the whole plane. Liouville gives a constant, and either tail limit makes that constant zero. Therefore f=pi\*cot(pi\*z).

**Self-assessment rubric**

- Remove every pole and retain periodicity.
- Control both tails and the compact middle strip.
- Use global boundedness and the limiting value to determine the constant.

</details>
