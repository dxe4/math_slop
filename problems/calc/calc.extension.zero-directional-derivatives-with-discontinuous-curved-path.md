# Construct zero line derivatives without continuity

*Hard · [Calculus](index.md)*

Define f(0,0)=0 and $f(x,y)=x^3y/(x^6+y^2)$ elsewhere. Prove all two-sided directional derivatives at the origin are zero, but f is not continuous there. Identify a curved path witnessing the failure.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

For a fixed direction with nonzero y-component, cancel t² in the denominator before dividing by t.

</details>

<details>
<summary>Hint 2</summary>

Along y=x³, numerator and denominator have the same degree.

</details>

<details>
<summary>Model proof</summary>

Straight-line probes can miss behavior concentrated along a curved approach.

1. For v=(u,w) with w≠0, f(tu,tw)=t²u³w/(t⁴u⁶+w²). Dividing by t gives a quantity tending to zero.
2. If w=0, the line values are identically zero; the zero direction is also trivial. Thus every two-sided directional derivative is zero, a linear direction map.
3. Along the path y=x³ with x≠0, f(x,x³)=x⁶/(2x⁶)=1/2. These inputs tend to the origin while f does not tend to its assigned value zero.
4. Consequently f is not continuous and therefore not totally differentiable. Even linearity of the direction map, together with existence of every line derivative, is insufficient.

**Self-assessment rubric**

- Computes and bounds the directional quotient for every direction with w≠0.
- Treats horizontal and zero directions explicitly.
- Gives the exact 1/2 value along y=x³ and proves discontinuity.
- Explains why zero directional derivatives do not supply a total differential.

</details>
