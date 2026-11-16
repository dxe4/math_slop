
# Quadratic Equations

A rectangular noticeboard has area $48$ square units. Its length is two units more than its width. If the width is $x$, its length is $x+2$, so the area condition is $x(x+2)=48$. Expanding gives $x^2+2x-48=0$. The unknown occurs squared, and the linear methods of the previous chapters no longer finish the problem. Nevertheless, the equation has a structure we can understand completely.

This chapter develops three connected methods: factorisation, completing the square and the quadratic formula. The aim is to choose a useful form of an equation, justify every transformation and interpret the resulting numbers. By the end, you should be able to find all real roots, explain when there are none and separate an algebraic solution from an admissible answer to a practical question.

Required preparation is [expansion and factorisation](expressions-laws-factorising.md), [equivalent equations](linear-equations-inequalities-systems.md) and the distinction between a formula and its [domain](functions-domain-graphs.md). We work with real numbers throughout. The notation $\sqrt{d}$, for $d\geq0$, means the nonnegative real number whose square is $d$. In particular, $\sqrt{9}=3$, although the equation $u^2=9$ has both $u=3$ and $u=-3$ as solutions.

## Recognising the equation

**Definition 5.1 (Quadratic equation and root).** A quadratic equation in the real unknown $x$ is an equation that can be rearranged, without changing its permitted solutions, into

$$ax^2+bx+c=0,$$

where $a,b,c$ are fixed real numbers and $a\ne0$. A real number $r$ is a root if substituting $x=r$ makes the equality true. The set of all permitted roots is the solution set.

The condition on $a$ is essential: it says that a genuine squared term remains after collecting like terms. For example, $(x+1)^2=x^2+7$ becomes $2x-6=0$, so it is linear rather than quadratic. Conversely, $3x(x-2)=5$ is quadratic even though its squared term is initially hidden. Expand and collect before naming its coefficients: $a=3$, $b=-6$ and $c=-5$.

A missing term has coefficient zero. Thus $4x^2-9=0$ has $b=0$, and $x^2+5x=0$ has $c=0$. Do not invent a nonzero constant because the formula has three coefficient positions. Also distinguish the expression $x^2+5x$ from the equation $x^2+5x=0$. An expression may be evaluated or rewritten; an equation asks which inputs make two expressions equal.

Putting zero on one side is useful because zero has a special multiplicative property. Subtracting the same expression from both sides is reversible, so it preserves every solution. Dividing by an expression involving the unknown may fail this test: the expression could vanish at a solution. We will return to this danger before using any general formula.

## Factorisation and the zero-product condition

**Theorem 5.2 (Zero-product property over the reals).** For real numbers $u$ and $v$,

$$uv=0\quad\Longleftrightarrow\quad u=0\ \text{or}\ v=0.$$

*Proof.* If either factor is zero, the product is zero. Conversely, suppose $uv=0$. If $u=0$ the conclusion holds. If $u\ne0$, division by the nonzero number $u$ gives $v=0$. These two cases cover all possibilities. ∎

The word “or” includes the possibility that both factors vanish. The theorem applies to a product equal to zero, not to an arbitrary product equation. From $(x-1)(x+4)=6$ we cannot conclude $x-1=6$ or $x+4=6$. Instead, expand, subtract $6$ and then seek a factorisation of the resulting expression.

For a monic quadratic, the earlier distributive law gives

$$(x+p)(x+q)=x^2+(p+q)x+pq.$$

Finding $p$ and $q$ therefore requires both a sum and a product condition. Their product must equal the constant term, and their sum must equal the coefficient of $x$. Checking just one condition does not establish the factorisation. Multiplying the proposed factors back out is a quick mathematical justification, particularly when signs are troublesome.

**Example 5.3 (Two factors, two roots).** Solve $x^2-7x+10=0$ over the reals.

We need two numbers with product $10$ and sum $-7$. They are $-5$ and $-2$, so

$$x^2-7x+10=(x-5)(x-2).$$

The equation is therefore equivalent to $(x-5)(x-2)=0$. The zero-product property gives $x=5$ or $x=2$. Conversely, either value makes one factor zero, so both really solve the original equation. The solution set is $\{2,5\}$. The roots have signs opposite to the constants inside their factors: the factor $x-5$ vanishes at positive $5$.

**Example 5.4 (A nonunit leading coefficient).** Solve $6x^2+x-2=0$.

To split the middle term, seek numbers whose product is $6(-2)=-12$ and whose sum is $1$. The pair $4,-3$ works. Grouping terms gives

$$6x^2+4x-3x-2=2x(3x+2)-(3x+2)=(2x-1)(3x+2).$$

Thus $2x-1=0$ or $3x+2=0$, and the roots are $x=\frac12$ and $x=-\frac23$. Expanding the factors restores $6x^2+x-2$, which confirms that grouping preserved the expression. Substitution also checks a root: at $x=\frac12$ the left side is $\frac32+\frac12-2=0$.

When a common factor is visible, remove it before searching for two brackets. The equation $x^2=5x$ becomes $x(x-5)=0$, giving $x=0$ or $x=5$. Dividing the original equation by $x$ would keep only the second answer. Such division is justified only after handling the case $x=0$ separately. A constant factor such as $3$ is different: dividing $3x^2-15x=0$ by $3$ is always allowed because $3$ cannot vanish.

## Completing the square

Factorisation is efficient when suitable factors are easy to recognise. Failure to find integer factors, however, does not mean an equation has no real solution. The equation $x^2=2$ has roots $\pm\sqrt2$, even though neither is an integer. We need a method that does not depend on guessing a factor pair.

The identity

$$(x+h)^2=x^2+2hx+h^2$$

shows the required adjustment. If the coefficient of $x^2$ is $1$ and the coefficient of $x$ is $p$, choose $h=p/2$. Then

$$x^2+px=\left(x+\frac p2\right)^2-\frac{p^2}{4}.$$

This is an identity valid for every real $x$: expanding the square gives back the left side. “Completing” the square means supplying its missing constant and compensating for that supply. In an equation, adding $p^2/4$ to both sides is equivalent to subtracting it inside an expression and keeping the other terms correctly arranged.

**Theorem 5.5 (Solving a square equation).** Let $h$ and $d$ be real. If $d>0$, the equation $(x-h)^2=d$ has exactly the two solutions $x=h\pm\sqrt d$. If $d=0$, its only solution is $x=h$. If $d<0$, it has no real solution.

*Proof.* A real square is nonnegative, which excludes negative $d$. For $d\geq0$, write $s=\sqrt d$. Then $(x-h)^2-s^2=0$ factors as $(x-h-s)(x-h+s)=0$. The zero-product property gives $x=h+s$ or $x=h-s$, and each value satisfies the equation. The values coincide exactly when $s=0$. ∎

**Example 5.6 (A square with fractional centre).** Solve $2x^2-6x-1=0$ by completing the square.

First divide every term by $2$, obtaining $x^2-3x=\frac12$. Half the linear coefficient is $-\frac32$, whose square is $\frac94$. Add this number to both sides:

$$x^2-3x+\frac94=\frac12+\frac94=\frac{11}{4}.$$

Consequently $(x-\frac32)^2=\frac{11}{4}$, so

$$x=\frac32\pm\frac{\sqrt{11}}2=\frac{3\pm\sqrt{11}}2.$$

Both signs are necessary. As a check, the original expression can be written $2(x-\frac32)^2-\frac{11}{2}$; each proposed root makes the square $\frac{11}{4}$ and the expression zero. The exact radical forms identify the roots without rounding. Decimal estimates would be useful for measuring, but are not needed to prove the equalities.

Notice why normalising the leading coefficient came first. Adding the square of half of $-6$ directly to $2x^2-6x$ would not complete the intended square. One could instead factor out $2$ from those two terms, complete the square inside the brackets and then multiply the compensating constant by $2$. Both routes use the same identity.

## Deriving the quadratic formula

**Theorem 5.7 (Quadratic formula over the reals).** Let $a,b,c$ be real and $a\ne0$. Define $D=b^2-4ac$. If $D\geq0$, all real roots of $ax^2+bx+c=0$ are

$$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}.$$

If $D<0$, there are no real roots.

*Proof.* Since $a\ne0$, divide by $a$ and move the constant:

$$x^2+\frac ba x=-\frac ca.$$

Half the linear coefficient is $b/(2a)$. Add its square to both sides and use the square identity:

$$\left(x+\frac{b}{2a}\right)^2=\frac{b^2}{4a^2}-\frac ca=\frac{b^2-4ac}{4a^2}.$$

Every preceding step is reversible. Multiplying by the positive number $4a^2$ gives the especially useful equivalent equation

$$(2ax+b)^2=D.$$

If $D<0$, a real square cannot equal it. If $D\geq0$, Theorem 5.5 gives $2ax+b=\pm\sqrt D$. Subtracting $b$ and dividing by $2a\ne0$ gives the displayed formula. Conversely, either displayed value satisfies the square equation and therefore the original equation, so no solutions were lost or introduced. ∎

Using $(2ax+b)^2=D$ also avoids a possible sign trap. Although $\sqrt{4a^2}=2|a|$, it need not equal $2a$ when $a$ is negative. The paired signs in the final formula account for both roots, but a derivation must still use square roots correctly.

**Definition 5.8 (Discriminant and repeated root).** The number $D=b^2-4ac$ is the discriminant of the quadratic. A repeated root is a root for which the quadratic has the form $a(x-r)^2$, with $a\ne0$.

There are three possibilities. Positive $D$ gives two distinct real roots because $\sqrt D>0$. Zero $D$ gives one real root $r=-b/(2a)$, repeated in the factorisation. Negative $D$ gives no real roots. “Repeated” counts algebraic factors, not two different real numbers: the solution set of $(x-4)^2=0$ is simply $\{4\}$.

The completed-square identity proves the repeated-root description. When $D=0$,

$$ax^2+bx+c=a\left(x+\frac{b}{2a}\right)^2.$$

A negative discriminant says nothing about whether an expression is undefined: $x^2+1$ is defined at every real input, but never equals zero. We do not need complex numbers in order to give the complete answer over the specified real domain.

**Example 5.9 (Classifying before calculating).** Consider $3x^2-4x-1=0$. Its discriminant is $(-4)^2-4(3)(-1)=28>0$, so two distinct real roots exist. The formula gives

$$x=\frac{4\pm\sqrt{28}}6=\frac{2\pm\sqrt7}{3}.$$

Here $\sqrt{28}=2\sqrt7$, and cancelling a common factor $2$ across the entire numerator and denominator gives the second form. By comparison, $3x^2-6x+3=0$ has discriminant zero and equals $3(x-1)^2=0$, giving the single repeated root $1$. The equation $3x^2-4x+2=0$ has discriminant $16-24=-8$ and no real roots. The same leading coefficient can therefore occur in all three cases.

## Parameters, restrictions and mathematical answers

A formula containing a parameter may cease to be quadratic at a special value. For $kx^2+2x-3=0$, the quadratic formula applies when $k\ne0$. At $k=0$, the correct equation is $2x-3=0$, whose solution is $x=3/2$. A denominator $2k$ in a memorised formula cannot settle that case. More generally, if $a=0$ then $bx+c=0$ has one solution when $b\ne0$, no solution when $b=0,c\ne0$, and every permitted input as a solution when $b=c=0$.

**Example 5.10 (An area restriction).** Return to the noticeboard. Its width must satisfy $x>0$, and its length is $x+2$. The area equation becomes

$$x^2+2x-48=(x+8)(x-6)=0.$$

The algebraic roots are $-8$ and $6$. The first gives negative width and negative length, so it is inadmissible for this model. The board is $6$ units wide and $8$ units long; their product is $48$ square units. The root $-8$ is not an algebra mistake: it solves the unrestricted polynomial equation, but falls outside the original domain.

An extraneous root can also arise from an irreversible transformation. For instance, solving $\sqrt{x+2}=x$ requires $x\geq0$, because a square root is nonnegative. Squaring gives $x+2=x^2$, hence $(x-2)(x+1)=0$. Of the resulting values $2,-1$, only $2$ satisfies the original equation: $\sqrt4=2$, whereas $\sqrt1\ne-1$. Squaring established a necessary equation, not an equivalent equation on all inputs. Checking the original relation, including its domain, completes the argument.

There is no single best method for every quadratic. A common factor or a clear factor pair suggests factorisation. A visible square suggests the square-root property. Completing the square explains the general structure and will expose the vertex in the next chapter. The formula supplies a dependable exact answer when factors are awkward. Whichever method you choose, write the equation in a clear form, keep exact arithmetic until the end and report the full solution set in the stated domain.

## Exercises

### Exercise 5.1
<a id="quadratic-equations-ex-1"></a>

Solve $x^2-9x+20=0$ over the reals by factorisation, and check both roots.

<details>
<summary>Hint 1</summary>

**Hint.** Find two numbers whose product is $20$ and whose sum is $-9$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Both numbers are negative. Apply the zero-product property after writing two linear factors.

</details>
<details>
<summary>Solution</summary>

**Solution.** The numbers are $-4,-5$, so the equation is $(x-4)(x-5)=0$. Therefore $x=4$ or $x=5$. Substitution gives $16-36+20=0$ and $25-45+20=0$. Factorisation and the zero-product property show that these are all the roots; the solution set is $\{4,5\}$.

</details>

### Exercise 5.2
<a id="quadratic-equations-ex-2"></a>

Solve $2x^2-7x+3=0$ by factorisation.

<details>
<summary>Hint 1</summary>

**Hint.** A middle-term split needs two numbers with product $6$ and sum $-7$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Split $-7x$ as $-6x-x$, and then group terms in pairs.

</details>
<details>
<summary>Solution</summary>

**Solution.** We have $2x^2-6x-x+3=2x(x-3)-(x-3)=(2x-1)(x-3)$. The product is zero exactly when $2x-1=0$ or $x-3=0$. Hence $x=1/2$ or $x=3$. Both values zero a factor, and expansion gives back the original expression, establishing the equivalence and completeness of the answer.

</details>

### Exercise 5.3
<a id="quadratic-equations-ex-3"></a>

A learner divides $x^2=7x$ by $x$ and reports $x=7$. Give the full solution and explain the missing case.

<details>
<summary>Hint 1</summary>

**Hint.** Before dividing by an expression, ask whether it could be zero.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Move both terms to one side and factor out $x$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The equivalent equation $x^2-7x=x(x-7)=0$ gives $x=0$ or $x=7$. At $x=0$ the original equality is $0=0$, so this value is a genuine root. Division by $x$ assumes $x\ne0$ and therefore cannot include that case. The learner's calculation correctly solves the nonzero case but does not solve the whole problem.

</details>

### Exercise 5.4
<a id="quadratic-equations-ex-4"></a>

Solve $x^2+6x-2=0$ by completing the square. Keep the answers exact.

<details>
<summary>Hint 1</summary>

**Hint.** Move the constant to the other side before supplying the missing square term.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Add $9$ to both sides, since half of $6$ is $3$.

</details>
<details>
<summary>Solution</summary>

**Solution.** From $x^2+6x=2$, adding $9$ gives $(x+3)^2=11$. The square equation has the two roots $x+3=\sqrt{11}$ and $x+3=-\sqrt{11}$, so $x=-3\pm\sqrt{11}$. Conversely, each root makes $(x+3)^2-11=0$, which is the original expression. Thus no further roots are possible and both displayed values work.

</details>

### Exercise 5.5
<a id="quadratic-equations-ex-5"></a>

Solve $3x^2+2x-2=0$ using the quadratic formula, and state how the discriminant predicts the number of real roots.

<details>
<summary>Hint 1</summary>

**Hint.** Record $a,b,c$ with their signs before calculating $b^2-4ac$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The discriminant is $28$. Simplify $\sqrt{28}$ before cancelling common factors.

</details>
<details>
<summary>Solution</summary>

**Solution.** Here $a=3,b=2,c=-2$, so $D=4-4(3)(-2)=28>0$. There are two distinct real roots. The formula gives $x=(-2\pm\sqrt{28})/6=(-1\pm\sqrt7)/3$. Both follow from the reversible square equation $(6x+2)^2=28$, so the two values are all the real roots, rather than just approximate intersections.

</details>

### Exercise 5.6
<a id="quadratic-equations-ex-6"></a>

Without calculating approximate roots, classify the real solution sets of $4x^2+4x+1=0$ and $4x^2+4x+2=0$. Find any real root exactly.

<details>
<summary>Hint 1</summary>

**Hint.** Compare the discriminants or complete the square in each expression.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The first expression is $(2x+1)^2$; the second is one more than this square.

</details>
<details>
<summary>Solution</summary>

**Solution.** The first equation is $(2x+1)^2=0$, with the single repeated root $x=-1/2$. Its discriminant is $16-16=0$. The second is $(2x+1)^2+1=0$, impossible for real $x$ because the left side is at least $1$. Its discriminant is $16-32=-16$. A repeated root in the first equation is one distinct value, whereas the second equation has an empty real solution set.

</details>

### Exercise 5.7
<a id="quadratic-equations-ex-7"></a>

For real $k$, solve $kx^2+3x=0$, separating any exceptional parameter value.

<details>
<summary>Hint 1</summary>

**Hint.** Factor out $x$ before dividing by either $k$ or $x$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Treat $k=0$ separately; when $k\ne0$, solve the other linear factor.

</details>
<details>
<summary>Solution</summary>

**Solution.** The equation factors as $x(kx+3)=0$. If $k\ne0$, its roots are $x=0$ and $x=-3/k$, which are distinct since $-3/k\ne0$. If $k=0$, the original equation is $3x=0$ and has only $x=0$. The second factor is then the nonzero constant $3$, so it contributes no root. The quadratic formula would be inapplicable in this linear case.

</details>

### Exercise 5.8
<a id="quadratic-equations-ex-8"></a>

A rectangle has positive width $w$ metres, length $w+3$ metres and area $54$ square metres. Find its dimensions, explaining every rejected algebraic root.

<details>
<summary>Hint 1</summary>

**Hint.** Translate area as width multiplied by length, and record $w>0$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Rearrange to $w^2+3w-54=0$ and look for factors of $-54$ with sum $3$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The equation is $w(w+3)=54$, equivalent to $(w+9)(w-6)=0$. Its unrestricted roots are $w=-9$ and $w=6$. A width must be positive, so $-9$ is excluded; it would also give negative length. The rectangle is $6$ metres by $9$ metres. Their product is $54$ square metres, and both satisfy the domain restriction, completing the interpretation.

</details>

### Exercise 5.9
<a id="quadratic-equations-ex-9"></a>

Solve $\sqrt{x+6}=x$ over the reals. Explain why checking the polynomial roots is necessary.

<details>
<summary>Hint 1</summary>

**Hint.** The original equality forces $x\geq0$, as well as requiring the radical to be defined.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Squaring gives $x^2-x-6=0$. Test both factors' roots in the unsquared equation.

</details>
<details>
<summary>Solution</summary>

**Solution.** Squaring the original equality yields $x+6=x^2$, so $(x-3)(x+2)=0$. The possibilities are $3,-2$. At $x=3$ the original equation reads $\sqrt9=3$ and holds. At $x=-2$ it reads $\sqrt4=-2$, which is false; this value also violates $x\geq0$. Thus the solution set is $\{3\}$. Squaring loses the information that the right side must be nonnegative, allowing the extraneous polynomial root.

</details>

### Exercise 5.10
<a id="quadratic-equations-ex-10"></a>

Determine, for every real $m$, the number of distinct real roots of $x^2-4x+m=0$. Find the root when there is exactly one.

<details>
<summary>Hint 1</summary>

**Hint.** Complete the square to compare a square with a parameter-dependent number.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The equation is $(x-2)^2=4-m$. Separate positive, zero and negative right sides.

</details>
<details>
<summary>Solution</summary>

**Solution.** If $m<4$, then $4-m>0$ and there are two distinct roots $2\pm\sqrt{4-m}$. If $m=4$, the equation is $(x-2)^2=0$, so there is exactly one real root, $2$, repeated in the factorisation. If $m>4$, a square cannot equal the negative number $4-m$, so there are no real roots. Equivalently, the discriminant $16-4m$ has these same three sign cases.

</details>

## Summary

A genuine quadratic equation has a nonzero squared-term coefficient. Factorisation turns a zero equation into linear alternatives; its justification is the zero-product property. Completing the square rewrites any quadratic using a shifted square and leads, by reversible steps, to the quadratic formula. The discriminant distinguishes two distinct real roots, one repeated real root and no real roots. Exceptional zero coefficients require their own linear or constant equations, and contextual restrictions must be applied to every proposed root. In [Quadratic Functions](quadratic-functions.md), the same completed square will locate a graph's vertex and reveal its symmetry, range and signs.

## Sources

This chapter's explanations, examples and exercises are original. For complementary treatments of the standard methods, see Jay Abramson et al., OpenStax, [*Algebra and Trigonometry 2e*, §2.5, “Quadratic Equations”](https://openstax.org/books/algebra-and-trigonometry-2e/pages/2-5-quadratic-equations), consulted 13 November 2026. This chapter is licensed CC BY-SA 4.0 as stated above.
