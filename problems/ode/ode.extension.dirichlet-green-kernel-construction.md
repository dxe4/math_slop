# Construct and justify a Dirichlet Green representation

*Hard · [Differential equations problems](index.md)*

For continuous f on \[0,1\], prove the unique solution of $-y''=f$, y(0)=y(1)=0, is y(t)=integral from 0 to 1 of G(t,s)f(s) ds, where G(t,s)=min(t,s)\*(1-max(t,s)). Justify the sign of the derivative jump.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

For fixed s, the kernel is affine on each side of t=s.

</details>

<details>
<summary>Hint 2</summary>

Its t-derivative jumps from 1-s to -s.

</details>

<details>
<summary>Model proof</summary>

The negative second derivative requires a negative unit slope jump.

1. For fixed s, G=t\*(1-s) when t&lt;s and G=s\*(1-t) when t&gt;s. It vanishes at t=0,1 and is continuous at t=s. The right t-slope minus the left slope is -s-(1-s)=-1.
2. Split the integral at s=t: y(t)=(1-t)\*integral\_0^t s\*f(s) ds+t\*integral\_t^1 (1-s)\*f(s) ds. Differentiating by the fundamental theorem cancels the moving-boundary terms in the first derivative and gives ydoubleprime=-f.
3. The endpoint values are zero. If two solutions existed, their difference would have second derivative zero and vanish at both endpoints; that affine difference is zero. This proves existence and uniqueness with the stated sign.

**Self-assessment rubric**

- Verify endpoint values, continuity and the negative unit slope jump.
- Split the integral and justify that its second derivative is -f.
- Check the boundary data and eliminate the homogeneous difference.

</details>
