# 8. Integration techniques

**Prerequisites:** the chain and product rules, the fundamental theorem, logarithms, trigonometric identities, and polynomial algebra. Study this chapter over two sessions, returning to the method-selection exercises after a break.

**Learning outcomes.** Choose and justify a useful method, carry transformed endpoints consistently, handle rational and trigonometric structure, verify answers by differentiation, and recognize when a numerical integral is a better next step than more algebra.

## Read the structure before calculating

Differentiation has a dependable rule for almost every familiar expression. Integration is less automatic. A composition might hide its inner derivative, a product might simplify after differentiation, and a rational expression might conceal a sum of elementary fractions. The first task is diagnosis.

| Visible structure | First idea | Essential check |
| --- | --- | --- |
| f(g(x)) times g′(x) | Substitute u=g(x) | Account for every factor of dx |
| A polynomial times an exponential or logarithm | Integration by parts | The remaining integral should improve |
| A quotient of polynomials | Divide, factor, use partial fractions | Exclude denominator zeros |
| Powers of sine and cosine | Use an identity and substitution | Check parity of the powers |
| A quadratic square root | Complete the square, then consider a trigonometric substitution | Control the inverse branch |

These are prompts, not rigid instructions. Simplification comes first: (x²+x)/x becomes x+1 on an interval excluding zero. Symmetry can settle a definite integral without finding any antiderivative. Every final indefinite answer should survive differentiation on its claimed domain.

## Substitution reverses a composition

Suppose g is continuously differentiable on [a,b] and f is continuous on an interval containing g([a,b]). Then

∫_a^b f(g(x))g′(x)dx = ∫_(g(a))^(g(b)) f(u)du.

Choose F with F′=f. Both sides equal F(g(b))−F(g(a)) by the chain rule and the fundamental theorem. This version does not require g to be one-to-one. However, rewriting an arbitrary integral using an inverse substitution requires a suitable branch and may require splitting the interval.

**Worked example 1.** Evaluate ∫_0^2 6x(1+x²)²dx. The inner expression is 1+x²; its derivative 2x appears up to the factor 3. Put u=1+x², du=2x dx, and transform the limits: x=0 gives u=1, and x=2 gives u=5. Consequently the integral is

3∫_1^5 u²du = [u³]_1^5 = 124.

Its indefinite version is (1+x²)³+C. Differentiating gives 6x(1+x²)², checking both the power and the factor. Do not keep x-limits after changing the integration variable to u.

A revealing signed example is ∫_(−1)^1 2x exp(x²)dx. The same substitution gives identical transformed endpoints, so the result is zero. This agrees with odd symmetry. The interval first moves down and then up in u; the negative and positive contributions cancel. An unsigned area question would need absolute values and a split at zero.

```mathviz
scene "A substitution carries a changing scale";
domain -1.7 1.7;
range -7 7;
param c = 1 from 0.5 to 2;
param a = 0.7 from -1.5 to 1.5;
fn integrand(x) = 2*c*x*cos(c*x^2);
fn primitive(x) = sin(c*x^2);
let inner_input_at_a = c*a^2;
let inner_rate_at_a = 2*c*a;
let outer_derivative_at_a = cos(inner_input_at_a);
measure inner_rate = inner_rate_at_a;
measure outer_derivative = outer_derivative_at_a;
measure chain_product = inner_rate_at_a*outer_derivative_at_a;
plot integrand color blue;
plot primitive color amber;
tangent primitive at a;
```

**Predict:** how does the primitive's slope at a=0 compare with its slope at a=1? **Explore:** vary c, then move a through negative and positive inputs. The readouts evaluate the inner rate (2ca), the outer derivative (cos(ca^2)), and their product from the same controls. Compare that product with the blue height. **Explain:** the chain-rule proof gives

$$
\frac{d}{dx}\sin(cx^2)\bigg|_{x=a}
=\underbrace{\cos(ca^2)}_{\text{outer derivative}}
 \underbrace{2ca}_{\text{inner rate}}.
$$

The exact readouts illustrate this proved identity at editable values; agreement of a sampled curve and a numerically drawn tangent is not the proof. **Transfer:** edit the primitive to exp(c*x²), update the outer derivative and integrand, and predict all three readouts before compiling.

## Integration by parts moves a derivative

For continuously differentiable functions u and v on [a,b], integrate (uv)′=u′v+uv′ and rearrange:

∫_a^b u v′ dx = [uv]_a^b − ∫_a^b u′v dx.

For indefinite integrals the same identity holds with an arbitrary constant. Choose u whose derivative becomes simpler and a v′ that you can integrate. A memorised priority list is less useful than checking what the resulting integral will be.

**Worked example 2.** For ∫_0^1 x exp(x)dx, take u=x and v′=exp(x). Then u′=1 and v=exp(x), so

∫_0^1 x exp(x)dx = [x exp(x)]_0^1−∫_0^1 exp(x)dx = e−(e−1)=1.

The boundary term and the remaining integral nearly cancel; dropping either one changes the result substantially. For ∫ln(x)dx, regard the missing factor as 1 and choose u=ln(x), v′=1. On x>0 this gives x ln(x)−x+C.

Repeated integration by parts handles x²exp(x): the first step reduces the polynomial degree, and the next finishes it. Occasionally the original integral returns. If I=∫exp(x)cos(x)dx, two steps yield I=exp(x)cos(x)+exp(x)sin(x)−I, giving I=exp(x)(sin(x)+cos(x))/2+C. Returning to I is useful when it produces a solvable equation.

## Partial fractions reveal elementary pieces

For P(x)/Q(x), first divide if the numerator degree is at least the denominator degree. Factor the denominator of the remaining proper fraction. A repeated factor (x−a)^m requires terms for every power from 1 to m. An irreducible quadratic requires a linear numerator; its repeated powers require separate terms as well.

**Worked example 3.** Find an antiderivative of 1/[x(x+1)²]. Write

1/[x(x+1)²] = A/x + B/(x+1) + C/(x+1)².

Multiplying by the denominator gives 1=A(x+1)²+Bx(x+1)+Cx. Set x=0 to obtain A=1; set x=−1 to obtain C=−1; matching x² coefficients gives B=−1. Therefore an antiderivative is

ln|x|−ln|x+1|+1/(x+1)+C.

Differentiate each term to check the decomposition and the sign of the last term. The formula applies separately on (−∞,−1), (−1,0), and (0,∞), with potentially different constants. It does not legitimise an ordinary definite integral across either pole.

For 1/(x²+1), factoring over the reals stops immediately, and the antiderivative is atan(x). More generally, for a linear numerator over an irreducible quadratic denominator, split the numerator into a multiple of the denominator's derivative plus a constant. This produces a logarithm term and an inverse tangent term after completing the square; either term may vanish.

That verbal rule is only a first encounter. The [integration strategy workshop](integration-strategy-workshop.md) works through a rational function with a repeated linear factor *and* an irreducible quadratic, then derives the primitive of \(1/(1+x^2)^2\). Its independent questions include a case where a correct-looking primitive cannot be used to cross a pole. Work that set before treating partial fractions as a mechanical template.

## Trigonometric identities and inverse branches

For ∫sin³(x)dx, reserve one sine factor and replace sin²x by 1−cos²x. Then u=cos(x), du=−sin(x)dx gives

−∫(1−u²)du = −cos(x)+cos³(x)/3+C.

When both powers are even, half-angle identities reduce them. For example, cos²x=(1+cos(2x))/2, so ∫cos²x dx=x/2+sin(2x)/4+C. For an odd cosine power, reserving one cosine factor often suggests u=sin(x).

**Worked example 4.** Evaluate ∫_0^1 √(1−x²)dx. Put \(x=\sin\theta\) and choose the inverse branch \(-\pi/2\leq\theta\leq\pi/2\), on which sine is one-to-one and cosine is nonnegative. The particular endpoints \(0\leq x\leq1\) give \(0\leq\theta\leq\pi/2\). In general,

$$
\sqrt{1-\sin^2\theta}=\sqrt{\cos^2\theta}=|\cos\theta|,
$$

not automatically \(\cos\theta\). On the chosen interval \(\cos\theta\geq0\), so the absolute value becomes \(\cos\theta\), while \(dx=\cos\theta\,d\theta\). The integral becomes

∫_0^(π/2) cos²θ dθ = [θ/2+sin(2θ)/4]_0^(π/2)=π/4.

The answer matches the area of a quarter unit disk. On an interval where cosine changes sign, \(|\cos\theta|\) cannot be replaced by \(\cos\theta\) without splitting the integral. The substitutions \(x=a\tan\theta\) and \(x=a\sec\theta\) can help with \(\sqrt{a^2+x^2}\) and \(\sqrt{x^2-a^2}\), but require similarly explicit inverse branches and sign decisions. Definite chain-rule substitution does not require a one-to-one inner function; this inverse trigonometric rewriting does.

## Worked example 5: total energy from changing power

Suppose a device's power at time t is P(t)=C t exp(−kt), where C>0 has units watts per second and k>0 has units reciprocal seconds. The product kt is dimensionless, as an exponential's input must be. Energy supplied by time T is E(T)=∫_0^T C t exp(−kt)dt. Integration by parts with u=t and v′=exp(−kt) gives

E(T) = C[1−(1+kT)exp(−kT)]/k².

Check E(0)=0 and E′(T)=C T exp(−kT). The first checks the constant, while the second checks the accumulated rate. Also C/k² has units watt-seconds, or joules. For fixed C,T>0, increasing k reduces power at every positive time, so it must reduce energy too; comparison gives this conclusion without differentiating the complicated formula with respect to k. The scene uses C=1 in these units.

```mathviz
scene "Power contributes to accumulated energy";
domain 0 4.5;
range -0.1 3;
param k = 1 from 0.5 to 2;
param T = 2 from 0.2 to 4;
fn power(x) = x*exp(-k*x);
fn energy(x) = (1-(1+k*x)*exp(-k*x))/k^2;
plot power color blue;
plot energy color amber;
riemann power from 0 to T count 40;
tangent energy at T;
```

**Predict:** can accumulated energy keep increasing after power starts decreasing? **Explore:** move T across the power peak and then vary k. **Explain:** power peaks at t=1/k, but stays positive, so energy continues increasing while its slope decreases. The two vertical scales represent different physical quantities despite sharing a diagram. **Transfer:** multiply power by a new amplitude parameter and update energy. Predict the scaling of both the total and its tangent before testing.

## Knowing when to stop

A valid substitution need not simplify anything. For ∫exp(x²)dx on x>0, u=x² yields ∫exp(u)/(2√u)du: the missing 2x factor has not disappeared. Failure to find an elementary formula does not mean the definite integral fails to exist. For a continuous integrand on a closed bounded interval, Riemann sums can approximate it; an error theorem determines whether the approximation meets a requested tolerance. The language evaluates expressions and scenes numerically, so it does not discover symbolic antiderivatives for you.

## Saved method decisions

The first saved choice is a **consolidation diagnostic**: its middle integral deliberately repeats Worked example 2 so that feedback can diagnose method selection. The following written problem and its changed transfer provide the independent work.

```exercise
{"id":"calc2-technique-selection","type":"choice","prompt":"Which plan correctly matches all three integrals: A=∫₀¹2x cos(x²)dx, B=∫₀¹x exp(x)dx, and C=∫₂³1/[x(x+1)]dx?","options":[{"label":"A substitution; B integration by parts; C partial fractions","correct":true,"feedback":"Correct. A contains the inner derivative, differentiating x simplifies B, and C is a proper rational function with distinct linear factors."},{"label":"A integration by parts; B partial fractions; C trigonometric substitution","correct":false,"feedback":"These methods ignore the visible structures: A has a chain-rule factor, B is not rational, and C has no quadratic square root needing a trigonometric branch."},{"label":"Use substitution u=x² for all three","correct":false,"feedback":"That substitution finishes A, but it makes neither the product x exp(x) nor the rational denominator in C simpler."},{"label":"None can be decided until a graph is drawn","correct":false,"feedback":"A graph may check signs or scale, but the algebraic structures already justify useful first moves."}],"hints":["For each integral, ask what differentiation rule the integrand resembles and whether the proposed move makes the remaining integral simpler."]}
```

```exercise
{"id":"calc2-substitution-then-parts","type":"written","prompt":"Evaluate ∫₀¹x³ exp(x²)dx. Your solution must justify the first substitution, transform both endpoints, show the subsequent integration-by-parts step, and check the result by differentiating an antiderivative.","hints":["Write x³dx as x²(x dx), then set u=x².","After substitution, integrate u exp(u) by parts and keep the transformed limits 0 and 1."],"rubric":["Chooses u=x² and accounts for x dx=du/2","Transforms both endpoints and obtains (1/2)∫₀¹u exp(u)du","Carries out integration by parts including its boundary term","Obtains the exact value 1/2","Differentiates an antiderivative to recover x³ exp(x²)"],"solution":"Let u=x², so du=2x dx and x³dx=x²(x dx)=u du/2. Both x-endpoints 0 and 1 map to u-endpoints 0 and 1. Therefore the integral is (1/2)∫₀¹u exp(u)du. Integration by parts gives ∫u exp(u)du=(u−1)exp(u), so the definite value is (1/2)[(u−1)exp(u)]₀¹=(1/2)(0−(−1))=1/2. An antiderivative in x is (1/2)(x²−1)exp(x²); differentiating it gives x exp(x²)+x(x²−1)exp(x²)=x³exp(x²), completing the check.","transfer":"Changed case: investigate ∫₀¹x² exp(x²)dx. Show exactly what u=x² produces, explain why the earlier two-step route no longer finishes in elementary terms, and state an honest next method for the definite integral.","transferSolution":"With u=x² and x≥0, dx=du/(2√u), so x²dx=(√u/2)du and the integral becomes (1/2)∫₀¹√u exp(u)du; it is not the u exp(u) integral from the original problem. Equivalently, integration by parts using d(exp(x²))=2x exp(x²)dx leaves ∫₀¹exp(x²)dx. The same route therefore does not finish with elementary antiderivatives. The integrand is continuous on [0,1], so a numerical quadrature with an explicit error estimate is an honest next step (the value is approximately 0.6278); inventing an elementary formula is not."}
```

After completing both saved decisions, leave them for at least one study interval before attempting the changed method-selection problems in [the Calculus II synthesis](calculus-ii-synthesis.md). That delayed paper assesses selection again without announcing a method.

## Exercises

1. Evaluate ∫_0^1 3x²√(1+x³)dx, showing transformed endpoints.
2. Evaluate ∫_1^e ln(x)dx by parts.
3. Find an antiderivative of 1/(x²−1), identifying its intervals of validity.
4. Find ∫(x²+1)/(x+1)dx. Explain why division should come first.
5. Find ∫sin³(x)cos²(x)dx, and verify by differentiation.
6. Evaluate ∫_0^(π/2) sin²(x)dx using an identity.
7. Evaluate ∫_1^4 ln(x)/√x dx.
8. A learner claims ∫exp(x²)dx=exp(x²)+C. Diagnose the error using both differentiation and substitution.
9. For the power model with C=1, find E(2) when k=1, then explain without differentiation why E(2) is smaller when k=2.
10. Evaluate ∫_(−2)^2 x/(1+x²)dx in two ways. Explain why its geometric area is positive.

<details>
<summary>First hints: recognize the structure</summary>

1. Look inside the square root. 2. Supply a factor 1. 3. Factor the denominator. 4. Compare polynomial degrees. 5. Keep one sine factor. 6. Replace the squared sine. 7. Differentiate the logarithm. 8. Check the claimed answer. 9. Use the energy formula, then compare integrands. 10. Look for both symmetry and an inner derivative.

</details>

<details>
<summary>Second hints: start the algebra</summary>

1. Let u=1+x³, with limits 1 and 2. 2. Set u=ln(x), v=x. 3. Use A/(x−1)+B/(x+1). 4. The quotient is x−1 with remainder 2. 5. Set u=cos(x). 6. sin²x=(1−cos(2x))/2. 7. An antiderivative of x^(−1/2) is 2√x. 8. The derivative of exp(x²) contains 2x. 9. exp(−2t)<exp(−t) for t>0. 10. An antiderivative is ln(1+x²)/2.

</details>

<details>
<summary>Full solutions</summary>

1. The transformed integral is ∫_1^2 √u du=[2u^(3/2)/3]_1^2=(2/3)(2√2−1).
2. Integration by parts gives [x ln(x)−x]_1^e=0−(−1)=1.
3. The decomposition is 1/[2(x−1)]−1/[2(x+1)]. Integrate to get (ln|x−1|−ln|x+1|)/2+C on each of (−∞,−1), (−1,1), and (1,∞).
4. Division gives x−1+2/(x+1), so an antiderivative is x²/2−x+2ln|x+1|+C on either interval avoiding −1.
5. Substitution gives −∫(1−u²)u²du=−u³/3+u⁵/5+C. Thus the answer is −cos³x/3+cos⁵x/5+C. Its derivative is sin(x)cos²(x)(1−cos²x)=sin³(x)cos²(x).
6. Integrating the identity gives [x/2−sin(2x)/4]_0^(π/2)=π/4.
7. By parts the antiderivative is 2√x ln(x)−4√x. Its endpoint difference is 4ln(4)−8+4=8ln(2)−4.
8. Differentiation produces 2x exp(x²), not the requested integrand. On x>0 the substitution u=x² leaves the factor 1/(2√u); ignoring that factor is the error.
9. E(2)=1−3exp(−2). For every t∈(0,2], t exp(−2t)<t exp(−t); integrating this strict continuous inequality gives strictly smaller energy for k=2.
10. Odd symmetry gives zero. Endpoint evaluation also gives [ln(1+x²)/2]_(−2)^2=0. The unsigned area is 2∫_0^2 x/(1+x²)dx=ln(5), because both sides contribute positively after taking absolute values.

</details>

**Further study:** use [OpenStax, Integration by Parts](https://openstax.org/books/calculus-volume-2/pages/3-1-integration-by-parts) and [Partial Fractions](https://openstax.org/books/calculus-volume-2/pages/3-4-partial-fractions) for additional practice; [MIT 18.01SC, techniques of integration](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-4-techniques-of-integration/) supplies a university sequence. This chapter's explanations, activities, and exercise sets are original.
