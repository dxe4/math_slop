# Prove one-dimensional Witt cancellation constructively

*Hard · [Linear algebra problems](index.md)*

Over a field F of characteristic not two, prove cancellation for nondegenerate symmetric forms: if $V\perp\langle a\rangle$ and $W\perp\langle a\rangle$ are isometric with $a\ne0$, then V and W are isometric. Construct an isometry carrying any two vectors of square a to one another using at most two reflections.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only. No automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The reflection in anisotropic h is $x\mapsto x-2B(x,h)h/B(h,h)$.

</details>

<details>
<summary>Hint 2</summary>

For equal-square vectors u,v, one of $u-v$ or $u+v$ has nonzero square; handle the latter by one further sign flip.

</details>

<details>
<summary>Model proof</summary>

Align the distinguished anisotropic lines before restricting to their orthogonal complements.

1. The displayed reflection preserves B by expanding the two bilinear factors, and sends h to minus h while fixing its perpendicular space.
2. Let $B(u,u)=B(v,v)=a$. If $B(u-v,u-v)\ne0$, then $2B(u,u-v)=B(u-v,u-v)$, so reflection in $u-v$ sends u to v.
3. Otherwise $B(u+v,u+v)=4a\ne0$. Reflection in $u+v$ sends u to minus v, and reflection in v then sends minus v to v. These operations are defined because the characteristic is not two and a is nonzero.
4. Use the assumed isometry to identify the two orthogonal sums in a common space. The two distinguished line vectors have square a; compose with the constructed aligning isometry. The resulting map identifies their orthogonal complements, which are V and W.

**Self-assessment rubric**

- Verify the anisotropic reflection formula preserves the form.
- Show the difference reflection aligns equal-square vectors when defined.
- Handle the remaining case with the sum vector and a second reflection.
- Align the common line and restrict the resulting isometry to the two complements.

</details>
