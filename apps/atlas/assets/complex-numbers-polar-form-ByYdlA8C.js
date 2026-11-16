var e=`---
parent_id: book-precalculus
chapter_id: complex-numbers-polar-form
title: "Complex Numbers and Polar Form"
level: secondary
license: CC BY-SA 4.0
---

# Complex Numbers and Polar Form

## A number system with a second direction

The equation $x^2+1=0$ has no real solution: the square of a real number is nonnegative. That statement does not prevent us from enlarging our number system. A complex number has two real components, and its multiplication is chosen so that a particular number, denoted by $i$, has square $-1$. The result retains the ordinary rules of algebra while allowing equations such as $z^2=-1$ to have solutions.

Complex numbers also have a geometric interpretation. One component measures horizontal position and the other vertical position. Addition combines displacements, while multiplication combines a change of length with a rotation. Rectangular form makes addition convenient; polar form makes multiplication, powers and roots convenient. The purpose of this chapter is to connect the two descriptions rather than memorise separate calculation rules.

You need algebra with brackets and quadratic equations, together with the unit circle and the [trigonometric identities](trigonometric-identities.md), especially the sine and cosine addition formulas. All angles in this chapter are in radians. We will distinguish a complex number from its modulus and distinguish a chosen angle from all the angles describing the same direction. Later, [parametric and polar curves](parametric-polar-curves.md) will use related geometric coordinates to describe entire curves.

## Rectangular form and arithmetic

**Definition 9.1 (Complex numbers).** A complex number is an expression $z=a+bi$ with $a,b\\in\\mathbb R$. Two such expressions are equal exactly when their real components agree and their imaginary components agree. The real part is $\\operatorname{Re}z=a$, and the imaginary part is $\\operatorname{Im}z=b$. Addition and multiplication are defined by

$$
(a+bi)+(c+di)=(a+c)+(b+d)i,
$$

$$
(a+bi)(c+di)=(ac-bd)+(ad+bc)i.
$$

The set of all complex numbers is denoted by $\\mathbb C$. Real numbers are included by identifying $a$ with $a+0i$. The number $i=0+1i$ satisfies $i^2=-1$ by the multiplication rule. Thus the product rule is exactly what ordinary distributivity would produce if every occurrence of $i^2$ were replaced by $-1$.

For instance, $(2+3i)+(4-i)=6+2i$, while

$$
(2+3i)(4-i)=8-2i+12i-3i^2=11+10i.
$$

Do not combine the real and imaginary parts into one real coefficient. The equality $2+3i=5i$ would require $2=0$ on comparing real parts. Similarly, the imaginary part of $2+3i$ is the real number $3$, not $3i$. The term $3i$ is its imaginary component in the displayed sum.

Subtraction is componentwise, and the additive inverse of $a+bi$ is $-a-bi$. The arithmetic is commutative and associative, with multiplication distributing over addition; these properties follow by expanding the component formulas and using real arithmetic. There is no compatible extension of the usual ordering of real numbers in which every nonzero square is positive: $i^2=-1$ would contradict that rule. We therefore do not compare arbitrary complex numbers using $<$ or $>$.

Powers of $i$ repeat in a cycle:

$$
i^0=1,\\quad i^1=i,\\quad i^2=-1,\\quad i^3=-i,\\quad i^4=1.
$$

Multiplication by further copies of $i$ repeats these four outcomes. To evaluate $i^{27}$, divide $27$ by $4$: the remainder is $3$, so $i^{27}=i^3=-i$. This is a statement about integer powers, not a definition of every possible fractional power of $i$.

## Conjugation, modulus and division

**Definition 9.2 (Conjugate and modulus).** For $z=a+bi$, its conjugate is $\\overline z=a-bi$, and its modulus is the nonnegative real number

$$
|z|=\\sqrt{a^2+b^2}.
$$

The complex plane represents $a+bi$ by the point $(a,b)$, with real numbers on the horizontal axis and imaginary multiples on the vertical axis. The modulus is its distance from the origin. In particular, $|z|=0$ exactly when $z=0$. Conjugation reflects the point across the real axis, so $|\\overline z|=|z|$.

**Proposition 9.3 (Conjugate identities).** For all $z,w\\in\\mathbb C$,

$$
z\\overline z=|z|^2,\\quad
\\overline{z+w}=\\overline z+\\overline w,\\quad
\\overline{zw}=\\overline z\\,\\overline w,\\quad
|zw|=|z||w|.
$$

*Proof.* Writing $z=a+bi$, multiplication gives $(a+bi)(a-bi)=a^2+b^2=|z|^2$. Componentwise addition immediately gives the addition identity. If $w=c+di$, the conjugate of their product is $(ac-bd)-(ad+bc)i$, which is also $(a-bi)(c-di)$. Therefore

$$
|zw|^2=(zw)\\overline{zw}=z\\overline z\\,w\\overline w=|z|^2|w|^2.
$$

Both $|zw|$ and $|z||w|$ are nonnegative real numbers. Taking the unique nonnegative square root proves the last identity. ∎

If $w\\ne0$, then $|w|^2>0$ and

$$
\\frac1w=\\frac{\\overline w}{|w|^2}.
$$

Multiplying by $w$ checks that this really is an inverse. Thus division by a nonzero complex number is possible, and division by zero remains undefined. The conjugate method removes an imaginary term from a denominator because $w\\overline w$ is real and strictly positive.

**Example 9.4 (A quotient with its check).** Calculate $(3+2i)/(1-2i)$. The denominator has modulus squared $1^2+(-2)^2=5$, so it is nonzero. Multiply numerator and denominator by $1+2i$:

$$
\\frac{3+2i}{1-2i}
=\\frac{(3+2i)(1+2i)}5
=\\frac{-1+8i}{5}=-\\frac15+\\frac85i.
$$

To verify the result, multiply it by the original denominator:

$$
\\left(-\\frac15+\\frac85i\\right)(1-2i)
=\\frac{-1+16}{5}+\\frac{2+8}{5}i=3+2i.
$$

The check tests the signs in both components. Treating $i^2$ as $1$ would change the real component and fail this check.

**Example 9.5 (A quadratic beyond the real numbers).** Solve $z^2-4z+13=0$ in $\\mathbb C$. Completing the square gives $(z-2)^2=-9$. Since $(3i)^2=-9$ and $(-3i)^2=-9$, the two proposed solutions are $2+3i$ and $2-3i$.

To show that there are no others, factor the equation as

$$
(z-2-3i)(z-2+3i)=0.
$$

A product of complex numbers can be zero only when one factor is zero: if one factor were nonzero, its inverse would cancel it. Therefore the two displayed values are all the solutions. They form a conjugate pair. In this example substitution also gives $(2\\pm3i-2)^2=-9$, directly checking the completed-square equation. We have not used an unrestricted real square-root product rule on negative radicands.

## Polar form and the meaning of an argument

**Definition 9.6 (Polar form and argument).** For a nonzero complex number $z=a+bi$, put $r=|z|>0$. An argument of $z$ is a real angle $\\theta$ satisfying

$$
\\cos\\theta=\\frac ar,\\qquad \\sin\\theta=\\frac br.
$$

Then

$$
z=r(\\cos\\theta+i\\sin\\theta).
$$

For brevity, write $\\operatorname{cis}\\theta=\\cos\\theta+i\\sin\\theta$. This is a notation for the trigonometric expression, not another operation on complex numbers.

The unit-circle interpretation supplies an angle because $(a/r)^2+(b/r)^2=1$. Any two arguments of the same nonzero number differ by an integer multiple of $2\\pi$. Thus the arguments are $\\theta+2k\\pi$ for integers $k$. We may choose a principal argument in $(-\\pi,\\pi]$, but must state that convention whenever the particular representative matters. For a negative real number, this convention chooses $\\pi$, rather than $-\\pi$.

Zero has no argument. Its distance from the origin is zero, so no direction is selected, and the quotients $a/r$ and $b/r$ would be undefined. Although $0\\operatorname{cis}\\theta=0$ for every angle, this does not give zero a distinguished polar angle. A formula that divides by the modulus must therefore exclude zero explicitly.

**Example 9.7 (Choosing the correct quadrant).** Find polar forms of $z=-\\sqrt3+i$. Its modulus is $\\sqrt{3+1}=2$. Therefore its direction has cosine $-\\sqrt3/2$ and sine $1/2$. The number lies in the second quadrant, giving argument $5\\pi/6$. Hence

$$
z=2\\operatorname{cis}(5\\pi/6)
=2\\operatorname{cis}(5\\pi/6+2k\\pi),\\qquad k\\in\\mathbb Z.
$$

The angle $-\\pi/6$ has the same tangent but lies in the fourth quadrant and gives the opposite point. This illustrates why using only $\\tan\\theta=b/a$ is insufficient: tangent cannot distinguish opposite directions, and the quotient is unavailable when $a=0$. Check both sine and cosine, or check the quadrant together with a reference angle.

Conjugating a polar expression changes $\\theta$ to $-\\theta$, since cosine is even and sine is odd. Inverting a nonzero polar expression gives $(1/r)\\operatorname{cis}(-\\theta)$. The length is reciprocated and the angle is negated. These are particularly simple descriptions of operations that can be longer in rectangular coordinates.

## Multiplication is scaling and rotation

**Theorem 9.8 (Polar product and quotient).** For positive $r,s$ and real $\\alpha,\\beta$,

$$
(r\\operatorname{cis}\\alpha)(s\\operatorname{cis}\\beta)
=rs\\operatorname{cis}(\\alpha+\\beta),
$$

$$
\\frac{r\\operatorname{cis}\\alpha}{s\\operatorname{cis}\\beta}
=\\frac rs\\operatorname{cis}(\\alpha-\\beta).
$$

*Proof.* Expanding the product of the two unit factors gives

$$
(\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta)
+i(\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta).
$$

The addition formulas identify this as $\\cos(\\alpha+\\beta)+i\\sin(\\alpha+\\beta)$. Multiplication by $rs$ proves the product formula. Taking $\\alpha=-\\beta$ shows $\\operatorname{cis}\\beta\\operatorname{cis}(-\\beta)=\\operatorname{cis}0=1$. Thus the inverse of $s\\operatorname{cis}\\beta$ is $(1/s)\\operatorname{cis}(-\\beta)$, giving the quotient formula by the product rule. ∎

Multiplying every complex number by $r\\operatorname{cis}\\alpha$, with $r>0$, scales its distance from the origin by $r$ and turns its direction through $\\alpha$. In particular, multiplication by $i=\\operatorname{cis}(\\pi/2)$ turns a point anticlockwise through a right angle. In rectangular form, $i(a+bi)=-b+ai$, so the coordinates change from $(a,b)$ to $(-b,a)$. Both descriptions give the same rotation.

**Theorem 9.9 (De Moivre's theorem).** For every real $\\theta$ and every integer $n\\ge0$,

$$
(\\operatorname{cis}\\theta)^n=\\operatorname{cis}(n\\theta).
$$

Consequently, for nonzero $z=r\\operatorname{cis}\\theta$ and every integer $n$,

$$
z^n=r^n\\operatorname{cis}(n\\theta).
$$

*Proof.* First use induction for the unit factor. At $n=0$, the left side is $1$, since $\\operatorname{cis}\\theta$ has modulus $1$ and is nonzero; the right side is $\\operatorname{cis}0=1$. Suppose the formula holds for an integer $n\\ge0$. Multiplying by one more factor and using Theorem 9.8 gives

$$
(\\operatorname{cis}\\theta)^{n+1}
=\\operatorname{cis}(n\\theta)\\operatorname{cis}\\theta
=\\operatorname{cis}((n+1)\\theta).
$$

The base case and this implication prove the formula for all nonnegative integers. For $z\\ne0$, multiply by the real factor $r^n$ to obtain the stated formula for nonnegative $n$. If $n=-m$ with $m>0$, use the inverse already proved:

$$
z^{-m}=(z^{-1})^m
=\\bigl(r^{-1}\\operatorname{cis}(-\\theta)\\bigr)^m
=r^{-m}\\operatorname{cis}(-m\\theta).
$$

This is the required negative-integer formula. The inverse step is legitimate because $r>0$. ∎

For $z=0$, its positive integer powers are zero, without requiring an angle. Its negative powers are undefined, and we leave $0^0$ undefined. De Moivre's theorem concerns integer powers. Substituting a fraction for $n$ as if the same formula selected a unique root would miss other roots.

**Example 9.10 (A power without a long expansion).** Compute $(1+i)^6$. The modulus of $1+i$ is $\\sqrt2$, and an argument is $\\pi/4$. Thus

$$
(1+i)^6=(\\sqrt2)^6\\operatorname{cis}(6\\pi/4)
=8\\operatorname{cis}(3\\pi/2)=-8i.
$$

An algebraic check is short: $(1+i)^2=2i$, so $(1+i)^6=(2i)^3=8i^3=-8i$. Both methods agree. Polar form makes large powers manageable because it replaces repeated complex multiplication with multiplication of a real modulus and an angle.

## All the nth roots

**Theorem 9.11 (Roots of a nonzero complex number).** Let $n\\ge1$ be an integer and let $w=R\\operatorname{cis}\\phi$ with $R>0$. Then the equation $z^n=w$ has exactly $n$ distinct solutions:

$$
z_k=R^{1/n}\\operatorname{cis}\\left(\\frac{\\phi+2k\\pi}{n}\\right),
\\qquad k=0,1,\\ldots,n-1.
$$

*Proof.* Each displayed number has $n$th power $R\\operatorname{cis}(\\phi+2k\\pi)=w$ by de Moivre's theorem. To see that they are distinct, equality of $z_j$ and $z_k$ would require their angles to differ by an integer multiple of $2\\pi$. Thus $(j-k)/n$ would be an integer. Since $j,k$ are between $0$ and $n-1$, their difference has absolute value less than $n$, forcing $j=k$.

Finally, let $z$ be any solution. It is nonzero because $w\\ne0$, so write $z=r\\operatorname{cis}\\theta$ with $r>0$. Comparing moduli gives $r^n=R$, hence $r=R^{1/n}$ by uniqueness of the positive real root. Comparing arguments gives $n\\theta=\\phi+2\\ell\\pi$ for some integer $\\ell$. Write $\\ell=qn+k$ with $0\\le k<n$. Then $\\theta=(\\phi+2k\\pi)/n+2q\\pi$, which is the same direction as the displayed $z_k$. No other solutions are possible. ∎

For $n=1$ the formula gives just $w$, as expected. For $w=0$, the equation $z^n=0$ has the single distinct solution $z=0$: the modulus identity gives $|z|^n=0$, so $|z|=0$. Zero must be treated separately rather than assigned $n$ invented arguments.

**Example 9.12 (Three roots, equally spaced).** Solve $z^3=8$. Use $8=8\\operatorname{cis}0$. Every root has modulus $2$, and the angles are $0$, $2\\pi/3$ and $4\\pi/3$. The three values are

$$
2,\\qquad -1+\\sqrt3i,\\qquad -1-\\sqrt3i.
$$

Cubing each polar expression multiplies its angle by three and cubes its modulus, producing $8$. Their directions are different, and the theorem proves completeness. They are vertices of an equilateral triangle centred at the origin. Choosing a different argument $2\\pi$ for $8$ would cycle through the same three roots, not produce three additional answers.

## Exercises

### Exercise 9.1
<a id="complex-numbers-polar-form-ex-1"></a>

For $z=2-3i$ and $w=-1+4i$, calculate $z+w$, $z-w$ and $zw$. State the real and imaginary parts of $zw$.

<details>
<summary>Hint 1</summary>

Add and subtract corresponding components. Multiplication needs distributivity.

</details>
<details>
<summary>Hint 2</summary>

In the product, replace $i^2$ by $-1$ before combining the real terms.

</details>
<details>
<summary>Solution</summary>

Addition gives $1+i$, and subtraction gives $3-7i$. For multiplication, $(2-3i)(-1+4i)=-2+8i+3i-12i^2=10+11i$. Thus the real part is $10$ and the imaginary part is $11$. The latter is the coefficient of $i$, a real number; it is not the whole term $11i$.

</details>

### Exercise 9.2
<a id="complex-numbers-polar-form-ex-2"></a>

Find the conjugate, modulus and reciprocal of $z=-3+4i$. Verify the reciprocal by multiplication.

<details>
<summary>Hint 1</summary>

Conjugation changes the sign of the imaginary component while leaving the real component unchanged.

</details>
<details>
<summary>Hint 2</summary>

Use $z\\overline z=|z|^2$ to obtain a real denominator for the reciprocal.

</details>
<details>
<summary>Solution</summary>

The conjugate is $-3-4i$, and the modulus is $\\sqrt{9+16}=5$. Since $z\\ne0$, its reciprocal is $(-3-4i)/25$. Multiplying gives $(-3+4i)(-3-4i)/25=(9+16)/25=1$. The denominator is the squared modulus $25$, not the modulus $5$; using $5$ would give product $5$ instead of $1$.

</details>

### Exercise 9.3
<a id="complex-numbers-polar-form-ex-3"></a>

Solve $z^2+6z+13=0$ in $\\mathbb C$, and explain why there are no further solutions.

<details>
<summary>Hint 1</summary>

Complete the square by adding and subtracting $9$.

</details>
<details>
<summary>Hint 2</summary>

The equation becomes $(z+3)^2=-4$. Use a factorisation with $2i$.

</details>
<details>
<summary>Solution</summary>

We obtain $(z+3)^2+4=0$, or $(z+3-2i)(z+3+2i)=0$. Since a product is zero only when a factor is zero, the solutions are $-3+2i$ and $-3-2i$. Both satisfy $(z+3)^2=(\\pm2i)^2=-4$, so they solve the original equation. The factorisation also proves that every solution is in this pair.

</details>

### Exercise 9.4
<a id="complex-numbers-polar-form-ex-4"></a>

Write $-2-2\\sqrt3i$ in polar form. Give its principal argument in $(-\\pi,\\pi]$ and describe all its arguments.

<details>
<summary>Hint 1</summary>

Calculate the modulus first, then divide each rectangular component by it.

</details>
<details>
<summary>Hint 2</summary>

Both components are negative. A third-quadrant angle can also be represented by a negative angle in the stated principal interval.

</details>
<details>
<summary>Solution</summary>

The modulus is $\\sqrt{4+12}=4$. The unit direction has cosine $-1/2$ and sine $-\\sqrt3/2$, giving principal argument $-2\\pi/3$. Thus the number is $4\\operatorname{cis}(-2\\pi/3)$. All arguments are $-2\\pi/3+2k\\pi$ with integer $k$; $4\\pi/3$ is another representative. An angle with the same tangent in the first quadrant would give the opposite number and is invalid.

</details>

### Exercise 9.5
<a id="complex-numbers-polar-form-ex-5"></a>

Multiply $2\\operatorname{cis}(\\pi/6)$ by $3\\operatorname{cis}(\\pi/3)$, and divide the first number by the second. Give the product in rectangular form.

<details>
<summary>Hint 1</summary>

Multiply moduli and add arguments for the product.

</details>
<details>
<summary>Hint 2</summary>

For the quotient, divide moduli and subtract the denominator's argument from the numerator's argument.

</details>
<details>
<summary>Solution</summary>

The product is $6\\operatorname{cis}(\\pi/2)=6i$. The quotient is $(2/3)\\operatorname{cis}(-\\pi/6)$. Division is permitted because the denominator's modulus is $3>0$. The operation on angles changes with multiplication versus division; multiplying the two angles would describe neither operation. The product has modulus $6$, which also checks the general modulus identity.

</details>

### Exercise 9.6
<a id="complex-numbers-polar-form-ex-6"></a>

Calculate $(\\sqrt3-i)^4$ exactly using polar form, and give the answer in rectangular form.

<details>
<summary>Hint 1</summary>

The base has modulus $2$ and lies in the fourth quadrant.

</details>
<details>
<summary>Hint 2</summary>

Choose argument $-\\pi/6$, then multiply that angle by $4$ while raising the modulus to the fourth power.

</details>
<details>
<summary>Solution</summary>

We have $\\sqrt3-i=2\\operatorname{cis}(-\\pi/6)$. De Moivre's theorem gives the fourth power $16\\operatorname{cis}(-2\\pi/3)$. Since cosine and sine at that angle are $-1/2$ and $-\\sqrt3/2$, the result is $-8-8\\sqrt3i$. Its modulus is $16$, equal to $|\\sqrt3-i|^4$, which provides a check on the calculation.

</details>

### Exercise 9.7
<a id="complex-numbers-polar-form-ex-7"></a>

Find all fourth roots of $-16$, in polar and rectangular forms. Explain why the four values are distinct.

<details>
<summary>Hint 1</summary>

Use modulus $16$ and argument $\\pi$ for the target number.

</details>
<details>
<summary>Hint 2</summary>

Divide $\\pi+2k\\pi$ by $4$ for $k=0,1,2,3$. Each root has modulus $2$.

</details>
<details>
<summary>Solution</summary>

The roots are $2\\operatorname{cis}(\\pi/4+k\\pi/2)$ for $k=0,1,2,3$. In rectangular form they are $\\sqrt2+\\sqrt2i$, $-\\sqrt2+\\sqrt2i$, $-\\sqrt2-\\sqrt2i$, and $\\sqrt2-\\sqrt2i$. Their arguments are separated by $\\pi/2$ and none differ by a full turn, so they are distinct. Raising each to the fourth power gives modulus $16$ and angle $\\pi$ modulo $2\\pi$. The root theorem proves there are no others.

</details>

### Exercise 9.8
<a id="complex-numbers-polar-form-ex-8"></a>

For a positive integer $n$, solve $z^n=0$. Explain why using $n$ different angle values does not give $n$ distinct roots.

<details>
<summary>Hint 1</summary>

Take the modulus of both sides and use the modulus-of-a-product law repeatedly.

</details>
<details>
<summary>Hint 2</summary>

A nonnegative real number with positive integer power zero must itself be zero.

</details>
<details>
<summary>Solution</summary>

Any solution satisfies $|z|^n=0$, hence $|z|=0$ and $z=0$. Conversely, zero raised to a positive integer power is zero. Thus there is exactly one distinct root. A polar expression with zero modulus represents zero for every angle; changing that angle does not change the number. Zero has no defined argument, so the nonzero-target root formula cannot be applied to it as though it supplied distinct directions.

</details>

### Exercise 9.9
<a id="complex-numbers-polar-form-ex-9"></a>

Find $(1+i)^{-2}$ in rectangular form. State why a negative power is permitted here but not for the number zero.

<details>
<summary>Hint 1</summary>

A negative integer power is a reciprocal. You can first calculate $(1+i)^2$.

</details>
<details>
<summary>Hint 2</summary>

The reciprocal of $i$ is $-i$, since $i(-i)=1$.

</details>
<details>
<summary>Solution</summary>

Squaring gives $(1+i)^2=2i$, so $(1+i)^{-2}=1/(2i)=-i/2$. Equivalently, de Moivre's theorem gives $(\\sqrt2)^{-2}\\operatorname{cis}(-\\pi/2)=-i/2$. The base is nonzero, so its inverse exists. Zero has no multiplicative inverse: multiplying it by any number gives zero, never one. Negative powers therefore cannot be assigned to zero using the reciprocal definition.

</details>

### Exercise 9.10
<a id="complex-numbers-polar-form-ex-10"></a>

Explain the error in claiming that $\\operatorname{cis}(\\pi/3)$ is the only cube root of $-1$. Find all the cube roots and identify their product.

<details>
<summary>Hint 1</summary>

The arguments of $-1$ are $\\pi+2k\\pi$, rather than just one chosen angle.

</details>
<details>
<summary>Hint 2</summary>

Divide three successive argument representatives by $3$. For the product, add the resulting root arguments.

</details>
<details>
<summary>Solution</summary>

The claimed root is valid but incomplete. The three roots are $\\operatorname{cis}(\\pi/3)$, $\\operatorname{cis}\\pi=-1$, and $\\operatorname{cis}(5\\pi/3)$. They have distinct directions and cube to $-1$. Their product has modulus $1$ and argument $\\pi/3+\\pi+5\\pi/3=3\\pi$, so the product is $-1$. Selecting a single argument before dividing ignores the other possible argument representatives and can miss genuine roots.

</details>

## Summary

Rectangular form $a+bi$ supports componentwise addition and distributive multiplication with $i^2=-1$. Conjugation gives $z\\overline z=|z|^2$, making division possible exactly when the denominator is nonzero. Polar form describes a nonzero number by its positive modulus and an argument understood modulo $2\\pi$; zero has no argument.

The trigonometric addition formulas turn multiplication into multiplication of moduli and addition of arguments. Induction proves de Moivre's theorem for nonnegative integer powers, and inverses extend it to negative integers for nonzero bases. A nonzero number has exactly $n$ distinct $n$th roots for an integer $n\\ge1$, while zero has only one distinct root. In [vectors in the plane](vectors-plane.md), we retain the geometry of components and directions while developing operations designed for displacements and lengths.

## Sources

This chapter's exposition, proofs, examples and exercises are newly written. Complementary treatments appear in OpenStax, *Algebra and Trigonometry 2e*, [§2.4, Complex Numbers](https://openstax.org/books/algebra-and-trigonometry-2e/pages/2-4-complex-numbers) and [§10.5, Polar Form of Complex Numbers](https://openstax.org/books/algebra-and-trigonometry-2e/pages/10-5-polar-form-of-complex-numbers), consulted 13 November 2026. The present chapter uses explicit nonzero hypotheses and argument conventions throughout; its square-root discussions do not extend real radical product rules to arbitrary complex inputs.
`;export{e as default};