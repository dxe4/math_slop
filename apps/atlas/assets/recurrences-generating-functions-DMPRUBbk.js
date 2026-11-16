var e=`---
parent_id: book-discrete-mathematics-proof-counting-structure
chapter_id: recurrences-generating-functions
title: "Recurrences and Generating Functions"
level: undergraduate
estimated_minutes: 140
license: CC BY-SA 4.0
---

# Recurrences and Generating Functions

A recurrence is a local dependency rule: today’s value is built from earlier values. A generating function is a global encoding: the entire sequence becomes the coefficient list of one formal series. Moving between these views turns decomposition into algebra and algebra back into counts.

This chapter assumes induction, elementary counting, polynomial manipulation, and finite geometric sums. Infinite series are treated formally unless convergence is explicitly discussed.

## 1. A recurrence needs enough initial data

A **recurrence relation** constrains a sequence using earlier terms. The rule alone may not determine a sequence.

For example,

$a_{n}=2a_{n-1}$ for $n\\ge 1$

has infinitely many solutions until $a_{0}$ is specified. With $a_{0}=3$, repeated substitution gives $a_{n}=3\\cdot 2^{n}$.

An order-$k$ recurrence generally needs $k$ compatible initial values. Boundary indices matter: if a counting decomposition works only for $n\\ge 2$, do not silently apply it at $n=0$ or $n=1$.

### Modeling checklist

When deriving a recurrence, state:

1. what $a_{n}$ counts or measures;
2. the range of $n$ for the rule;
3. why the cases are exhaustive;
4. why they are disjoint;
5. how deleting or adding structure gives a reversible correspondence;
6. all initial values, including an empty object when appropriate.

## 2. First-order recurrences

The arithmetic recurrence

$a_{n}=a_{n-1}+d$, $a_{0}=c$

has solution $a_{n}=c+nd$. The geometric recurrence

$a_{n}=ra_{n-1}$, $a_{0}=c$

has solution $a_{n}=cr^{n}$. Both formulas follow by induction.

A nonhomogeneous example is

$a_{n}=2a_{n-1}+1$, $a_{0}=0$.

Compute a few values: $0,1,3,7,15$. Guess $a_{n}=2^{n}-1$. Induction verifies it:

$$a_{k+1}=2(2^{k}-1)+1=2^{k+1}-1$$

The experiment suggested the formula; induction proves it.

### Shifting to remove a constant

For $a_{n}=ra_{n-1}+b$ with $r\\ne 1$, seek a fixed point $L$ satisfying $L=rL+b$, so $L=b/(1-r)$. Set $u_{n}=a_{n}-L$. Then

$$u_{n}=r u_{n-1}$$

and hence $a_{n}=L+(a_{0}-L)r^{n}$. The shift works because subtracting a fixed solution turns the recurrence homogeneous.

## 3. Linear recurrences and characteristic roots

Consider

$$a_{n}=c_{1}a_{n-1}+c_{2}a_{n-2}$$

Try a solution $a_{n}=r^{n}$. Substitution gives

$$r^{n}=c_{1}r^{n-1}+c_{2}r^{n-2}$$

For nonzero $r$, divide by $r^{n-2}$ to obtain the **characteristic equation**

$$r^{2}-c_{1}r-c_{2}=0$$

If it has distinct roots $r_{1},r_{2}$, every sequence of the form

$$a_{n}=Ar_{1}^{n}+Br_{2}^{n}$$

satisfies the recurrence. Initial values determine $A,B$ through two linear equations.

### Worked recurrence

Let $a_{0}=2$, $a_{1}=5$, and

$$a_{n}=3a_{n-1}-2a_{n-2}$$

The characteristic polynomial is $r^{2}-3r+2=(r-1)(r-2)$. Thus

$$a_{n}=A+B2^{n}$$

The initial conditions give $A+B=2$ and $A+2B=5$, so $B=3$, $A=-1$. Therefore

$$a_{n}=3\\cdot 2^{n}-1$$

Substitution verifies the recurrence, and the initial values verify the particular member of the solution family.

### Repeated roots

Assume here that the coefficient of $a_{n-2}$ is nonzero, so this is genuinely an order-two recurrence and both characteristic roots are nonzero. If its characteristic polynomial has a repeated root $r$, the two independent forms are $r^{n}$ and $nr^{n}$, so

$$a_{n}=(A+Bn)r^{n}$$

For $a_{n}=2a_{n-1}-a_{n-2}$, the polynomial $(r-1)^{2}$ gives $a_{n}=A+Bn$, consistent with constant first differences.

The nonzero trailing-coefficient hypothesis matters. If $a_{n}=0a_{n-1}+0a_{n-2}$, then the formal polynomial $r^{2}$ has a repeated zero root, but arbitrary values of $a_{0},a_{1}$ followed by zeros are not described by two independent sequences $0^{n}$ and $n0^{n}$. That rule has degenerated rather than supplied the ordinary repeated-root case.

The characteristic method applies to linear recurrences with constant coefficients. It is not a universal recipe for nonlinear rules such as $a_{n}=a_{n-1}^{2}+1$.

## 4. Recurrences from a first decision

Let $a_{n}$ count tilings of a $1\\times n$ board by squares of length $1$ and dominoes of length $2$. Examine the leftmost tile.

- If it is a square, the rest is any tiling of length $n-1$.
- If it is a domino, the rest is any tiling of length $n-2$.

The cases are disjoint and reversible, so

$a_{n}=a_{n-1}+a_{n-2}$ for $n\\ge 2$.

The empty board has one tiling, so $a_{0}=1$; a length-one board has one, so $a_{1}=1$. The sequence begins $1,1,2,3,5,\\ldots$.

Why count the empty tiling as one? It is the neutral continuation after a tile exactly fills the board. Assigning zero would break both the decomposition and later products.

## 5. Ordinary generating functions are formal coefficient containers

For a sequence $(a_{n})_{n\\ge 0}$, its **ordinary generating function** is

$$A(x)=\\sum_{n\\ge 0} a_{n} x^{n}$$

In formal power series algebra, $x$ is a bookkeeping symbol. Equality means equality coefficient by coefficient. We may add and multiply series whenever each requested coefficient receives only finitely many contributions, as happens for ordinary products.

Three translations drive the method:

- $xA(x)=\\sum_{n\\ge 1}a_{n-1}x^{n}$ shifts indices;
- $A(x)-a_{0}=\\sum_{n\\ge 1}a_{n}x^{n}$ removes the initial term;
- if $C(x)=A(x)B(x)$, then $c_{n}=\\sum_{k=0}^{n} a_{k}b_{n-k}$ by coefficient convolution.

The last identity explains why multiplication models a choice of two component sizes whose total is $n$.

## 6. Solve a recurrence with a generating function

Return to the tiling recurrence $a_{n}=a_{n-1}+a_{n-2}$, with $a_{0}=a_{1}=1$. Let

$$A(x)=a_{0}+a_{1}x+\\sum_{n\\ge 2}a_{n}x^{n}$$

Using the recurrence,

$$A(x)-1-x = \\sum_{n\\ge 2}a_{n-1}x^{n} + \\sum_{n\\ge 2}a_{n-2}x^{n}$$

The first sum is $x(A(x)-1)$ and the second is $x^{2}A(x)$. Therefore

$$A(x)-1-x=xA(x)-x+x^{2}A(x)$$

so

$A(x)(1-x-x^{2})=1$, and hence

$$A(x)=1/(1-x-x^{2})$$

Every boundary term has been accounted for. Writing $A=xA+x^{2}A$ immediately would incorrectly erase the initial conditions.

The rational expression does not by itself state a closed formula, but factoring the denominator over a suitable number system and using partial fractions recovers the characteristic-root solution.

## 7. Generating functions build combinatorial choices

Suppose we choose any number of objects of size $1$, each choice contributing one configuration. The possible contributions are encoded by

$$1+x+x^{2}+\\ldots=1/(1-x)$$

If we choose any number of objects of size $2$, the series is

$$1+x^{2}+x^{4}+\\ldots=1/(1-x^{2})$$

Choosing both types independently gives

$$1/[(1-x)(1-x^{2})]$$

The coefficient of $x^{n}$ counts nonnegative solutions to $u+2v=n$: choose $u$ size-one objects and $v$ size-two objects. Multiplication performs the convolution over all size splits.

### Bounded choice

If at most three size-one objects are allowed, replace $1/(1-x)$ by $1+x+x^{2}+x^{3}$. Bounds change the factor. Generating functions do not enforce constraints unless the factor actually encodes them.

### Distinct versus repeated parts

For subsets of $\\{1,2,\\ldots,m\\}$ recorded by sum, each part $j$ is absent or present, giving

$$\\prod_{j=1}^{m} (1+x^{j})$$

For multisets allowing repeated part $j$, use $1/(1-x^{j})$. These are different combinatorial classes, even if their first few coefficients coincide accidentally.

## 8. Coefficient extraction and binomial series

Write $[x^{n}]A(x)$ for the coefficient of $x^{n}$. The geometric identity gives

$$[x^{n}](1-x)^{-1}=1$$

More generally, for a positive integer $k$,

$$(1-x)^{-k}=\\sum_{n\\ge 0} \\binom{n+k-1}{k-1}x^{n}$$

One combinatorial proof counts nonnegative solutions to $x_{1}+\\ldots+x_{k}=n$: the left side is the product of $k$ geometric series, and the coefficient is the stars-and-bars count.

Thus the algebraic identity and the combinatorial interpretation support each other.

## 9. Rational generating functions imply constant-coefficient recurrences

Suppose

$$A(x)=P(x)/Q(x)$$

where $Q(0)\\ne 0$. Scale so

$$Q(x)=1-q_{1}x-\\ldots-q_{k}x^{k}$$

Then $Q(x)A(x)=P(x)$. Beyond the degree of $P$, coefficients on the right vanish. Comparing the coefficient of $x^{n}$ for sufficiently large $n$ gives

$$a_{n}=q_{1}a_{n-1}+\\ldots+q_{k}a_{n-k}$$

So a rational ordinary generating function yields an eventually constant-coefficient linear recurrence. Conversely, a sequence obeying such a recurrence from the start has a rational generating function after its finitely many initial corrections are included.

The word “eventually” handles numerator terms and recurrences that begin after a boundary.

## 10. Asymptotic growth from dominant roots

If

$$a_{n}=A r_{1}^{n}+B r_{2}^{n}$$

and $|r_{1}|>|r_{2}|$ with $A\\ne 0$, then

$$a_{n}/(A r_{1}^{n})=1+(B/A)(r_{2}/r_{1})^{n}\\to 1$$

Thus $a_{n}$ is asymptotic to $Ar_{1}^{n}$. But dominant-root reasoning has boundary cases:

- the coefficient $A$ might be zero because of initial conditions;
- two roots may have equal magnitude and produce oscillation;
- repeated roots introduce polynomial factors such as $n$;
- cancellation can change signs or leading behavior.

Always solve for coefficients before declaring which term dominates.

## 11. Exact computation and responsible experiment

A recurrence can compute the first $N$ terms exactly using integers. This is valuable for checking boundary values, finding a likely identity, or discovering periodicity modulo $m$. It is not proof of an unbounded claim.

When experimenting:

1. state the recurrence and initial values;
2. use exact integer or rational arithmetic when feasible;
3. record the tested range;
4. search for counterexamples, not only confirmation;
5. label the observation as experimental until a proof is supplied.

Floating-point evaluation of a closed form can be less reliable than integer recurrence evaluation because nearly canceling irrational powers may round incorrectly, even when the final term is an integer.

## Why the characteristic formulas are complete

The recurrence $a_n=c_1a_{n-1}+c_2a_{n-2}$ for $n\\ge2$, together with $a_0,a_1$, determines at most one sequence. Indeed, if two sequences have the same initial values and obey the same rule, induction on $n$ shows that their next terms agree whenever their previous two terms agree. Thus, after constructing a solution with the required initial values, no additional unaccounted-for solution remains.

Suppose the characteristic equation has distinct roots $r_1,r_2$ in a field containing the coefficients. Each root produces a solution $r_i^n$: substitution reduces the recurrence to its characteristic equation. When a root is zero, interpret $r^0=1$ and check the recurrence directly for $n\\ge2$; no division by zero is needed. Linearity makes $Ar_1^n+Br_2^n$ a solution. The initial equations $A+B=a_0$ and $Ar_1+Br_2=a_1$ have determinant $r_2-r_1\\ne0$, so they determine unique $A,B$. By uniqueness of the recurrence, this constructed sequence is the only one with those initial values. This proves completeness, rather than merely guessing two solutions.

For a repeated nonzero root $r$, the characteristic polynomial is $(z-r)^2=z^2-2rz+r^2$, giving $c_1=2r$ and $c_2=-r^2$. Besides $r^n$, substitution shows $nr^n$ is a solution: for $n\\ge2$ the recurrence's right side becomes

$$2r(n-1)r^{n-1}-r^2(n-2)r^{n-2}=nr^n.$$

Thus $(A+Bn)r^n$ satisfies the rule. Its initial values are $A$ and $(A+B)r$, so $A=a_0$ and $B=a_1/r-a_0$ are uniquely determined. Again recurrence uniqueness proves that this is the whole solution, under the stated $r\\ne0$ hypothesis. The zero-root degeneration was handled separately above.

### Worked example: a repeated root

Take $a_0=2$, $a_1=6$ and $a_n=2a_{n-1}-a_{n-2}$ for $n\\ge2$. The repeated root is $1$, so $a_n=A+Bn$. The initial equations give $A=2$ and $A+B=6$, hence $B=4$ and $a_n=2+4n$. Directly, $2a_{n-1}-a_{n-2}=2(2+4(n-1))-(2+4(n-2))=2+4n$. The two initial values and the recurrence therefore establish the formula for every $n\\ge0$.

## Formal inversion and boundary terms

The expression $(1-x)^{-1}$ has an unambiguous formal meaning: it denotes the unique series whose product with $1-x$ is $1$. To see why, the coefficient of $x^n$ in $(1-x)(1+x+x^2+\\cdots)$ is zero for $n\\ge1$ and one for $n=0$. More generally, a series $Q(x)=q_0+q_1x+\\cdots$ with $q_0\\ne0$ has a unique inverse over a field. If $Q(x)B(x)=1$, the constant coefficient forces $b_0=1/q_0$, and the coefficient at $x^n$ then forces

$$b_n=-q_0^{-1}\\sum_{j=1}^{n}q_jb_{n-j}\\quad(n\\ge1).$$

Each coefficient is determined by a finite sum of earlier coefficients. This argument is algebraic and does not substitute a numerical value for $x$. If one instead evaluates a series at a real or complex number, convergence must be proved on the proposed domain; a formal identity by itself is not such a proof. For instance, $1+x+x^2+\\cdots=(1-x)^{-1}$ is also an analytic identity when $|x|<1$, but its numerical series does not converge at $x=2$.

The converse from a linear recurrence to a rational generating function can now be made explicit. If $a_n=q_1a_{n-1}+\\cdots+q_ka_{n-k}$ for all $n\\ge k$, let $Q(x)=1-q_1x-\\cdots-q_kx^k$. In the coefficient of $x^n$ in $Q(x)A(x)$, terms with negative indices are absent. For every $n\\ge k$ the recurrence makes that coefficient zero. Therefore $Q(x)A(x)$ is a polynomial $P(x)$ of degree at most $k-1$, containing exactly the initial corrections, and $A=P/Q$ formally. If the rule begins later, finitely many further corrections may appear in $P$; the conclusion remains rational.

### Worked example: a forced first-order rule

For $a_0=3$ and $a_{n+1}=2a_n+1$, unfolding gives

$$a_n=2^n a_0+\\sum_{j=0}^{n-1}2^{n-1-j}.$$

The sum is $2^n-1$, so $a_n=4\\cdot2^n-1$. At $n=0$ it gives $3$. If it holds at $n=k$, then $2a_k+1=4\\cdot2^{k+1}-1$, proving the next case. Its formal generating function is $4/(1-2x)-1/(1-x)$, and coefficient extraction recovers the same sequence. Analytically, the two geometric expansions are valid together for $|x|<1/2$; the formal identity needs no numerical radius.

### Worked example: a product and its coefficient

The coefficient of $x^6$ in $(1+x^2)(1+x+x^2+x^3+x^4+x^5+x^6)$ is two: the contributing choices are $1\\cdot x^6$ and $x^2\\cdot x^4$. If the second factor instead ends at $x^4$, there is one contribution, $x^2\\cdot x^4$. This illustrates convolution without an infinite rearrangement: for a fixed exponent, only finitely many pairs of exponents can add to it. A coefficient can be counted by listing those pairs or by an explicit bijection with the objects being counted.

## 12. Common errors

- A recurrence without enough initial conditions.
- Applying a rule outside its valid index range.
- Overlapping or nonexhaustive combinatorial cases.
- Losing boundary terms when shifting a generating series.
- Treating formal power series manipulation as an analytic convergence claim.
- Multiplying series without explaining the combinatorial convolution.
- Applying characteristic roots to a nonlinear or variable-coefficient recurrence.
- Naming a dominant root before checking its coefficient and competitors.

## 13. Exercises with worked solutions

<a id="DM-CH04-E001"></a>
### DM-CH04-E001 — solve a recurrence

Solve $a_{n}=4a_{n-1}-4a_{n-2}$ with $a_{0}=1$, $a_{1}=4$.

<details><summary>Hint 1</summary>Factor the characteristic polynomial.</details>
<details><summary>Hint 2</summary>A repeated nonzero root requires the factor n.</details>
<details><summary>Solution</summary>

#### DM-CH04-E001 — Solution

The characteristic polynomial is $r^{2}-4r+4=(r-2)^{2}$. Thus $a_{n}=(A+Bn)2^{n}$. From $a_{0}=1$, $A=1$. From $a_{1}=(1+B)2=4$, $B=1$. Therefore $a_{n}=(n+1)2^{n}$. The repeated root is why the factor $n$ appears.


</details>

<a id="DM-CH04-E002"></a>
### DM-CH04-E002 — derive before solving

Let $b_{n}$ count length-$n$ strings over $\\{A,B,C\\}$ with no $C$ immediately after another $C$. Derive a recurrence and initial values.

<details><summary>Hint 1</summary>Partition by the final symbol.</details>
<details><summary>Hint 2</summary>When the final symbol is C, inspect the preceding symbol.</details>
<details><summary>Solution</summary>

#### DM-CH04-E002 — Solution

Partition by the final symbol. If it is $A$ or $B$, remove it to obtain any valid length-$n-1$ string; these two choices contribute $2b_{n-1}$. If it is $C$, then for $n\\ge 2$ the preceding symbol must be $A$ or $B$. Remove the final two-symbol block ($AC$ or $BC$) to obtain any valid length-$n-2$ string, contributing $2b_{n-2}$. Hence $b_{n}=2b_{n-1}+2b_{n-2}$ for $n\\ge 2$. The empty string gives $b_{0}=1$; the three one-letter strings give $b_{1}=3$. The decomposition is disjoint because it distinguishes the final symbol.


</details>

<a id="DM-CH04-E003"></a>
### DM-CH04-E003 — generating-function boundary audit

If $a_{0}=2$ and $a_{n}=3a_{n-1}$ for $n\\ge 1$, derive $A(x)$.

<details><summary>Hint 1</summary>Subtract the constant term from the generating series.</details>
<details><summary>Hint 2</summary>Shift the remaining sum using xA(x).</details>
<details><summary>Solution</summary>

#### DM-CH04-E003 — Solution

We have

$$A(x)-2=\\sum_{n\\ge 1}a_{n}x^{n}=3\\sum_{n\\ge 1}a_{n-1}x^{n}=3xA(x)$$

Therefore $A(x)=2/(1-3x)$. Expanding the geometric series gives $a_{n}=2\\cdot 3^{n}$. The numerator $2$ records the initial condition.


</details>

<a id="DM-CH04-E004"></a>
### DM-CH04-E004 — interpret a product

What does $[x^{12}] 1/[(1-x^{3})(1-x^{5})]$ count, and what is its value?

<details><summary>Hint 1</summary>Expand each factor as a geometric series.</details>
<details><summary>Hint 2</summary>List nonnegative solutions to 3u+5v=12.</details>
<details><summary>Solution</summary>

#### DM-CH04-E004 — Solution

Expanding gives choices of $u\\ge 0$ objects of size $3$ and $v\\ge 0$ objects of size $5$; the coefficient counts solutions to $3u+5v=12$. Testing $v=0,1,2$ gives $u=4$, no integer, and no nonnegative integer respectively. Thus the only solution is $(u,v)=(4,0)$, and the coefficient is $1$.


</details>

<a id="DM-CH04-E005"></a>
### DM-CH04-E005 — experiment versus theorem

A sequence defined by $c_{0}=2$ and $c_{n+1}=c_{n}^{2}-2$ begins $2,2,2,\\ldots$. Does checking one million terms prove that every term is $2$? Supply a proof.

<details><summary>Hint 1</summary>Use the recurrence at the next index.</details>
<details><summary>Hint 2</summary>If the current term is 2, calculate its successor.</details>
<details><summary>Solution</summary>

#### DM-CH04-E005 — Solution

The check alone does not prove an infinite claim. Induction does. The base $c_{0}=2$ holds. If $c_{k}=2$, then $c_{k+1}=2^{2}-2=2$. Therefore every term equals $2$.


</details>

<a id="DM-CH04-E006"></a>
### DM-CH04-E006 — shifted first order

Solve $a_{n+1}=3a_n+2$ with $a_0=0$.

<details><summary>Hint 1</summary>Find a constant fixed solution.</details>
<details><summary>Hint 2</summary>Subtract the fixed point to get a geometric recurrence.</details>
<details><summary>Solution</summary>The fixed point satisfies $L=3L+2$, so $L=-1$. Then $u_n=a_n+1$ obeys $u_{n+1}=3u_n$ and $u_0=1$. Hence $a_n=3^n-1$. The base and substitution in the rule verify the result.</details>

<a id="DM-CH04-E007"></a>
### DM-CH04-E007 — formal convolution

For $A(x)=1+x+x^2+\\cdots$ and $B(x)=1+x^2+x^4+\\cdots$, find $[x^6]A(x)B(x)$.

<details><summary>Hint 1</summary>Choose an even exponent from $B$.</details>
<details><summary>Hint 2</summary>The chosen exponents must sum to six.</details>
<details><summary>Solution</summary>The exponents from $B$ can be $0,2,4,6$, with corresponding exponents $6,4,2,0$ from $A$. All coefficients are one, so the coefficient is $4$.</details>

<a id="DM-CH04-E008"></a>
### DM-CH04-E008 — recurrence from a rational series

If $A(x)=(1+x)/(1-2x)$ as a formal series, find $a_0$, $a_1$ and the recurrence for $n\\ge2$.

<details><summary>Hint 1</summary>Multiply by $1-2x$.</details>
<details><summary>Hint 2</summary>Compare coefficients separately at degrees zero, one, and at least two.</details>
<details><summary>Solution</summary>From $(1-2x)A=1+x$, the constant coefficient gives $a_0=1$ and the coefficient of $x$ gives $a_1-2a_0=1$, hence $a_1=3$. For $n\\ge2$ the right coefficient is zero, so $a_n=2a_{n-1}$.</details>

<a id="DM-CH04-E009"></a>
### DM-CH04-E009 — a zero-root boundary

Solve $a_n=3a_{n-1}$ for $n\\ge2$ with $a_0=5$, $a_1=2$.

<details><summary>Hint 1</summary>The recurrence starts at $n=2$, not at $n=1$.</details>
<details><summary>Hint 2</summary>Iterate from the specified value $a_1$.</details>
<details><summary>Solution</summary>The answer is $a_0=5$ and $a_n=2\\cdot3^{n-1}$ for $n\\ge1$. The latter holds at $n=1$ and propagates by multiplying by three. It does not impose the false condition $a_1=3a_0$.</details>

<a id="DM-CH04-E010"></a>
### DM-CH04-E010 — formal versus analytic

Explain in what sense $\\sum_{n\\ge0}x^n=(1-x)^{-1}$ holds formally, and whether the left side converges at $x=2$.

<details><summary>Hint 1</summary>Multiply the formal series by $1-x$ coefficientwise.</details>
<details><summary>Hint 2</summary>At $x=2$, the terms do not tend to zero.</details>
<details><summary>Solution</summary>Every nonconstant coefficient cancels in the product with $1-x$, while the constant coefficient is one; this establishes the formal inverse. At $x=2$, the partial sums grow without bound and the terms $2^n$ do not tend to zero, so the numerical series diverges.</details>

## Chapter summary

Recurrences express local dependence and require valid boundaries. Characteristic roots solve constant-coefficient linear rules; generating functions encode all terms and translate shifts into algebra. Products represent convolution of component sizes, while rational functions correspond to eventual linear recurrences. Exact experiments can reveal patterns, but initial conditions, coefficient proofs, and hypothesis audits turn those patterns into mathematics.
`;export{e as default};