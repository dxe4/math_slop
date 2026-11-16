var e=`---
parent_id: book-probability-models-proofs
chapter_id: conditional-expectation-and-projection
title: "Conditional Expectation and Information Projection"
level: advanced-undergraduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Conditional Expectation and Information Projection

Conditioning on an event changes a law; conditioning on information produces a random variable. The value $\\mathbb{E}[X \\mid G]$ is the best $G$-measurable account of $X$ in an integral sense. It is not generally obtained by substituting a random value into an elementary event formula. This chapter develops the definition, finite-partition computations, tower and pull-out laws, and the $L^{2}$ projection interpretation.

## 1. Information is a sigma-algebra

Let $G\\subseteq F$ be a sub-sigma-algebra. A random variable is $G$-measurable when its value can be determined from the information encoded by $G$. For integrable $X$, a **conditional expectation** $Z=\\mathbb{E}[X \\mid G]$ is any $G$-measurable integrable variable satisfying

$\\int_{A} Z dP=\\int_{A} X dP$ for every $A\\in G$.

Existence follows from the Radon–Nikodym theorem; uniqueness is only almost sure. If two versions differ on a null set they represent the same conditional expectation. Pointwise claims therefore require a declared version.

For a finite partition $C_{1},...,C_{m}$ with positive masses and $G=\\sigma (C_{1},...,C_{m})$,

$\\mathbb{E}[X \\mid G]=\\sum_{j} \\mathbb{E}[X \\mid C_{j}]\\mathbf{1}_{C_{j}}$.

It averages within each information cell. Cells of probability zero can be assigned arbitrary values without changing the almost-sure object.

### Worked finite table

Suppose four equally likely outcomes have $X$ values $1,3,4,8$, and $G$ reveals only whether the outcome is among the first two. Conditional cell averages are $2$ and $6$, so $\\mathbb{E}[X \\mid G]$ takes values $2,2,6,6$.

## 2. Fundamental identities

For integrable variables and suitable sigma-algebras:

- **preservation:** $\\mathbb{E}[\\mathbb{E}[X \\mid G]]=\\mathbb{E}[X]$;
- **linearity:** $\\mathbb{E}[aX+bY \\mid G]=a\\mathbb{E}[X \\mid G]+b\\mathbb{E}[Y \\mid G]$;
- **positivity:** $X\\ge 0$ implies $\\mathbb{E}[X \\mid G]\\ge 0$ almost surely;
- **known quantities:** if $X$ is $G$-measurable, $\\mathbb{E}[X \\mid G]=X$;
- **independent information:** if $X$ is independent of $G$, $\\mathbb{E}[X \\mid G]=\\mathbb{E}[X]$;
- **pull-out:** if $H$ is bounded and $G$-measurable, $\\mathbb{E}[HX \\mid G]=H \\mathbb{E}[X \\mid G]$;
- **tower:** if $H\\subseteq G$, then $\\mathbb{E}[\\mathbb{E}[X \\mid G] \\mid H]=\\mathbb{E}[X \\mid H]$.

The tower proof checks the defining integrals on every event in $H$. The false reverse expression $\\mathbb{E}[\\mathbb{E}[X \\mid H] \\mid G]$ equals $\\mathbb{E}[X \\mid H]$, not generally $\\mathbb{E}[X \\mid G]$, because the inner variable is already $H$- and hence $G$-measurable.

## 3. Conditioning on a random variable

Write $\\mathbb{E}[X \\mid Y]$ for $\\mathbb{E}[X \\mid \\sigma (Y)]$. By the Doob–Dynkin representation, there is a measurable function $m$ with

$\\mathbb{E}[X \\mid Y]=m(Y)$ almost surely.

In a discrete model, for values with $\\mathbb{P}(Y=y)>0$,

$m(y)=\\sum_{x} xP(X=x \\mid Y=y)$.

With a joint density, positive marginal density $f_{Y}(y)$, and a finite conditional absolute first moment at the displayed $y$,

$m(y)=\\int x f_{X,Y}(x,y)/f_{Y}(y) dx$.

This ratio formula is valid only where the denominator is positive, the integral exists, and densities are available. Integrability of $X$ guarantees the required conditional integrability for $\\mathbb{P}_{Y}$-almost every $y$, not necessarily at every individually selected null point. General conditional laws require a regular conditional probability. For standard Borel target spaces, existence follows from Durrett, *Probability: Theory and Examples*, official Version 5, Theorem 4.1.17, pp. 214--215; Theorem 4.1.18, pp. 215--216, gives a measurable version as a function of $Y$. Arbitrary measurable spaces need more care, and versions remain determined only almost everywhere.

### Worked example: a noisy measurement

Let $X$ be symmetric $\\pm 1$, and given $X$, let $Y=X$ with probability $q>1/2$ and $Y=-X$ otherwise. Bayes symmetry gives $\\mathbb{P}(X=Y \\mid Y)=q$; hence

$\\mathbb{E}[X \\mid Y=y]=qy+(1-q)(-y)=(2q-1)y$.

The conditional mean shrinks the noisy sign toward zero.

## 4. Conditional variance and decomposition

When $X\\in L^{2}$, define

$\\operatorname{Var}(X \\mid G)=\\mathbb{E}[(X-\\mathbb{E}[X \\mid G])^{2} \\mid G]=\\mathbb{E}[X^{2} \\mid G]-\\mathbb{E}[X \\mid G]^{2}$.

Taking expectations and expanding yields the law of total variance:

$\\operatorname{Var}(X)=\\mathbb{E}[\\operatorname{Var}(X \\mid G)]+\\operatorname{Var}(\\mathbb{E}[X \\mid G])$.

The first term is unresolved variation within information cells; the second is variation explained between cells. Both are nonnegative, so information can explain at most the total variance.

## 5. Orthogonal projection in $L^{2}$

Let $L^{2}(G)$ be the closed subspace of square-integrable $G$-measurable variables. If $Z=\\mathbb{E}[X \\mid G]$, then for every bounded $G$-measurable $H$,

$\\mathbb{E}[(X-Z)H]=0$.

Truncation extends this to every $H\\in L^{2}(G)$. Thus $Z$ is the orthogonal projection of $X$ onto available information. For any $W\\in L^{2}(G)$,

$\\mathbb{E}[(X-W)^{2}]=\\mathbb{E}[(X-Z)^{2}]+\\mathbb{E}[(Z-W)^{2}]$.

So $Z$ uniquely minimises mean squared error up to almost-sure equality. This does not say it minimises absolute error; conditional medians serve that different loss.

## 6. Conditional Jensen and probability

If $\\varphi$ is convex and integrability conditions hold,

$\\varphi (\\mathbb{E}[X \\mid G])\\le \\mathbb{E}[\\varphi (X) \\mid G]$ almost surely.

Taking $\\varphi (x)=x^{2}$ gives $\\mathbb{E}[X \\mid G]^{2}\\le \\mathbb{E}[X^{2} \\mid G]$. For an event $A$,

$\\mathbb{P}(A \\mid G):=\\mathbb{E}[\\mathbf{1}_{A} \\mid G]$

is a $G$-measurable random probability. It lies in $[0,1]$ almost surely and satisfies $\\mathbb{E}[\\mathbf{1}_{B}\\mathbb{P}(A \\mid G)]=\\mathbb{P}(A\\cap B)$ for $B\\in G$.

## 7. Failures worth detecting

1. $\\mathbb{E}[X \\mid G]$ is a random variable, while $\\mathbb{E}[X \\mid A]$ is a number when $\\mathbb{P}(A)>0$.
2. Versions can disagree on null events; conditioning on $Y=y$ in a continuous model is not elementary event conditioning.
3. $\\mathbb{E}[X \\mid G]=\\mathbb{E}[X]$ does not by itself imply independence of $X$ and $G$; it records only the conditional first moment.
4. More information changes the projection but not monotonically pointwise.
5. Pulling out a factor requires measurability with respect to the conditioning information.
6. The tower law requires nested sigma-algebras.

## Proofs from the defining integral identity

Throughout the following results $X$ is integrable and $\\mathcal H\\subseteq\\mathcal G\\subseteq F$ are sub-sigma-algebras. Equalities of conditional expectations mean almost-sure equality of versions, not an assertion about every point in an exceptional null set. Existence by the Radon–Nikodym theorem is a cited measure-theoretic result; the algebra and prediction properties below follow from the defining integral identity.

**Proposition 9.1 (Uniqueness and positivity).** Two conditional expectations of $X$ given $\\mathcal G$ agree almost surely. If $X\\ge0$ almost surely, every conditional version is nonnegative almost surely.

*Proof.* If $Z_1,Z_2$ are versions, their integrable difference $D$ has integral zero on every event of $\\mathcal G$. Apply this to $\\{D>0\\}$; the nonnegative variable $D1_{\\{D>0\\}}$ has expectation zero and therefore vanishes almost surely. Repeat for $-D$ to obtain equality. For positivity, if a version $Z$ were negative on a set of positive probability, some $\\{Z\\le-1/n\\}$ would have positive probability. Its $Z$ integral would be negative, while its $X$ integral is nonnegative, contradicting the defining identity. ∎

Linearity now follows by testing a linear combination of versions on every observable event and applying uniqueness. Preservation follows by choosing the whole sample space as that event. These proofs check integrability as well as measurability: a finite linear combination of integrable candidates remains integrable.

**Theorem 9.2 (Tower property).** For nested information,
$E[E[X\\mid\\mathcal G]\\mid\\mathcal H]=E[X\\mid\\mathcal H]$ almost surely.

*Proof.* Let $Z=E[X\\mid\\mathcal G]$ and $W=E[Z\\mid\\mathcal H]$. By definition, $W$ is integrable and $\\mathcal H$-measurable. For every $A\\in\\mathcal H$, nesting gives $A\\in\\mathcal G$, so
$\\int_AW\\,dP=\\int_AZ\\,dP=\\int_AX\\,dP$.
Thus $W$ satisfies both requirements defining the conditional expectation of $X$ given $\\mathcal H$. Uniqueness proves the result. ∎

If one conditions first on $\\mathcal H$ and then on $\\mathcal G$, the inner variable is already $\\mathcal G$-measurable and remains unchanged. This explains the different order without appealing to a verbal slogan about “averaging averages”. For nonnested information, neither displayed simplification follows automatically.

**Proposition 9.3 (Pull-out and orthogonality, with extension).** If $H$ is bounded and $\\mathcal G$-measurable and $Z=E[X\\mid\\mathcal G]$, then $E[HX\\mid\\mathcal G]=HZ$ and $E[H(X-Z)]=0$.

*Proof.* First take $H=1_B$ for $B\\in\\mathcal G$. Testing over $A\\in\\mathcal G$ reduces the proposed identity to $\\int_{A\\cap B}Z=\\int_{A\\cap B}X$. Finite linear combinations prove it for simple $H$. Approximate a bounded measurable $H$ uniformly by simple variables with a common bound. Dominated convergence applies to both their products with $X$ and with $Z$, since both are integrable. The defining integral identity passes to the limit and yields the result by uniqueness. Choosing $A=\\Omega$ and subtracting gives orthogonality. ∎

For $X\\in L^2$, its conditional mean also lies in $L^2$. One direct proof avoids assuming this in advance. Conditional positivity gives, for each rational $r$,
$0\\le E[(X-r)^2\\mid\\mathcal G]=E[X^2\\mid\\mathcal G]-2rZ+r^2$.
Intersect the countably many probability-one events on which these inequalities hold. Continuity of the quadratic extends the inequality to every real $r$ on that event. Minimising at the realised value $r=Z$ gives $Z^2\\le E[X^2\\mid\\mathcal G]$, so $E[Z^2]\\le E[X^2]$.

Now if $H\\in L^2(\\mathcal G)$, clip it to bounded $H_n$. Cauchy–Schwarz gives
$|E[(H-H_n)(X-Z)]|\\le\\|H-H_n\\|_2\\|X-Z\\|_2\\to0$.
Bounded orthogonality therefore extends to every such $H$. The same truncation, tested on each observable event, justifies pull-out for square-integrable factors when their products occur in the conditional variance expansion.

**Theorem 9.4 (Projection identity).** If $X\\in L^2$, $Z=E[X\\mid\\mathcal G]$, and $W\\in L^2(\\mathcal G)$, then
$E[(X-W)^2]=E[(X-Z)^2]+E[(Z-W)^2]$.

*Proof.* Both $Z$ and $W$ are square-integrable, so all terms and products are integrable. Write $X-W=(X-Z)+(Z-W)$, expand, and use extended orthogonality with $H=Z-W$ to remove the cross term. The final term is nonnegative and vanishes exactly when $W=Z$ almost surely. ∎

Taking $W=E[X]$ gives total variance, since $E[Z]=E[X]$. This proof also explains why an unbounded conditional mean may be used in a product here: its square integrability has already been proved, rather than silently inferred from a bounded pull-out rule.

**Theorem 9.5 (Conditional Jensen on the real line).** If $\\varphi:\\mathbb R\\to\\mathbb R$ is finite and convex, and both $X$ and $\\varphi(X)$ are integrable, then
$\\varphi(E[X\\mid\\mathcal G])\\le E[\\varphi(X)\\mid\\mathcal G]$ almost surely.

*Proof.* At each rational point choose a supporting affine line $\\ell_q(x)=a_qx+b_q$. Finite convex functions are continuous, and these countably many lines have supremum $\\varphi(x)$ at every real $x$; nearby rational contact points approximate each point and its supporting value. Since $\\ell_q(X)\\le\\varphi(X)$, conditional positivity and linearity give
$\\ell_q(Z)\\le E[\\varphi(X)\\mid\\mathcal G]$ almost surely for each rational $q$. Intersect the countably many full-probability events and take the supremum there. The result is exactly the stated inequality. ∎

The countable family is essential for choosing one common exceptional null set. An unqualified intersection over uncountably many probability-one events would not be justified. For convex functions defined only on an interval, one must also check that the conditional mean stays in the domain and that the relevant expectations exist.

### Worked Example 9.6: weighted cells and a genuine tower calculation

Let outcomes $a,b,c,d$ have probabilities $1/8,3/8,1/4,1/4$, and let $X$ take values $0,4,2,6$ respectively. Let $\\mathcal G$ reveal cells $\\{a,b\\},\\{c\\},\\{d\\}$, while $\\mathcal H$ reveals $\\{a,b\\},\\{c,d\\}$.

On the first cell, the conditional mean is $[0(1/8)+4(3/8)]/(1/2)=3$. The other two $\\mathcal G$ cells give values two and six. Thus $E[X\\mid\\mathcal G]$ takes values $3,3,2,6$.

Conditioning that variable on the coarser information leaves the first-cell value three and averages the last two equally weighted outcomes to four. Direct conditioning of $X$ on $\\mathcal H$ gives the same values $3,3,4,4$, verifying the tower.

The overall expectation is $7/2$. An unweighted average of the original four values would be three and would use the wrong probability law. Cell averaging requires the conditional weights within each cell, not merely a count of its listed points.

### Worked Example 9.7: total variance in a latent Bernoulli model

Let $G$ be a fair zero-one variable. Given $G=0$, let $X$ be Bernoulli with success probability $1/4$; given $G=1$, let it be Bernoulli with success probability $3/4$. Its unconditional success probability is one half, so $\\operatorname{Var}(X)=1/4$.

The conditional mean is $1/4+G/2$. It takes two equally weighted values separated by one half and has variance $1/16$. Both conditional Bernoulli variances equal $3/16$, so their expectation is $3/16$. Total variance reads $1/4=3/16+1/16$.

The residual $X-E[X\\mid G]$ is generally not zero. Its mean square is $3/16$, whereas the best constant predictor one half has mean square $1/4$. Observing the group reduces average squared error by exactly $1/16$.

This does not say every individual prediction becomes numerically closer for every outcome. It compares risks averaged under the joint law. Nor does a conditional mean determine the entire conditional distribution in general; the Bernoulli setting happens to make its mean also its success parameter.

### Worked Example 9.8: a continuous nonlinear prediction

Let $X$ be uniform on $(-1,1)$, and let $\\varepsilon$ be an independent fair sign. Put $Y=X^2+\\varepsilon$. Every variable is square-integrable. Independence gives $E[\\varepsilon\\mid X]=0$, so $E[Y\\mid X]=X^2$.

The optimal mean-square prediction error using all information in $X$ is therefore $E[\\varepsilon^2]=1$. The best constant predictor is $E[Y]=1/3$. Since $E[X^4]=1/5$, the variance of $X^2$ is $1/5-1/9=4/45$, and the constant predictor's error is $1+4/45=49/45$.

For an affine predictor, symmetry gives $\\operatorname{Cov}(X,Y)=E[X^3]+E[X\\varepsilon]=0$. Its best slope is zero, so affine prediction cannot improve on the constant here. The nonlinear conditional mean still improves risk by $4/45$.

The example separates three predictor classes: constants, affine functions, and all square-integrable measurable functions of the observed variable. The projection space determines what “best” means, and a zero linear correlation does not erase the useful nonlinear information.

## 8. Exercises with complete solutions

### 1. Trivial information

**Exercise 9.1**
<a id="conditional-expectation-and-projection-ex-1"></a>

Show $\\mathbb{E}[X \\mid \\{\\varnothing ,\\Omega \\}]=\\mathbb{E}[X]$ almost surely.

<details>
<summary>Hint 1</summary>

A measurable variable for trivial information is constant.

</details>
<details>
<summary>Hint 2</summary>

Use the defining identity on the whole sample space to identify the constant.

</details>
<details>
<summary>Solution</summary>

**Solution.** A variable measurable for the trivial sigma-algebra is constant almost surely. The defining integral over $\\Omega$ forces that constant to equal $\\mathbb{E}[X]$.


</details>

### 2. Full information

**Exercise 9.2**
<a id="conditional-expectation-and-projection-ex-2"></a>

Show $\\mathbb{E}[X \\mid F]=X$.

<details>
<summary>Hint 1</summary>

Try the original variable as a proposed conditional version.

</details>
<details>
<summary>Hint 2</summary>

It already has full-information measurability and the correct integrals.

</details>
<details>
<summary>Solution</summary>

**Solution.** $X$ is $F$-measurable, and its integrals over every $A\\in F$ plainly equal themselves, so it satisfies the definition.


</details>

### 3. Two-cell computation

**Exercise 9.3**
<a id="conditional-expectation-and-projection-ex-3"></a>

Outcomes are equiprobable with $X=(0,2,5,9)$; $G$ has cells $\\{1,2,3\\}$ and $\\{4\\}$. Find $\\mathbb{E}[X \\mid G]$.

<details>
<summary>Hint 1</summary>

Average only within the information cells.

</details>
<details>
<summary>Hint 2</summary>

The three-outcome cell has a different denominator from the singleton.

</details>
<details>
<summary>Solution</summary>

**Solution.** The first cell average is $7/3$; the second is $9$. Thus the conditional variable is $(7/3,7/3,7/3,9)$.


</details>

### 4. Verify the cell definition

**Exercise 9.4**
<a id="conditional-expectation-and-projection-ex-4"></a>

Verify the answer to Exercise 3 on each event of $G$.

<details>
<summary>Hint 1</summary>

Check the defining integral separately on each atom.

</details>
<details>
<summary>Hint 2</summary>

Every other observable event is a union of these atoms.

</details>
<details>
<summary>Solution</summary>

**Solution.** On the first cell the integral is $(1/4)7=(1/4)(0+2+5)$; on the singleton both sides are $9/4$. Additivity gives equality on unions, including $\\Omega$ and $\\varnothing$.


</details>

### 5. Preservation of expectation

**Exercise 9.5**
<a id="conditional-expectation-and-projection-ex-5"></a>

Derive $\\mathbb{E}[\\mathbb{E}[X \\mid G]]=\\mathbb{E}[X]$.

<details>
<summary>Hint 1</summary>

Choose the whole sample space as the observable event.

</details>
<details>
<summary>Hint 2</summary>

Its defining integral identity is the expectation preservation statement.

</details>
<details>
<summary>Solution</summary>

**Solution.** Use $A=\\Omega$ in the defining integral identity.


</details>

### 6. Pulling out an indicator

**Exercise 9.6**
<a id="conditional-expectation-and-projection-ex-6"></a>

For $B\\in G$, show $\\mathbb{E}[\\mathbf{1}_{B}X \\mid G]=\\mathbf{1}_{B}\\mathbb{E}[X \\mid G]$.

<details>
<summary>Hint 1</summary>

Test the proposed conditional version over an arbitrary observable event.

</details>
<details>
<summary>Hint 2</summary>

Intersect that event with B and use the original defining identity.

</details>
<details>
<summary>Solution</summary>

**Solution.** The proposed right side is $G$-measurable. On $A\\in G$, its integral is the integral of $\\mathbb{E}[X \\mid G]$ over $A\\cap B$, equal to that of $X$, hence to that of $\\mathbf{1}_{B}X$ over $A$.


</details>

### 7. Tower property

**Exercise 9.7**
<a id="conditional-expectation-and-projection-ex-7"></a>

If $H\\subseteq G$, prove $\\mathbb{E}[\\mathbb{E}[X \\mid G] \\mid H]=\\mathbb{E}[X \\mid H]$.

<details>
<summary>Hint 1</summary>

Let the outer conditional expectation be the candidate.

</details>
<details>
<summary>Hint 2</summary>

Its integrals over every event of the smaller sigma-algebra agree with those of X.

</details>
<details>
<summary>Solution</summary>

**Solution.** For $A\\in H\\subseteq G$, both conditional variables integrate over $A$ to $\\int_{A}X$. Uniqueness of conditional expectation gives equality almost surely.


</details>

### 8. Reverse tower audit

**Exercise 9.8**
<a id="conditional-expectation-and-projection-ex-8"></a>

If $H\\subseteq G$, simplify $\\mathbb{E}[\\mathbb{E}[X \\mid H] \\mid G]$.

<details>
<summary>Hint 1</summary>

The inner conditional variable is already measurable for the smaller information.

</details>
<details>
<summary>Hint 2</summary>

Measurability is preserved when the available sigma-algebra grows.

</details>
<details>
<summary>Solution</summary>

**Solution.** The inner variable is $H$-measurable and therefore $G$-measurable, so conditioning on $G$ leaves it unchanged: the result is $\\mathbb{E}[X \\mid H]$.


</details>

### 9. Independent information

**Exercise 9.9**
<a id="conditional-expectation-and-projection-ex-9"></a>

If $X$ is integrable and independent of $G$, verify that the constant $\\mathbb{E}[X]$ is a version of $\\mathbb{E}[X \\mid G]$.

<details>
<summary>Hint 1</summary>

Test the proposed constant on an arbitrary event of G.

</details>
<details>
<summary>Hint 2</summary>

Independence factors the expectation of X times that event's indicator.

</details>
<details>
<summary>Solution</summary>

**Solution.** For each $A\\in G$, independence yields $\\mathbb{E}[X\\mathbf{1}_{A}]=\\mathbb{E}[X]\\mathbb{P}(A)$, which is the integral of the constant $\\mathbb{E}[X]$ over $A$.


</details>

### 10. A converse failure

**Exercise 9.10**
<a id="conditional-expectation-and-projection-ex-10"></a>

Let $X$ be symmetric on $\\{-1,0,1\\}$ with probabilities $(1/4,1/2,1/4)$ and $G=\\sigma (X^{2})$. Show $\\mathbb{E}[X \\mid G]=0$ but dependence holds.

<details>
<summary>Hint 1</summary>

Compute the mean in the zero-square and one-square cells.

</details>
<details>
<summary>Hint 2</summary>

An event determined by both structures can still have a nontrivial probability.

</details>
<details>
<summary>Solution</summary>

**Solution.** On both cells $X^{2}=0$ and $X^{2}=1$, symmetry makes the conditional mean zero. Yet $X^{2}$ is determined by $X$, and event $\\{X=0\\}$ belongs to both structures with probability $1/2$, not its squared probability, so independence fails.


</details>

### 11. Discrete regression

**Exercise 9.11**
<a id="conditional-expectation-and-projection-ex-11"></a>

Suppose $\\mathbb{P}(X=1,Y=1)=0.3$, $\\mathbb{P}(X=0,Y=1)=0.2$, $\\mathbb{P}(X=1,Y=0)=0.1$, and the remaining mass is at $(0,0)$. Find $\\mathbb{E}[X \\mid Y]$.

<details>
<summary>Hint 1</summary>

For an indicator the conditional mean is a conditional success probability.

</details>
<details>
<summary>Hint 2</summary>

Divide each success cell by its corresponding positive Y marginal.

</details>
<details>
<summary>Solution</summary>

**Solution.** $\\mathbb{P}(Y=1)=0.5$, so $\\mathbb{E}[X \\mid Y=1]=\\mathbb{P}(X=1 \\mid Y=1)=0.6$. For $Y=0$, the value is $0.1/0.5=0.2$. Thus it is $0.2+0.4Y$.


</details>

### 12. Conditional probability bounds

**Exercise 9.12**
<a id="conditional-expectation-and-projection-ex-12"></a>

Prove $0\\le \\mathbb{P}(A \\mid G)\\le 1$ almost surely.

<details>
<summary>Hint 1</summary>

Apply conditional positivity to the indicator and to its complement.

</details>
<details>
<summary>Hint 2</summary>

Linearity makes the two conditional expectations sum to one.

</details>
<details>
<summary>Solution</summary>

**Solution.** Positivity applied to $\\mathbf{1}_{A}$ gives the lower bound. Since $1-\\mathbf{1}_{A}\\ge 0$, positivity and linearity give $1-\\mathbb{P}(A \\mid G)\\ge 0$.


</details>

### 13. Total probability in conditional form

**Exercise 9.13**
<a id="conditional-expectation-and-projection-ex-13"></a>

Show $\\mathbb{E}[\\mathbb{P}(A \\mid G)]=\\mathbb{P}(A)$.

<details>
<summary>Hint 1</summary>

Apply the preservation law to an event indicator.

</details>
<details>
<summary>Hint 2</summary>

Its ordinary expectation is the event probability.

</details>
<details>
<summary>Solution</summary>

**Solution.** This is preservation of expectation applied to $\\mathbf{1}_{A}$.


</details>

### 14. Conditional variance identity

**Exercise 9.14**
<a id="conditional-expectation-and-projection-ex-14"></a>

Derive $\\operatorname{Var}(X \\mid G)=\\mathbb{E}[X^{2} \\mid G]-\\mathbb{E}[X \\mid G]^{2}$.

<details>
<summary>Hint 1</summary>

Expand the square around the conditional mean.

</details>
<details>
<summary>Hint 2</summary>

Use the measurable pull-out rule with the required square-integrability.

</details>
<details>
<summary>Solution</summary>

**Solution.** Expand the conditional square. Pull the $G$-measurable conditional mean through the operator; the cross term is twice its square, leaving the stated difference.


</details>

### 15. Total variance

**Exercise 9.15**
<a id="conditional-expectation-and-projection-ex-15"></a>

Prove the law of total variance.

<details>
<summary>Hint 1</summary>

Average the conditional variance identity.

</details>
<details>
<summary>Hint 2</summary>

Add the variance of the conditional mean and cancel its second moment.

</details>
<details>
<summary>Solution</summary>

**Solution.** Take expectations in Exercise 14: $\\mathbb{E}[\\operatorname{Var}(X \\mid G)]=\\mathbb{E}[X^{2}]-\\mathbb{E}[\\mathbb{E}[X \\mid G]^{2}]$. Add $\\operatorname{Var}(\\mathbb{E}[X \\mid G])=\\mathbb{E}[\\mathbb{E}[X \\mid G]^{2}]-\\mathbb{E}[X]^{2}$ and cancel.


</details>

### 16. Projection orthogonality

**Exercise 9.16**
<a id="conditional-expectation-and-projection-ex-16"></a>

For bounded $G$-measurable $H$, show $\\mathbb{E}[(X-\\mathbb{E}[X \\mid G])H]=0$.

<details>
<summary>Hint 1</summary>

Use the pull-out rule and preservation of expectation.

</details>
<details>
<summary>Hint 2</summary>

Subtract the two equal product expectations.

</details>
<details>
<summary>Solution</summary>

**Solution.** Pull-out and preservation yield $\\mathbb{E}[HX]=\\mathbb{E}[H \\mathbb{E}[X \\mid G]]$; subtract.


</details>

### 17. Pythagorean identity

**Exercise 9.17**
<a id="conditional-expectation-and-projection-ex-17"></a>

Let $Z=\\mathbb{E}[X \\mid G]$ and $W\\in L^{2}(G)$. Derive the MSE decomposition.

<details>
<summary>Hint 1</summary>

Split the error into conditional residual and predictor discrepancy.

</details>
<details>
<summary>Hint 2</summary>

Orthogonality removes the cross term after squaring.

</details>
<details>
<summary>Solution</summary>

**Solution.** Write $X-W=(X-Z)+(Z-W)$, square, and take expectations. The cross term is zero by orthogonality because $Z-W\\in L^{2}(G)$.


</details>

### 18. Noisy sign

**Exercise 9.18**
<a id="conditional-expectation-and-projection-ex-18"></a>

In the worked noisy-sign model, compute the conditional variance.

<details>
<summary>Hint 1</summary>

The sign's square equals one.

</details>
<details>
<summary>Hint 2</summary>

Subtract the squared conditional mean from that conditional second moment.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since $X^{2}=1$ and $\\mathbb{E}[X \\mid Y]=(2q-1)Y$, conditional variance is $1-(2q-1)^{2}=4q(1-q)$.


</details>

### 19. More information and MSE

**Exercise 9.19**
<a id="conditional-expectation-and-projection-ex-19"></a>

If $H\\subseteq G$, show the minimum squared prediction error using $G$ is no larger than using $H$.

<details>
<summary>Hint 1</summary>

Compare the two admissible predictor classes.

</details>
<details>
<summary>Hint 2</summary>

Every predictor using the smaller information also uses the larger.

</details>
<details>
<summary>Solution</summary>

**Solution.** Every $H$-measurable predictor is also $G$-measurable. Minimising over the larger class cannot increase the infimum; equivalently use the projection property.


</details>

### 20. Density denominator audit

**Exercise 9.20**
<a id="conditional-expectation-and-projection-ex-20"></a>

Why does $f_{X,Y}(x,y)/f_{Y}(y)$ not define a conditional density at a point where $f_{Y}(y)=0$?

<details>
<summary>Hint 1</summary>

Check the conditional density denominator first.

</details>
<details>
<summary>Hint 2</summary>

A version at a marginal-null point is not uniquely fixed by the joint law.

</details>
<details>
<summary>Solution</summary>

**Solution.** The ratio divides by zero, and the joint density is determined only almost everywhere. A regular conditional law may assign a version there, but the joint law does not uniquely determine pointwise values on a marginal-null set.


</details>

## Sources

For the measure-theoretic existence statements and conditional expectation, see Rick Durrett, *Probability: Theory and Examples*, [official Version 5](https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf), section 4.1. Its Theorems 4.1.17–4.1.18 are the regular conditional distribution results cited above. The finite-partition examples and additional arguments here are original developments.

## 9. Summary and forward route

Conditional expectation is the almost-surely unique measurable summary that preserves integrals over observable events. Finite partitions make it a cell average; tower, pull-out, and conditional Jensen govern its algebra. In $L^{2}$ it is an orthogonal projection and hence the optimal mean-square predictor. Conditional variance separates unresolved from explained variation.

The next chapter, [Covariance Geometry, Regression, and Moment Inequalities](#/item/book-probability-models-proofs?chapter=covariance-regression-and-inequalities), turns this projection view into linear prediction and quantitative dependence bounds.
`;export{e as default};