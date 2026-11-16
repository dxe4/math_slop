
# Motion Before Mechanics: Geometry, Vectors and Rates

<!-- euler-course-route -->

## Current course route

Use the [course page](#/courses/atlas-physics-models-entry) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

Before asking why an object moves, learn to say precisely what its motion is. A location, a displacement, a distance and a rate answer different questions. Mixing them can produce a convincing number for the wrong quantity.

This entry bridge teaches the coordinate, vector, scale and elementary limit preparation needed to read the opening of [Physics Models Before Equations](../articles/physics-models-before-equations.md). That survey assumes vectors and does not teach this preparation. Here we use prescribed motions: equations stipulate positions, and we deduce their consequences. We do not derive Newton's laws, fit observations or validate a physical theory.

**Start with:** addition and multiplication of signed numbers, fractions, substitution into a simple algebraic expression, and willingness to show working. Section 1 supplies a diagnostic and repairs. No previous calculus, trigonometry, matrix algebra, tensor calculus, programming or integration is required. The Pythagorean theorem is supplied as a geometric fact when it is needed.

**Work and records.** Complete the six numbered source questions in Sections 2–4 in their stated order, then the primary PHYS-ENTRY-P, changed PHYS-ENTRY-C and later public return PHYS-ENTRY-R. A paper table, typed equations and written explanation are sufficient; a graph or calculator is optional. Study time depends on the selected reading, attempts and corrections. There is no observed time estimate, imposed delay or grade. All questions, hints and models are public. If a model was already seen, label subsequent work as reconstruction or supported work.

Keep separate dated files such as `2026-11-03-phys-entry-p-first.txt`, `2026-11-03-phys-entry-p-comparison.txt` and `2026-11-03-phys-entry-p-revised.txt`, using the actual date, task ID and help exposure. Preserve the first response before adding the comparison or revision. Repeat for C and R. The shared reading note is a mutable note, not an immutable worksheet portfolio. Saving a study checkmark or comparing with a public key does not become graded Practice evidence or establish independent mastery. Public first/changed models can expose ideas needed in the return; record that exposure rather than claiming an unseen assessment.

## 1. Preparation: quantities, coordinates and algebra

Fix a flat coordinate plane with perpendicular east and north axes and the same length unit on both axes. A **point** says where something is relative to an origin. A **displacement vector** says how far each coordinate changes. From point $A=(x_1,y_1)$ to point $B=(x_2,y_2)$, the displacement is

$$B-A=(x_2-x_1,y_2-y_1).$$

For example, from $(3,-2)$ m to $(-1,1)$ m the change is $(-4,3)$ m: four metres west and three north. Translating both points by $(10,7)$ m gives $(13,5)$ m and $(9,8)$ m, with the same difference $(-4,3)$ m. Positions depend on the origin; translating the origin does not change this displacement.

The **Euclidean norm** of a planar vector $(u,v)$ is its straight-line length $\sqrt{u^2+v^2}$. The Pythagorean theorem for a right triangle gives this rule in perpendicular, equal-unit axes. Thus $\|(-4,3)\|=\sqrt{16+9}=5$ m. The negative component means direction, not negative length. A route that detours between the two points can be longer than 5 m; the vector alone does not specify that route. We use this norm only for the stated Euclidean plane, not for a spacetime interval or an arbitrary pair of differently scaled coordinates.

A **function** assigns one output to each allowed input. A position function assigns a point to each time. Its **domain** states which times are allowed. Writing $r(t)$ alone does not say whether $t$ is seconds, minutes, or a dimensionless number. An **interval average velocity** is displacement divided by a nonzero elapsed time, with units length/time. It is a vector. Average **speed** is distance travelled along the route divided by elapsed time. For straight, constant-direction segments, their lengths add to give that distance. No general curved-path length formula is needed here.

Unit arithmetic works like factor cancellation. If $a$ has units m/s², then $at^2$ has units m when $t$ has units s. A coefficient $b$ in $bt$ must have units m/s for the result to be a length. One may add two lengths, but not a length to a time. Matching units is necessary; it does not show that an equation describes the intended geometry or a real experiment.

One algebraic identity drives our rate calculation. Distribute both products:

$$(u+h)^2=(u+h)(u+h)=u^2+uh+hu+h^2=u^2+2uh+h^2.$$

Consequently, for $h\ne0$,

$$\frac{(u+h)^2-u^2}{h}=\frac{2uh+h^2}{h}=2u+h.$$

The original fraction is undefined at $h=0$. Simplifying for nonzero $h$ does not authorize division by zero. It lets us study nearby quotients.

### Diagnostic: write all five answers first

D1. A point moves from $(3,-2)$ m to $(-1,1)$ m. Give displacement and its norm, and explain why its final point is neither of those answers.

D2. Compute $(1/2)^2$, $(-1/2)^2$ and $1/(-1/2)$. Why does squaring a negative component not retain its direction?

D3. Expand $(1+h)^2-1$ and simplify its quotient by $h$ for $h\ne0$. State what happens to the **original** quotient at zero.

D4. In $r(t)=(at^2,bt)$, positions are in metres and time in seconds. Give units of $a$ and $b$. Can $(at^2+t,bt)$ represent a position without an additional coefficient carrying units?

D5. A point travels straight east 3 m in 1 s, then straight west 1 m in 1 s. Give total displacement, total distance, average velocity and average speed.

### Complete diagnostic key and repair choices

D1 gives $(-4,3)$ m and 5 m; final point is $(-1,1)$ m. The difference compares endpoints, the norm discards direction, and the final point names a location. Repair by writing “head minus tail” separately in both coordinates, then applying the norm rule.

D2 gives $1/4$, $1/4$ and $-2$. A product of two negative factors is positive, so a square records size rather than a sign. Direction remains in the unsquared component. Repair by multiplying the fractions explicitly; do not treat a reciprocal as a square.

D3 gives $2h+h^2$ and $2+h$ for nonzero $h$. The original quotient at zero is $0/0$, which is undefined. Repair using the displayed distribution, retaining the condition $h\ne0$ on every cancellation.

D4 gives m/s² and m/s. The sum $at^2+t$ mixes length and time. A term $ct$ would have length if $c$ carried units m/s; the bare $t$ does not. Repair by attaching a unit to each factor before adding.

D5 gives displacement $(2,0)$ m, distance 4 m, average velocity $(1,0)$ m/s and average speed 2 m/s. Repair by keeping the signed east–west ledger $3+(-1)$ separate from the route-length ledger $3+1$. A wrong answer indicates a repair to try, not a diagnosis of a person. Rework the relevant example and retry; the diagnostic is not an access gate.

## 2. Vectors: compose changes, then attempt source questions 1–2

Read [Two walks, one displacement](../apps/unhurried/articles/ga-la-vector-addition/index.html) through its explanation. Its fixed axes and block unit make the coordinate rule meaningful. Successive displacements $(a,b)$ and $(c,d)$ give $(a+c,b+d)$ because from any starting point $(x,y)$ the successive positions are $(x+a,y+b)$ and $(x+a+c,y+b+d)$. Subtracting $(x,y)$ leaves the same combined vector for every start.

Multiplying a displacement by a real number multiplies both components. A positive factor resizes in the same direction; a negative factor reverses direction; zero gives zero displacement. The rule $k(u+v)=ku+kv$ follows by distributing in each component. It concerns a displacement, not multiplying an absolute destination. Reordering displacements preserves their sum, but can change the route.

Attempt these exact two source questions in order before opening their worked solutions. The source uses coordinate units without naming metres; retain that convention for these questions.

**Source question 1 — vector article, Question 1 (Calculation).** Starting at $(5,-2)$, take displacement $p=(-4,3)$, then twice $q=(2,-1)$. Find the final point and net displacement.

**Source question 2 — vector article, Question 2 (Explanation).** A friend says the vectors from $(0,0)$ to $(2,1)$ and from $(7,-3)$ to $(9,-2)$ are different because their starting points differ. Decide whether the claim is correct, and say what changes if these are position vectors based at a fixed origin.

### Full source comparisons

For question 1, $2q=(4,-2)$ and $p+2q=(0,1)$. Add this net change to the starting point: $(5,-2)+(0,1)=(5,-1)$. The arrival is $(5,-1)$; the displacement is $(0,1)$. Repair an answer of $(0,1)$ as the arrival by writing the starting point on a separate line.

For question 2, head minus tail gives $(2,1)$ for each arrow, since $(9-7,-2-(-3))=(2,1)$. These are the same free displacement. Relative to one fixed origin, the position vectors of the two heads are $(2,1)$ and $(9,-2)$, so they differ. Repair by naming what the pair represents before comparing it.

The following exact calculation ledger carries the source's data, with the origin convention kept separate from the calculation.

| Vector check | Start | p | q | Multiplier of q | Net displacement | Final point |
| --- | --- | --- | --- | --- | --- | --- |
| V1 | (5,-2) | (-4,3) | (2,-1) | 2 | (0,1) | (5,-1) |

## 3. Scale and units: attempt source questions 3–4

Read [What grows when a miniature gallery grows?](../apps/unhurried/articles/mathematical-modelling-scaling/index.html). A geometric scale factor $s>0$ is dimensionless: new length divided by corresponding old length. Under a **similarity**, every relevant length changes by that same factor. A rectangle's area changes from $LW$ to $(sL)(sW)=s^2LW$; a box's volume changes from $LWH$ to $(sL)(sW)(sH)=s^3LWH$. The powers count independently scaled length factors.

For the source's open-front cube, five unit-square panels give 5 m² and the enclosing box gives 1 m³. Doubling all lengths gives 20 m² and 8 m³. The opening does not turn the paint area into a volume. At ideal coverage 10 m²/L the paint amounts are 0.5 L and 2 L. Coverage, thickness, waste and coats are separate assumptions; none follow from similarity alone.

**Source question 3 — scaling article, Question 1 (Calculate).** A similar sculpture has height 0.8 m, surface area 3 m² and volume 0.4 m³. New height is 1.2 m. Find scale factor, new area and new volume.

**Source question 4 — scaling article, Question 2 (Challenge the rule).** A wall is 4 m wide and 3 m high. Only its width grows to 6 m. Does its area get multiplied by $(6/4)^2$? Compute the actual area and identify the missing hypothesis.

### Full source comparisons

For question 3, $s=1.2/0.8=3/2$. New area is $3(3/2)^2=27/4=6.75$ m²; new volume is $(2/5)(3/2)^3=27/20=1.35$ m³. The scale is dimensionless and the outputs retain area and volume units.

For question 4, old area is $4\cdot3=12$ m² and new area is $6\cdot3=18$ m², factor $3/2$. The square-factor prediction gives 27 m². It has area units but the wrong geometry: height did not scale, so the wall is not a similar copy. Repair by multiplying the actual lengths rather than selecting an exponent from a keyword.

| Scale check | Old height | New height | Old area | Old volume | Scale | New area | New volume |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 4/5 | 6/5 | 3 | 2/5 | 3/2 | 27/4 | 27/20 |

The height, area and volume columns above use metres, square metres and cubic metres respectively. The wall comparison is a changed **hypothesis**, not a rounding dispute.

Now read Sections 1–3 of [Physics Models Before Equations](../articles/physics-models-before-equations.md) as an orientation. Its “state” is what a model treats as sufficient once inputs and laws are supplied. Our next position formula prescribes a complete motion; a position at one time alone would not specify its future. Its force and conservation discussion is preview here, not a theorem this bridge derives.

Attempt the survey's Practice Question 1 (Units) and compare with its answer: dynamic viscosity $\mu$ has units Pa·s and density $\rho$ has units kg/m³; find units of $\mu/\rho$. Since Pa = kg/(m·s²), division gives $(kg/(m\cdot s))/(kg/m^3)=m^2/s$. Those units alone do not derive a diffusion equation. Likewise, with mass in kg and a spring constant in kg/s², mass divided by that constant has units s², so it cannot itself be a period in seconds. Taking a square root supplies a possible time scale, not a dimensionless constant or a complete law.

## 4. Rates: attempt source questions 5–6

Read [Can a rate belong to one point?](../apps/unhurried/articles/calc-speed-at-an-instant/index.html), including its proof and both sides of its corner example. For dimensionless $f(x)=x^2$ the secant quotient at $u$ is $2u+h$ for $h\ne0$. Its difference from $2u$ has absolute value $|h|$. Therefore every positive tolerance $\epsilon$ is met by every step with $0<|h|<\epsilon$. This explicit guarantee, valid for positive and negative steps, proves the derivative; a finite table suggests a value but cannot prove that guarantee for all sufficiently small steps.

The tangent line is $y=u^2+2u(x-u)$. Its error relative to the parabola is exactly $(x-u)^2$, found by expanding $x^2-[u^2+2u(x-u)]$. These are dimensionless graph formulas. For physical positions, carry units or first normalize time and position as in Section 5.

**Source question 5 — rate article, Question 1 (Calculate).** At $u=2$, find the secant slope for $h=0.25$. Find the derivative and tangent-line height at $x=2.25$.

**Source question 6 — rate article, Question 2 (Explain).** Someone sees secant slopes approaching 1 from the right for $f(x)=|x|$ at zero and declares its derivative to be 1. What is missing?

### Full source comparisons

For question 5, the secant is $4+1/4=17/4=4.25$ and the derivative is 4. Tangent height is $4+4(1/4)=5$. Curve height is $(9/4)^2=81/16=5.0625$, so curve minus tangent is $1/16$. Repair by distinguishing a secant over a nonzero interval from its limiting slope and from a height.

For question 6, the quotient at zero is $|h|/h$: it equals 1 for $h>0$ and $-1$ for $h<0$. The one-sided limits disagree, so the ordinary two-sided derivative does not exist. Repair by testing a negative step before making a two-sided claim. Continuity at the corner does not supply a derivative.

| Rate check | u | h | Secant | Derivative | Evaluation x | Tangent height | Curve height | Curve minus tangent |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Q1 | 2 | 1/4 | 17/4 | 4 | 9/4 | 5 | 81/16 | 1/16 |

The source's static table and algebra suffice. Its optional derivative instrument illustrates positive steps; the two-sided argument above supplies the missing negative steps. No instrument output establishes a limit by itself.

## 5. PHYS-ENTRY-P: a planar motion from positions to velocity

### Primary question: retain a first response

In a fixed Euclidean east–north plane let

$$r(t)=(at^2,bt),\qquad a=1\text{ m}/\text{s}^2,\quad b=1\text{ m/s},\quad 0\le t\le2\text{ s}.$$

The formula is a prescribed mathematical motion with origin at the initial point, not a fitted trajectory or a force law. Show working for each request.

P1. State the input domain, coordinate units and coefficient units. Tabulate positions at $t=0,1/2,1,3/2,2$ seconds.

P2. Compute displacement and average velocity from 0 to 2 s and from 1/2 to 3/2 s. Explain why neither an endpoint nor the displacement alone is an average velocity. Does the norm of this average velocity determine average speed along the curved route?

P3. At $t=1$ s take a nonzero time step $h$, with both times in the domain. Derive both components of $[r(1\text{ s}+h)-r(1\text{ s})]/h$. Make a positive-and-negative-step table, then give an elementary tolerance proof of its vector limit. State which endpoint derivatives would require a one-sided convention.

P4. Give instantaneous velocity and its norm (instantaneous speed under this differentiable Euclidean motion) at 1 s. Check units and explain which conclusion comes from a proof rather than the table.

P5. Audit: “Since $r(1)=(1,1)$, velocity is $(1,1)$ m/s; using $h=0$ in the quotient confirms this.” Identify and repair both errors. State at least one question about real motion that the prescribed formula does not answer.

### Complete primary model

P1. The domain is the closed physical-time interval [0 s,2 s]. Coordinates are lengths in metres. The first coefficient has units m/s², so $at^2$ is a length; the second has units m/s, so $bt$ is a length. Define dimensionless $\tau=t/(1\text{ s})$ and $R(\tau)=r(t)/(1\text{ m})=(\tau^2,\tau)$, for $0\le\tau\le2$. A normalized coordinate is a numeral, not a change of physical unit.

| Primary position | Time / s | East / m | North / m |
| --- | --- | --- | --- |
| P-position-0 | 0 | 0 | 0 |
| P-position-1 | 1/2 | 1/4 | 1/2 |
| P-position-2 | 1 | 1 | 1 |
| P-position-3 | 3/2 | 9/4 | 3/2 |
| P-position-4 | 2 | 4 | 2 |

P2. Across [0,2] s the displacement is $(4,2)$ m and elapsed time is 2 s, giving $(2,1)$ m/s. Across [1/2,3/2] s the displacement is $(9/4-1/4,3/2-1/2)=(2,1)$ m and elapsed time is 1 s, again giving $(2,1)$ m/s. Equal averages on these two intervals do not assert a constant velocity at every time. Endpoint coordinates name a place; displacement names a change; the quotient names change per time. Its norm $\sqrt5$ m/s is the magnitude of the average velocity. It does not by itself determine average speed along the curved route. We do not calculate that curved-path length here.

P3. For physical $h\ne0$ with $-1\text{ s}\le h\le1\text{ s}$, the quotient is $(2a(1\text{ s})+ah,b)$. Put $\eta=h/(1\text{ s})$. Dividing normalized positions gives

$$Q(\eta)=\frac{R(1+\eta)-R(1)}{\eta}=(2+\eta,1),\qquad -1\le\eta\le1,\quad\eta\ne0.$$

The physical average-velocity vector is $(1\text{ m/s})Q(\eta)$. The table's squared norm is in (m/s)²; it is not a path-length calculation.

| Primary quotient | h / s | East component / (m/s) | North component / (m/s) | Squared norm / (m/s)^2 |
| --- | --- | --- | --- | --- |
| P-step-1 | -1/2 | 3/2 | 1 | 13/4 |
| P-step-2 | -1/4 | 7/4 | 1 | 65/16 |
| P-step-3 | 1/4 | 9/4 | 1 | 97/16 |
| P-step-4 | 1/2 | 5/2 | 1 | 29/4 |

To prove the limit, let any dimensionless $\epsilon>0$ be given and choose $\delta=\min(1,\epsilon)$. For every $0<|\eta|<\delta$ the two times are inside the domain and

$$\|Q(\eta)-(2,1)\|=\|(\eta,0)\|=|\eta|<\epsilon.$$

Thus the vector quotient tends to $(2,1)$ from both sides. For a physical tolerance $E>0$ in m/s, take $\epsilon=E/(1\text{ m/s})$; multiplying the inequality by 1 m/s supplies that tolerance in velocity units. This is a guarantee for all sufficiently small nonzero steps. It never evaluates the original quotient at zero. At 0 s and 2 s the restricted domain supplies only right-sided and left-sided derivatives respectively; an ordinary two-sided derivative there would need an extension and an explicit convention.

P4. Velocity at 1 s is $(2,1)$ m/s, and its Euclidean norm is $\sqrt{2^2+1^2}=\sqrt5$ m/s. The vector limit is proved above; the finite table is illustrative. Norm here uses perpendicular axes measured with the same unit. It changes the vector quantity into a nonnegative scalar; it does not recover a route length from endpoint data.

P5. $(1,1)$ m is the position at 1 s. Its entries cannot become velocity by relabelling the unit. The quotient at $h=0$ is undefined; derive the quotient for nonzero $h$ and pass to its proven limit. The formula alone does not say which forces would produce the motion, whether measurements support it, or whether the stated interval is a valid physical regime. No such claim is needed for the deductions above.

**Primary repair criteria.** A complete response preserves the domain and units; subtracts endpoints before dividing by elapsed time; treats the nearby quotient as a vector; proves the two-sided tolerance bound; and keeps speed, average velocity magnitude and path distance distinct. If a criterion is missing, retain the original line, state the first unsupported step, and rewrite that step using the relevant displayed definition. An equivalent correct argument is welcome; this is descriptive public feedback, not an automatic score.

## 6. PHYS-ENTRY-C: reverse direction and separate distance

### Changed question

The same frame and metre/second units apply, but the route now has two straight, constant-direction legs:

$$r_C(t)=\begin{cases}((3\text{ m/s})t,0),&0\le t\le2\text{ s},\\(6\text{ m}-(1\text{ m/s})(t-2\text{ s}),0),&2\text{ s}\le t\le4\text{ s}.\end{cases}$$

C1. Check that the two formulas agree at 2 s. Find positions at 0,2,4 s, displacement, distance travelled, average velocity and average speed over the whole route. Compare average speed with the norm of average velocity.

C2. At 1 s, 3 s and the junction 2 s, calculate the applicable velocity limits. Is there an ordinary velocity at the junction? Explain why continuity of position is insufficient.

C3. Audit: “The final position is 4 m east after 4 s, so average speed is 1 m/s and the point never travelled west.” Identify the valid quantity, repair both false inferences, and explain why this changed task requires information the primary endpoint ledger did not contain.

### Complete changed model

C1. Both branches give $(6,0)$ m at 2 s, so the position is continuous there. At 0,2,4 s the positions are $(0,0)$, $(6,0)$ and $(4,0)$ m. Displacement is $(4,0)$ m. The point travels 6 m east then 2 m west, so total distance is $6+2=8$ m. Over 4 s average velocity is $(1,0)$ m/s and average speed is 2 m/s. Its average velocity norm is 1 m/s, strictly smaller than average speed. Distances are nonnegative segment lengths; displacements retain direction. Both segment lengths are determined because the full straight-leg route and its junction were supplied.

| Changed route | Start time / s | End time / s | Start east / m | End east / m | Displacement east / m | Distance / m | Velocity east / (m/s) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C-leg-1 | 0 | 2 | 0 | 6 | 6 | 6 | 3 |
| C-leg-2 | 2 | 4 | 6 | 4 | -2 | 2 | -1 |

C2. At 1 s the velocity is $(3,0)$ m/s; at 3 s it is $(-1,0)$ m/s. At 2 s negative steps give quotient $(3,0)$ m/s and positive steps give $(-1,0)$ m/s. The two one-sided vector limits differ, so no ordinary two-sided velocity exists at the junction. The agreeing positions prove continuity, which is a separate condition from an agreeing rate. The one-sided norm limits here are 3 m/s and 1 m/s; they also differ.

C3. One metre per second is the magnitude of average velocity, and $(1,0)$ m/s is that vector. Average speed is $8/4=2$ m/s. The decreasing second branch explicitly moves west, despite the eastward net displacement. Repair by listing both legs before summing signed changes and unsigned distances. Endpoint positions alone would also fit a direct 4 m eastward trip with distance 4 m; they cannot choose between those routes. The additional segment description is the decisive information. The primary asked about a curved route without asking for its length; these two straight lengths need no integration.

**Changed repair criteria.** Keep signed displacement and unsigned segment-length ledgers separate, use the total elapsed time, and compare both one-sided vector quotients at the junction. Preserve a valid average-velocity result even when repairing an invalid speed claim. A public key comparison does not show that the changed case was attempted independently.

## 7. PHYS-ENTRY-R: a corner with agreeing norms

### Later public return question

On a later occasion of your choosing, close earlier models before writing a first response if they have not already been seen. Record the actual date and any earlier exposure. No timer, enforced delay or verified retention claim is attached to this return.

Let

$$r_R(t)=((1\text{ m/s})|t-1\text{ s}|,0),\qquad0\le t\le2\text{ s}.$$

R1. State the domain and units; give positions at 0,1,2 s, total displacement, distance travelled, average velocity and average speed across the full interval.

R2. At 1 s form the vector quotient for positive and negative nonzero $h$. Prove whether an ordinary two-sided velocity exists. Calculate the two one-sided norms.

R3. Audit: “The left and right velocity norms both tend to 1 m/s. Therefore velocity at 1 s is $(1,0)$ m/s.” Repair precisely. Say what has and has not been shown about speed under the convention used in this bridge.

R4. Name which earlier arguments transfer and which hypothesis fails. State one question about forces or observations that this prescribed motion leaves unanswered.

### Complete return model and repairs

R1. The domain is [0 s,2 s]; the absolute-value argument is a time, and multiplication by 1 m/s gives a length. Positions are $(1,0)$, $(0,0)$ and $(1,0)$ m. The route moves 1 m west and 1 m east. Displacement is zero, distance is 2 m, average velocity is $(0,0)$ m/s and average speed is 1 m/s.

R2. At 1 s the position is $(0,0)$ m. The quotient is

$$\frac{r_R(1\text{ s}+h)-r_R(1\text{ s})}{h}=\left((1\text{ m/s})\frac{|h|}{h},0\right),\qquad h\ne0.$$

Every negative admissible $h$ gives $(-1,0)$ m/s; every positive one gives $(1,0)$ m/s. Each one-sided limit therefore exists, but they differ. No vector can be the ordinary two-sided limit: its east component would have to equal both -1 and 1 m/s. Both one-sided norms equal 1 m/s.

| Return corner | h / s | East quotient / (m/s) | North quotient / (m/s) | Quotient norm / (m/s) |
| --- | --- | --- | --- | --- |
| R-step-1 | -1/2 | -1 | 0 | 1 |
| R-step-2 | -1/4 | -1 | 0 | 1 |
| R-step-3 | 1/4 | 1 | 0 | 1 |
| R-step-4 | 1/2 | 1 | 0 | 1 |

R3. Equal norms discard the sign difference; they do not supply an ordinary velocity vector. This bridge defines instantaneous speed as the norm of an existing ordinary velocity at a differentiable point. That definition does not assign a value at this corner. There is a separate valid statement here: the scalar limit

$$\lim_{h\to0}\frac{\|r_R(1\text{ s}+h)-r_R(1\text{ s})\|}{|h|}=1\text{ m/s}$$

exists, since the quotient equals 1 m/s for every nonzero admissible $h$. If **metric speed** is defined by this latter limit, it exists and equals 1 m/s here. The two definitions must not be conflated: this scalar fact still does not produce a velocity vector. Do not repair the false report by making an unqualified claim that every possible notion of speed fails at the corner.

R4. Endpoint subtraction, unit cancellation, straight-segment distances and the need for both sides transfer. The primary's two-sided vector limit fails because the left and right east rates disagree. The absolute value is continuous, but continuity was never sufficient for differentiability. The stipulated motion gives no force model for an instantaneous reversal and no observational evidence that a physical object follows it. Preserve the valid scalar norm calculation while removing the unsupported vector conclusion.

**Return repair criteria.** A full response states both one-sided vectors, proves their incompatibility, distinguishes the two scalar-speed conventions, and supplies the full-interval distance ledger. Retain earlier help exposure in the revised file. Reconstructing the model can support study; it does not prove unseen transfer or retained competence.

## 8. What this bridge supports next

You now have a bounded route through coordinates, vector addition, geometric scaling, dimension checks, average velocity, a proved instantaneous vector limit and two corner counterexamples. Read the opening of [Physics Models Before Equations](../articles/physics-models-before-equations.md) again and distinguish the preparation supplied here from the laws and advanced results it previews.

The [standard mathematical-physics course](#/courses/atlas-mathematical-physics-standard) requires multivariable calculus, ordinary differential equations, linear maps, vector calculus and probability distributions. Completing this entry bridge does not supply that whole preparation. Tensor/stress models, relativity, quantum theory and QFT in the survey remain optional orientation. They are not required tasks or conclusions of this bridge. No arc-length integration, Newton/force law, conservation theorem or empirical validation was silently used to obtain the prescribed-motion results.

For self-review, open each first/comparison/revised file in that order. Check quantities and domains, the signed vector ledger, the distance ledger, units, the nonzero-step condition and the two-sided proof. Choose the earliest unsupported line to repair. Keep the original alongside the corrected explanation and state any public answer already seen. A complete local worksheet is a record of this work and its support, not a certificate, an observation of a learner or a graded assessment.
