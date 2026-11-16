
# Heat on the Circle and Equidistribution

Fourier modes turn both diffusion and repeated rotation into scalar operations. Heat multiplies nonconstant modes by decreasing exponentials; averaging an irrational rotation cancels them by finite geometric sums. Both can recover a spatial mean, but through different mechanisms. This chapter proves the two constructions and extends the averaging argument to a quadratic sequence and a higher-dimensional torus.

The preparation is periodic coefficients, [Fejér density](fejer-means-approximate-identities.md), [mean-square completeness](mean-square-parseval.md), Gaussian transforms and [Poisson summation](poisson-summation-sampling.md). All periodic integrals are normalized by one over 2π when used as inner products or means. Rotation parameters α are measured in cycles, so the angular increment is 2πα. Diffusivity κ is positive.

The main heat existence theorem starts with a continuous function on the circle. The equidistribution theorem concerns every continuous test function and then interval visit frequencies. Neither proof replaces its infinite limit by a finite plotted sample, and neither asserts randomness of a deterministic orbit.

## 1. The positive periodic heat kernel

For t>0 define

\[
 Q_t(x)=\sum_{n\in\mathbb Z}e^{-\kappa n^2t}e^{inx}
 =2\pi\sum_{m\in\mathbb Z}H_{\kappa t}(x+2\pi m),
\]

where Hs is the line Gaussian of mass one. The equality is Poisson summation with spacing 2π. On compact positive time strips, either representation and its fixed derivatives converge uniformly absolutely. The wrapped-Gaussian expression proves positivity, while the Fourier constant term proves (2π)^−1∫Qt=1.

The kernel mass concentrates near zero on the circle as t decreases to zero. For a fixed angular distance δ>0, integrate the wrapped expression outside |x|<δ in a period. The shifted integration intervals lie outside the line interval (−δ,δ), so the omitted circular mass is at most the Gaussian line tail there, which tends to zero by scaling. This proves the approximate-identity property with its actual geometry.

Define u(t,x)=(2π)^−1∫Qt(x−y)f(y)dy. Positivity and unit mass preserve the real range of f and contract its supremum norm. Uniform continuity of continuous f, together with the near/far mass split, gives u(t)→f uniformly. Differentiating the positive-time kernel proves u_t=κu_xx and smoothness for t>0. Thus this is a classical continuous-initial-trace construction, not merely a formal solution series.

Its Fourier coefficients are cn e^−κn²t. Multiplying those factors proves Qt*Qs=Q(t+s) in normalized circular convolution, by coefficient uniqueness. The mean c0 is preserved. Uniqueness in the bounded classical circle problem follows from the same periodic maximum argument as on a cylinder, or from an energy identity under sufficient regularity. The construction and uniqueness arguments have distinct roles.

## 2. Decay toward the mean

For initial mean-square data the coefficient formula defines a contraction and tends to the datum in norm by finite-block/tail splitting. Parseval gives

\[
 \|u(t)-c_0\|_2\le e^{-\kappa t}\|f-c_0\|_2,
\]

since every nonzero integer frequency has n²≥1. The circle has a positive spectral gap after removing constants; the real line did not have a smallest positive frequency and had no such universal gap.

For continuous f, |cn|≤||f||∞. Therefore at positive time the Fourier series is absolutely convergent and |u−c0|≤2||f||∞Σn≥1e^−κn²t. On t≥t0>0, factor out e^−κt and bound the remaining Gaussian sum at t0, obtaining a uniform exponential estimate. If the first harmonic is present, e^κt(u−c0) tends uniformly to c1e^ix+c−1e^−ix; every higher mode decays faster. This identifies the leading long-time shape, not just an upper bound.

**Worked example 15.1: a single periodic mode.** For f=2+3cos(4x), the solution is 2+3e^−16κtcos(4x). Its mean stays two and its nonconstant energy decays by e^−32κt. The coefficient decay, amplitude decay and squared-energy decay have different exponents because energy is quadratic.

**Worked example 15.2: smoothing a square wave.** For sign(sin x), the positive-time solution has series (4/π)Σodd n≥1e^−κn²t sin(nx)/n, converging with all derivatives at each positive time. Its values remain in [−1,1] by the positive kernel. Initial recovery is in mean square and at continuity points; uniform recovery over the jump is impossible. Its value at a jump is zero by odd symmetry. Positive-time heat damping changes the reconstruction weights, rather than eliminating Gibbs from an unchanged Dirichlet partial sum.

## 3. Irrational rotation averages

For a real α consider xn=x0+2πnα modulo 2π. If α is irrational, then for every nonzero integer k,

\[
 \frac1N\sum_{n=0}^{N-1}e^{ikx_n}
 =\frac{e^{ikx_0}}N
 \frac{1-e^{2\pi ikN\alpha}}{1-e^{2\pi ik\alpha}}
 \longrightarrow0.
\]

The denominator is nonzero because kα is not an integer. Its magnitude bounds the average by 2/(N|1−e^2πikα|), uniformly in x0. Constants average to themselves. Hence every finite trigonometric polynomial averages to its spatial mean.

For a continuous periodic f, choose a polynomial p uniformly close by Fejér approximation. Its orbit-average error differs from p's by at most ||f−p||∞, and the spatial means differ by at most the same amount. First let N grow for that fixed polynomial, then make its approximation error small. This proves

\[
 \frac1N\sum_{n=0}^{N-1}f(x_n)
 \longrightarrow\frac1{2\pi}\int_{-\pi}^{\pi}f(x)dx,
\]

uniformly in the starting phase x0 for each fixed f. The order of approximation and averaging is explicit. There is no exchange of an arbitrary infinite Fourier series with the orbit average.

This property is equidistribution in the continuous-test sense. More generally a sequence on the circle has it if and only if every nonzero exponential mode has average tending to zero. Necessity is immediate by testing the modes; sufficiency is exactly the same finite-polynomial density proof. This is the Weyl criterion in the precise form needed below.

## 4. Visit frequencies and rational obstructions

For an arc I, approximate its indicator from below and above by continuous functions with short linear ramps near its endpoints. Their normalized integrals can be made arbitrarily close to the arc's length divided by 2π. Applying the continuous average theorem and squeezing proves that the fraction of orbit points in I tends to that length fraction. Under irrational rotation each exact endpoint can be visited at most once, because two visits would make a nonzero integer multiple of α an integer. Thus endpoint assignments change a finite-N frequency by at most a term tending to zero.

Every nonempty open arc has positive limiting frequency and is visited infinitely often, so the irrational orbit is dense. Density alone for an arbitrary sequence does not imply equidistribution: interleave a dense irrational orbit with the point zero at every other step. The resulting sequence is dense, while its cosine average tends to one half rather than the spatial mean zero.

If α=a/q is rational in lowest terms, the orbit has q points and the average tends to their finite uniform average. The test e^{iqx} is constant along that orbit, showing it is not circle-equidistributed. This exact obstruction is the same vanishing denominator seen in the geometric-sum proof.

**Worked example 15.3: one mean and two frequencies.** Let f=2+cos x+sin(3x) and α=sqrt2. Its orbit average tends to two. The finite error is bounded by 2/(N|1−e^2πiα|)+2/(N|1−e^6πiα|). This bound is uniform in x0 and follows from the two explicit mode averages. It is a rate for this fixed finite polynomial and this α, not one rate for every continuous test function or every irrational step.

## 5. Small denominators and deterministic behavior

The geometric rate contains a denominator for each retained frequency. There is no uniform bound of that form over all irrational α. For the test e^{iqx}, choose α=(p+δ)/q with irrational δ of very small magnitude. Its nth phase differs from one by at most 2πn|δ|. Hence its N-term average differs from one by at most π(N−1)|δ|. It can remain close to one for a long finite range despite eventual equidistribution.

The proof for a continuous f also carries an approximation error. A valid finite-N bound first chooses a trigonometric p with ||f−p||∞≤ε and then adds 2ε to the sum of its explicit mode bounds. Controlling those denominators and approximation rates quantitatively is additional information, often called a small-denominator problem. The qualitative density theorem alone does not supply it.

Rotation is not mixing merely because its long averages recover means. For f=e^{ix}, the normalized correlation of f(x+2πnα) with f(x) is e^2πinα, of magnitude one for every n. It does not tend to zero. Heat instead suppresses each nonconstant mode in magnitude. Time averaging a unitary rotation and damping a mode are different operations, though their means can have the same limit.

## 6. A complete differencing argument for quadratic phases

The sequence 2παn² is also equidistributed when α is irrational. We prove the needed cancellation. Let |zn|≤1 for 1≤n≤N and extend it by zero outside that range. For a fixed positive integer H, write HΣzn as the sum, over N+H−1 positions, of H-term shifted blocks. Cauchy–Schwarz and expansion of those block squares give

\[
 \left|\frac1N\sum_{n=1}^Nz_n\right|^2
 \le\frac{N+H-1}{HN}\left[
 1+2\sum_{r=1}^{H-1}(1-r/H)
 \left|\frac1N\sum_{n=1}^{N-r}z_{n+r}\overline{z_n}\right|
 \right].
\]

For the expansion, diagonal products contribute at most HN. A displacement r occurs H−r times, giving its correlation sum and its conjugate. Dividing by H²N² yields the displayed factors. Thus every coefficient and boundary-length adjustment comes from a finite calculation.

Take zn=e^{2πikαn²}, k≠0. Its rth product is e^{2πikαr²}e^{2πi(2krα)n}. For each fixed r≥1 this is a geometric progression with ratio not one, because α is irrational. Its normalized sum tends to zero. Holding H fixed and letting N grow gives limsup|average|²≤1/H. Let H tend to infinity to obtain zero. Weyl's criterion now proves quadratic equidistribution.

The argument demonstrates how differencing lowers polynomial degree: a quadratic phase's correlation is linear. No independence or random-phase assumption was used. The sequence need not be generated by repeated application of one circle rotation, so the earlier linear-orbit geometric sum alone would not prove this result.

## 7. Higher-dimensional torus rotations

On the d-dimensional torus the modes are e^{ik·x}, k∈Z^d. Products of one-dimensional Fejér kernels approximate continuous functions uniformly: positivity and unit mass hold in every coordinate, and outside a small coordinate box the total mass is bounded by the sum of the one-coordinate tails. Uniform continuity then gives the same near/far proof. The resulting approximants are finite trigonometric polynomials in d variables.

For xn=x0+2πnα, with vector α, the kth mode has ratio e^{2πik·α}. Hence the orbit is equidistributed exactly when k·α is not an integer for every nonzero integer vector k. Sufficiency follows from mode cancellation and product density. Necessity follows because a forbidden integer relation leaves that nonconstant mode constant along the orbit. Equivalently one and the components of α have no nontrivial rational linear relation.

The criterion concerns all integer combinations, not merely irrationality of each coordinate. For example α=(sqrt2,2sqrt2) has both entries irrational but the relation 2α1−α2=0. Its orbit lies in a proper subtorus and fails full two-dimensional equidistribution. The character test detects the obstruction immediately. Rational independence is the exact hypothesis; coordinatewise inspection is insufficient.

## 8. Two routes to an average

The heat limit removes nonconstant frequencies by an exponential factor; the rotation limit removes them after an arithmetic average; the quadratic proof removes them by a correlation estimate. In each case finite-mode control plus a stable approximation step extends the conclusion to continuous data. The particular multiplier or cancellation estimate determines the convergence mechanism and the hypotheses.

These applications complete the periodic route that began with finite orthogonality. Completeness and positive approximation supplied the bridge from finite algebra to general functions. The whole-line transform, sampling and distribution chapters used the same discipline with additional tail, support and duality issues. A Fourier formula becomes a theorem when its convergence, normalization and input class remain part of the argument.

## 9. A quantitative rate with explicit arithmetic input

A rate becomes possible when a lower bound for the small denominators is supplied. Write ||t||Z for distance to the nearest integer. If ||kα||Z≥c|k|^−τ for every nonzero integer k, then |1−e^2πikα|≥4||kα||Z gives a mode-average bound |k|^τ/(2cN). For an absolutely convergent Fourier expansion with Σk≠0|k|^τ|ck| finite, the orbit-average error is therefore at most that sum divided by 2cN. Absolute convergence justifies exchanging the coefficient sum and finite orbit average; the weighted bound then controls the entire resulting tail.

For α=sqrt2 one can prove such an arithmetic bound directly. Let m be a nearest integer to ksqrt2 with k≥1. Then m≤2k, and the nonzero integer 2k²−m² has magnitude at least one. Hence

\[
 \|k\sqrt2\|_{\mathbb Z}
 =\frac{|2k^2-m^2|}{k\sqrt2+m}
 \ge\frac1{4k}.
\]

The same estimate holds for negative k by absolute value. Thus c=1/4 and τ=1 are valid. If f is C3 periodic with matching derivatives, three integrations by parts give |ck|≤C/|k|³, where C is the normalized absolute integral of its third derivative. The weighted sum is finite, and the resulting error is bounded by (4C/N)Σk≥1k^−2, or 2π²C/(3N).

This is a proved rate for a particular arithmetic step and a stated smoothness class. It is stronger than the earlier qualitative continuous theorem because both inputs have been strengthened. Irrationality alone and continuity alone do not supply those quantitative constants. The example also shows how elementary number-theoretic information enters an analytic Fourier estimate without assuming a random orbit.

## 10. Mean-square rotation averages and operator norms

Rotation acts unitarily on the periodic mean-square completion: its kth coefficient is multiplied by e^2πikα. Define AN as the average of its first N powers. Its kth multiplier is the geometric average already computed and has magnitude at most one. For irrational α that multiplier tends to zero for every k≠0 and equals one for k=0. A finite-coefficient block converges, while the remaining square tail is controlled by the contraction bound. Parseval therefore proves ANf→c0 in mean square for every completed element f.

This is a norm theorem. A general completion element need not have assigned point values on an orbit, so it does not assert pointwise orbit sampling for every such element. Continuous functions have the stronger uniform-in-starting-phase statement proved earlier by uniform density.

If α=a/q is rational in lowest terms, the surviving frequencies are exactly the multiples of q. The norm limit is the orthogonal projection given by the finite orbit average q^−1Σr=0^{q−1}Rα^r. Thus rational rotation has a larger invariant subspace than constants. This identifies the obstruction in the same coefficient language used by heat and finite-group convolution.

For irrational rotation the strong convergence is not operator-norm convergence on the full mean-square unit ball. For any large integer Q, pigeonhole the Q+1 fractional parts 0,α,…,Qα into Q equal intervals. Two lie in one interval, giving a nonzero k with ||kα||Z≤1/Q. At a fixed N, choosing Q arbitrarily large makes the first N powers of that kth mode have phases arbitrarily close to one. Its average multiplier has magnitude arbitrarily close to one. Therefore ||AN−P||=1 for every finite N, where P projects onto constants.

Circle heat has the different exact operator norm ||T(t)−P||=e^−κt, attained on a first harmonic. Both dynamics converge on individual inputs after the relevant averaging or evolution, but only heat supplies that uniform gap on the full mean-square unit ball. This concrete comparison separates strong convergence from uniform operator control through explicit multipliers.

## Exercises

### FOURIER-APP-E001 — Kernel mass
Why is the normalized mean of Qt equal to one?
<details><summary>Hint 1</summary>Integrate each exponential in its absolutely convergent series.</details>
<details><summary>Hint 2</summary>Only n=0 survives.</details>
<details><summary>Full solution</summary>Every nonconstant exponential has zero normalized integral, while the constant coefficient is e^0=1. Thus the kernel has unit averaging mass. The wrapped Gaussian separately proves it is positive.</details>

### FOURIER-APP-E002 — Heat mode
Evolve f=1−2sin(3x) under circle heat flow.
<details><summary>Hint 1</summary>The sine mode has eigenvalue nine.</details>
<details><summary>Hint 2</summary>The mean mode is unchanged.</details>
<details><summary>Full solution</summary>u=1−2e^−9κt sin(3x). Its nonconstant amplitude decays at rate9κ and its corresponding energy at rate18κ.</details>

### FOURIER-APP-E003 — Spectral gap
Why must the mean be removed in the e^−κt norm estimate?
<details><summary>Hint 1</summary>The zero mode has no damping.</details>
<details><summary>Hint 2</summary>Test the constant function one.</details>
<details><summary>Full solution</summary>A constant remains constant under heat flow, so its norm cannot satisfy that strict decay. After subtracting the mean, every retained frequency has n²≥1 and the bound follows from Parseval.</details>

### FOURIER-APP-E004 — Irrational denominator
Why is 1−e^{2πikα} nonzero for irrational α and k≠0?
<details><summary>Hint 1</summary>Equality to zero would make kα an integer.</details>
<details><summary>Hint 2</summary>Divide by the nonzero integer k.</details>
<details><summary>Full solution</summary>It would express α as an integer divided by k, contradicting irrationality. This is exactly the hypothesis needed for the finite geometric-sum cancellation.</details>

### FOURIER-APP-E005 — Rational orbit
For α=2/5, what is the average of e^{i5xn} along the orbit?
<details><summary>Hint 1</summary>The added phase per step is 2π times an integer.</details>
<details><summary>Hint 2</summary>Every term is identical.</details>
<details><summary>Full solution</summary>Every term is e^{i5x0}, so every finite average equals that value. Its nonzero constant value disagrees with the spatial integral of the mode, proving failure of full-circle equidistribution.</details>

### FOURIER-APP-E006 — Arc frequency
What limiting fraction of an irrational orbit lies in an arc of angular length π/3?
<details><summary>Hint 1</summary>Divide by the full circumference2π.</details>
<details><summary>Hint 2</summary>Endpoint choices affect at most finitely many terms.</details>
<details><summary>Full solution</summary>The fraction is one sixth. Continuous upper/lower ramps prove the indicator limit, and an irrational orbit visits an exact endpoint at most once.</details>

### FOURIER-APP-E007 — Density versus distribution
Give a dense sequence whose cosine average is not zero.
<details><summary>Hint 1</summary>Interleave an irrational orbit with repeated zeros.</details>
<details><summary>Hint 2</summary>Half the cosine terms are then one.</details>
<details><summary>Full solution</summary>Let z2n=0 and z2n+1=2πnα for irrational α. The odd subsequence is dense and has cosine average zero, while the even subsequence has cosine value one. The full average tends to one half, so the sequence is dense but not equidistributed.</details>

### FOURIER-APP-E008 — Not mixing
Compute the normalized correlation of e^{ix} and its n-step irrational rotation.
<details><summary>Hint 1</summary>The product with the conjugate cancels x.</details>
<details><summary>Hint 2</summary>Its magnitude remains one.</details>
<details><summary>Full solution</summary>The correlation is e^{2πinα}. It does not tend to zero in magnitude, despite the orbit's continuous-test averages converging to spatial means. Equidistribution and mixing are different claims.</details>

### FOURIER-APP-E009 — Quadratic difference
Expand (n+r)²−n² and identify why the new phase is easier.
<details><summary>Hint 1</summary>Cancel the n² terms.</details>
<details><summary>Hint 2</summary>The remaining n dependence is linear.</details>
<details><summary>Full solution</summary>The difference is2rn+r². For fixed r, the exponential correlation is a constant times a linear geometric sequence. Irrationality makes its ratio nontrivial, supplying the cancellation needed by the differencing bound.</details>

### FOURIER-APP-E010 — Order of limits
In the quadratic proof, why is H held fixed while N grows?
<details><summary>Hint 1</summary>There are finitely many fixed-r correlation limits.</details>
<details><summary>Hint 2</summary>No uniform-in-r denominator bound was proved.</details>
<details><summary>Full solution</summary>For a fixed H every required correlation tends to zero, yielding limsup≤1/H. Only afterward is H increased. Letting H grow arbitrarily with N would need additional quantitative control of all the changing geometric denominators.</details>

### FOURIER-APP-E011 — Irrational coordinates are insufficient
Why does α=(sqrt2,2sqrt2) fail the two-torus criterion?
<details><summary>Hint 1</summary>Test the integer vector (2,−1).</details>
<details><summary>Hint 2</summary>Its dot product with α is zero.</details>
<details><summary>Full solution</summary>The nonzero mode indexed by(2,−1) is constant along the orbit because2α1−α2=0. Its spatial mean is zero, so the orbit is not equidistributed on the full torus.</details>

### FOURIER-APP-E012 — Finite approximation bridge
If ||f−p||∞≤ε, bound the difference between their average-error expressions.
<details><summary>Hint 1</summary>Bound both the orbit averages and spatial means of f−p.</details>
<details><summary>Hint 2</summary>Each contributes at most ε.</details>
<details><summary>Full solution</summary>The total difference is at most2ε. This permits choosing one fixed polynomial, taking its finite-mode average limit and then sending ε to zero. It avoids an unjustified exchange with an arbitrary infinite Fourier expansion.</details>

## Sources and scope

This original application chapter follows the classical Fourier heat and equidistribution syllabus. Positive kernel construction, mode/density limits and quadratic differencing are proved directly. No universal arithmetic convergence rate, randomness assertion, general ergodic theorem or prime-counting result is inferred from these applications.

## Summary

Periodic heat is a positive Gaussian periodization with a spectral gap away from constants. Irrational rotation averages cancel every nonconstant character and recover means by Fejér density. Interval visits, rational obstructions, small denominators and a quadratic differencing proof make the scope explicit. Product characters extend the criterion to torus rotations, while correlation shows why equidistribution is a different property from mixing or heat damping.
