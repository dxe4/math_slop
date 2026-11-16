# Complex exponentials and oscillation

This optional extension connects power series, parametric curves, integration, and differential equations. Allow two study sessions after the Taylor-series chapter. You need radians, the product rule, and absolute convergence; previous experience with complex numbers is unnecessary.

By the end, you should justify Euler's formula, translate a real sinusoid into a rotating vector, combine oscillations, and explain how exponential decay changes their motion. Complex notation packages two real coordinates together. Every calculation below can also be checked using real differentiation.

## A number with two coordinates

A complex number is a pair of real numbers written z = a + ib, with i² = −1. Its real part is a and imaginary part is b: the imaginary part is a real number, not ib. Addition is coordinatewise. Multiplication follows distributivity:

(a + ib)(c + id) = (ac − bd) + i(ad + bc).

The conjugate is z̄ = a − ib and the modulus is |z| = √(a² + b²). Because zz̄ = |z|², division by a nonzero z uses 1/z = z̄/|z|². For instance, 1/(1 + 2i) = (1 − 2i)/5.

Plot a + ib at (a,b). Multiplication by i sends (a,b) to (−b,a), a counterclockwise quarter-turn. More generally, multiplication by cos θ + i sin θ rotates through θ. Multiplication by a positive real number scales distances. This geometry will explain oscillation without making any coordinate “less real” than another. Review the arithmetic in [OpenStax's complex-number primer](https://openstax.org/books/algebra-and-trigonometry-2e/pages/2-4-complex-numbers).

## Why an exponential traces a circle

Define the complex exponential by its series:

exp(z) = ∑ from n = 0 to ∞ of zⁿ/n!.

For fixed z, the ratio of successive absolute terms is |z|/(n + 1), tending to zero. Thus the series converges absolutely. Absolute convergence permits separating its even and odd terms. Substituting z = it gives

exp(it) = [1 − t²/2! + t⁴/4! − ⋯] + i[t − t³/3! + t⁵/5! − ⋯]

= cos t + i sin t.

The two bracketed series are the real sine and cosine series. Their identification with those functions follows from Taylor's theorem: derivatives have magnitude at most one, so the remainder bound |t|ⁿ⁺¹/(n + 1)! tends to zero. We have therefore justified **Euler's formula**, rather than guessed it from a diagram. See the earlier chapter and [OpenStax on Taylor series and remainder bounds](https://openstax.org/books/calculus-volume-2/pages/6-3-taylor-and-maclaurin-series).

The exponential addition rule follows from the absolutely convergent Cauchy product and the binomial theorem. Consequently

exp(a + ib) = eᵃ(cos b + i sin b).

Its modulus is eᵃ. Its angle is b modulo 2π. In particular, eⁱπ = −1; an angle is not uniquely determined by a point.

## Laboratory: rotation and its shadow

Here the horizontal coordinate is the real part and the vertical coordinate is the imaginary part. The teal vector rotates; the rose point is its projection onto the real axis. Equal coordinate scales preserve the circle.

```mathviz
scene "A rotating vector and its real projection";
domain -3.5 3.5;
range -3.5 3.5;
coordinates equal;
param A = 2 from 0.5 to 3;
param phase = 0 from -3.14 to 3.14;
param t = 0 from 0 to 1;
parametric circle(x) = (A*cos(x),A*sin(x)) from 0 to 2*pi color blue;
vector z = (A*cos(2*pi*t+phase),A*sin(2*pi*t+phase)) color teal;
point projection = (A*cos(2*pi*t+phase),0) color rose;
segment drop from (A*cos(2*pi*t+phase),A*sin(2*pi*t+phase)) to (A*cos(2*pi*t+phase),0) color amber;
animate t from 0 to 1 duration 8;
```

**Predict →** At which quarter-turns does the projection stop instantaneously? When does it move fastest?

**Explore →** Scrub t through one revolution. Change A and phase separately. Record which changes affect maximum displacement and which move the starting point.

**Explain →** For physical time s, q(s) = A cos(ωs + φ) has velocity −Aω sin(ωs + φ). Velocity vanishes at extreme displacements and has greatest magnitude at zero displacement. Constant angular speed does not mean constant projected speed.

**Transfer →** Sketch q versus time without running the animation. Then differentiate twice to establish q″ = −ω²q. The plotted circle alone does not prove this differential equation.

## Phasors combine oscillations

A phasor C is a fixed complex amplitude; the time-dependent motion is Re(Ceⁱωᵗ). If C = a + ib, multiplying out gives a cos(ωt) − b sin(ωt). Thus A cos(ωt) + B sin(ωt) corresponds to C = A − iB. Keep this sign convention explicit.

**Worked example 1: one sinusoid from two.** Let q(t) = 3 cos(2t) + 4 sin(2t). Its phasor is 3 − 4i, with modulus 5 and angle −α, where α = arctan(4/3). Therefore q(t) = 5 cos(2t − α). Expansion verifies the result because cos α = 3/5 and sin α = 4/5. The period is π, the amplitude is 5, and the first positive maximum occurs at t = α/2. Adding the coefficients to obtain amplitude 7 would ignore their different phases.

Only oscillations with the same angular frequency combine into one fixed phasor at that frequency. Different frequencies generally produce beats or more complicated signals.

```mathviz
scene "Interference changes the resultant amplitude";
domain 0 12.6;
range -4.5 4.5;
param A = 1 from 0 to 2;
param B = 1 from 0 to 2;
param phase = 1 from 0 to 6.28;
fn first(x) = A*cos(x);
fn second(x) = B*cos(x+phase);
fn total(x) = first(x)+second(x);
plot first color blue;
plot second color amber;
plot total color teal;
```

**Predict →** With A = B, predict the sum for phase 0 and π.

**Explore →** Move phase between these values; use the editor to set its default to 3.141592653589793 for near-exact opposition. Then make A and B unequal.

**Explain →** The resultant phasor is A + Beⁱφ. Its squared modulus is A² + B² + 2AB cos φ. Opposite phases leave amplitude |A − B|, so complete cancellation requires equal amplitudes.

**Transfer →** Find all phases giving amplitude √2 when A = B = 1. Explain why a zero observed at one time does not establish cancellation at every time.

### Nearby frequencies create beats, not one fixed phasor

The same-frequency condition matters. Consider \(q(t)=\cos((\omega+\delta)t)+\cos((\omega-\delta)t)\), with \(\omega>\delta>0\). The cosine addition identity, or the sum of the corresponding complex exponentials, gives

\[
q(t)=2\cos(\delta t)\cos(\omega t).
\]

The fast factor is a carrier oscillation. The magnitude \(2|\cos(\delta t)|\) is its slowly varying envelope. At \(\delta t=\pi/2+k\pi\), the two component phasors cancel and the envelope reaches zero; afterward the carrier reverses phase. The sum also has ordinary zeros when the carrier factor vanishes, which are not envelope nodes. Consecutive envelope peaks are \(\pi/\delta\) time units apart. Since the original frequencies differ by \(2\delta\), this is also \(2\pi\) divided by their angular-frequency difference. It is not a new constant-frequency sinusoid unless \(\delta=0\).

```mathviz
scene "Two nearby frequencies and their envelope";
domain 0 40;
range -2.5 2.5;
param omega = 3 from 1 to 5;
param half_gap = 0.25 from 0.05 to 0.5;
fn first(x) = cos((omega+half_gap)*x);
fn second(x) = cos((omega-half_gap)*x);
fn sum(x) = first(x)+second(x);
fn envelope(x) = 2*abs(cos(half_gap*x));
fn lower(x) = -envelope(x);
plot sum color teal;
plot envelope color amber;
plot lower color amber;
```

**Predict.** Halve δ while keeping ω fixed: what happens to the spacing between cancellations? **Explore.** The `half_gap` control is δ, half the difference between the component frequencies. Change it and locate two successive envelope zeros. Increasing ω packs more carrier oscillations between them without changing the envelope. **Explain.** Use the product identity to justify the node positions; screen samples may miss an exact zero. **Transfer.** Give a formula for the envelope peak spacing when the original angular frequencies are 3 and 3.4 radians per second. State units and explain why adding their amplitudes to get two does not describe every time.

```exercise
{"id":"calc-complex-beats","type":"written","prompt":"Two signals are cos(3t) and cos(3.4t), with t in seconds. Find their sum as a product, the first positive envelope node, and the interval between successive envelope peaks. A learner calls their sum one sinusoid of angular frequency 3.2. Explain the defect.","hints":["Use cos A+cos B=2 cos((A−B)/2) cos((A+B)/2).","An envelope node requires cos(0.2t)=0; envelope peaks require |cos(0.2t)|=1."],"rubric":["Derives 2 cos(0.2t) cos(3.2t)","Finds first positive envelope node at 5π/2 seconds","Finds envelope-peak spacing 5π seconds","Explains that the amplitude varies and a fixed phasor is unavailable across unequal frequencies"],"solution":"The product identity gives q(t)=2cos(0.2t)cos(3.2t). The first envelope node occurs at 0.2t=π/2, so t=5π/2 seconds. Successive peaks of |2cos(0.2t)| occur when 0.2t is an integer multiple of π, separated by π/0.2=5π seconds. The 3.2 factor is a carrier, but its amplitude 2cos(0.2t) varies, including envelope zeros and sign reversals. A single constant-amplitude sinusoid of frequency 3.2 cannot equal the entire signal."}
```

## Calculus with a real time variable

For z(t) = u(t) + iv(t), define z′ = u′ + iv′ and integrate componentwise. No theory of complex-variable differentiation is required. Euler's formula and the ordinary product rule give

d/dt exp((a + ib)t) = (a + ib)exp((a + ib)t).

**Worked example 2: an oscillating integral.** Compute ∫e⁻ᵗ cos(2t) dt. Integrating the exponential gives e⁽⁻¹⁺²ⁱ⁾ᵗ/(−1 + 2i). Since 1/(−1 + 2i) = (−1 − 2i)/5, take the real part:

∫e⁻ᵗ cos(2t) dt = e⁻ᵗ[−cos(2t) + 2 sin(2t)]/5 + C.

Differentiate to check: the bracket's derivative is 2 sin(2t) + 4 cos(2t); subtracting the original bracket leaves 5 cos(2t). Also ∫ from 0 to ∞ equals 1/5, because the bounded trigonometric factor times e⁻ᵗ tends to zero.

## Damped motion and its assumptions

For γ ≥ 0 and ω > 0, the complex motion e⁽⁻γ⁺ⁱω⁾ᵗ spirals inward when γ > 0. Its real projection satisfies

q″ + 2γq′ + (γ² + ω²)q = 0.

For a mass–spring model m q″ + c q′ + kq = 0, γ = c/(2m) and ω = √(k/m − γ²). Oscillations of this form require c² < 4mk. At or above the threshold the solutions change form; the decaying cosine formula cannot simply be used with a negative square-root argument. Further reading: [OpenStax on second-order linear equations](https://openstax.org/books/calculus-volume-3/pages/7-1-second-order-linear-equations).

**Worked example 3: initial conditions matter.** Solve q″ + 2q′ + 5q = 0 with q(0) = 1 and q′(0) = 1. Here γ = 1, ω = 2, so q = e⁻ᵗ(A cos 2t + B sin 2t). The first condition gives A = 1. Differentiation at zero gives −A + 2B = 1, hence B = 1. The answer is e⁻ᵗ(cos 2t + sin 2t), with envelope ±√2e⁻ᵗ. Decay does not require displacement to decrease at every instant: this solution initially increases.

```mathviz
scene "Damping frequency and an exponential envelope";
domain 0 12;
range -2.3 2.3;
param amplitude = 1.5 from 0.2 to 2;
param damping = 0.2 from 0 to 1;
param frequency = 2 from 0.5 to 4;
param phase = 0 from -3.14 to 3.14;
fn upper(x) = amplitude*exp(-damping*x);
fn lower(x) = -upper(x);
fn motion(x) = upper(x)*cos(frequency*x+phase);
plot upper color amber;
plot lower color amber;
plot motion color teal;
```

**Predict →** Which control changes the envelope's half-life? Which changes zero spacing?

**Explore →** Compare damping 0, 0.2, and 1 at fixed frequency; then vary frequency. Count crossings in the same time interval.

**Explain →** For positive damping the envelope halves after ln(2)/damping, while consecutive zeros are π/frequency apart. These controls independently specify γ and ω; holding physical stiffness fixed would couple them.

**Transfer →** Edit the motion to the initial-value solution above. The envelope is a bound, not the exact curve joining its extrema: extrema solve q′ = 0.

## Exercises

1. Compute (2 + i)(1 − 3i) and (2 + i)/(1 − 3i).
2. Derive (cos θ + i sin θ)³ = cos 3θ + i sin 3θ, then a formula for cos 3θ.
3. For z(t) = 2eⁱ³ᵗ, find velocity, speed, and acceleration. Relate acceleration to position.
4. Two equal-frequency oscillations have amplitudes 2 and 3. Find their smallest and largest possible resultant amplitudes and the phases producing them.
5. Find ∫e²ᵗ sin t dt and verify by differentiation.
6. Solve q″ + 4q′ + 13q = 0, q(0) = 0, q′(0) = 6.
7. Approximate eⁱᵗ by 1 + it − t²/2 − it³/6. Prove the error is at most e/24 for |t| ≤ 1.
8. A learner says damping halves the oscillation frequency every half-life. Refute this using an equation, and explain what actually halves.

<details><summary>Hints</summary>

1. Distribute; rationalize using the denominator's conjugate.
2. Use the exponential addition rule, then compare real parts.
3. Differentiate componentwise and take the modulus.
4. Use the squared-amplitude formula and −1 ≤ cos φ ≤ 1.
5. Take the imaginary part after integrating e⁽²⁺ⁱ⁾ᵗ.
6. Determine γ and ω before imposing the two conditions.
7. Bound the absolute tail by ∑ from n = 4 of 1/n!; use (4 + j)! ≥ 24j!.
8. Separate the exponential envelope from the cosine's argument.

</details>

<details><summary>Full worked solutions</summary>

1. The product is 2 − 6i + i − 3i² = 5 − 5i. For division, multiply numerator and denominator by 1 + 3i: the numerator is −1 + 7i and denominator is 10. The quotient is −1/10 + 7i/10.
2. Euler's formula gives (eⁱθ)³ = eⁱ³θ. Expanding the left side gives real part cos³θ − 3 cos θ sin²θ. Therefore cos 3θ = 4 cos³θ − 3 cos θ after using sin²θ = 1 − cos²θ.
3. z′ = 6ieⁱ³ᵗ has modulus 6. The acceleration is z″ = −18eⁱ³ᵗ = −9z, pointing toward the origin with magnitude 18. Multiplication by i places velocity perpendicular to position.
4. The squared amplitude is 13 + 12 cos φ. Its minimum is 1 at φ = π modulo 2π, and maximum is 25 at φ = 0 modulo 2π. Taking square roots gives amplitudes 1 and 5; complete cancellation is impossible.
5. Since 1/(2 + i) = (2 − i)/5, the imaginary part yields e²ᵗ(2 sin t − cos t)/5 + C. Differentiating gives e²ᵗ[4 sin t − 2 cos t + 2 cos t + sin t]/5 = e²ᵗ sin t.
6. γ = 2 and ω² = 13 − 4 = 9. Thus q = e⁻²ᵗ(A cos 3t + B sin 3t). At zero, A = 0 and q′(0) = −2A + 3B = 6, so B = 2. Hence q(t) = 2e⁻²ᵗ sin 3t.
7. Absolute convergence and the triangle inequality bound the remainder by ∑ₙ₌₄∞ |t|ⁿ/n! ≤ ∑ⱼ₌₀∞ 1/(4 + j)!. Since (4 + j)! ≥ 24j!, this is at most (1/24)∑ⱼ₌₀∞ 1/j! = e/24. The bound controls complex distance, hence each coordinate error too.
8. For q = Ae⁻γᵗ cos(ωt + φ), the angular frequency stays ω and zero spacing stays π/ω. With γ > 0, e⁻γ(t + ln(2)/γ) = e⁻γᵗ/2, so the envelope halves. Actual displacement at those two times also depends on their phases and need not have ratio 1/2.

</details>
