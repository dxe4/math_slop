# One reverse-mode sweep

*Difficulty 1 of 5 · [Numerical mathematics and certified optimization](index.md) · exercise 16 of 16*

For `f(a,b)=exp(ab)+a^2`, draw the elementary computational graph and use reverse mode to find both partial derivatives at `(a,b)=(1,0)`. State one limitation of the result.

<details>
<summary>Hint 1</summary>

Use u=ab, v=exp(u), w=a^2, f=v+w

</details>

<details>
<summary>Hint 2</summary>

Seed the output adjoint with one

</details>

<details>
<summary>Worked solution</summary>

Forward values are `u=ab=0`, `v=exp(u)=1`, `w=a^2=1`, and `f=2`. Seed `bar f=1`. The addition gives `bar v=1` and `bar w=1`. From `v=exp(u)`, `bar u=bar v exp(u)=1`. From `w=a^2`, its contribution to `bar a` is `2a bar w=2`. From `u=ab`, contributions are `bar a += b bar u=0` and `bar b += a bar u=1`. Hence partial derivatives are `df/da=2` and `df/db=1`. Reverse mode efficiently computes both from one scalar output. It differentiates the executed program; it does not prove that the program encodes the intended objective or that branch behavior is differentiable.

**Answer.** At (1,0), the reverse sweep gives gradient (2,1); it certifies the implemented graph's derivative, not the model's correctness.

</details>

*Tags: automatic-differentiation, reverse-mode, computational-graph*
