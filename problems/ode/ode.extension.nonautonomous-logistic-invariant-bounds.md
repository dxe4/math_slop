# Prove global bounds without a constant carrying capacity

*Hard · [Differential equations problems](index.md)*

Let r,K be continuous for t&gt;=0 with 0&lt;r\_0&lt;=r(t)&lt;=r\_1 and 0&lt;K\_0&lt;=K(t)&lt;=K\_1. For $y'=r(t)y(1-y/K(t))$, y(0)=y\_0&gt;0, prove global forward existence and min(y\_0,K\_0)&lt;=y(t)&lt;=max(y\_0,K\_1). You may use scalar comparison and the continuation theorem for continuous vector fields locally Lipschitz in y.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The constant lower and upper bounds are respectively a subsolution and a supersolution.

</details>

<details>
<summary>Hint 2</summary>

A compact positive invariant interval prevents a finite-time continuation obstruction.

</details>

<details>
<summary>Model proof</summary>

Inward-pointing comparison bounds make a changing logistic environment globally controlled.

1. Set m=min(y\_0,K\_0)&gt;0 and M=max(y\_0,K\_1). At y=m the vector field is nonnegative because m&lt;=K(t); at y=M it is nonpositive because M&gt;=K(t). Thus the constants m and M are respectively subsolution and supersolution.
2. The vector field is continuous and locally Lipschitz in y uniformly on compact time intervals. Scalar comparison gives m&lt;=y(t)&lt;=M throughout the maximal forward interval.
3. If that interval had finite endpoint T, the graph would stay in the compact rectangle \[0,T\] times \[m,M\], where the field is bounded and its state derivative is bounded. The continuation theorem would extend the solution beyond T, a contradiction. Hence the solution exists globally.

**Self-assessment rubric**

- Check the correct vector-field signs at both constant bounds.
- Use scalar comparison with the actual continuity and local Lipschitz properties.
- Exclude finite maximal time using a compact invariant rectangle.

</details>
