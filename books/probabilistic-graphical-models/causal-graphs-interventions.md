
# Causal Graphs and Interventions

## Observing and changing a mechanism

An observational DAG describes a joint factorization. A causal model additionally specifies how the generating mechanisms behave when one is replaced. The distinction is essential: conditioning on a value updates information about the world that generated it; intervening changes a rule that generates the value. The two operations need not yield the same distribution.

This chapter supplies the intervention semantics that the earlier chapters deliberately did not infer from probabilistic arrows. We use finite acyclic structural causal models with mutually independent exogenous variables for the unconfounded-DAG results. A structural equation assigns each endogenous variable as a measurable function of its parents and its own exogenous noise. Acyclicity permits evaluation in topological order. When hidden common causes are present, include them in the full model explicitly; independent noises at observed vertices alone would then be the wrong representation.

Any finite normalised DAG conditional table can be generated using an independent uniform variable at its node. The causal interpretation adds the substantive modularity assertion: replacing one node's equation leaves the other equations and the exogenous law unchanged. That assertion is not derived from the observational tables. It describes the intervention being modelled.

## Truncated factorization from structural replacement

A perfect intervention setting X to x replaces its equation by that constant. All other equations retain their forms and independent noises. Sequential generation in the modified DAG therefore gives
$$
p(v_{-X}\mid\operatorname{do}(X=x))=\prod_{j\ne X}p(v_j\mid v_{\operatorname{pa}(j)})\big|_{X=x}.
$$
The missing factor is the original treatment mechanism, which no longer generates X. Summing in reverse topological order proves normalisation. This is the truncated factorization formula, derived from the structural replacement rather than declared equal to ordinary conditioning.

Ordinary conditioning retains the original treatment factor and divides the joint law by its marginal treatment probability. That factor can carry information about treatment parents and their descendants. An intervention removes this information flow while transmitting the fixed value to the treatment's children. If the full causal DAG contains latent variables, the truncated product includes their original factors and they must be summed out.

A stochastic intervention can replace the treatment rule by a declared randomized distribution, possibly depending on a specified pretreatment history. Its distribution is obtained by inserting that new factor instead of deleting and fixing a constant. Changing assignment need not change every other mechanism, but that invariance is the causal-model assumption being made. Interventions that also alter measurement or selection require a richer replacement model.

## A full backdoor-adjustment proof

**Theorem 14.1 (Backdoor adjustment).** Let Z be a set containing no descendant of X and disjoint from X and Y. Form the backdoor graph by deleting arrows leaving X. Suppose Z d-separates X from Y in that graph, and suppose the required conditional treatment probabilities are positive on the Z configurations being averaged. We prove
$$
p(y\mid\operatorname{do}(X=x))=\sum_zp(y\mid x,z)p(z).
$$
Use the independent noises of the structural model to define the entire intervened world at fixed x, and denote its outcome by Y x. Keep also the natural treatment X from the original world. Because Z and the parents of X are nondescendants, their structural values do not change under the intervention. Construct a joint vector consisting of the natural treatment and all other intervened variables. Its law factors over the backdoor graph: X retains its original parent mechanism but has no outgoing random influence; the other mechanisms use the fixed constant x wherever they formerly used the treatment. Their remaining random parent arguments are exactly those in that graph.

The d-separation theorem therefore gives $Y_x\perp X\mid Z$ in this constructed joint law. This step is the conditional exchangeability supplied by the graphical assumptions. On the event that the natural treatment equals x, topological induction through the equations shows that every original and intervened variable agrees: nondescendants already agree, the treatment agrees by the event, and each descendant then receives identical parents and noise. This is consistency for the stated intervention, so Y x equals Y there.

Conditional independence, consistency and treatment positivity now identify the conditional law of Y x given Z with the observed law of Y given X equal to x and Z. Finally Z has its original marginal law because it is a nondescendant. Averaging over that law gives the adjustment formula. Every assumption has an explicit role: graphical separation gives exchangeability, equation replacement gives consistency, nondescendance preserves Z, and positivity permits the observed conditional comparison.

The theorem is sufficient, not a claim that every identifying set must satisfy this criterion. Parents of X are a standard sufficient choice when they exclude Y and the full graph has the required observed variables. Conditioning on every available covariate can instead introduce a collider or include a treatment descendant, so more adjustment is not automatically safer.

## Worked example 1: observationally identical laws with different effects

**Example 14.2 (observationally identical laws with different effects).** Let a hidden fair bit H generate X and Y through independent bit-flip errors each of probability one quarter. The observed pair is fair in each margin and agrees with probability five eighths. Its four joint probabilities are five sixteenths on the equal pairs and three sixteenths on unequal pairs, all strictly positive. There is no arrow from X to Y in this model. Setting X externally leaves the Y distribution fair, so the intervention contrast is zero.

Another causal model generates a fair X and sets Y to X flipped with independent error probability three eighths. It has exactly the same positive observational table. But setting X to one gives success probability five eighths, while setting it to zero gives three eighths, an intervention contrast of one quarter. No amount of observational data on just this pair distinguishes the two tables because they are the same table. The causal models differ in their hidden structure and intervention semantics.

This is nonidentification, not a small-sample estimation problem. Positivity of the observed treatment probabilities does not eliminate hidden confounding. An identifying causal assumption or additional data must distinguish the possible mechanisms before the contrast is recoverable.

## Worked example 2: adjustment changes a confounded association

**Example 14.3 (adjustment changes a confounded association).** Let a binary pretreatment variable Z be fair. Treatment success probabilities are .2 when Z is zero and .8 when it is one. Suppose outcome success probability given treatment X and Z is $.1+.2X+.5Z$, and the full three-variable causal DAG has Z pointing to both X and Y and X pointing to Y, with independent exogenous noises.

The backdoor set containing Z is valid. Intervention success probabilities are the equally weighted row averages: .55 for treatment one and .35 for treatment zero. Their difference is .20. Observationally, treatment one selects Z equal to one with probability .8, giving outcome mean .70; treatment zero selects it with probability .2, giving mean .20. The raw conditional difference is .50.

Both calculations are exact for the same joint model and answer different questions. Adjustment averages conditional outcome laws over the original Z distribution, whereas conditioning on treatment uses different Z distributions in the two groups. If a Z stratum had no treatment variation, its missing conditional outcome would not be identified by this finite-table formula without another extrapolation assumption.

## Worked example 3: selection can create an apparent contrast

**Example 14.4 (selection can create an apparent contrast).** Take independent fair bits X and Y and recruit a record only when at least one is one. The recruitment indicator is a collider with arrows from both variables. In the recruited group, Y is certainly one when X is zero, but is one only half the time when X is one. The resulting conditional contrast is minus one half despite the original independence.

If the causal model has no X-to-Y mechanism, intervening on X leaves the population outcome distribution unchanged. Conditioning on recruitment changes the observed population and opens the collider association. Recruitment is a descendant of X here, so including it as an ordinary backdoor adjustment variable violates the theorem's conditions. Effects in a selected population require a precisely stated target and a model for selection rather than a generic instruction to condition on all recorded variables.

## A canonical frontdoor calculation with hidden confounding

There are identifying situations beyond an observed backdoor set. Consider the particular model with hidden H affecting X and Y, an observed mediator M generated from X with independent noise, and Y generated from M, H and another independent noise. There is no direct X-to-Y mechanism and no hidden common cause of X and M or of M and Y beyond the displayed paths. Assume the conditional probabilities used below are positive.

Given X, M is independent of H because its fresh noise is independent and its only random parent is X. Consequently the observed law of Y given M and X averages its H-dependent mechanism against the law of H given X. Averaging that conditional law over the original X marginal recovers the H marginal, yielding
$$
\sum_{x'}p(y\mid m,x')p(x')=\sum_hp(y\mid m,h)p(h).
$$
The right side is the outcome law when M is externally fixed. Under an intervention fixing X, the mediator follows its observed conditional law given X, while H retains its marginal and is independent of that mediator's fresh noise. Therefore
$$
p(y\mid\operatorname{do}(X=x))=
\sum_mp(m\mid x)\sum_{x'}p(y\mid m,x')p(x').
$$
This proves the canonical finite frontdoor formula directly from its stated structural model. It is not a claim that any measured mediator satisfies these assumptions. A direct treatment effect, mediator-outcome confounding, informative measurement or missing positivity can invalidate the calculation.

## Counterfactual quantities need their own identification

A structural model defines several potential outcomes on the same noise space, but observational or randomized data need not identify their joint distribution. For example, let X be randomized independently of a fair U. One model has Y equal to U for either treatment; another has Y equal to U XOR X. In both models every observed treatment group has a fair outcome and the average intervention contrast is zero.

Yet the first model has identical individual potential outcomes, while the second has opposite ones for every individual. The proportion whose outcome would change under treatment is therefore different. Randomization identifies the marginal potential-outcome laws, not automatically their cross-world coupling. A population average effect and an individual counterfactual classification are different targets even with ideal treatment assignment.

Consistency itself depends on the intervention description. If several versions of treatment have different effects, collapsing them into one variable may not define a single potential outcome without further assumptions. Likewise interference between units requires a joint assignment model rather than one independent unit-level treatment variable. Graph notation can express richer mechanisms, but it cannot resolve an ambiguous intervention by itself.

## Estimation after identification

An identifying formula is a functional of the population observational law under its assumptions. Estimation replaces that law by sample information and introduces sampling and modelling error. Sparse strata, high-dimensional adjustment, flexible nuisance fitting and finite-sample positivity problems can make an identified effect difficult to estimate accurately. Identification alone supplies neither a confidence interval nor a computational recipe with controlled error.

Conversely, a precise regression coefficient or a narrow posterior interval does not establish identification. If the model excludes the confounded alternative in the first example by assumption, its interval is conditional on that exclusion. Sensitivity analysis can state how a target changes when those assumptions are relaxed. It should not label an unidentifiable observational contrast as a measured intervention effect simply because an estimator returns a number.

The primary causal claim must therefore include the outcome, intervention, target population, observed variables and relevant hidden or selection assumptions. Conditional-independence discovery, parameter learning and intervention reasoning can support each other, but they solve different problems. Keeping their mathematical objects explicit is what makes the final graphical-model capstones assessable.

## Exercises

<a id="causal-graphs-interventions-ex-1"></a>

### Exercise 1

Why does intervention remove the original treatment factor?

<details><summary>Hint 1</summary>

The treatment equation is replaced by a constant.

</details>

<details><summary>Hint 2</summary>

Other mechanisms and the exogenous law are retained.

</details>

<details><summary>Full solution</summary>

The original treatment mechanism no longer generates a random value, so its conditional factor is absent from the modified joint law. Its fixed value remains as an input to downstream equations. All other normalised conditional factors survive by modularity. Ordinary conditioning instead retains the treatment factor and uses it as information, which is why the two distributions can differ.

</details>

<a id="causal-graphs-interventions-ex-2"></a>

### Exercise 2

What does positivity supply in the backdoor proof?

<details><summary>Hint 1</summary>

The formula compares a potential outcome with an observed conditional slice.

</details>

<details><summary>Hint 2</summary>

That slice must occur in the observational law.

</details>

<details><summary>Full solution</summary>

For every Z configuration with target population mass, the desired treatment value must have positive conditional probability. Otherwise the observed outcome law at that treatment and stratum is not defined from the data distribution, so exchangeability and consistency alone cannot identify it through the displayed adjustment formula. Parametric extrapolation would be an additional assumption.

</details>

<a id="causal-graphs-interventions-ex-3"></a>

### Exercise 3

Why is the nondescendant condition imposed on Z?

<details><summary>Hint 1</summary>

Its values must stay unchanged when the treatment mechanism is replaced.

</details>

<details><summary>Hint 2</summary>

The averaging distribution is its observational marginal.

</details>

<details><summary>Full solution</summary>

A nondescendant depends only on noises and mechanisms untouched by the treatment intervention. Thus its intervened value and marginal law agree with its original ones. A treatment descendant can change under intervention, so averaging its observed marginal as though it were pretreatment can target the wrong quantity and invalidate the conditional-independence construction.

</details>

<a id="causal-graphs-interventions-ex-4"></a>

### Exercise 4

Compute the two adjusted outcome probabilities in the confounding example.

<details><summary>Hint 1</summary>

Average each treatment-specific outcome row over a fair Z.

</details>

<details><summary>Hint 2</summary>

The row probabilities are .1, .3, .6 and .8.

</details>

<details><summary>Full solution</summary>

For treatment one the two Z-specific probabilities are .3 and .8, whose average is .55. For treatment zero they are .1 and .6, averaging .35. Their difference is .20. The raw observational difference is .50 because the treatment groups have different Z distributions, so it answers another conditional comparison.

</details>

<a id="causal-graphs-interventions-ex-5"></a>

### Exercise 5

Explain why the two positive-table causal models are observationally indistinguishable.

<details><summary>Hint 1</summary>

Compare their four observed probabilities.

</details>

<details><summary>Hint 2</summary>

Their intervention mechanisms differ despite equal tables.

</details>

<details><summary>Full solution</summary>

Both give fair marginals and equality probability five eighths, so each equal cell has mass five sixteenths and each unequal cell three sixteenths. Every observational dataset on the pair consequently has the same likelihood. The hidden-common-cause model has zero treatment effect while the direct model has contrast one quarter. Their equality of observations does not identify the intervention law.

</details>

<a id="causal-graphs-interventions-ex-6"></a>

### Exercise 6

Why does recruitment by an OR rule create a negative selected contrast?

<details><summary>Hint 1</summary>

Given recruitment and treatment zero, the outcome must be one.

</details>

<details><summary>Hint 2</summary>

Given treatment one, recruitment imposes no restriction on the independent outcome.

</details>

<details><summary>Full solution</summary>

The first conditional outcome probability is one and the second one half, producing a difference of minus one half. The population outcome is independent of treatment, so this selected association is generated by conditioning on a collider. It is not a causal effect of setting treatment in the original population.

</details>

<a id="causal-graphs-interventions-ex-7"></a>

### Exercise 7

In the canonical frontdoor model, why can averaging $p(y\mid m,x)$ over $p(x)$ remove hidden confounding?

<details><summary>Hint 1</summary>

Given X, the mediator noise is independent of H.

</details>

<details><summary>Hint 2</summary>

Apply the law of total probability to the H-given-X distributions.

</details>

<details><summary>Full solution</summary>

The conditional outcome law averages its mechanism over H given X because observing M adds no information about H once X is fixed. Multiplying by the original X probability and summing restores the marginal H distribution. The result equals the outcome law under an intervention fixing the mediator, within the specific structural assumptions. An additional mediator-outcome confounder would break that derivation.

</details>

<a id="causal-graphs-interventions-ex-8"></a>

### Exercise 8

Why does randomized treatment not identify the joint law of both potential outcomes?

<details><summary>Hint 1</summary>

Each unit reveals only its assigned outcome.

</details>

<details><summary>Hint 2</summary>

The two models with equal versus opposite potential outcomes have identical group marginals.

</details>

<details><summary>Full solution</summary>

Randomization identifies each treatment-specific outcome distribution, but not how the two potential outcomes are paired within an individual. Both equal and opposite fair-bit couplings produce the same observed randomized joint law. Their proportions of individuals affected differ. Identifying a cross-world quantity therefore requires assumptions beyond randomization of treatment.

</details>

<a id="causal-graphs-interventions-ex-9"></a>

### Exercise 9

Does a valid adjustment formula automatically provide reliable finite-sample estimates?

<details><summary>Hint 1</summary>

Distinguish a population functional from an estimator.

</details>

<details><summary>Hint 2</summary>

Consider sparse conditional strata.

</details>

<details><summary>Full solution</summary>

No. The formula establishes identification under its causal and positivity assumptions. Replacing its probabilities by estimates introduces sampling, approximation and possibly selection error. Rare strata or high-dimensional conditioning can make that error substantial even when population positivity holds. Confidence or posterior statements need a separate statistical model and analysis for the estimator actually used.

</details>

<a id="causal-graphs-interventions-ex-10"></a>

### Exercise 10

What extra meaning turns a probabilistic generative DAG into the causal model used here?

<details><summary>Hint 1</summary>

Independent-uniform simulation can reproduce a joint law in many ways.

</details>

<details><summary>Hint 2</summary>

Intervention asserts stability of the remaining mechanisms.

</details>

<details><summary>Full solution</summary>

The causal interpretation specifies what happens when one equation is externally replaced and asserts that the other equations and exogenous distribution remain unchanged. A probabilistic factorization alone describes observations and does not entail that modularity. Different stable-mechanism claims can yield the same observational law and different interventions, so the interpretation must be stated explicitly.

</details>
