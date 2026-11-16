# Find a sharp integral maximum and a continuous-class supremum

*Hard · [Calculus](index.md)*

Fix 0≤m≤1. Among measurable f on \[0,1\] with 0≤f≤1 almost everywhere and ∫f=m, maximize $\int_0^1xf(x)\,dx$ and characterize equality modulo null sets. For 0&lt;m&lt;1, prove the same supremum in the continuous subclass is not attained, constructing continuous admissible approximations with exact mass.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Compare f with the threshold indicator g=1\_\[1−m,1\] and subtract the common mass times the threshold.

</details>

<details>
<summary>Hint 2</summary>

For the continuous subclass replace the jump by a centered linear ramp, whose lost rectangular mass equals its gained mass.

</details>

<details>
<summary>Model proof</summary>

A pointwise sign comparison determines the maximizing threshold, while a discontinuity makes its exact equality unattainable in a smaller class.

1. Set c=1−m and g=1\_\[c,1\], ignoring the single endpoint value. Both f and g have mass m, so ∫x(g−f)=∫(x−c)(g−f). Below c both factors are nonpositive; above c both are nonnegative. Thus the integrand is nonnegative almost everywhere and ∫xf≤∫\_c¹x dx=m−m²/2.
2. For 0&lt;m&lt;1, equality makes this nonnegative product zero almost everywhere. Since x−c is nonzero except at one point, f=0 almost everywhere below c and f=1 almost everywhere above c. Thus equality is precisely the threshold function modulo null sets. At m=0 or1, the box and mass conditions themselves force f=0 or1 almost everywhere, respectively.
3. A continuous equality function for interior m would be identically zero on \[0,c) and identically one on (c,1\], because continuous functions agreeing almost everywhere on an open interval agree everywhere there. This contradicts continuity at c. So no continuous maximizer exists when 0&lt;m&lt;1.
4. For 0&lt;ε&lt;min(m,1−m), define f\_ε=0 on x≤c−ε, f\_ε=(x−c+ε)/(2ε) on \[c−ε,c+ε\], and f\_ε=1 on x≥c+ε. This is continuous, lies in \[0,1\], and has mass (m−ε)+ε=m.
5. The moment deficit is supported on that ramp and equals 2∫₀^ε z(ε−z)/(2ε)dz=ε²/6, so its moments approach m−m²/2. This proves the continuous supremum is the same but is not attained, while the measurable maximum is attained.

**Self-assessment rubric**

- Uses equal masses to subtract the threshold and proves the pointwise sign inequality.
- Evaluates the sharp bound and characterizes all measurable equality cases, including m=0,1.
- Proves continuity cannot realize the interior threshold equality.
- Constructs continuous approximants and checks their box constraint and exact mass.
- Bounds or computes the vanishing moment deficit and separates supremum from maximum.

</details>
