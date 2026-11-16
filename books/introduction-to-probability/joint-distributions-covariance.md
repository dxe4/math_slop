
# Joint Distributions and Covariance

The arrival time of a bus and the number of waiting passengers describe one situation from two directions. Knowing the distribution of each quantity separately does not tell us how they fit together. A late bus might usually meet a crowded stop, or the timetable might make the passenger count nearly unrelated to the delay. To answer questions involving both measurements we need a joint distribution.

This chapter develops that idea first with tables and then with elementary integrals. We extract marginal distributions, condition on observations, and calculate covariance. The central distinction is between independence, which specifies the whole joint law, and zero covariance, which is only one numerical relation. We will prove that independence implies zero covariance when second moments are finite, and construct a counterexample to the reverse implication.

Preparation is [conditional probability](conditional-probability-bayes.md), [independence](independence.md), [expectation and variance](expectation-variance.md), and [continuous distributions](continuous-distributions.md). Double integrals appear as repeated ordinary integrals over explicitly described regions. No general theory of multiple integration is assumed. All discrete examples have finite support, so their sums and rearrangements create no convergence issues.

## A joint table records more than two lists

**Definition 10.1 (Joint probability mass function).** For discrete variables $X,Y$, the joint mass function is $p(x,y)=P(X=x,Y=y)$. Its entries are nonnegative and sum to one over all allowed pairs.

The pairs, rather than the individual coordinate values, are the complete outcomes for this model. Some combinations can be impossible even though both coordinates individually are possible. Those combinations receive zero mass; omitting them from a table without explanation risks hiding dependence.

**Definition 10.2 (Marginals).** The marginal masses are

$$
p_X(x)=\sum_y p(x,y),\qquad p_Y(y)=\sum_x p(x,y).
$$

These formulas add mutually exclusive alternatives. To observe $X=x$ while ignoring $Y$, we include every possible value of $Y$. The resulting distribution loses information: it remembers how often each row occurs but not how its mass was distributed across the columns.

**Proposition 10.3 (Discrete conditioning).** If $p_Y(y)>0$, then

$$
P(X=x\mid Y=y)=\frac{p(x,y)}{p_Y(y)}.
$$

*Proof.* This is the conditional probability definition with numerator $P(X=x,Y=y)$ and positive denominator $P(Y=y)$. Summing the quotient over $x$ gives one because the numerator sums to $p_Y(y)$. ∎

The denominator is part of the mathematical claim. If a column has total zero, the table does not determine a conditional law on that impossible observation. Dividing by zero does not become legitimate merely because the displayed conditional expression looks familiar.

## Worked Example 10.4: two inspection indicators

Let $X$ indicate a packaging fault and $Y$ indicate a labelling fault on the same item. Their joint law is

| | $Y=0$ | $Y=1$ |
| --- | ---: | ---: |
| $X=0$ | $1/2$ | $1/6$ |
| $X=1$ | $1/4$ | $1/12$ |

All four entries are nonnegative, and their sum is one. The row totals are $P(X=0)=2/3$ and $P(X=1)=1/3$. The column totals are $P(Y=0)=3/4$ and $P(Y=1)=1/4$.

The conditional probability of a packaging fault among items with a labelling fault is

$$
P(X=1\mid Y=1)=\frac{1/12}{1/4}=\frac13.
$$

In fact every cell is the product of its row and column totals: for instance $(2/3)(1/4)=1/6$. Thus these two fault indicators are independent in this particular model. A shared physical cause could instead lead to dependence; the words “two faults” do not establish either relationship.

For comparison, retain the same marginals but put mass $1/4$ at $(1,1)$, $1/12$ at $(1,0)$, zero at $(0,1)$, and $2/3$ at $(0,0)$. Then every label fault comes with a packaging fault. The marginals have not changed, but $P(X=1\mid Y=1)=1$. This is why separate fault rates are insufficient to calculate a combined risk.

## Joint densities and geometry of support

**Definition 10.5 (Joint density).** A nonnegative function $f(x,y)$ is a joint density when its total integral over the plane is one and the probability of a region is its density integral over that region. For the elementary regions here this is evaluated as an iterated integral.

Marginal densities are obtained by integrating out the other coordinate:

$$
f_X(x)=\int_{-\infty}^{\infty}f(x,y)\,dy,\qquad
f_Y(y)=\int_{-\infty}^{\infty}f(x,y)\,dx.
$$

The support should be drawn or translated into inequalities before integrating. A triangular support cannot be treated as a square simply because both variables individually range from zero to one. A point outside the triangle contributes zero density even if each coordinate is in its marginal support.

A joint density at $(x,y)$ is not the probability of that pair. For a small rectangle its probability is approximately density times rectangle area, when the density varies little there. Both a single pair and a vertical line have probability zero under a joint density, although a vertical strip can have positive probability.

**Definition 10.6 (Conditional density).** At a value $x$ for which $0<f_X(x)<\infty$, the density formula

$$
f_{Y\mid X=x}(y)=\frac{f(x,y)}{f_X(x)}
$$

defines a conditional density in the ordinary joint density model.

This is not obtained by the elementary ratio $P(X=x,Y\in B)/P(X=x)$, whose denominator is zero. Instead it describes the limiting local proportions in thin vertical strips at regular values. For the continuous densities used here, taking narrower strips and cancelling their common width leads to the displayed quotient. More general conditional distributions require theory beyond this chapter.

Changing a conditional density at an exceptional marginal value of probability zero does not change the joint law. We therefore use the formula only where its denominator is positive and the stated regular model supports its interpretation.

## Worked Example 10.7: a uniformly filled triangle

Suppose $(X,Y)$ has density two on $0<x<y<1$ and zero elsewhere. The triangle has area one half, so total probability is one. For fixed $x$ between zero and one, $y$ runs from $x$ to one. Therefore

$$
f_X(x)=2(1-x).
$$

For fixed $y$ between zero and one, $x$ runs from zero to $y$, so $f_Y(y)=2y$. These are different marginal laws even though the support uses the same outer interval for both coordinates.

For $0<x<1$, division by the positive marginal density gives

$$
f_{Y\mid X=x}(y)=\frac{1}{1-x},\qquad x<y<1.
$$

Thus $Y$ given $X=x$ is uniform on $(x,1)$. Its conditional mean is $(x+1)/2$. Increasing the observed lower coordinate narrows the possible interval for the upper coordinate and shifts its centre upwards.

The probability that $Y$ exceeds three quarters given $X=1/2$ is a conditional density calculation. The remaining interval is $(1/2,1)$, and its part above three quarters has half the length, so the answer is $1/2$. It is not an event ratio conditioned on a positive probability singleton; it is the stated conditional density model at a regular interior point.

Independence fails decisively. If the two marginal laws were independent, pairs with $x>y$ would have positive density at interior points, whereas the actual density there is zero. Geometric restrictions often expose dependence before any moment calculation is attempted.

## Covariance measures a particular kind of association

**Definition 10.8 (Covariance).** For real random variables with finite second moments,

$$
\operatorname{Cov}(X,Y)=E[(X-E[X])(Y-E[Y])]
=E[XY]-E[X]E[Y].
$$

Finite second moments ensure the product is integrable: $2|XY|\le X^2+Y^2$. Thus every term in this definition exists. A positive covariance means that products of deviations have a positive average; it does not mean every large value of one variable accompanies a large value of the other.

**Proposition 10.9 (Variance of a sum).** For variables with finite second moments and real constants $a,b$,

$$
\operatorname{Var}(aX+bY)=a^2\operatorname{Var}(X)
+b^2\operatorname{Var}(Y)+2ab\operatorname{Cov}(X,Y).
$$

*Proof.* Subtract the mean from the linear combination, square the resulting expression, and take expectations. Linearity gives the two squared deviation terms and twice the product of deviations. These are precisely the variances and covariance on the right. ∎

The covariance term is why variance addition needs an assumption. If $Y=X$, the variance of $X+Y$ is four times the variance of $X$, not twice. If $Y=-X$, the sum is constant and has variance zero. The marginal variances in these two situations are identical, but the covariance changes sign.

**Proposition 10.10 (Independence implies zero covariance).** If $X,Y$ are independent and have finite second moments, then $\operatorname{Cov}(X,Y)=0$.

*Proof.* In a finite table independence makes $p(x,y)=p_X(x)p_Y(y)$. Factoring the resulting product sum gives $E[XY]=E[X]E[Y]$. For the density models here, the same factorisation follows from iterated integrals with $f(x,y)=f_X(x)f_Y(y)$; integrability is ensured by the moment condition. Substitution in the covariance identity gives zero. ∎

The independence criterion concerns every cell, or the full density except on sets of zero area. Covariance compresses a whole distribution into one number. There is no reason for a single numerical equality to recover the entire dependence structure.

When both variances are positive, correlation is covariance divided by the product of standard deviations. It has no units and lies between minus one and one. For completeness, the bound follows from nonnegativity of $E[(A-tB)^2]$ for all real $t$, where $A,B$ are centred and scaled to variance one. The quadratic $1-2tE[AB]+t^2$ cannot be negative, forcing $|E[AB]|\le1$. Correlation is undefined when either variable has zero variance.

## Worked Example 10.11: dependent but uncorrelated

Let $X$ take $-1,0,1$ with equal probabilities, and put $Y=X^2$. Then $Y$ is fully determined by $X$, so the variables are certainly dependent: $P(Y=0\mid X=0)=1$, whereas $P(Y=0)=1/3$.

By symmetry $E[X]=0$, while $E[Y]=2/3$. Also $XY=X^3$, whose expectation is zero. Hence the covariance is zero. The variance of $X$ is $2/3$. Since $Y$ is an indicator of $X\ne0$, its variance is $(2/3)(1/3)=2/9$. Both variances are positive, so the correlation is defined and equals zero.

Large positive and large negative values of $X$ both produce the same positive value of $Y$. The signed products cancel. A scatterplot would show a curved relation, while correlation reports no linear association. Independence would be a much stronger claim, and in this example it is false.

This example also warns against treating a lack of linear association as proof that measurements carry no information about one another. Observing $Y=0$ determines $X$ exactly. Observing $Y=1$ still rules out its middle value.

## Choosing the correct expectation

For any function $g$ with finite absolute expectation, a joint table gives $E[g(X,Y)]=\sum_{x,y}g(x,y)p(x,y)$. A joint density gives the corresponding iterated integral over the actual support. One does not need to find the distribution of $g(X,Y)$ merely to find its expectation.

Conditional expectations can be combined by weighting each conditional mean with the probability of its conditioning value. In a finite model,

$$
E[Y]=\sum_x E[Y\mid X=x]p_X(x),
$$

where zero mass terms are omitted. This follows by inserting the conditional mass formula and cancelling $p_X(x)$. In regular density models the analogous integral is obtained by cancelling $f_X(x)$ inside the marginal integral.

This averaging principle describes a calculation, not independence. Conditional means may vary strongly with $x$. Even a constant conditional mean need not make the whole conditional distribution constant, so it still does not prove independence. Inspect what information the proposed conclusion actually requires.

## Exercises

### Exercise 10.1
<a id="joint-distributions-covariance-ex-1"></a>

A table on $X,Y\in\{0,1\}$ has masses $p(0,0)=1/5$, $p(0,1)=1/5$, $p(1,0)=1/10$, $p(1,1)=1/2$. Find both marginals and $P(X=1\mid Y=0)$.

<details>
<summary>Hint 1</summary>

Add rows and columns before conditioning.
</details>
<details>
<summary>Hint 2</summary>

The denominator for the conditional probability is the first column total.
</details>
<details>
<summary>Solution</summary>

The $X$ masses are $2/5,3/5$ and the $Y$ masses are $3/10,7/10$. All entries sum to one. The conditional denominator is $3/10>0$, so the required probability is $(1/10)/(3/10)=1/3$. The other column would give a different conditional fault probability.
</details>

### Exercise 10.2
<a id="joint-distributions-covariance-ex-2"></a>

For the table in Exercise 10.1, decide independence and calculate covariance.

<details>
<summary>Hint 1</summary>

For indicators, the product equals one only in the bottom right cell.
</details>
<details>
<summary>Hint 2</summary>

Compare $E[XY]$ with $E[X]E[Y]$.
</details>
<details>
<summary>Solution</summary>

The means are $3/5$ and $7/10$, and $E[XY]=1/2$. Covariance is $1/2-21/50=2/25$. It is nonzero, so independence is impossible. Directly, the mass at $(1,1)$ is $1/2$, whereas the product of its marginal masses is $21/50$.
</details>

### Exercise 10.3
<a id="joint-distributions-covariance-ex-3"></a>

Construct two laws for indicators with both marginal probabilities equal to one half: one independent, one with $X=Y$ always.

<details>
<summary>Hint 1</summary>

Use a two by two table.
</details>
<details>
<summary>Hint 2</summary>

For the second law place mass only on the diagonal.
</details>
<details>
<summary>Solution</summary>

The independent law assigns mass one quarter to every pair. The second assigns one half to each of $(0,0)$ and $(1,1)$, and zero elsewhere. Both have the requested marginals. In the first law $P(X=Y)=1/2$; in the second it is one. Marginals therefore cannot determine equality probabilities.
</details>

### Exercise 10.4
<a id="joint-distributions-covariance-ex-4"></a>

A pair has density $c$ on the rectangle $0<x<2$, $0<y<3$. Find $c$, the marginals, and whether the variables are independent.

<details>
<summary>Hint 1</summary>

The rectangle has area six.
</details>
<details>
<summary>Hint 2</summary>

Integrate a constant across each permitted coordinate interval.
</details>
<details>
<summary>Solution</summary>

Normalisation gives $c=1/6$. The marginal density of $X$ is $1/2$ on $(0,2)$ and that of $Y$ is $1/3$ on $(0,3)$. Their product equals the joint density throughout its rectangle and is zero outside it. Thus $X,Y$ are independent uniform variables. Both the factorisation and the rectangular support matter.
</details>

### Exercise 10.5
<a id="joint-distributions-covariance-ex-5"></a>

For density two on $0<x<y<1$, calculate $E[X]$, $E[Y]$, and $E[XY]$.

<details>
<summary>Hint 1</summary>

The marginals from Worked Example 10.7 simplify the first two moments.
</details>
<details>
<summary>Hint 2</summary>

For the product, integrate $2xy$ over $0<x<y<1$.
</details>
<details>
<summary>Solution</summary>

The marginal means are $\int_0^1 2x(1-x)\,dx=1/3$ and $\int_0^1 2y^2\,dy=2/3$. For the product, integrate first in $x$: $\int_0^1 y[y^2]\,dy=\int_0^1 y^3\,dy=1/4$. The covariance is therefore $1/4-2/9=1/36$, which is positive.
</details>

### Exercise 10.6
<a id="joint-distributions-covariance-ex-6"></a>

In the same triangular model find $P(Y<3/4\mid X=1/4)$ using its conditional density.

<details>
<summary>Hint 1</summary>

The conditional support begins at the observed value of $X$.
</details>
<details>
<summary>Hint 2</summary>

Divide the relevant interval length by the entire conditional length.
</details>
<details>
<summary>Solution</summary>

The marginal density at one quarter is $2(3/4)=3/2>0$. Conditional on that coordinate, $Y$ is uniform on $(1/4,1)$. The interval below three quarters has length one half and the entire interval has length three quarters, giving $2/3$. This uses the conditional density interpretation, not division by $P(X=1/4)$.
</details>

### Exercise 10.7
<a id="joint-distributions-covariance-ex-7"></a>

Suppose $\operatorname{Var}(X)=4$, $\operatorname{Var}(Y)=9$, and $\operatorname{Cov}(X,Y)=-3$. Find $\operatorname{Var}(2X+Y)$ and the correlation.

<details>
<summary>Hint 1</summary>

Keep the coefficient two in the cross term.
</details>
<details>
<summary>Hint 2</summary>

The standard deviations are two and three.
</details>
<details>
<summary>Solution</summary>

The variance is $4\cdot4+9+4(-3)=13$. The correlation is $-3/(2\cdot3)=-1/2$. Omitting the covariance term would give twenty five, even though the negative association reduces the spread of this sum.
</details>

### Exercise 10.8
<a id="joint-distributions-covariance-ex-8"></a>

Let $X$ be uniform on $(-1,1)$ and $Y=X^2$. Show that the covariance is zero but the variables are dependent.

<details>
<summary>Hint 1</summary>

Odd functions integrate to zero over this symmetric interval.
</details>
<details>
<summary>Hint 2</summary>

Compare the events $|X|<1/2$ and $Y<1/4$.
</details>
<details>
<summary>Solution</summary>

Symmetry gives $E[X]=E[X^3]=0$, so $E[XY]-E[X]E[Y]=0$. The two displayed events are identical and have probability one half. If independent, their intersection would have probability one quarter, but it actually has probability one half. Thus the variables are dependent despite zero covariance.
</details>

### Exercise 10.9
<a id="joint-distributions-covariance-ex-9"></a>

A finite variable $X$ equals zero or one with probabilities $2/5,3/5$. Given $X=0$, $Y$ has mean two; given $X=1$, it has mean five. Find $E[Y]$ and explain whether independence follows.

<details>
<summary>Hint 1</summary>

Average conditional means using their marginal probabilities.
</details>
<details>
<summary>Hint 2</summary>

Under independence the conditional means would agree, when they exist.
</details>
<details>
<summary>Solution</summary>

Assuming these finite conditional means arise from integrable conditional laws, $E[Y]=(2/5)2+(3/5)5=19/5$. Independence does not follow; it is impossible here because the two positive probability conditioning events produce different means. The data are enough for this overall mean but not for the full law of $Y$.
</details>

### Exercise 10.10
<a id="joint-distributions-covariance-ex-10"></a>

For events $A,B$, express $\operatorname{Cov}(1_A,1_B)$ in probabilities and explain its connection to independence of these two events.

<details>
<summary>Hint 1</summary>

The product of the two indicators is the intersection indicator.
</details>
<details>
<summary>Hint 2</summary>

Use the defining product rule for independent events.
</details>
<details>
<summary>Solution</summary>

The covariance is $P(A\cap B)-P(A)P(B)$. It vanishes exactly when the event independence equation holds. This special equivalence for two indicators does not extend to arbitrary variables: one indicator covariance tests exactly the one event product equation, whereas general independence requires all pairs of value events.
</details>

## Sources

For the wider introductory treatment see Blitzstein and Hwang, *Introduction to Probability*, linked by [Harvard Stat 110](https://stat110.hsites.harvard.edu/). [Grinstead and Snell](https://math.dartmouth.edu/~prob/prob/prob.pdf), chapters 4 and 6, provide additional treatments of conditioning and moments. Examples and exercises in this chapter are original.

## Summary

A joint law specifies how quantities occur together; marginals are obtained by summing or integrating away a coordinate. Conditional laws require a positive denominator, with continuous conditioning interpreted through densities rather than singleton event ratios. Covariance controls the cross term in a variance calculation. Independence implies zero covariance under the stated moment assumptions, while zero covariance usually leaves dependence unresolved. The [next chapter](transformations-sums.md) uses joint information to find distributions of transformed quantities and sums.
