# Worked answers for personal benefit bounds

Attempt [practice](./benefit_bounds_v1-practice.md) before revealing these explanations. Every four-cell tuple below is ordered as $(00,01,10,11)$, where the first coordinate of a response type is the outcome without the intervention. Success is desirable.

## 1 Complete a changed coupling table

The four probabilities are

$$\left(\frac16+q,\ \frac12-q,\ \frac13-q,\ q\right).$$

Nonnegativity requires $q\ge0$, $q\ge-1/6$, $q\le1/2$, and $q\le1/3$, so precisely $0\le q\le1/3$ is allowed. This is sufficient as well: the probabilities sum to one and have the specified marginals for every such $q$.

Benefit is $B=1/2-q$, harm is $H=1/3-q$, and the average effect is $\delta=1/6$. Consequently

$$B\in[1/6,1/2],\qquad H\in[0,1/3].$$

The lower-benefit endpoint $q=1/3$ has cells $(1/2,1/6,0,1/3)$. The upper-benefit endpoint $q=0$ has cells $(1/6,1/2,1/3,0)$. In either table the last two entries sum to $1/3$ and the second and fourth sum to $1/2$. Intermediate $q$ values attain every intermediate beneficial fraction, proving sharpness.

For $D=Y_1-Y_0$, the endpoint variances are

$$\frac16-\left(\frac16\right)^2=\frac5{36},\qquad
\left(\frac12+\frac13\right)-\left(\frac16\right)^2=\frac{29}{36}.$$

They describe different compatible distributions of individual effects, with exactly known marginal risks. They are not confidence or credible limits for an estimated average. In particular, dividing either variance by the participant count would not derive the sampling variance of the usual difference between independently observed arm means.

## 2 Remove the randomized study scaffold

For independent Bernoulli assignment with $e=1/3$, the observable table in the order $(A,Y)=(0,0),(0,1),(1,0),(1,1)$ is

$$\left(\frac25,\frac4{15},\frac2{15},\frac15\right)$$

under **both** couplings. For example, control successes have probability $(2/3)(2/5)=4/15$. The beneficial and harmful type masses enter each observed arm only through its marginal success probability.

Conditional on the assignment vector, an individual binary outcome sequence with the given arm counts has likelihood

$$p_0^3(1-p_0)^2p_1(1-p_1)^3.$$

If we report the probability of the two success counts rather than a specified outcome sequence, include the binomial factors. At the stated risks this probability is

$$\binom53\binom41
\left(\frac25\right)^3\left(\frac35\right)^2
\left(\frac35\right)\left(\frac25\right)^3
=\frac{69120}{1953125}.$$

Both couplings assign the same probability to these counts and to every other possible observed outcome sequence under this model. Surprising or reversed sample proportions can inform the marginal risks when unknown; they do not introduce a coupling term into the likelihood.

Independent superpopulation draws were essential to this particular product model. In a fixed finite population the response-type counts and treatment allocation induce a different randomization distribution; one must derive that law rather than asserting the same unconditional result. The lesson's claim concerns the declared independent-participant superpopulation experiment.

## 3 Distinguish two kinds of independence

Randomization justifies assignment independence, $A\perp(Y_0,Y_1)$ for one person, with the vector version across participants used in the lesson. It does not justify $Y_0\perp Y_1$ within that person's pair. Both endpoint tables satisfy randomized assignment, and neither has independent potential outcomes.

Here

$$B=\frac35-\frac25u.$$

The prior means of $u$ are $1/2,4/5,1/5$, yielding mean benefits $2/5,7/25,13/25$. These analyses change the prior over unobserved couplings while keeping known marginal risks and the observable law unchanged. The likelihood chooses none of the three. Conditional on those exact risks, the posterior for each chosen $u$ prior equals that prior.

Potential-outcome independence sets $q=p_0p_1=6/25$, corresponding to $u=(6/25)/(2/5)=3/5$. It gives $B=9/25$. This is a point assumption at one compatible coupling, not the conclusion of independently randomized assignment. Under uncertain risks, the same assumption generally needs $u=(p_0p_1-q_L)/(q_U-q_L)$ wherever the denominator is positive. An independent constant-$u$ prior would not impose that relation for all risk pairs.

If risks are unknown and their prior is associated with $u$, the likelihood updates risks and thereby can update the marginal distribution of $u$. Likewise, a prior on the four cell masses may induce dependence among the risks and coupling coordinate. The unchanged-$u$ calculation requires the independent prior factorization stated in the lesson. It is not a theorem that every prior representation of an unidentified component has an unchanged marginal posterior.

## 4 Separate three finite-data summaries

Conjugacy gives independent posteriors $p_0\sim\operatorname{Beta}(3,5)$ and $p_1\sim\operatorname{Beta}(5,3)$. Their means are $3/8,5/8$, and $E(\delta)=1/4$. Evaluating the sharp-bound formulas at these means gives the plug-in interval

$$[\max(0,5/8-3/8),\min(5/8,1-3/8)]=[1/4,5/8].$$

To derive endpoint expectations, write

$$ (p_1-p_0)_+=\int_0^1\mathbf1\{p_0<t<p_1\}\,dt.$$

Taking expectation and using posterior independence gives $E(L)=\int_0^1S_1(t)[1-S_0(t)]\,dt$, where $S_a$ is the posterior survival function for $p_a$. Likewise, $U=\min(p_1,1-p_0)$ gives $E(U)=\int_0^1S_1(t)S_{1-p_0}(t)\,dt$. Here $1-p_0$ and $p_1$ are independent Beta$(5,3)$ variables, so the second integrand is $S_1(t)^2$.

Insert the finite sums from the task. For $S_1$, sum $j=0,\ldots,4$ with total degree seven; for $S_0$, sum $j=0,\ldots,2$ with that same total degree. Products can be integrated term by term using

$$\int_0^1 t^r(1-t)^s\,dt=\frac{r!s!}{(r+s+1)!},\qquad r,s\text{ nonnegative integers}.$$

For an explicit expansion, the two survival polynomials are

$$S_0(t)=1-35t^3+105t^4-126t^5+70t^6-15t^7,$$

$$S_1(t)=1-21t^5+35t^6-15t^7.$$

Their integrals yield

$$E(L)=\frac{919}{3432},\qquad
E(U)=\frac{305}{572},\qquad
E(U-L)=\frac{911}{3432}.$$

The first expectation is about $0.267774$, the second about $0.533217$. The plug-in interval evaluates functions at mean risks; these expectations average functions across uncertain risks. Neither construction supplies quantiles of a posterior distribution for $B$. A credible interval for $B$ would require a probability model for its coupling position as well as a stated probability level and interval construction.

With an additional independent $u\sim\operatorname{Beta}(4,1)$ prior, $E(u)=4/5$ remains unchanged. The mean benefit becomes

$$E(B)=\frac{305}{572}-\frac45\frac{911}{3432}
=\frac{2753}{8580}.$$

The posterior distribution of $B$ can change because the risks, and therefore the location and width of its compatible interval, update. An unchanged independent coupling coordinate does not imply an unchanged benefit distribution. For comparison, independent Uniform$(0,1)$ and Beta$(1,4)$ coupling priors give respectively $2749/6864$ and $749/1560$.

## 5 Use baseline strata and prove attainability

Pooling with weights one half gives $p_0=p_1=1/2$, average effect zero, and pooled benefit bounds $[0,1/2]$.

Within stratum zero, the benefit interval is $[3/10,2/5]$; within stratum one it is $[0,1/10]$. Their weighted sums give

$$\boxed{3/20\le B\le1/4.}$$

Attain the lower endpoint using these conditional four-cell tables:

$$Z=0:\ (3/5,3/10,0,1/10),\qquad
Z=1:\ (1/10,0,3/10,3/5).$$

Their equally weighted mixture is $(7/20,3/20,3/20,7/20)$. It has benefit and harm both $3/20$. Each conditional table has its stated marginal success risks.

Attain the upper endpoint using

$$Z=0:\ (1/2,2/5,1/10,0),\qquad
Z=1:\ (0,1/10,2/5,1/2).$$

The mixture is $(1/4,1/4,1/4,1/4)$, giving benefit and harm both $1/4$. Convex mixtures of the lower and upper conditional tables preserve the conditional marginals and attain every intermediate aggregate value. This proves sharpness rather than just reporting a narrower interval.

The stratum harm intervals are $[0,1/10]$ and $[3/10,2/5]$, yielding aggregate harm $[3/20,1/4]$. Their equality to aggregate benefit also follows from $B-H=0$.

Global no harm is impossible: in stratum one the average effect is $3/5-9/10=-3/10$, requiring at least $3/10$ of that stratum to have the harmful response type. The pooled zero average hides this requirement. Stratification here is justified by baseline status and within-stratum assignment assumptions. Conditioning on a variable influenced by assignment, outcome, or sample inclusion can change those assumptions; “measured” alone supplies no causal argument.

## 6 Transfer to a reversed average effect and an action choice

Now $q\in[0,1/4]$ and the four cells are

$$\left(q,\ \frac14-q,\ \frac34-q,\ q\right).$$

The average effect is $-1/2$, while

$$B\in[0,1/4],\qquad H\in[1/2,3/4].$$

At $q=1/4$ the cells are $(1/4,0,1/2,1/4)$: no one benefits, half are harmed. At $q=0$ they are $(0,1/4,3/4,0)$: a quarter benefit and three quarters are harmed. A negative average can therefore coexist with a positive beneficial fraction. No harm is incompatible with the negative average. No benefit, $Y_1\le Y_0$ for everyone, is compatible with the first table, though it is not established by the risks.

The expected utilities are

$$E(Y_0)=\frac34,\qquad E(Y_1-c)=\frac14-\frac1{10}=\frac3{20}.$$

Action zero has the larger expected utility by $3/5$. Coupling ambiguity does not prevent this risk-neutral comparison: each action's expected utility uses only its own marginal risk. This does not mean every decision criterion depends only on marginal expectations.

The requirement $B\ge1/5$ is possible but not certified. The $q=0$ table satisfies it, and the $q=1/4$ table violates it. For an exact boundary example, $q=1/20$ gives $(1/20,1/5,7/10,1/20)$. All these populations give the same two observable success risks under the declared study. None tells us the identity of any beneficiary.

If $1$ denotes an undesirable event, benefit instead means $Y_0=1,Y_1=0$. Re-derive its bounds, $\max(0,p_0-p_1)$ and $\min(p_0,1-p_1)$, from the appropriate cell. The mathematical joint table stays the same, but the value assigned to its response types changes.
