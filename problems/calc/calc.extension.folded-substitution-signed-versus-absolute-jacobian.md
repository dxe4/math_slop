# Prove a folded substitution counts branches differently from orientation

*Hard · [Calculus](index.md)*

For continuous f on \[0,1\], prove $\int_{-1}^1 2x f(x^2)\,dx=0$ and $\int_{-1}^1 2|x| f(x^2)\,dx=2\int_0^1f(u)\,du$. Explain why applying u=x² once over the entire interval as though it were injective confuses these statements.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Split at the turning point x=0.

</details>

<details>
<summary>Hint 2</summary>

On the negative branch the signed derivative reverses the u bounds, whereas its absolute value does not represent oriented cancellation.

</details>

<details>
<summary>Model proof</summary>

The same coordinate map gives opposite oriented contributions but two positive multiplicity contributions.

1. On \[−1,0\], u=x² moves from 1 to 0 and du=2x dx. Thus the signed integral there is ∫₁⁰f(u)du. On \[0,1\] it is ∫₀¹f(u)du. They cancel, giving zero.
2. For the absolute derivative, 2\|x\|=−2x on the negative branch. Its integral there is −∫₁⁰f=∫₀¹f. The positive branch contributes another ∫₀¹f.
3. Adding gives the second identity, including when f changes sign: the multiplicity factor concerns the coordinate map, not positivity of f.
4. The map x↦x² is not injective on \[−1,1\] and has derivative zero at its fold. Splitting into monotone branches preserves their orientations. Replacing the signed derivative by its magnitude changes the problem and counts the two preimages for 0&lt;u&lt;1.

**Self-assessment rubric**

- Tracks opposite endpoint orders on the two monotone branches and proves cancellation.
- Computes both absolute-Jacobian contributions and obtains multiplicity two.
- Explains the fold, branch requirement and difference between orientation and multiplicity.

</details>
