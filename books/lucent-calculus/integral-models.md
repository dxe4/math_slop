# 18. Integral models: mass, work, and probability

**Prerequisites:** definite integrals, the fundamental theorem, substitution, and integration by parts. Allow two lecture sessions and a problem session.

**Learning goals:** construct an integral from a small contribution; track units and modeling assumptions; distinguish mass, moment, force, and work; connect probability densities, cumulative distributions, and expected values.

## Start with a contribution, not a formula

An integral adds contributions that become small with the width of a partition. Choose a coordinate, sketch one thin piece, estimate its contribution, and add. Only then pass to a limit. For a rod, a piece of length Δx has approximate mass λ(x)Δx. For a moving object, a short displacement Δx requires approximate work F(x)Δx. The same algebra describes different quantities because the factors have different meanings and units.

If the relevant densities are continuous on a bounded interval, their Riemann sums converge. Piecewise continuous densities also suffice. An idealization such as constant gravity belongs in the model; the integral does not establish it experimentally.

Throughout the worked examples, coordinates are numerical values in the stated units. Thus “λ(x)=1+x kg/m” means λ(x)=[1+x/(1 m)] kg/m when x is treated as a dimensional quantity.

## Worked example 1: a rod that becomes heavier toward one end

A thin rod occupies 0≤x≤2 metres with linear density λ(x)=1+x kilograms per metre. A slice contributes dm=λ(x)dx, so

M = ∫₀²(1+x) dx = [x+x²/2]₀² = 4 kg.

Mass alone cannot locate the balance point. A slice at position x contributes x dm to the first moment about the origin. Therefore

Q = ∫₀²x(1+x) dx = [x²/2+x³/3]₀² = 14/3 kg·m.

Balancing moments about an unknown coordinate c requires ∫₀²(x−c)λ(x)dx=0. Expanding gives Q−cM=0, hence the center of mass is c=Q/M=7/6 m. This lies to the right of the geometric midpoint, consistent with the density increasing toward the right.

The quotient is a weighted average of positions. For any nonnegative density with positive total mass on [a,b], multiplying a≤x≤b by λ(x) and integrating proves a≤Q/M≤b. This provides a useful check on a calculation.

### Visual laboratory: density becomes accumulated mass

**Predict:** increasing k makes the right end heavier. Will doubling k double the total mass? Explain before touching a control.

```mathviz
scene "Build a rod from thin pieces";
domain 0 2;
range 0 5.5;
param k = 1 from 0 to 2;
param L = 2 from 0.1 to 2;
fn density(x) = 1+k*x;
plot density color blue;
riemann density from 0 to L count 12;
```

**Explore:** move k while keeping L=2; then vary L. Each rectangle has height in kg/m, width in m, and area in kg. Edit `count 12` to `count 3` and compare.

**Explain:** M(L)=L+kL²/2. At L=2, doubling k changes 2+2k into 2+4k; the constant-density contribution stays 2. Midpoint sums happen to be exact for this affine density, even with three rectangles.

**Transfer:** replace the function by `1+k*x^2`. Predict whether midpoint sums underestimate or overestimate mass when k>0, then justify your answer using convexity. Their visual improvement alone is not an error proof.

## Worked example 2: pumping water out of a tank

A vertical cylindrical tank has radius 1 m and bottom y=0. Water initially reaches y=2 m; an outlet sits at y=3 m. Assume incompressible water of density 1000 kg/m³, constant g=9.8 m/s², negligible friction, and negligible change in kinetic energy.

A horizontal slice has volume π dy m³ and mass 1000π dy kg. Its weight is 9800π dy N, and it must rise 3−y metres. Consequently

W = 9800π∫₀²(3−y)dy = 9800π[3y−y²/2]₀² = 39200π J.

Multiplying all the water's weight by 3 m would overcount: only the bottommost water travels that far. Here the average lift is 2 m because every height initially contains the same volume per metre. A tank whose cross-sectional area A(y) varies instead requires W=ρg∫A(y)(H−y)dy.

### Visual laboratory: the cost of lifting each layer

**Predict:** compare raising the outlet by 1 m with raising the initial water level by 1 m. Which adds a fixed amount of work when the other controls stay fixed?

```mathviz
scene "Pumping work contributed by water layers";
domain 0 2;
range 0 160;
param H = 3 from 2 to 5;
param d = 2 from 0.1 to 2;
fn contribution(x) = 9.8*pi*(H-x);
plot contribution color amber;
riemann contribution from 0 to d count 20;
```

**Explore:** x is height above the bottom. The curve measures kJ per metre of layer thickness; the shaded area measures kJ. Hold d fixed and move H; then hold H fixed and move d.

**Explain:** W(H,d)=9.8π(Hd−d²/2) kJ. Increasing H by one metre adds 9.8πd kJ. Adding more water has a varying marginal cost ∂W/∂d=9.8π(H−d): higher layers need less lifting. No multivariable technique is required; differentiate with one parameter held constant.

**Transfer:** edit the function to `9.8*pi*x^2*(H-x)` for a tank whose radius at height x is x metres. Explain why both the area factor and lifting factor are necessary.

## Hydrostatic force uses depth, not lifting distance

In a stationary fluid of constant density, gauge pressure at depth z below the surface is p(z)=ρgz. Gauge pressure subtracts the atmospheric pressure also acting on the other side of an exposed gate. For a vertical plate whose horizontal width at depth z is w(z), a strip has area w(z)dz, so its force contribution is dF=ρgz w(z)dz.

A rectangular gate 2 m wide extending from the surface to depth 3 m therefore experiences

F = 9800∫₀³2z dz = 88200 N.

This is force, not work: pressure in N/m² times area in m² gives N. Work would require information about displacement. For a triangular gate, the width changes with depth; replacing w(z) by a constant would describe a different gate. If pressure differs on both sides, integrate the pressure difference.

## Worked example 3: a distribution of waiting times

Suppose a model assigns waiting time T a density p(t)=t/8 on 0≤t≤4 minutes and zero elsewhere. Density has units min⁻¹; it is not the probability of one particular time. It must be nonnegative and normalized:

∫₀⁴(t/8)dt = [t²/16]₀⁴ = 1.

The probability of waiting between one and three minutes is ∫₁³(t/8)dt=(9−1)/16=1/2. A single time has probability zero because an integral over a zero-width interval is zero. Therefore including or excluding interval endpoints makes no difference for this density.

The cumulative distribution F(t)=P(T≤t) is 0 for t<0, t²/16 for 0≤t≤4, and 1 for t>4. The fundamental theorem gives F′(t)=p(t) where the density is continuous. A cumulative distribution records accumulated probability, so it cannot decrease.

Expected time is a probability-weighted average:

E[T] = ∫₀⁴t p(t)dt = [t³/24]₀⁴ = 8/3 min.

The median instead splits probability into equal halves: F(m)=1/2 yields m=2√2 min. Mean and median answer different questions. For a transformed measurement g(T), its expected value is ∫g(t)p(t)dt when the expectation exists. In particular, nonlinear transformations generally do not satisfy E[g(T)]=g(E[T]).

```exercise
{"id":"calc-density-versus-point","type":"choice","prompt":"For the continuous waiting-time model p(t)=t/8 on [0,4], what does p(2)=1/4 mean?","options":[{"label":"The probability of waiting exactly 2 minutes is 1/4.","correct":false,"feedback":"A density has units per minute. A single time has zero probability in this continuous model."},{"label":"The density at 2 minutes is 1/4 per minute; probabilities come from interval integrals.","correct":true,"feedback":"Correct. For a short interval near 2, density times interval width approximates its probability."},{"label":"The mean waiting time must be 1/4 minute.","correct":false,"feedback":"The mean weights and integrates all possible times; it is 8/3 minutes for this model."}],"hints":["Check units: p(t) has units of inverse minutes, while probability is dimensionless."]}
```

### Visual laboratory: redistribute probability without changing its total

**Predict:** will increasing k increase or decrease the probability of a wait below b=2? What should happen to the mean?

```mathviz
scene "Normalized densities with adjustable shape";
domain 0 4;
range 0 0.6;
param k = 1 from -1 to 1;
param b = 2 from 0.1 to 4;
fn density(x) = (1-k)/4+k*x/8;
plot density color teal;
riemann density from 0 to b count 24;
```

**Explore:** compare k=−1, 0, 1. For every allowed k the density is nonnegative and its total area is one. Move b to inspect accumulated probability; the formula describes the density only on [0,4], with value zero outside.

**Explain:** F(b)=(1−k)b/4+kb²/16 inside the support. Thus F(2)=1/2−k/4. Increasing k moves probability toward longer waits, and direct integration gives E[T]=2+2k/3 minutes.

**Transfer:** add `fn cumulative(x) = (1-k)*x/4+k*x^2/16;`, plot it, and change the vertical range to `0 1.1`. Explain why its derivative, rather than its height, matches the density. These two curves have different vertical units.

## Exercises

Attempt the setup before evaluating. Include units and state any assumptions you add.

1. A learner writes “mass = ∫₀²xλ(x)dx.” Diagnose the error without calculating.

<details>
<summary>Hint</summary>

Multiply the units of all three factors.

</details>
<details>
<summary>Full solution</summary>

The units are m·(kg/m)·m=kg·m. This is the first moment about zero. Mass is ∫₀²λ(x)dx, whose units are kg; dividing first moment by positive mass gives a position.

</details>

2. A rod on [0,3] m has λ(x)=2x kg/m. Find its mass and center of mass.

<details>
<summary>Hint</summary>

Compute mass and first moment separately.

</details>
<details>
<summary>Full solution</summary>

M=∫₀³2x dx=9 kg. Q=∫₀³2x²dx=18 kg·m. Therefore c=18/9=2 m, to the right of the midpoint because density increases with x.

</details>

3. A spring requires force F(x)=60x N at extension x metres. Find the work from x=0.1 to x=0.3.

<details>
<summary>Hint</summary>

The starting extension is not zero.

</details>
<details>
<summary>Full solution</summary>

Assuming quasistatic stretching and Hooke's law throughout, W=∫₀.₁⁰.³60x dx=30(0.09−0.01)=2.4 J. The force changes, so multiplying final force by displacement would overestimate work.

</details>

4. A triangular vertical gate has its vertex at the water surface and width w(z)=z metres at depth z, for 0≤z≤2 m. Find the hydrostatic force.

<details>
<summary>Hint</summary>

A strip contributes pressure times width times thickness.

</details>
<details>
<summary>Full solution</summary>

With the water assumptions above, dF=9800z·z dz. Thus F=9800[z³/3]₀²=78400/3 N. The two factors z describe different effects: increasing pressure and increasing gate width.

</details>

5. Normalize p(t)=c(1+t) on [0,2] minutes and find its median.

<details>
<summary>Hint</summary>

First require total area one; then require cumulative area one-half.

</details>
<details>
<summary>Full solution</summary>

Normalization gives 1=c[2+2], hence c=1/4 in the numerical minute convention. Inside the support F(t)=(t+t²/2)/4. Solving F(m)=1/2 gives m²+2m−4=0, hence m=√5−1 min; the other root lies outside the support.

</details>

6. For the worked waiting-time distribution, compute E[T²] and Var(T)=E[T²]−E[T]².

<details>
<summary>Hint</summary>

Multiply the density by t², not by the square of the mean.

</details>
<details>
<summary>Full solution</summary>

E[T²]=∫₀⁴t³/8 dt=[t⁴/32]₀⁴=8 min². Therefore Var(T)=8−64/9=8/9 min². Its standard deviation is √(8/9) min. In particular, E[T²] differs from E[T]².

</details>

7. Does every normalized density have a finite mean? Investigate p(t)=1/t² on [1,∞), zero elsewhere.

<details>
<summary>Hint</summary>

Normalization and expectation require two different improper integrals.

</details>
<details>
<summary>Full solution</summary>

The density is nonnegative and ∫₁ᴿt⁻²dt=1−1/R tends to 1. However, ∫₁ᴿt·t⁻²dt=ln R diverges. This valid distribution has infinite expected value; normalization does not guarantee a finite first moment.

</details>

8. Choose a value of k in the final laboratory that gives mean 2.5 minutes. Can the same family produce mean 3 minutes?

<details>
<summary>Hint</summary>

Solve 2+2k/3 for k, then check the allowed interval.

</details>
<details>
<summary>Full solution</summary>

The first target requires k=3/4, which is allowed. The second requires k=3/2, outside [−1,1]; it would make density negative near zero. The attainable means range from 4/3 to 8/3 minutes. Algebraic solutions must satisfy model constraints.

</details>

**Exit check:** explain why ∫λ(x)dx, ∫xλ(x)dx, and ∫xp(x)dx represent different quantities despite their similar appearance.

**Further reading:** [OpenStax Calculus Volume 2, Physical Applications](https://openstax.org/books/calculus-volume-2/pages/2-5-physical-applications) develops slice-based physical models. [OpenStax Introductory Statistics, Continuous Probability Functions](https://openstax.org/books/introductory-statistics/pages/5-1-continuous-probability-functions) reviews densities and interval probabilities.
