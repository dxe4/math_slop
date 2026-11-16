# 6. Accumulation and the definite integral

**Learning outcomes.** Construct tagged Riemann sums; distinguish a definition from a numerical recipe; calculate an integral directly from sums; interpret signed accumulation with units; justify a numerical estimate.

**Before you begin.** You need finite sums, limits, continuity, and the derivative bound from [Mean values and the shape of a function](mean-value.md). Check that you can expand (2i−1)² and explain why litres/minute multiplied by minutes gives litres. Plan two study sessions: definitions and experiments, then calculations and exercises.

## 1. Why multiplication becomes a sum

A pump running at 3 litres/minute for 4 minutes transfers 12 litres. If its rate varies, multiplying one observed rate by the entire duration loses information. Instead, break time into short intervals, approximate the rate by a constant on each, multiply by that interval's duration, and add.

For [a,b], a **partition** P is a finite increasing list a=x₀<x₁<⋯<x_n=b. Write Δx_i=x_i−x_(i−1), and choose a **tag** ξ_i in each closed subinterval [x_(i−1),x_i]. Its tagged Riemann sum is

S(f,P,ξ)=Σ_(i=1)^n f(ξ_i)Δx_i.

Heights may be negative. Widths need not be equal. A left sum uses ξ_i=x_(i−1), a right sum uses ξ_i=x_i, and a midpoint sum uses ξ_i=(x_(i−1)+x_i)/2. These are particular sampling rules.

**Worked example 1: uneven measurements.** Flow is sampled on [0,1], [1,3], and [3,4] minutes, with representative rates 2, 5, and 3 litres/minute. Estimated transfer is 2·1+5·2+3·1=15 litres. Averaging the three rates and multiplying by 4 gives 40/3, incorrectly weighting intervals equally. If each representative rate differs from the actual rate by at most 0.2 litres/minute throughout its interval, total error is at most 0.2·4=0.8 litres.

## 2. What the limit actually requires

The **mesh** ||P|| is max Δx_i. A bounded function f on [a,b] is **Riemann integrable** if there is a real number I satisfying this definition:

For every ε>0, there exists δ>0 such that every partition with ||P||<δ, and every allowed choice of tags, satisfies |S(f,P,ξ)−I|<ε.

We write I=∫_a^b f(x) dx. The variable x is a dummy variable: consistently replacing it by t changes nothing. The symbol dx records which variable supplies the widths.

“Every ε” demands arbitrary accuracy. “Every partition” excludes a fortunate grid. “Every choice of tags” excludes hiding awkward values between samples. Many intervals are insufficient if one stays wide: the largest width must tend to zero.

An interior pole is not a difficult value that a finer ordinary Riemann partition will automatically resolve. For example, \(1/x\) is unbounded on \([-1,1]\), so it fails the bounded-function definition above. A naive spreadsheet's even midpoint sums can cancel pairs while missing zero entirely. A later [integration strategy workshop](integration-strategy-workshop.md) splits the two improper endpoint limits and shows why neither converges. Use a finite sum as numerical evidence only after checking which integral is being approximated.

The editable scene language now rejects `riemann f from -1 to 1 count 4;` when `f(x)=1/x`: a cell crosses an undefined value, even if its midpoint is finite. This is a guard against a common numerical mistake, not a computer proof of integrability for every accepted program. A finite collection of domain probes can miss unresolved behavior, so the definition and analytic estimates remain decisive.

```exercise
{"id":"calc1-riemann-pole-versus-improper","type":"written","prompt":"A program reports zero after pairing the midpoint samples of 1/x on [−1,1]. Explain why this cannot be the ordinary Riemann integral and why a symmetric cancellation is not a valid improper integral. State the two one-sided limiting integrals that must be checked independently.","hints":["The ordinary definition above requires a bounded function on the whole closed interval.","For the improper question, split at zero and integrate only after replacing the missing endpoint by ±ε."],"rubric":["Identifies unboundedness and failure of the ordinary Riemann definition","Separates numerical cancellation from an integral value","Writes the two independent improper limits","Shows that each side diverges with the appropriate sign","Does not substitute a symmetric principal value for the improper integral"],"solution":"The function 1/x is unbounded and undefined at zero, so it is not Riemann integrable on [−1,1] under the stated definition. A symmetric midpoint grid omits zero and pairs equal opposite samples; the finite zero says nothing about the missing neighborhood. The improper pieces are lim_{ε→0+}∫_{−1}^{−ε}(1/x)dx=lim_{ε→0+}ln ε=−∞ and lim_{ε→0+}∫_{ε}^{1}(1/x)dx=lim_{ε→0+}(−ln ε)=+∞. Both must converge to finite numbers for the usual improper integral to exist. A symmetric principal value can be zero, but it is a different limiting operation.","transfer":"Changed singularity: use 1/√x on (0,1]. The ordinary closed-interval Riemann definition still fails at zero. Does the endpoint improper integral converge? Calculate it and explain why the earlier cancellation argument is irrelevant.","transferSolution":"The function is unbounded as x→0+, so it is not an ordinary bounded Riemann-integrable function on [0,1]. For ε>0, ∫_ε^1 x^(−1/2)dx=2(1−√ε), which tends to 2. This one-sided improper integral converges. It has no positive and negative sides to cancel; convergence follows from the exponent and the explicit limit."}
```

**Theorem 6.1 (Integrability).** Every continuous real-valued function on a closed bounded interval is Riemann integrable. A bounded function with only finitely many discontinuities there is also integrable. Boundedness alone is insufficient.

The continuous case has a useful mechanism. On each cell, let m_i and M_i be the infimum and supremum of f. Every tagged sum lies between the lower sum Σm_iΔx_i and upper sum ΣM_iΔx_i. Uniform continuity makes all oscillations M_i−m_i small for a sufficiently small mesh. Consequently the upper–lower gap becomes small, independently of the tags. The real-analysis course proves the existence argument fully.

For contrast, let D(x)=1 at rational x and 0 at irrational x on [0,1]. Every nontrivial cell contains both kinds of number. Rational tags give sum 1; irrational tags give sum 0, however fine the partition. D is bounded but not Riemann integrable. A pixel plot cannot resolve this example.

## 3. Calculate without antiderivatives

**Worked example 2: a square.** The function f(x)=x² is continuous on [0,1], so its integral exists. For n equal cells, Δx=1/n and right tags are i/n. Therefore

R_n=Σ(i/n)²(1/n)=(1/n³)Σi²

=n(n+1)(2n+1)/(6n³)=1/3+1/(2n)+1/(6n²).

Taking limits gives ∫_0^1 x² dx=1/3. We used Σi²=n(n+1)(2n+1)/6. Forgetting the width 1/n changes an area sum into an unrelated sum of heights.

Why did one sequence suffice? Continuity already established integrability, forcing all fine tagged sums to share a limit. Without that existence result, convergence for one sampling scheme would be insufficient.

For arbitrary partitions, |u²−v²|≤2|u−v| on [0,1], so M_i−m_i≤2Δx_i. The upper–lower gap is at most 2Σ(Δx_i)²≤2||P||ΣΔx_i=2||P||. Thus changing the tags eventually stops mattering.

## 4. Laboratory: sampling and error

**Predict.** For an increasing function, left rectangles underestimate and right rectangles overestimate. Does increasing alone determine the direction of midpoint error?

```mathviz
scene "Midpoint rectangles for a square";
domain -0.2 2.3;
range -0.3 5;
param n = 8 from 2 to 64;
fn f(x) = x^2;
plot f color blue;
riemann f from 0 to 2 count n;
```

**Explore.** Use n=2,4,8,16. Compare each sum with 8/3 and record its error. Then edit `x^2` to `sqrt(x+1)` and compare the direction of error; both functions increase on [0,2]. Use integer rectangle counts.

**Explain.** For x², the exact midpoint formula is M_n=8/3−2/(3n²), so doubling n divides the error by four. Values at m−s and m+s average to m²+s², greater than the midpoint height m². Curvature explains the underestimate. The square-root function is concave and gives midpoint overestimates. Changing n does not change the scene's midpoint sampling convention.

**Transfer.** Replace the function with 3*x+2. Explain why midpoint sums are exact for every n: deviations from the midpoint height cancel symmetrically on each cell.

## 5. Signed accumulation and properties

**Worked example 3: movement in two directions.** A particle has velocity v(t)=2−t metres/second for 0≤t≤4 seconds. Velocity is positive until t=2, then negative. The positive triangular region contributes 2 metres; the negative region contributes −2 metres. Displacement is 0 metres, but distance travelled is 4 metres. Returning to the start does not mean remaining still.

For integrable f,g and constants α,β, linearity gives

∫_a^b (αf+βg)=α∫_a^b f+β∫_a^b g.

For a<c<b, additivity gives ∫_a^b f=∫_a^c f+∫_c^b f. If f≤g, then ∫_a^b f≤∫_a^b g. In particular, m≤f≤M implies m(b−a)≤∫_a^b f≤M(b−a). These statements require integrability and common increasing bounds; they follow from finite-sum properties and limits.

Define ∫_b^a f=−∫_a^b f and ∫_a^a f=0. Geometric area between graph and axis is ∫|f|. For integrable f, |f| is integrable and |∫f|≤∫|f|. Opposite signs can cancel inside the first integral.

**Predict.** The next scene represents velocity v(x)=2x−c on [−1,1]. As c increases, will displacement increase or decrease? Can displacement vanish while distance remains positive?

```mathviz
scene "Signed movement and cancellation";
domain -1.3 1.3;
range -3.3 3.3;
param c = 0 from -1 to 1;
param n = 12 from 2 to 64;
fn v(x) = 2*x-c;
plot v color violet;
riemann v from -1 to 1 count n;
```

**Explore.** Set c to −1,0,1 and note the sums. Keep c fixed and change n. Add `fn speed(x) = abs(v(x));` and replace `riemann v` with `riemann speed` to accumulate distance instead.

**Explain.** The odd term 2x integrates to zero over a symmetric interval. The constant contributes −2c, so displacement decreases with c. The sign change occurs at x=c/2; the two triangles under |v| have total area 2+c²/2. Midpoint sums of v are exact. For |v|, a cell containing the corner can introduce error.

**Transfer.** Describe another quantity with meaningful negative accumulation. Identify the units of the horizontal variable, height, width, and rectangle contribution.

## 6. A stopping rule with a reason

Suppose f is continuous on [a,b], differentiable inside, and |f′|≤M there. For an equal-width **left** sum L_n, the mean value theorem gives

|∫_a^b f−L_n|≤M(b−a)²/(2n).

On a cell of width h, the deviation from the left height is bounded by M times distance from that endpoint. Its accumulated magnitude is at most the triangular area Mh²/2. Summing n bounds proves the formula. [Numerical integration and error control](numerical-integration.md) develops midpoint error bounds with stronger smoothness hypotheses and compares numerical integration rules.

For x² on [0,1], M=2 gives n≥100 as a sufficient condition for error at most 0.01. A guarantee can be conservative. Similar-looking successive answers do not by themselves exclude missed oscillation or narrow peaks.

**Common mistakes.** Distinguish the number of cells from the mesh; heights from signed contributions; displacement from distance; and convergence of a sampled sequence from the integrability of an arbitrary bounded function. A picture helps you discover a claim; definitions and estimates justify it.

## Exercises

1. For f(x)=1+x on [0,3], use partition 0,1,3. Calculate left, right, and midpoint sums, showing each width.
2. Calculate ∫_0^1 x dx from right sums, using Σi=n(n+1)/2. Why does this sequence identify the integral?
3. Velocity is 2 m/s for three seconds and −1 m/s for two seconds. Find displacement and distance. Does the jump prevent integration?
4. Suppose integrable f satisfies 2≤f≤5 on [1,4]. Bound its integral. If ∫_1^4 f=9, calculate ∫_4^1(2f−1).
5. For x² on [0,2], find the smallest positive integer midpoint count guaranteeing error at most 0.001 using the exact formula above.
6. Prove that changing one value of a bounded integrable function leaves its integral unchanged.
7. A learner increases the number of cells while leaving [0,1/2] unsplit in a partition of [0,1]. Explain the mesh problem. Give a continuous function whose left sums then fail to approach its integral.
8. A function continuous on [0,3] and differentiable inside satisfies |f′|≤4. How many equal left rectangles guarantee error at most 0.02? Is that count available in this renderer?
9. Design a scene for v(x)=x−c on [0,2], with c adjustable from 0 to 2. Derive displacement and distance formulas, and find where displacement vanishes.

<details>
<summary>First hints: choose a tool</summary>

1. Unequal widths must stay unequal.
2. Separate the tag from its width.
3. Use signed velocity for displacement, speed for distance.
4. Integrate constant bounds; then use linearity and orientation.
5. Solve an inequality involving n².
6. Only cells using the altered point as a tag can change.
7. The mesh is the largest width.
8. Use M(b−a)²/(2n).
9. Split the distance calculation at x=c.

</details>

<details>
<summary>Second hints: set up the calculation</summary>

1. Midpoint tags are 1/2 and 2.
2. The sum is n(n+1)/(2n²).
3. Signed contributions are 6 and −2 metres.
4. Calculate first with bounds 1 to 4.
5. Require 2/(3n²)≤1/1000.
6. At most two closed partition cells contain a given point, each of width at most ||P||.
7. Use f(x)=x and refine only [1/2,1].
8. The error bound is 18/n; the renderer supports at most 512 rectangles.
9. The speed triangles have areas c²/2 and (2−c)²/2.

</details>

<details>
<summary>Full solutions</summary>

1. Widths are 1 and 2. Left sum: 1·1+2·2=5. Right sum: 2·1+4·2=10. Midpoint sum: 1.5·1+3·2=7.5, exact because f is affine. Monotonicity explains the other bounds.
2. R_n=Σ(i/n)(1/n)=(n+1)/(2n)→1/2. Continuity guarantees integrability, so this fine-partition limit equals the integral.
3. Displacement is 2·3−1·2=4 m; distance is 2·3+1·2=8 m. A bounded function with this single jump is integrable. Its value exactly at the jump does not affect the integral.
4. The interval has length 3, so 6≤∫f≤15. Linearity gives ∫_1^4(2f−1)=18−3=15. Reversing bounds gives −15.
5. Require n²≥2000/3, hence n≥26. For n=25, error 2/1875 exceeds 0.001; for n=26, error 2/2028 is smaller. This exact error formula concerns this particular function and sampling rule.
6. Suppose g differs from f only at p, by magnitude K. For any tagged partition, |S(g,P,ξ)−S(f,P,ξ)|≤2K||P||: at most two cells can use p as tag. For K>0 choose δ as the smaller of f's δ for ε/2 and ε/(4K). The triangle inequality then gives |S(g,P,ξ)−I|<ε for every allowed tag choice. Thus g has the same integral. When K=0 the claim is immediate.
7. Mesh stays at least 1/2. For f(x)=x, the unsplit first cell contributes zero to a left sum. Refining the remaining half equally gives a limit of ∫_(1/2)^1 x dx=3/8, the trapezoid's area, whereas the whole integral is 1/2. More rectangles have left a persistent error of 1/8.
8. Require 18/n≤0.02, giving n≥900. This exceeds the renderer's 512-rectangle limit. The mathematical guarantee remains valid for a numerical implementation with enough rectangles; the displayed scene uses a different sampling rule.
9. Use `param c = 1 from 0 to 2;`, `fn v(x) = x-c;`, `plot v;`, and `riemann v from 0 to 2 count 24;`, with horizontal bounds 0,2 and vertical bounds −2,2. Displacement is 2−2c. Distance is c²/2+(2−c)²/2=(c−1)²+1. Displacement vanishes at c=1 while distance is 1. To visualize distance, define `fn speed(x) = abs(v(x));` and integrate speed instead.

</details>

**Ready to continue?** Explain why a Riemann integral is independent of sampling choices while a finite sum depends on them. Then explain how an integral can be zero without its integrand being zero.

**Further reading.** OpenStax provides parallel explanations and practice in [5.1: Approximating Areas](https://openstax.org/books/calculus-volume-1/pages/5-1-approximating-areas) and [5.2: The Definite Integral](https://openstax.org/books/calculus-volume-1/pages/5-2-the-definite-integral). This chapter's exposition, experiments, and exercises are original.
