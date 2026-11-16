# Derive the Wallis recurrence and its boundary cases

*Hard · [Calculus](index.md)*

Let $I_n=\int_0^{\pi/2}\sin^n x\,dx$ for integers n≥0. Prove I\_n=((n−1)/n)I\_(n−2) for n≥2, state I₀,I₁, and use the recurrence to calculate I₆/π. Justify the integration-by-parts endpoint terms.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Separate one sine factor and integrate it using −cos x.

</details>

<details>
<summary>Hint 2</summary>

Replace cos²x with 1−sin²x and solve for I\_n after it appears on both sides.

</details>

<details>
<summary>Model proof</summary>

Integration by parts lowers the power by two and introduces a term of the original degree.

1. For n≥2 write I\_n=∫sin^{n−1}x sin x dx. Integration by parts gives boundary −sin^{n−1}x cos x at 0 and π/2; both values are zero because n−1&gt;0 at zero and cosine vanishes at π/2.
2. The remaining term is (n−1)∫sin^{n−2}x cos²x dx=(n−1)(I\_{n−2}−I\_n). Rearranging gives nI\_n=(n−1)I\_{n−2}.
3. Direct evaluation gives I₀=π/2 and I₁=1. The recurrence is not asserted for n=1, where the zero-endpoint power argument changes.
4. Thus I₆=(5/6)(3/4)(1/2)(π/2)=5π/32, so I₆/π=5/32.

**Self-assessment rubric**

- Chooses the correct parts factors and proves both endpoint terms vanish precisely for n≥2.
- Uses cos²=1−sin² and solves the resulting recurrence equation.
- Supplies the two base integrals and obtains the exact normalized I₆ value.

</details>
