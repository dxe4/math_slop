# Classify all distance-preserving real functions

*Hard · [Original olympiad-style problems](index.md)*

Classify every function $f:\mathbb R\to\mathbb R$ satisfying $|f(x)-f(y)|=|x-y|$ for all real $x,y$, without assuming continuity or surjectivity.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Subtract the value at zero, then use distances to zero and one.

</details>

<details>
<summary>Hint 2</summary>

Subtract the two squared-distance equations to eliminate the unknown square.

</details>

<details>
<summary>Model proof</summary>

Use two fixed anchors to force the sign globally.

1. Let $c=f(0)$, $g(x)=f(x)-c$, and $a=g(1)$. The distance condition gives $a=1$ or $-1$ and $g(x)^2=x^2$.
2. Distance to the second anchor also gives $(g(x)-a)^2=(x-1)^2$. Subtracting the first squared relation yields $-2ag(x)+1=-2x+1$.
3. Thus $g(x)=ax$ for every real input, so $f(x)=x+c$ or $f(x)=-x+c$. A sign chosen separately at each input is impossible because of the common second-anchor relation.
4. Both affine forms preserve all distances and are indeed surjective, though that property was not required as a hypothesis.

**Self-assessment rubric**

- Normalize at zero and identify both possibilities at the second anchor.
- Use both squared-distance equations to fix one sign for every input.
- Verify all affine forms and avoid inserting regularity assumptions.

</details>
