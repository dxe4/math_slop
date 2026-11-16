# Exclude predator-prey cycles using an integrating density

*Hard · [Differential equations problems](index.md)*

Let a,b,c&gt;0. Prove the system $x'=x(1-x-a y)$, y'=y(b\*x-c) has no nonconstant periodic orbit contained in the strictly positive quadrant. Use the Dulac multiplier B=1/(x\*y), and justify the domain conditions in the planar integral argument.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Compute the divergence after multiplying both components by B.

</details>

<details>
<summary>Hint 2</summary>

The multiplied field is tangent to any periodic orbit, so its boundary flux vanishes.

</details>

<details>
<summary>Model proof</summary>

A sign-definite divergence of the weighted field prevents an enclosed periodic orbit.

1. On the positive quadrant B is C^1. The weighted components are (1-x-a\*y)/y and (b\*x-c)/x. Their divergence is -1/y, which is strictly negative.
2. A nonconstant periodic orbit of this smooth planar system is a simple closed curve by uniqueness. Its interior stays in the positive quadrant: this convex quadrant contains the entire curve and its enclosed region. Thus the weighted field is C^1 on a neighborhood of that region.
3. The weighted field is tangent along the orbit, so its outward flux through the boundary is zero. Green's divergence theorem makes that flux equal to the integral of -1/y over the enclosed region, which is strictly negative. The contradiction excludes such an orbit.

**Self-assessment rubric**

- Compute the multiplier divergence with the correct variables and sign.
- Justify a simple closed orbit and a region avoiding the singular coordinate axes.
- Relate tangency to zero boundary flux and contradict the signed area integral.

</details>
