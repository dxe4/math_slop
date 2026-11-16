# Construct a bounded Riemann example with an exceptional inner integral

*Hard · [Calculus](index.md)*

On \[−1,1\]×\[0,1\], set f(x,y)=1 when x=0 and y is irrational, and f=0 otherwise. Prove $\iint f\,dA=0$ as a double Riemann integral, but the inner Riemann integral ∫₀¹f(0,y)dy does not exist. Explain the limitation on an iterated formula requiring every inner integral to exist.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

All nonzero values lie on one vertical line, coverable by a strip of arbitrarily small area.

</details>

<details>
<summary>Hint 2</summary>

On that line, every y subinterval contains both rational and irrational values.

</details>

<details>
<summary>Model proof</summary>

Double integrability can tolerate an exceptional line even when its individual restriction is not Riemann integrable.

1. Every positive-area subrectangle contains points with x≠0, so every lower Darboux sum is zero. Choose an x partition enclosing zero in a strip of width 2ε. All other cells have supremum zero, so the upper double sum is at most 2ε.
2. Let ε→0. Upper and lower sums squeeze the double Riemann integral to zero.
3. At x=0 the y function is the indicator of the irrationals. Density of rationals and irrationals makes every subinterval infimum zero and supremum one, so every lower y sum is zero and every upper y sum is one. The inner Riemann integral does not exist.
4. Thus an ordinary iterated expression requiring all inner Riemann integrals is undefined at that exceptional x. One may formulate a theorem allowing exceptional slices or use Lebesgue integration, but that is an additional convention, not an assertion that this missing Riemann integral exists.

**Self-assessment rubric**

- Proves all lower sums vanish and constructs arbitrarily small upper sums.
- Uses both dense classes to prove the inner Riemann integral fails.
- Distinguishes double integrability from a formula demanding every inner Riemann integral, without claiming all forms of Fubini fail.

</details>
