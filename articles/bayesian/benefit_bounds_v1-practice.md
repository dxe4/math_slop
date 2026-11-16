# Practice with personal benefit bounds

State the population, outcome direction, and assumptions before calculating. Throughout, success is desirable; participants are independent draws from one superpopulation, assignment is independent of each potential-outcome pair, consistency and no interference hold, and we condition on assignments. The first two tasks supply intermediate steps; the later tasks change the structure or require an argument. [Worked answers](./benefit_bounds_v1-answers.md) are separate.

## 1 Complete a changed coupling table

Suppose the exact population risks are $p_0=1/3,p_1=1/2$.

1. Write all four response-type probabilities in terms of $q=\Pr(Y_0=1,Y_1=1)$.
2. Derive the allowable interval for $q$ by checking every cell's nonnegativity.
3. Find sharp bounds for benefit and harm and calculate the average effect.
4. Construct both endpoint tables in the order $(00,01,10,11)$ and check their marginal sums.
5. Compute the two endpoint variances of $D=Y_1-Y_0$. Explain why these are not uncertainty intervals for an estimated mean.

## 2 Remove the randomized study scaffold

Return to the lesson's risks $p_0=2/5,p_1=3/5$. Compare its two endpoint couplings, with benefit $1/5$ and $3/5$. Let independent assignment have $\Pr(A=1)=1/3$.

Write the observable distribution of $(A,Y)$ under each coupling. Then, conditional on assignments, write the likelihood of a sample with three successes among five controls and one among four intervention participants. Must those unlikely-looking counts distinguish the couplings? Explain why the answer holds for every possible sample under the stated superpopulation model, and state why a fixed finite-population randomization claim would need a separate argument.

## 3 Distinguish two kinds of independence

Keep the lesson's exact risks and parameterization $q=(2/5)u$. A colleague says: “Assignment was randomized, so $Y_0$ and $Y_1$ are independent. The fraction benefiting is therefore $9/25$.” Identify the unjustified step.

Derive $B$ as a function of $u$ and compute its mean for Uniform$(0,1)$, Beta$(4,1)$, and Beta$(1,4)$ priors on $u$. What changes in those three analyses? Which, if any, is chosen by the randomized likelihood? Locate potential-outcome independence in the $u$ coordinate. Finally explain why a general prior on the four response-type masses need not leave its induced $u$ marginal unchanged after observing data.

## 4 Separate three finite-data summaries

Use independent Beta$(1,1)$ marginal-risk priors, two successes among six controls, and four among six intervention participants. Do not assign a coupling prior initially.

Derive the posterior risks, the posterior mean average effect, and the bound endpoints evaluated at posterior mean risks. Then derive tail-integral expressions for $E(L)$ and $E(U)$. For positive integers $a,b$, use

$$\Pr(X>t)=\sum_{j=0}^{a-1}\binom{a+b-1}{j}
t^j(1-t)^{a+b-1-j},\qquad X\sim\operatorname{Beta}(a,b).$$

Integrate these polynomials exactly by hand or with the calculator to obtain both endpoint expectations. Explain why neither the plug-in interval nor the interval between expected endpoints has been shown to be a credible interval for $B$. If you now add independent Beta$(4,1)$ prior for $u$, compute the posterior mean benefit and say which prior coordinate did not update. Would $B$ necessarily retain its prior distribution?

## 5 Use baseline strata and prove attainability

An equally weighted two-stratum population has conditional success risks

$$ (p_{00},p_{10})=(1/10,2/5),\qquad
(p_{01},p_{11})=(9/10,3/5).$$

The first subscript is the intervention and the second is the baseline stratum. Both arms have positive assignment probability in each stratum, and the lesson's within-stratum assumptions hold.

Derive pooled risks, the average effect, and the benefit bounds if you discard $Z$. Derive the sharper bounds when retaining $Z$. Construct the four-cell tables in each stratum that attain the aggregate lower and upper endpoints. Derive the aggregate harm bounds. Is no harm, $Y_1\ge Y_0$ for every person, compatible with the conditional risks? Explain why ordinary randomization does not itself guarantee that adding any measured variable is a valid stratification step.

## 6 Transfer to a reversed average effect and an action choice

In a new population, the exact success risks are $p_0=3/4,p_1=1/4$. Without using the lesson's numeric example, derive the benefit and harm bounds and construct their endpoint response-type tables. Can some people benefit when the average effect is negative? Is either global no harm or global no benefit compatible with these risks?

Consider a random person's two available actions. Action 0 yields utility $Y_0$. Action 1 yields utility $Y_1-c$, with known $c=1/10$. Compare their expected utilities. Does ambiguity about the coupling prevent this risk-neutral comparison? Now consider a policy requirement that the beneficial fraction be at least $1/5$. Does knowledge of these marginal risks certify that requirement, refute it, or leave both possibilities? Give compatible tables as evidence. Keep these population statements separate from identifying who would benefit.

After a delay, change the direction of the outcome so that $1$ denotes an undesirable event. Explain how you would redefine benefit before reusing any formula. Reconstruct the four-cell proof rather than memorizing a bound without its outcome convention.
