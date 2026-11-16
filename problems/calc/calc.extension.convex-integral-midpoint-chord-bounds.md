# Prove sharp midpoint and chord bounds for a convex integral

*Hard · [Calculus](index.md)*

Let a&lt;b and let f be a continuous convex real function on \[a,b\]. Prove $f((a+b)/2)\le\frac1{b-a}\int_a^bf\le(f(a)+f(b))/2$. Derive both bounds directly from convexity and give examples showing sharpness.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

For the upper bound, compare each graph point with the endpoint chord.

</details>

<details>
<summary>Hint 2</summary>

For the lower bound, pair x with its reflected input a+b−x and integrate the midpoint convexity inequality.

</details>

<details>
<summary>Model proof</summary>

Two different convexity comparisons control the average from opposite sides.

1. For x=a+t(b−a), 0≤t≤1, convexity gives f(x)≤(1−t)f(a)+t f(b). Integrating the chord over x yields ∫f≤(b−a)(f(a)+f(b))/2.
2. The midpoint of x and a+b−x is m=(a+b)/2. Convexity gives 2f(m)≤f(x)+f(a+b−x).
3. Integrating over \[a,b\], the reflected integral equals ∫f, so 2(b−a)f(m)≤2∫f. Divide by 2(b−a)&gt;0 to obtain the lower bound.
4. Every affine function achieves equality in both inequalities, so neither bound can be universally strengthened. The proof needs convexity and continuity, without differentiability or a second-derivative sign assumption.

**Self-assessment rubric**

- Integrates the correct convex chord inequality and obtains the normalized upper bound.
- Uses midpoint convexity for reflected pairs and the integral reflection identity.
- Divides only by positive length and gives affine equality examples without adding unnecessary derivative assumptions.

</details>
