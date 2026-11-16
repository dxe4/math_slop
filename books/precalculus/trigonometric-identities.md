
# Trigonometric Identities

Knowing sine and cosine at $\pi/4$ and $\pi/6$ does not immediately give their values at $\pi/12$. Adding two angles is not the same operation as adding their coordinates. Nevertheless, coordinates at the original angles determine coordinates at their sum. The addition formulas express this relationship and explain a large family of useful trigonometric identities.

This chapter derives those formulas geometrically and then uses ordinary algebra to obtain double-angle, half-angle and sum-product relations. We will keep track of every denominator and sign choice. The goal is to understand why a rewrite is valid and on which domain it can be used, rather than to treat identities as a collection of unconnected rules.

Required preparation is [Radians and the Unit Circle](radians-unit-circle.md), [Sine, Cosine, and Tangent](sine-cosine-tangent.md) and the algebra of fractions and square roots. Angles are real and measured in radians unless specified otherwise. In particular, $\sin^2x$ means $(\sin x)^2$, and $\sqrt{u^2}=|u|$ for real $u$. We shall use the unit-circle definitions throughout, with no calculus or complex-number formulas.

## What an identity claims

**Definition 6.1 (Identity on a stated domain).** An identity is an equality that holds for every input in its specified domain, with both sides defined there. A conditional equation instead asks which permitted inputs make an equality true.

For example, $\sin^2x+\cos^2x=1$ is an identity on $\mathbb R$. The equation $\sin x=1$ is conditional: it holds at particular angles, not every real input. A proof of an identity must handle all inputs in its stated domain. Checking three numerical examples cannot prove such a claim, although a single counterexample can disprove it.

A domain statement can be part of the identity itself. The equality $\tan x=\sin x/\cos x$ holds exactly where $\cos x\ne0$. At a vertical direction neither side has a real value, so the assertion is not an equality between two numbers there. If simplification removes a denominator, remember the restriction that made the original expression meaningful.

We already have an identity from the circle equation:

$$\sin^2x+\cos^2x=1.$$

Dividing by $\cos^2x$ is allowed only for $\cos x\ne0$, and gives $1+\tan^2x=1/\cos^2x$. Similarly, dividing by $\sin^2x$ requires $\sin x\ne0$. A formula derived by division inherits that restriction even if a later line looks simpler.

## Deriving addition and subtraction formulas

The key geometric fact is that rotating the entire plane preserves distances. A rotation through $-B$ sends the unit-circle point at angle $A$ to the point at angle $A-B$, and sends the point at angle $B$ to $(1,0)$. This concerns the physical rotation of two points together; it does not assume a coordinate formula for a general rotation.

**Theorem 6.2 (Addition and subtraction formulas).** For all real $A,B$,

$$\cos(A-B)=\cos A\cos B+\sin A\sin B,$$

$$\cos(A+B)=\cos A\cos B-\sin A\sin B,$$

$$\sin(A+B)=\sin A\cos B+\cos A\sin B,$$

$$\sin(A-B)=\sin A\cos B-\cos A\sin B.$$

*Proof.* Write the two unit-circle points as $P=(\cos A,\sin A)$ and $Q=(\cos B,\sin B)$. The coordinate distance formula gives

$$|P-Q|^2=(\cos A-\cos B)^2+(\sin A-\sin B)^2.$$

Expand both squares and collect the terms belonging to each point:

$$|P-Q|^2=(\cos^2 A+\sin^2 A)+(\cos^2 B+\sin^2 B)-2(\cos A\cos B+\sin A\sin B).$$

The first two parentheses each equal $1$, so this becomes $2-2(\cos A\cos B+\sin A\sin B)$. After rotating both points by $-B$, the squared distance is unchanged, but its new coordinate expression is

$$(\cos(A-B)-1)^2+\sin^2(A-B)=2-2\cos(A-B).$$

Equating the two expressions, subtracting $2$ and dividing by $-2$ proves the cosine subtraction formula. All steps apply to arbitrary real angles: coincident points and angles outside a first revolution cause no difficulty.

Now replace $B$ with $-B$. Cosine is even and sine odd, so $\cos(-B)=\cos B$ and $\sin(-B)=-\sin B$. The first formula therefore becomes the cosine addition formula.

To obtain sine addition, use the quarter-turn coordinate relations established from the circle: $\cos(\pi/2-A)=\sin A$ and $\sin(\pi/2-A)=\cos A$. Then apply the already proved cosine subtraction formula:

$$\sin(A+B)=\cos\bigl((\pi/2-A)-B\bigr)$$

$$=\cos(\pi/2-A)\cos B+\sin(\pi/2-A)\sin B$$

$$=\sin A\cos B+\cos A\sin B.$$

Finally replace $B$ by $-B$ in sine addition, again using parity. This gives the sine subtraction formula. No division by sine or cosine has occurred, so all four identities hold for every real pair $A,B$. ∎

The proof links geometry and algebra in a useful order. Geometry says that a chord length is unchanged by rotating both endpoints. Algebra calculates that same distance in two coordinate positions. The circle equation then removes the squared terms. We did not infer an identity from a drawing of one acute-angle configuration, and did not assume the addition formulas while deriving them.

**Example 6.3 (An exact value at a new angle).** Find $\sin(\pi/12)$ and $\cos(\pi/12)$ without a calculator.

Since $\pi/12=\pi/4-\pi/6$, the subtraction formulas give

$$\sin(\pi/12)=\frac{\sqrt2}{2}\frac{\sqrt3}{2}-\frac{\sqrt2}{2}\frac12=\frac{\sqrt6-\sqrt2}{4},$$

$$\cos(\pi/12)=\frac{\sqrt2}{2}\frac{\sqrt3}{2}+\frac{\sqrt2}{2}\frac12=\frac{\sqrt6+\sqrt2}{4}.$$

Both are positive because this angle lies in quadrant I. Squaring the two answers and adding gives $[(8-4\sqrt3)+(8+4\sqrt3)]/16=1$, consistent with the circle identity. This check supports the arithmetic, while the addition-formula derivation establishes the values themselves.

## Tangent addition and its domain

**Theorem 6.4 (Tangent addition).** Suppose $\cos A\ne0$, $\cos B\ne0$ and $\cos(A+B)\ne0$. Then

$$\tan(A+B)=\frac{\tan A+\tan B}{1-\tan A\tan B}.$$

Under the first two hypotheses, the third is equivalent to $1-\tan A\tan B\ne0$.

*Proof.* Divide sine addition by cosine addition:

$$\tan(A+B)=\frac{\sin A\cos B+\cos A\sin B}{\cos A\cos B-\sin A\sin B}.$$

The denominator is nonzero by hypothesis. Divide its numerator and denominator by the nonzero product $\cos A\cos B$. The resulting numerator is $\tan A+\tan B$, and its denominator is $1-\tan A\tan B$. Also, the cosine addition formula factors as

$$\cos(A+B)=\cos A\cos B(1-\tan A\tan B),$$

so with the first two cosine factors nonzero, the last factor is nonzero exactly when $\cos(A+B)$ is. ∎

Replacing $B$ by $-B$ similarly gives

$$\tan(A-B)=\frac{\tan A-\tan B}{1+\tan A\tan B},$$

provided $\cos A$, $\cos B$ and $\cos(A-B)$ are all nonzero. Sine and cosine addition have no missing inputs, but the tangent formulas do. At $A=B=\pi/4$, both individual tangents exist and equal $1$, yet their sum angle is $\pi/2$. The formula's denominator is $1-1=0$, reflecting the fact that tangent of the sum is undefined.

**Example 6.5 (Adding directions with known coordinates).** Suppose $A$ is in quadrant II with $\sin A=3/5$, and $B$ is in quadrant I with $\cos B=12/13$. Find sine, cosine and tangent of $A+B$.

From the circle identity and quadrant signs, $\cos A=-4/5$ and $\sin B=5/13$. Hence

$$\sin(A+B)=\frac35\frac{12}{13}-\frac45\frac5{13}=\frac{16}{65},$$

$$\cos(A+B)=-\frac45\frac{12}{13}-\frac35\frac5{13}=-\frac{63}{65}.$$

The latter is nonzero, so $\tan(A+B)=-16/63$. As a consistency check, $16^2+63^2=65^2$. The sine and cosine signs place the sum's terminal point in quadrant II. We did not need to find either angle numerically, and did not infer the sum's quadrant merely by adding its two quadrant labels.

## Double angles and reduction of squares

**Theorem 6.6 (Double-angle identities).** For every real $x$,

$$\sin(2x)=2\sin x\cos x,$$

$$\cos(2x)=\cos^2x-\sin^2x=1-2\sin^2x=2\cos^2x-1.$$

Consequently, for every real $x$,

$$\sin^2x=\frac{1-\cos(2x)}2,\qquad\cos^2x=\frac{1+\cos(2x)}2.$$

*Proof.* Put $A=B=x$ in the sine and cosine addition formulas. The two products in sine addition are equal, giving the factor $2$. In cosine addition, replace $\cos^2x$ by $1-\sin^2x$ to obtain the second cosine form, or replace $\sin^2x$ by $1-\cos^2x$ for the third. Rearranging these last two equalities and dividing by the nonzero constant $2$ gives the square-reduction formulas. ∎

There is also a tangent double-angle formula,

$$\tan(2x)=\frac{2\tan x}{1-\tan^2x},$$

when $\cos x\ne0$ and $\cos(2x)\ne0$. It follows by putting $A=B=x$ in tangent addition. The restriction on the original tangent cannot be omitted just because the doubled tangent happens to exist. For instance, at $x=\pi/2$, $\tan(2x)=0$ is defined while the displayed right side contains an undefined $\tan x$. Use sine and cosine directly if the quotient form is unavailable.

**Example 6.7 (Double an angle without finding it).** Suppose $x$ lies in quadrant III and $\tan x=3/4$. Find $\sin(2x)$ and $\cos(2x)$.

Both coordinates are negative and have ratio $3/4$. Normalising a vector in that direction gives $\sin x=-3/5$ and $\cos x=-4/5$. Therefore

$$\sin(2x)=2\left(-\frac35\right)\left(-\frac45\right)=\frac{24}{25},$$

$$\cos(2x)=\frac{16}{25}-\frac9{25}=\frac7{25}.$$

Both outputs are positive, placing the doubled terminal point in quadrant I after full turns are removed. Doubling a quadrant III angle need not leave its terminal point in quadrant III. The exact coordinate formulas settle the signs.

## Half angles: square roots need signs

Putting $x/2$ into the square-reduction formulas gives

$$\sin^2(x/2)=\frac{1-\cos x}{2},\qquad\cos^2(x/2)=\frac{1+\cos x}{2}.$$

Both radicands are nonnegative because $-1\leq\cos x\leq1$. Taking nonnegative square roots proves

$$|\sin(x/2)|=\sqrt{\frac{1-\cos x}{2}},\qquad|\cos(x/2)|=\sqrt{\frac{1+\cos x}{2}}.$$

These are identities for all real $x$. To recover the signed sine or cosine value, determine the quadrant of the actual half angle. The common notation with a $\pm$ sign is an instruction to choose the correct sign from that information. It does not say that one fixed angle has two different sine outputs. At a zero coordinate both signed choices give zero.

**Example 6.8 (A negative cosine at a half angle).** Suppose $\cos x=-3/5$ and $\pi<x<2\pi$. Find sine, cosine and tangent of $x/2$.

The given interval puts $x/2$ in quadrant II, so its sine is positive and its cosine negative. The half-angle relations give

$$\sin(x/2)=\sqrt{\frac{1+3/5}{2}}=\frac2{\sqrt5},$$

$$\cos(x/2)=-\sqrt{\frac{1-3/5}{2}}=-\frac1{\sqrt5}.$$

Their quotient is $-2$. The cosine information alone would not specify these signs without an interval locating the half angle. In particular, replacing $x$ by $x+2\pi$ leaves $\cos x$ unchanged but adds $\pi$ to the half angle, reversing both of its coordinates.

A useful quotient form is

$$\tan(x/2)=\frac{\sin x}{1+\cos x},\qquad x\ne(2k+1)\pi\ (k\in\mathbb Z).$$

To derive it, use $\sin x=2\sin(x/2)\cos(x/2)$ and $1+\cos x=2\cos^2(x/2)$. The stipulated restriction is exactly the condition that $\cos(x/2)\ne0$, so cancellation of one factor is legitimate. Another form is

$$\tan(x/2)=\frac{1-\cos x}{\sin x},\qquad \sin x\ne0.$$

Here substitute $1-\cos x=2\sin^2(x/2)$ and the same double-angle sine. The denominator condition ensures that both half-angle factors are nonzero. This second form has a narrower domain: at $x=0$ its right side is $0/0$, whereas $\tan(x/2)$ and the first quotient are both defined and equal to zero. Equal formulas on a common domain need not have identical natural domains.

## Products and sums

The addition formulas can combine products into sums. The reverse operation can turn a sum into a factorisation, useful when solving equations or separating components of a periodic expression.

**Theorem 6.9 (Product-to-sum formulas).** For every real $A,B$,

$$2\cos A\cos B=\cos(A-B)+\cos(A+B),$$

$$2\sin A\sin B=\cos(A-B)-\cos(A+B),$$

$$2\sin A\cos B=\sin(A+B)+\sin(A-B),$$

$$2\cos A\sin B=\sin(A+B)-\sin(A-B).$$

*Proof.* Add the cosine subtraction and addition formulas: the sine products cancel and the cosine products double, proving the first equality. Subtract cosine addition from cosine subtraction: the cosine products cancel, proving the second. Add the two sine formulas to cancel their cosine-sine terms, proving the third; subtract sine subtraction from sine addition to cancel their sine-cosine terms, proving the fourth. Each operation adds or subtracts equal quantities, so all four identities retain the full real domain. ∎

**Theorem 6.10 (Sum-to-product formulas).** For all real $u,v$,

$$\sin u+\sin v=2\sin\frac{u+v}{2}\cos\frac{u-v}{2},$$

$$\sin u-\sin v=2\cos\frac{u+v}{2}\sin\frac{u-v}{2},$$

$$\cos u+\cos v=2\cos\frac{u+v}{2}\cos\frac{u-v}{2},$$

$$\cos u-\cos v=-2\sin\frac{u+v}{2}\sin\frac{u-v}{2}.$$

*Proof.* Put $A=(u+v)/2$ and $B=(u-v)/2$. Then $A+B=u$ and $A-B=v$. Substitute these expressions into the third, fourth and first product-to-sum identities to obtain the first three displayed equalities. The second product-to-sum identity gives $2\sin A\sin B=\cos v-\cos u$; negating it gives the last equality. Only division by the constant $2$ is used in the substitution, so there are no excluded real inputs. ∎

**Example 6.11 (Choosing the direction of a rewrite).** Rewrite $2\sin(5x)\cos(2x)$ as a sum, and factor $\cos(5x)-\cos x$ as a product.

For the first expression use $A=5x,B=2x$ in product-to-sum:

$$2\sin(5x)\cos(2x)=\sin(7x)+\sin(3x).$$

For the second, the average of the two arguments is $3x$ and half their difference is $2x$. Hence

$$\cos(5x)-\cos x=-2\sin(3x)\sin(2x).$$

Both equalities hold for every real $x$. If the second expression is set equal to zero, this factorisation permits the zero-product property. Dividing by either sine factor would instead risk losing inputs where that factor vanishes. The best form depends on the question: sums expose component angles, while products expose zero factors.

## Proving identities without creating holes

A useful proof starts from one side and rewrites it, using already proved identities and valid algebra, until the other side appears. State the working domain before cancelling. For example, when $\cos x\ne0$,

$$\frac{1-\sin^2x}{\cos x}=\frac{\cos^2x}{\cos x}=\cos x.$$

This proves the equality wherever the original left side is defined. It does not make the original quotient defined at $x=\pi/2+k\pi$. The simplified function $\cos x$, on its own natural domain, fills those missing inputs; that is a new extension of the original function.

Similarly, rationalising with a conjugate can add a restriction. Starting with $\sin x/(1-\cos x)$ and multiplying by $(1+\cos x)/(1+\cos x)$ is only legitimate when $1+\cos x\ne0$. At $x=\pi$ the original quotient is $0/2=0$, but that multiplying fraction is $0/0$. A proof using it must handle this input separately or explicitly limit its claimed domain. A familiar algebraic shape does not excuse dividing by zero.

Avoid beginning with the desired equality and merely manipulating it into $0=0$ unless every step is reversible on the stated domain. An unjustified multiplication by zero can turn a false equality into a true one. Establishing both sides equal to a common expression, or giving a clear chain from one side to the other, makes the logic easier to follow. [Trigonometric Equations](trigonometric-equations.md) will apply the same care while finding solution sets rather than proving universal equalities.

## Exercises

### Exercise 6.1
<a id="trigonometric-identities-ex-1"></a>

Find $\cos(5\pi/12)$ exactly by writing the angle as a sum of two special angles.

<details>
<summary>Hint 1</summary>

**Hint.** Use $5\pi/12=\pi/4+\pi/6$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Cosine addition subtracts the product of the two sine values from the product of the two cosine values.

</details>
<details>
<summary>Solution</summary>

**Solution.** The formula gives $\cos(5\pi/12)=(\sqrt2/2)(\sqrt3/2)-(\sqrt2/2)(1/2)=(\sqrt6-\sqrt2)/4$. This is positive because $\sqrt6>\sqrt2$, agreeing with the fact that $5\pi/12$ lies in quadrant I. The subtraction sign belongs to the cosine addition formula; adding the two products would give the cosine of the difference angle instead.

</details>

### Exercise 6.2
<a id="trigonometric-identities-ex-2"></a>

Suppose $A$ lies in quadrant IV with $\sin A=-5/13$, and $B$ lies in quadrant I with $\cos B=4/5$. Find sine and cosine of $A+B$ without approximating either angle.

<details>
<summary>Hint 1</summary>

**Hint.** Recover the missing coordinates with the circle identity and the supplied quadrant signs.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The missing values are $\cos A=12/13$ and $\sin B=3/5$. Substitute them into both addition formulas.

</details>
<details>
<summary>Solution</summary>

**Solution.** The circle identity yields the stated positive values of the missing coordinates. Then $\sin(A+B)=(-5/13)(4/5)+(12/13)(3/5)=16/65$. Also $\cos(A+B)=(12/13)(4/5)-(-5/13)(3/5)=63/65$. Both are positive, so the terminal point is in quadrant I. The squares add to $(256+3969)/4225=1$, confirming their compatibility as unit-circle coordinates.

</details>

### Exercise 6.3
<a id="trigonometric-identities-ex-3"></a>

Calculate $\tan(\pi/12)$ using tangent subtraction, stating why the formula's denominators are nonzero.

<details>
<summary>Hint 1</summary>

**Hint.** Write $\pi/12=\pi/4-\pi/6$ and use the special-angle tangents.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Rationalise $(\sqrt3-1)/(\sqrt3+1)$ after forming the quotient.

</details>
<details>
<summary>Solution</summary>

**Solution.** Both original cosine values are nonzero, and the subtraction denominator $1+(1)(1/\sqrt3)$ is positive. Thus $\tan(\pi/12)=(1-1/\sqrt3)/(1+1/\sqrt3)=(\sqrt3-1)/(\sqrt3+1)$. Multiplying numerator and denominator by the nonzero conjugate $\sqrt3-1$ gives $(4-2\sqrt3)/2=2-\sqrt3$. The nonzero denominator also proves the tangent of the difference is defined, in accordance with its quadrant I input.

</details>

### Exercise 6.4
<a id="trigonometric-identities-ex-4"></a>

Given $\cos x=-12/13$ and $x$ in quadrant II, find $\sin(2x)$ and $\cos(2x)$.

<details>
<summary>Hint 1</summary>

**Hint.** Determine the sign of $\sin x$ before using the double-angle formula.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Sine is $5/13$ here. Use $2\sin x\cos x$ and $2\cos^2x-1$.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since $\sin^2x=1-144/169=25/169$ and sine is positive in quadrant II, $\sin x=5/13$. Therefore $\sin(2x)=2(5/13)(-12/13)=-120/169$. Also $\cos(2x)=2(144/169)-1=119/169$. The doubled terminal point is in quadrant IV, consistently with these signs. No division by either coordinate was needed, and the double-angle identities have no additional domain exclusions.

</details>

### Exercise 6.5
<a id="trigonometric-identities-ex-5"></a>

Suppose $\cos x=1/3$ and $2\pi<x<3\pi$. Find $\sin(x/2)$ and $\cos(x/2)$ exactly, with justified signs.

<details>
<summary>Hint 1</summary>

**Hint.** First divide the entire interval for $x$ by $2$ to locate the half angle.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The half angle is in quadrant III. Both square roots must therefore receive negative signs.

</details>
<details>
<summary>Solution</summary>

**Solution.** The interval gives $\pi<x/2<3\pi/2$, placing the half angle in quadrant III. Thus $\sin(x/2)=-\sqrt{(1-1/3)/2}=-1/\sqrt3$ and $\cos(x/2)=-\sqrt{(1+1/3)/2}=-\sqrt{2/3}$. Their squares sum to $1/3+2/3=1$. Choosing both roots positive would keep the squares correct but assign the half angle to the wrong quadrant.

</details>

### Exercise 6.6
<a id="trigonometric-identities-ex-6"></a>

Express $2\sin(4x)\sin x$ as a difference of cosines. Then factor $\sin(5x)+\sin x$ as a product. State the domain of each identity.

<details>
<summary>Hint 1</summary>

**Hint.** Use product-to-sum for two sine factors and sum-to-product for the sine sum.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** In the second expression, the average argument is $3x$ and half the argument difference is $2x$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The sine-product formula gives $2\sin(4x)\sin x=\cos(3x)-\cos(5x)$. The sine-sum formula gives $\sin(5x)+\sin x=2\sin(3x)\cos(2x)$. Both identities hold for every real $x$, since sine and cosine have full real domains and their derivations involve no division by trigonometric expressions. The order of the cosine terms in the first answer matters.

</details>

### Exercise 6.7
<a id="trigonometric-identities-ex-7"></a>

Simplify $F(x)=(1-\cos^2x)/\sin x$ on its natural domain. Does the simplified expression, taken with its own natural domain, define exactly the same function?

<details>
<summary>Hint 1</summary>

**Hint.** Record the zeros of the original denominator before using the Pythagorean identity.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The numerator is $\sin^2x$. Cancelling a sine factor does not restore the excluded inputs.

</details>
<details>
<summary>Solution</summary>

**Solution.** The original domain is $x\ne k\pi$, $k\in\mathbb Z$. On that domain, $F(x)=\sin^2x/\sin x=\sin x$. Sine by itself is defined on all real inputs, including the excluded integer multiples of $\pi$. Thus with unrestricted natural domains these are different functions, although their values agree everywhere $F$ is defined. For example, $F(0)$ is undefined while $\sin0=0$. A domain-preserving simplification retains the exclusions.

</details>

### Exercise 6.8
<a id="trigonometric-identities-ex-8"></a>

A learner uses $\tan(2x)=2\tan x/(1-\tan^2x)$ at $x=\pi/2$, claiming the result is zero. Evaluate the left side directly and explain why the proposed use of the formula is invalid.

<details>
<summary>Hint 1</summary>

**Hint.** A defined value of the left side does not guarantee that every expression on the right side is defined.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare $\tan\pi$ with $\tan(\pi/2)$, using the cosine denominator in each definition.

</details>
<details>
<summary>Solution</summary>

**Solution.** The left side is $\tan\pi=\sin\pi/\cos\pi=0/(-1)=0$. But $\tan(\pi/2)$ is undefined, since its cosine denominator is zero. Consequently the right side is not a real quotient at this input and cannot be used to calculate the answer. The tangent double-angle formula requires both $\cos x\ne0$ and $\cos(2x)\ne0$. Here the first condition fails even though the second holds.

</details>

### Exercise 6.9
<a id="trigonometric-identities-ex-9"></a>

Prove $\sin(x+y)\sin(x-y)=\sin^2x-\sin^2y$ for all real $x,y$.

<details>
<summary>Hint 1</summary>

**Hint.** Expand the two sine factors using addition and subtraction, then recognise a difference of squares.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** After expansion, replace $\cos^2y$ by $1-\sin^2y$ and $\cos^2x$ by $1-\sin^2x$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The product is $(\sin x\cos y+\cos x\sin y)(\sin x\cos y-\cos x\sin y)=\sin^2x\cos^2y-\cos^2x\sin^2y$. Substituting the Pythagorean expressions gives $\sin^2x(1-\sin^2y)-(1-\sin^2x)\sin^2y$. The mixed products cancel, leaving $\sin^2x-\sin^2y$. All steps use identities valid for arbitrary real inputs, and no division occurs, so this is a proof on the entire real plane of angle pairs.

</details>

### Exercise 6.10
<a id="trigonometric-identities-ex-10"></a>

Is $\sin(2x)=\sin x$ an identity on $\mathbb R$? Disprove or prove that claim, and then solve the equation on $[0,2\pi)$ without dividing by $\sin x$.

<details>
<summary>Hint 1</summary>

**Hint.** Test a special angle to assess the universal claim; then substitute the double-angle identity into the equation.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Factor as $\sin x(2\cos x-1)=0$ and retain both zero-product alternatives.

</details>
<details>
<summary>Solution</summary>

**Solution.** At $x=\pi/2$, the claimed identity would say $0=1$, so it is false as an identity. As a conditional equation, it is equivalent to $2\sin x\cos x-\sin x=\sin x(2\cos x-1)=0$. In the stated interval, $\sin x=0$ gives $x=0,\pi$, while $\cos x=1/2$ gives $x=\pi/3,5\pi/3$. Thus the solution set is $\{0,\pi/3,\pi,5\pi/3\}$. All four satisfy the factored equation and hence the original. Dividing by sine would have lost $0$ and $\pi$.

</details>

## Summary

Distance-preserving rotation and unit-circle coordinates prove the sine and cosine addition formulas for every real pair of angles. Their specialisations give double angles, half-angle squares and sum-product identities. Tangent formulas inherit nonzero-denominator conditions; half-angle square roots require signs chosen from the actual half-angle location. An identity holds throughout its stated domain, whereas a conditional equation selects particular inputs. Cancelling a trigonometric factor may remove written denominators but cannot silently restore missing inputs or discard equation solutions. These distinctions prepare the work on [inverse trigonometric functions](inverse-trigonometric-functions.md) and [trigonometric equations](trigonometric-equations.md).

## Sources

The local precursor is [*Functions, Equations, and Proof*, “Trigonometric Functions”](../functions-equations-proof/trigonometric-functions.md). This chapter supplies its own developed addition-formula argument and original explanations, worked examples and exercises. Complementary references are Jay Abramson et al., OpenStax, [*Algebra and Trigonometry 2e*, §9.2, “Sum and Difference Identities”](https://openstax.org/books/algebra-and-trigonometry-2e/pages/9-2-sum-and-difference-identities), [§9.3, “Double-Angle, Half-Angle, and Reduction Formulas”](https://openstax.org/books/algebra-and-trigonometry-2e/pages/9-3-double-angle-half-angle-and-reduction-formulas) and [§9.4, “Sum-to-Product and Product-to-Sum Formulas”](https://openstax.org/books/algebra-and-trigonometry-2e/pages/9-4-sum-to-product-and-product-to-sum-formulas), consulted 13 November 2026. The chapter licence is CC BY-SA 4.0 as stated above.
