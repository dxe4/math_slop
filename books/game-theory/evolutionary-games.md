
# Evolutionary Games and Population Stability

Equilibrium describes a strategy profile at which no player profits by deviating alone. Evolutionary game theory asks a related but different question: can a resident behavior resist invasion by a small population using another behavior? The comparison is between expected success in a changing population, rather than a deliberate decision by a fully informed optimizer. A precise mutant criterion and a specified population dynamic must be kept separate.

Preparation for the static theory is finite probability, matrix algebra and [Mixed Strategies](mixed-strategies.md). The later differential-equation section additionally requires first-year differentiation, the chain rule and elementary integration. It explicitly states when a continuously differentiable solution is assumed. A general existence theorem for differential equations is a further analytic input, not a consequence of the game-theoretic definition.

## Symmetric interactions

**Definition 15.1 (Finite symmetric game).** Let the common pure-strategy set have $m$ elements and let $A$ be an $m$-by-$m$ real matrix. A player using pure action i against j receives $A_{ij}$, while the other player receives $A_{ji}$. For distributions $p,q$ in the simplex, write $u(p,q)=p^{\mathsf T}Aq$.

Symmetry exchanges player roles and strategy positions. It does not require $A$ itself to be a symmetric matrix. A symmetric equilibrium is a profile $(p,p)$ at which p is a best response to itself. A symmetric game can also have asymmetric equilibria; those are not the resident states considered in the definition below.

A population distribution can represent the fractions of pure types, or a resident type may itself use a mixed behavior. The static invasion comparison treats p and q as distributions with bilinear expected success. A biological interpretation requires further assumptions about matching, inheritance and fitness. The algebra alone does not identify a payoff with reproductive success in every application.

## The invasion definition and its quantifiers

**Definition 15.2 (Evolutionarily stable strategy).** A resident $p$ is an evolutionarily stable strategy, abbreviated ESS, if for every mutant $q\ne p$ there exists $\bar\epsilon(q)>0$ such that for every $0<\epsilon<\min\{1,\bar\epsilon(q)\}$,
\[
u(p,(1-\epsilon)p+\epsilon q)
>
u(q,(1-\epsilon)p+\epsilon q).
\]
The mutant has population fraction epsilon, and both types face the same mixed population.

The order of quantifiers matters. The definition first fixes a mutant and then permits a sufficiently small invasion bound for that mutant. We do not assume a uniform bound over all q without proof. The inequality is strict, so a neutral mutant tying the resident at every small fraction prevents ESS.

The criterion compares expected payoff per individual type, not the population-weighted total earned by all residents against the smaller total earned by all mutants. Multiplying by population sizes would make residents look more successful merely because they are numerous and would change the question.

**Theorem 15.3 (ESS characterization).** A resident p is ESS exactly when, for every $q\ne p$, either
\[
u(p,p)>u(q,p),
\]
or
\[
u(p,p)=u(q,p)\quad\hbox{and}\quad u(p,q)>u(q,q).
\]

*Proof.* Fix q and put $a=u(p,p)-u(q,p)$ and $b=u(p,q)-u(q,q)$. Bilinearity makes the invasion payoff difference $(1-\epsilon)a+\epsilon b$. If a is negative, continuity makes this negative for all sufficiently small positive epsilon, so stability fails. If a is zero, the difference is positive exactly when b is positive.

If a is positive, choose a positive bound small enough that $\epsilon(|a|+|b|)<a/2$. Then $(1-\epsilon)a+\epsilon b\ge a-\epsilon(|a|+|b|)>a/2>0$. Thus every fixed mutant satisfying either displayed condition is resisted at sufficiently small fractions. Conversely the invasion inequality rules out negative a, and when a is zero forces positive b. Applying this fixed-mutant argument for every q proves both directions with the stated quantifiers. ∎

The first comparison is a best-response condition against residents. The second resolves mutants that tie in a nearly all-resident population: their performance against one another must be worse than the resident's performance against them.

**Corollary 15.4.** Every ESS is a symmetric Nash equilibrium. Every strict symmetric Nash equilibrium is an ESS.

*Proof.* The characterization implies $u(p,p)\ge u(q,p)$ for every q, precisely the symmetric Nash condition. If p is the unique best response to itself, every different q gives the strict first inequality, so the characterization yields ESS. ∎

In a finite game a strict symmetric equilibrium must be pure. If p mixed over two or more actions, all supported actions would tie as best responses, and choosing one of them purely would be a different best response. Interior ESS can nevertheless exist because their second inequality can supply stability despite these first-order ties.

## Three different static outcomes

**Worked example 15.5 (Two strict coordination residents).** Let
\[
A=\begin{pmatrix}2&0\\0&1\end{pmatrix}.
\]
Against resident action one, any mutant assigning positive mass to action two earns strictly less than two. Hence pure one is a strict symmetric equilibrium and ESS. Against resident two, any mutant assigning positive mass to action one earns strictly less than one, so pure two is also ESS.

There is also a mixed symmetric equilibrium with probability one third on action one, since $2x=1-x$. But it is not ESS. Against pure mutant action one, the resident earns two thirds while the mutant against itself earns two, violating the second condition. Static symmetric equilibrium can therefore coexist with several strict ESS and another unstable candidate.

**Worked example 15.6 (A mixed hawk–dove ESS).** Take
\[
A=\begin{pmatrix}-1&2\\0&1\end{pmatrix},
\]
with first action Hawk. Against Hawk fraction x, Hawk earns $2-3x$ and Dove earns $1-x$. They tie at $x^*=1/2$, giving a symmetric equilibrium p.

For a mutant with Hawk probability y, both actions against p earn one half, so the first characterization comparison always ties. The second difference is
\[
u(p,q)-u(q,q)=(1/2-y)(1-2y)=2(y-1/2)^2.
\]
It is strictly positive for every mutant $y\ne1/2$. Thus p is an ESS despite not being a strict Nash equilibrium. The argument checks every mixed mutant, not merely the two pure extremes.

**Worked example 15.7 (Pure-mutant checks can miss invasion).** Let
\[
A=\begin{pmatrix}0&0&0\\0&-1&2\\0&2&-1\end{pmatrix},
\qquad p=e_1.
\]
Every mutant ties the resident against p, because the first column is zero. Pure mutant $e_2$ or $e_3$ has self-payoff minus one, while the resident earns zero against it. Each pure mutant therefore satisfies the favorable second comparison.

But mutant $q=(e_2+e_3)/2$ earns $u(q,q)=1/2$, while $u(p,q)=0$. It invades at every positive fraction because its invasion payoff is $\epsilon/2$ and the resident's is zero. Thus testing only pure mutants does not establish ESS. Pure deviations suffice for Nash because payoff against a fixed resident is linear; the ESS tie comparison contains the mutant twice and is quadratic.

## A specified population equation

Suppose $x_i(t)$ is the fraction of pure type i and its instantaneous fitness is $(Ax)_i$. A common deterministic model is the replicator equation
\[
\dot x_i=x_i\big((Ax)_i-x^{\mathsf T}Ax\big).
\]
This is a modeling assumption about growth relative to mean fitness. ESS is not defined by this equation, and changing to mutation, finite-population sampling or another adjustment process changes the dynamic analysis.

**Analytic preparation at this point.** The following calculations concern continuously differentiable solutions of this polynomial vector field. Local existence and uniqueness follow from the Picard–Lindelöf theorem because polynomial fields are locally Lipschitz. A primary teaching source for that separate theorem is [MIT's real-analysis lecture on existence and uniqueness](https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/mit18_100b_s25_lec23_pdf/). We do not prove the general ODE theorem here. Statements about limits as time tends to infinity below explicitly assume a forward-complete solution, meaning one defined for every $t\ge0$.

**Proposition 15.8 (Simplex preservation along solutions).** A continuously differentiable replicator solution starting in the simplex remains there throughout its forward interval of existence. Initially positive coordinates stay positive at finite times, and initially zero coordinates stay zero.

*Proof.* Put $S=\sum_i x_i$ and $M=x^{\mathsf T}Ax$. Summing equations gives $\dot S=(1-S)M$. Thus $S-1$ solves a scalar homogeneous linear equation and, by its integrating-factor formula, remains zero when initially zero.

For each coordinate, the same formula gives
\[
x_i(t)=x_i(0)\exp\left(\int_0^t((Ax(s))_i-M(s))\,ds\right).
\]
The exponential is positive on every compact subinterval where the solution exists. Hence signs and zero status are preserved. Together with $S=1$, this proves simplex preservation. ∎

No type absent initially can appear under this equation. That is a limitation of the no-mutation model, not a theorem that biological innovation is impossible. A boundary rest point may persist simply because an invading type has frequency zero.

## A complete scalar convergence argument

For two actions, let x be the first-action fraction. The equation reduces to $\dot x=x(1-x)(f_1(x)-f_2(x))$. In the hawk–dove example,
\[
\dot x=x(1-x)(1-2x).
\]

**Theorem 15.9 (Hawk–dove convergence).** Every forward-complete continuously differentiable solution with $0<x(0)<1$ converges to one half.

*Proof.* For $y=x-1/2$, the equation gives $\dot y=-2x(1-x)y$. Its integrating-factor formula preserves the sign of y, unless it is identically zero. A solution below one half therefore stays below and is increasing, while a solution above stays above and is decreasing. Each is bounded and has a limit.

If a below-half limit were strictly below one half, it would also exceed zero and the continuous positive right-hand side would be bounded below by a positive number near that limit. The trajectory could not then remain bounded. The above-half case is analogous with a negative derivative. Thus the only possible interior limit is one half. The solution starting exactly there is constant. ∎

The boundary solutions zero and one remain fixed, so this is convergence for interior initial conditions, not global convergence from every simplex point. We have proved a specific statement for a specified equation, rather than inferring a universal dynamic theorem from ESS terminology.

## A rest point without attracting behavior

For the antisymmetric rock–paper–scissors matrix
\[
A=\begin{pmatrix}0&-1&1\\1&0&-1\\-1&1&0\end{pmatrix},
\]
the uniform distribution p is a symmetric Nash equilibrium. It is not ESS: $u(p,q)=0$ and $u(q,q)=0$ for every q, so the tie condition is never strict.

Along an interior replicator solution, differentiate $\log(x_1x_2x_3)$. The result is $\sum_i(Ax)_i-3x^{\mathsf T}Ax=0$, because column sums vanish and antisymmetry makes the quadratic form zero. The product is therefore constant. A nonuniform interior initial state has product less than $1/27$, so it cannot converge to the uniform state whose product is $1/27$. This is a rigorous obstruction to convergence, without asserting a full classification of every trajectory.

## Closing the book's distinctions

The static ESS criterion, symmetric Nash equilibrium and a replicator rest point are different objects. ESS implies symmetric Nash, but the converse fails. Replicator rest points can exist on invariant boundaries even when an absent strategy would profit. A dynamic conclusion requires the named equation, initial-condition region and solution assumptions.

The broader book follows the same discipline. Strategic form specifies incentives; mixtures and fixed points establish equilibrium; trees and subgames add sequential credibility; information and mechanisms change feasible deviations; social choice concerns aggregation of rankings; evolutionary games concern invasion and population adjustment. None of these mathematical solution concepts automatically supplies empirical selection, welfare approval or convergence under every learning rule.

A useful application therefore reports both its static criterion and its dynamic model, if any. It states how payoffs relate to fitness, how encounters are sampled, whether mutation occurs and what population regime is assumed. Theorems remain valuable precisely because their domains and conclusions are explicit.

## A proved local dynamic implication for strict pure residents

There is a useful conditional stability result that can be established directly without invoking a general ESS stability theorem.

**Proposition 15.10 (Strict pure resident attracts nearby replicator solutions).** Suppose pure type i is a strict symmetric Nash equilibrium. Then some neighborhood of $e_i$ in the simplex has the following property: every forward-complete continuously differentiable replicator solution starting there converges to $e_i$. The conclusion concerns the stated replicator equation and assumes the solution exists for all nonnegative time.

*Proof.* Strictness gives $A_{ii}>A_{ji}$ for every $j\ne i$. By finiteness and continuity there is a neighborhood U of $e_i$ and $\delta>0$ such that $(Ax)_i-(Ax)_j\ge\delta$ throughout U. Choose a sufficiently small positive r so that every simplex point with $x_i>0$ and $\sum_{j\ne i}x_j/x_i\le r$ lies inside U.

Along a solution with $x_i>0$, let $R_j=x_j/x_i$. Differentiating and cancelling mean fitness gives $\dot R_j=R_j((Ax)_j-(Ax)_i)$. While the point remains in U, this is at most $-\delta R_j$, so the integrating-factor inequality yields $R_j(t)\le R_j(0)e^{-\delta t}$.

Starting with ratio sum strictly below r, that sum cannot increase to r, so the trajectory cannot leave this ratio neighborhood through its outer edge. Simplex preservation keeps it in the simplex, and positivity keeps $x_i>0$ at every finite time. Thus the estimate applies for all forward times. Every other ratio tends to zero. Since $x_i=1/(1+\sum_{j\ne i}R_j)$, its limit is one, while all other coordinates tend to zero. ∎

The ratio argument displays the mechanism: each rare alternative grows more slowly than the strict resident throughout a small neighborhood. It also displays the limitation. An interior ESS has tied pure fitnesses at the resident, so this strict-gap proof does not apply. Its stability must be obtained by another argument, such as the explicit scalar hawk–dove calculation, or an appropriately stated more general theorem.

The result does not say that every initial population reaches the same strict resident. The coordination example has two strict resident types, each with a local attracting region and an interior separating state. Initial conditions matter. It also does not claim mutation robustness for a dynamic that creates new types; adding mutation changes the coordinate equations and removes the exact invariant-face property used above.

This final dynamic proposition complements, rather than replaces, the static ESS characterization. Static invasion and dynamic attraction can be related only after the payoff model, equation, solution class and neighborhood are fixed. Keeping those hypotheses visible makes a stability conclusion useful and prevents one population model from being treated as a theorem about every form of learning.

## Exercises

<a id="evolutionary-games-ex-1"></a>
### Exercise 15.1

State the ESS quantifiers and explain whether the invasion bound may depend on the mutant.

<details>
<summary>Hint 1</summary>

Fix q before choosing the bound.

</details>

<details>
<summary>Hint 2</summary>

Do not interchange for-every and there-exists.

</details>

<details>
<summary>Solution</summary>

For every $q\ne p$ there must exist a positive bound depending on q such that the strict resident advantage holds for every positive epsilon below that bound and one. This is a per-mutant small-invasion statement. A uniform bound over all mutants is a stronger formulation and is not assumed without proof.

</details>

<a id="evolutionary-games-ex-2"></a>
### Exercise 15.2

Derive the affine invasion difference used in the characterization.

<details>
<summary>Hint 1</summary>

Expand both expected payoffs by bilinearity.

</details>

<details>
<summary>Hint 2</summary>

Group resident-resident and mutant-mutant comparisons.

</details>

<details>
<summary>Solution</summary>

The difference is $(1-\epsilon)[u(p,p)-u(q,p)]+\epsilon[u(p,q)-u(q,q)]$. The first coefficient controls sufficiently small invasions unless it ties. In the tied case the second comparison alone determines the sign. This proves why the two-part ESS condition is necessary.

</details>

<a id="evolutionary-games-ex-3"></a>
### Exercise 15.3

Show directly that a strict symmetric Nash equilibrium is ESS.

<details>
<summary>Hint 1</summary>

Its payoff gap against every different mutant is positive.

</details>

<details>
<summary>Hint 2</summary>

For each fixed mutant use continuity in epsilon.

</details>

<details>
<summary>Solution</summary>

For fixed q the gap at epsilon zero is positive. The affine invasion difference remains positive on some interval starting at zero, giving the required mutant-dependent bound. Since this holds for every q, p is ESS. The proof does not require the same bound to work for all mutants.

</details>

<a id="evolutionary-games-ex-4"></a>
### Exercise 15.4

Why can an interior ESS fail to be strict Nash?

<details>
<summary>Hint 1</summary>

Linearity forces supported actions to tie.

</details>

<details>
<summary>Hint 2</summary>

Use the hawk–dove equilibrium.

</details>

<details>
<summary>Solution</summary>

At an interior equilibrium every pure action is supported and therefore gives the same payoff against p. Each pure action is a different best response, so Nash is not strict. The hawk–dove second condition is nevertheless $2(y-1/2)^2>0$ for every different mutant, making the mixture ESS.

</details>

<a id="evolutionary-games-ex-5"></a>
### Exercise 15.5

Check the mixed invasion in Worked example 15.7.

<details>
<summary>Hint 1</summary>

Compute the mutant's quadratic self-payoff.

</details>

<details>
<summary>Hint 2</summary>

The resident's row and the first column are zero.

</details>

<details>
<summary>Solution</summary>

For q half on types two and three, self-payoff is $(-1+2+2-1)/4=1/2$. The resident earns zero against q and both types earn zero against p. At mutant fraction epsilon, resident payoff is zero while mutant payoff is epsilon over two. Hence the resident fails ESS despite resisting each pure mutant.

</details>

<a id="evolutionary-games-ex-6"></a>
### Exercise 15.6

Find the two-action replicator equation for the coordination matrix in Worked example 15.5.

<details>
<summary>Hint 1</summary>

Compute the two pure fitnesses.

</details>

<details>
<summary>Hint 2</summary>

Their difference is $2x-(1-x)$.

</details>

<details>
<summary>Solution</summary>

The fitnesses are $2x$ and $1-x$, so $\dot x=x(1-x)(3x-1)$. Interior states below one third move toward zero and above one third toward one under a forward-complete solution. The mixed equilibrium one third is a separating rest point, consistent with its failure of ESS.

</details>

<a id="evolutionary-games-ex-7"></a>
### Exercise 15.7

Explain why an initially absent type stays absent under replicator dynamics.

<details>
<summary>Hint 1</summary>

Its coordinate equation contains the coordinate as a factor.

</details>

<details>
<summary>Hint 2</summary>

Use the exponential coordinate formula.

</details>

<details>
<summary>Solution</summary>

If $x_i(0)=0$, the formula gives $x_i(t)=0$ throughout the solution's existence interval. The equation has no mutation term to introduce the type. Thus a boundary rest point need not resist invasion by a type artificially introduced at positive frequency.

</details>

<a id="evolutionary-games-ex-8"></a>
### Exercise 15.8

What assumptions accompany the hawk–dove convergence theorem?

<details>
<summary>Hint 1</summary>

Name the equation, solution regularity and time domain.

</details>

<details>
<summary>Hint 2</summary>

Boundary initial conditions behave differently.

</details>

<details>
<summary>Solution</summary>

It concerns the stated scalar replicator equation, a continuously differentiable solution defined for all nonnegative time, and an initial fraction strictly between zero and one. Under those assumptions the sign and monotonicity argument proves convergence to one half. Starting at zero or one instead yields a fixed boundary solution.

</details>

<a id="evolutionary-games-ex-9"></a>
### Exercise 15.9

Show why rock–paper–scissors uniform equilibrium is not ESS.

<details>
<summary>Hint 1</summary>

Use antisymmetry and zero column sums.

</details>

<details>
<summary>Hint 2</summary>

Both relevant mutant comparisons tie.

</details>

<details>
<summary>Solution</summary>

Uniform p gives $u(p,q)=0$ for every q, and antisymmetry gives $u(q,q)=0$. Also all mutants tie against p. Therefore neither strict first inequality nor strict second inequality holds for any different q. The symmetric Nash equilibrium is neutral under the static ESS test.

</details>

<a id="evolutionary-games-ex-10"></a>
### Exercise 15.10

Why does an ESS calculation not automatically prove convergence of an observed population?

<details>
<summary>Hint 1</summary>

A static invasion criterion does not specify a trajectory.

</details>

<details>
<summary>Hint 2</summary>

List model features that can change the dynamics.

</details>

<details>
<summary>Solution</summary>

Observed adjustment depends on encounter sampling, fitness interpretation, finite versus infinite population, mutation, delays and the update equation. ESS supplies a payoff comparison for rare mutants in the specified symmetric game. A convergence claim requires a particular dynamic, solution assumptions and a separate proof, such as the scalar argument given here.

</details>

## Sources

John Maynard Smith's [*Evolution and the Theory of Games*](https://www.cambridge.org/core/books/evolution-and-the-theory-of-games/A3BDF54AF5C6297E308AB15BBEF45E48), Cambridge University Press, is the primary book source for ESS. The differential-equation existence input is explicitly separated and linked to [MIT's Picard–Lindelöf lecture](https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/mit18_100b_s25_lec23_pdf/). The ESS characterization and finite calculations are proved in the chapter; general ESS-to-dynamic-stability extensions are not assumed.

## Summary

ESS means that every fixed mutant is resisted at sufficiently small positive population fractions. Its characterization separates a strict resident advantage from a second comparison resolving ties. ESS implies symmetric Nash, and strict symmetric Nash implies ESS, but mixed mutants must be checked. Replicator dynamics is a separate population model: simplex preservation and the hawk–dove convergence claim are proved with explicit solution hypotheses. Across the book, incentives, information, aggregation, welfare and dynamics remain distinct mathematical questions.
