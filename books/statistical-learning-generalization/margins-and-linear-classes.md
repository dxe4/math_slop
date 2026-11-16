
# Margins and Linear Classes

A linear classifier can have infinitely many coefficient vectors and still admit a useful dimension-free certificate when both input size and a positive prediction margin are controlled. The margin is part of the comparison, not a free improvement obtained by counting parameters differently. This chapter proves a margin-risk bound, an online mistake bound and a margin-shattering limit, keeping their distinct experiments separate.

Use labels minus one and plus one, scores equal to the inner product of a coefficient vector with an input, and a classifier predicting plus one at a zero score. Assume input norm is at most C and coefficient norm at most B, with both constants finite and positive. The Rademacher chapter supplies norm complexity and Lipschitz contraction; the online perceptron proof below does not require iid observations.

## Functional and geometric margins

The signed functional margin of a labeled input is its label times its score. A positive margin guarantees correct classification; a negative one guarantees an error. A zero score requires the declared tie rule, so the indicator of nonpositive margin is a conservative upper bound on classification error, rather than exact equality under every tie convention.

Multiplying a nonzero coefficient vector by a positive constant preserves its classifier but scales all functional margins. The geometric margin divides by coefficient norm and is unchanged by this scaling. A margin statement must therefore include a norm scale, a normalization or an equivalent constrained optimization problem. Quoting a large raw score without its coefficient scale gives no invariant separation claim.

A positive norm bound alone does not shrink the class of homogeneous binary halfspaces. Any nonzero coefficient vector can be scaled down into the ball without changing its sign decisions. What gives the following theorem force is a positive margin threshold relative to that bound, not the existence of a finite B by itself.

## A bounded margin loss and its risk certificate

For a fixed positive gamma, define the ramp loss
$$\phi_\gamma(t)=
\begin{cases}
1,&t\le0,\\
1-t/\gamma,&0<t<\gamma,\\
0,&t\ge\gamma.
\end{cases}$$
It lies in the unit interval and is Lipschitz with constant one over gamma. Classification error is at most this loss pointwise. Conditional on a sample, replace each input by its product with the observed sign label; its norm remains bounded by C. The linear-class calculation and contraction therefore give empirical ramp-loss complexity at most B C divided by gamma square root n.

Apply the proved empirical two-sided Rademacher theorem, using range width one. With probability at least one minus delta, every coefficient vector in the fixed ball satisfies
$$R_{01}(w)\le\frac1n\sum_i\phi_\gamma(Y_iw^\top X_i)
+\frac{2BC}{\gamma\sqrt n}
+3\sqrt{\frac{\log(3/\delta)}{2n}}.$$
This is an iid population-risk theorem for a fixed norm ball and margin scale. The empirical ramp term is no greater than the fraction of margins below gamma, so that fraction gives a further conservative version. At exact gamma the ramp is zero. At zero margin it is one, retaining the safe classification upper bound.

The theorem is simultaneous over the coefficient vector and so permits choosing it with the same training observations. Gamma was fixed for this statement. Choosing it after inspecting a plot requires an additional simultaneous event, rather than substituting an unaccounted favorable value.

## Selecting a margin scale with an explicit allocation

Fix a finite nonempty grid of gamma values in advance. Apply the preceding theorem at each grid value with failure probability delta divided by grid size and take a union bound. Every vector and every grid value then obey the bound with log of three times grid size over delta in the concentration term. A learner can select the most useful displayed certificate on that joint event.

A countable grid can similarly receive positive weights summing to at most one, replacing the confidence logarithm for a selected scale by its allocated value. The grid or allocation must be independent of the sample used in the theorem. Rescaling both coefficients and gamma by the same positive constant leaves the empirical ramp loss and the ratio B over gamma unchanged, if the norm-ball bound is rescaled consistently. Thus the certificate respects the geometric rather than purely numerical meaning of margin.

### Worked example: orthogonal sites attain the shattering scale

Take m orthogonal inputs of norm C in a space of dimension at least m. For any desired sign labels, choose coefficients with those signs and equal magnitude B divided by square root m along the corresponding axes. Their norm is B, and every signed margin is B C divided by square root m. Thus every pattern is realizable with margin gamma whenever gamma is no greater than that value.

This is a geometric construction of a finite labeled set, not a claim about iid samples from a particular law. It shows that dimension-free margin limits can still allow many distinct patterns when the desired margin is small.

## A complete margin-shattering upper bound

Suppose a fixed set of m norm-bounded inputs has the property that every sign pattern can be realized by some norm-B vector with every signed margin at least gamma. Draw a fair random sign pattern. For every realization, the normalized signed score supremum is at least gamma, since its realizing vector makes every term at least gamma. Averaging over the signs gives empirical linear Rademacher complexity at least gamma.

The norm calculation bounds that same complexity by B C divided by square root m. Rearranging yields
$$m\le(BC/\gamma)^2.$$
This proves the zero-threshold margin-shattering bound with no combinatorial entropy theorem hidden inside it. The orthogonal-site construction attains its scale.

This is not a claim that the ordinary VC dimension of the norm ball is bounded by that expression independently of a margin requirement. Ordinary shattering asks only for signs and can use arbitrarily small nonzero scores. The positive margin is a stronger realization condition. General fat-shattering permits site-specific thresholds and requires its own definition and theorem; the result here is the explicit zero-threshold version just proved.

## Perceptron mistakes under a fixed separating direction

Now change experiments. Consider any sequence of labeled inputs with norms at most C. Assume there is a unit vector u with every signed inner product at least a positive rho. No independence or stationary distribution is assumed. Start coefficients at zero. Whenever the current signed score is nonpositive, add the label times the input; otherwise make no update.

After M updates, the inner product of the coefficient vector with u is at least M rho, by summing the update inner products. At an update, the squared norm changes by twice the nonpositive signed current score plus input norm squared, so it increases by at most C squared. Starting from zero gives squared norm at most M C squared. Cauchy–Schwarz then implies
$$M\rho\le C\sqrt M,\qquad M\le(C/\rho)^2$$
for positive M. The zero-update case already satisfies the inequality. This completes the perceptron update-count proof.

For a finite separable dataset, cycling through the examples must eventually produce a full pass with no update; otherwise the finite update bound would be exceeded. The final vector has strictly positive signed score at each site under the nonpositive-score update convention. The theorem bounds updates, not wall-clock cost without a pass and arithmetic model. It also does not establish a fresh-population risk bound from an adversarial sequence. An iid margin theorem and an online mistake theorem can support related algorithms while making different claims.

### Worked example: two opposite sites

Take unit inputs plus e one and minus e one, labeled respectively plus one and minus one. The unit separator e one gives signed margin one at both sites. The perceptron bound with C and rho both one permits at most one update. From zero, the first encountered example updates the vector to e one, regardless of which site arrives first. Both scores are then correctly separated.

For an iid population supported on these two labeled sites, the same vector also has zero actual classification risk. That latter conclusion follows from knowing the complete population support here; the general mistake bound alone would not establish it for unseen inputs elsewhere.

## Convex margin objectives and their hypotheses

For a finite sample strictly separable by a homogeneous hyperplane, scale a separator until every signed score is at least one. Minimize half the squared coefficient norm subject to those finitely many closed linear inequalities. The feasible set is nonempty and closed, and bounded objective sublevel sets are compact in finite dimension, so a minimizer exists. Strict convexity gives uniqueness: two distinct minimizers would have a feasible midpoint with smaller norm squared.

The hinge loss, the positive part of one minus signed score, is convex. Adding a positive squared-norm penalty gives a strongly convex soft-margin objective. It can trade training margin violations against norm size without presuming separability. Its statistical interpretation still needs the appropriate loss and generalization argument. Optimization existence does not prove population classification optimality.

An intercept can be handled by augmenting inputs with a constant coordinate, which changes their norm bound to the square root of C squared plus one. The augmented coefficient norm also includes that intercept. If the actual objective leaves the intercept unpenalized, it is a different norm-constrained class and needs an explicit bound on that coordinate or another analysis.

### Worked example: conflicting duplicate labels

Suppose two training rows have the same input but opposite labels. For any score t at that input, their hinge losses are the positive parts of one minus t and one plus t. Their sum is at least two: when t lies between minus one and one it equals two, and outside that interval it is larger. Their average hinge loss is therefore at least one, and no strictly positive-margin separator exists.

Duplicated rows can thus make the separability premise false even though a numerical solver returns a vector. A soft-margin fit remains defined under a positive penalty, but it is solving a compromise objective. Neither more passes of a perceptron nor an assertion of a large model class changes the contradictory observed constraints.

## Reading a margin certificate honestly

A small empirical margin loss and a small complexity term jointly support the displayed population upper bound under iid sampling. A large observed margin alone does not establish that future data share the same bounded-input law. A small coefficient norm alone does not control binary capacity without the margin scale. A solver's ability to find a margin does not prove that a scientific label reflects the intended event.

These limitations do not diminish the result. They identify precisely why norm geometry, loss smoothing, a declared confidence allocation and a sampling model can produce a useful certificate. The later convex-learning and boosting chapters analyze particular optimization procedures and ensembles under their own assumptions.

## A geometric margin also bounds input perturbations

For a nonzero coefficient vector, a correctly signed score of size m cannot change sign under an input perturbation of norm strictly less than m divided by coefficient norm. Indeed, Cauchy–Schwarz bounds the absolute score change by coefficient norm times perturbation norm. Subtracting this allowance from the positive signed score proves the robustness statement.

The same ratio is the exact Euclidean distance to the decision hyperplane. Any perturbation reaching that hyperplane must have inner product with the coefficient vector equal to minus the original score. Cauchy–Schwarz gives the stated lower bound on its norm. Taking the perturbation parallel to the negative score times the coefficient vector, divided by squared coefficient norm, attains that bound. Crossing a little farther reverses the sign; the exact boundary still uses the declared tie convention.

This is a deterministic local statement about the chosen Euclidean input metric. It does not establish robustness to changes in label laws, measurement meaning or population composition. Rescaling feature units changes that metric unless the perturbation budget is transformed consistently. A large geometric margin in arbitrary numerical coordinates is therefore not automatically a scientifically meaningful tolerance to every kind of measurement error. The relevant input space and cost of perturbations belong to the learning tuple, just as the classification loss does. Together, the ramp-risk certificate, positive-margin shattering bound and perceptron mistake bound connect score geometry to three distinct guarantees. The next chapter, Stability, studies how the selected algorithm responds to changing one training observation.

## Exercises

<a id="margins-and-linear-classes-ex-1"></a>

### Exercise 1

Prove that ramp loss upper-bounds classification error under the declared tie convention.

<details><summary>Hint 1</summary>

A genuine error has negative margin or an unfavorable zero tie.

</details>

<details><summary>Hint 2</summary>

The ramp equals one at every nonpositive margin.

</details>

<details><summary>Full solution</summary>

Whenever the classifier errs, the signed margin is nonpositive, where ramp loss is one. At a correctly classified zero tie the ramp may still equal one, which only makes the bound conservative. Positive margins are correctly classified and have nonnegative ramp loss.

</details>

<a id="margins-and-linear-classes-ex-2"></a>

### Exercise 2

Why does a positive coefficient-norm bound alone leave the homogeneous halfspace class unchanged?

<details><summary>Hint 1</summary>

Positive rescaling preserves every sign decision.

</details>

<details><summary>Hint 2</summary>

Scale any nonzero vector into the ball.

</details>

<details><summary>Full solution</summary>

For any nonzero coefficient vector, multiply by the smaller of one and B divided by its norm. The result lies in the positive-radius ball and defines the same classifier. Thus a margin or another constraint is needed before concluding dimension-free binary capacity control.

</details>

<a id="margins-and-linear-classes-ex-3"></a>

### Exercise 3

Derive the margin-shattering upper bound from Rademacher complexity.

<details><summary>Hint 1</summary>

Every sign pattern supplies a vector with signed mean at least gamma.

</details>

<details><summary>Hint 2</summary>

Compare with the norm-ball upper bound.

</details>

<details><summary>Full solution</summary>

The shattering property gives $\widehat{\mathfrak R}\ge\gamma$. The norm calculation gives $\widehat{\mathfrak R}\le BC/\sqrt m$. Therefore $m\le(BC/\gamma)^2$. This is zero-threshold positive-margin shattering, not ordinary sign shattering.

</details>

<a id="margins-and-linear-classes-ex-4"></a>

### Exercise 4

Check the norm and margin in the orthogonal-site construction.

<details><summary>Hint 1</summary>

Use equal coefficient magnitudes along m orthogonal axes.

</details>

<details><summary>Hint 2</summary>

Sum the squared coordinates.

</details>

<details><summary>Full solution</summary>

Take $w=(B/\sqrt m)\sum_i y_i e_i$ and $x_i=Ce_i$. Then $\|w\|^2=B^2$ and $y_iw^\top x_i=BC/\sqrt m$ for every i, realizing every pattern at that margin.

</details>

<a id="margins-and-linear-classes-ex-5"></a>

### Exercise 5

Prove the squared-norm inequality in the perceptron proof.

<details><summary>Hint 1</summary>

Expand the norm after an update.

</details>

<details><summary>Hint 2</summary>

The update happens only when the signed current score is nonpositive.

</details>

<details><summary>Full solution</summary>

At an update, $\|w+yx\|^2=\|w\|^2+2y w^\top x+\|x\|^2\le\|w\|^2+C^2$. Inducting over M updates gives $\|w_M\|^2\le MC^2$. No iid assumption is involved.

</details>

<a id="margins-and-linear-classes-ex-6"></a>

### Exercise 6

Why does a finite update bound imply termination when cycling over a finite separable dataset?

<details><summary>Hint 1</summary>

A pass with any violation produces an update.

</details>

<details><summary>Hint 2</summary>

Infinitely many violating passes would contradict the bound.

</details>

<details><summary>Full solution</summary>

If no complete pass were update-free, every pass would add at least one update, producing infinitely many. The theorem permits only finitely many under the separating-margin assumption. Therefore a full pass eventually has none, so every sample has positive signed score.

</details>

<a id="margins-and-linear-classes-ex-7"></a>

### Exercise 7

Make the margin theorem simultaneous over K prespecified positive scales.

<details><summary>Hint 1</summary>

Allocate delta divided by K to each theorem.

</details>

<details><summary>Hint 2</summary>

Take a union bound over scales while retaining vector simultaneity.

</details>

<details><summary>Full solution</summary>

Use the same margin certificate with the concentration logarithm replaced by log of three K over delta. Its failure probability at each scale is delta divided by K; their union is at most delta. A scale chosen from this fixed list after seeing data is then covered.

</details>

<a id="margins-and-linear-classes-ex-8"></a>

### Exercise 8

What happens to the certificate if all coefficients, the norm bound and gamma are multiplied by the same positive c?

<details><summary>Hint 1</summary>

Ramp arguments depend on score divided by gamma.

</details>

<details><summary>Hint 2</summary>

The complexity ratio B divided by gamma is invariant.

</details>

<details><summary>Full solution</summary>

Every empirical ramp loss remains unchanged, the ratio B over gamma is unchanged and the concentration term is unchanged. The sign classifier also stays the same. This demonstrates why an unnormalized functional margin should not be interpreted apart from coefficient scale.

</details>

<a id="margins-and-linear-classes-ex-9"></a>

### Exercise 9

Prove the lower bound for the two conflicting duplicate hinge losses.

<details><summary>Hint 1</summary>

Split t into the intervals below minus one, between minus one and one, and above one.

</details>

<details><summary>Hint 2</summary>

Alternatively use positive part at least its argument.

</details>

<details><summary>Full solution</summary>

Their sum is at least the sum of their untruncated arguments, equal to two, and also nonnegative. In the central interval both arguments are nonnegative and the sum equals two; outside it the positive surviving term exceeds two. Thus average hinge loss cannot fall below one.

</details>

<a id="margins-and-linear-classes-ex-10"></a>

### Exercise 10

Does a perceptron mistake bound by itself establish an iid population-risk theorem?

<details><summary>Hint 1</summary>

Its assumptions concern an arbitrary presented sequence.

</details>

<details><summary>Hint 2</summary>

A fresh-distribution probability is an additional object.

</details>

<details><summary>Full solution</summary>

No. The update theorem controls behavior on the given sequence under one common separating direction. It does not specify an iid target law or bound its unseen error mass. A population statement needs a separate sampling and margin-generalization argument, such as the ramp-loss theorem under its stated conditions.

</details>
