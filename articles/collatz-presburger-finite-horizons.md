
# Finite-Horizon Arithmetic Certificates and Their Quantifiers
<a id="sec-collatz-presburger-certificates"></a>

Exact linear branch relations make each fixed-horizon descent set decidable and semilinear; the unbounded orbit assertion has a different quantifier structure.

## Preparation and source scope

This L4 article assumes the map conventions and proof language of the
[Collatz elective](#/books/collatz-conjecture/index) and the relevant finite-model
foundations of the [Collatz Research Toolkit](#/books/collatz-research-toolkit/index).
The preparation is named in the native prerequisite metadata; the discussion
below isolates one method rather than rebuilding the entire research course.

This is an abridged adaptation of [the retained source chapter](#/books/collatz-conjecture/44-presburger-certificates).
The original formulas, worked material, exercise solutions and section anchors
remain at that source. No new mathematics, execution, empirical result or
independent review is claimed by the adaptation. The classical conjecture remains
open in the dated record used by the source; this article presents no proof of it.

## Exact branch relations

Use the shortcut map

$$
S(x)=\begin{cases}
x/2,&x\text{ even},\\
(3x+1)/2,&x\text{ odd}.
\end{cases}
$$

One transition from $x$ to $y$ is the disjunction

$$
(x=2y)
\quad\lor\quad
(x=2q+1\ \land\ 3x+1=2y) \tag{44.1}
$$

for an integer $q\ge0$. In the first branch, $x=2y$ already proves evenness.
In the second, $x=2q+1$ proves oddness and the second equation proves exact
division. Multiplication is only by fixed constants, so every equation is
linear.

A nonexample is

$$
y=b(3x+1)/2+(1-b)x/2.
$$

The products $bx$ are nonlinear variable products, division may be inexact, and
nothing forces $b$ to match parity. A compact-looking formula can be a weaker
encoding than an explicit disjunction.

## Integer-programming encodings

Many mixed-integer solvers support **indicator constraints**:

$$
b=0\Longrightarrow x=2y,
$$

$$
b=1\Longrightarrow x=2q+1\ \land\ 3x+1=2y.
$$

If indicators are unavailable, one may use big-$M$ inequalities that deactivate
one branch. The constant $M$ must follow from proved bounds. Guessing a large
number risks either excluding valid traces when it is too small or causing
numerical instability when it is enormous.

For starts $1\le x_0\le N$ and $h$ unaccelerated steps, the conservative
recurrence

$$
B_0=N,
\qquad
B_{j+1}=3B_j+1
$$

proves $x_j\le B_j$. It ignores divisions and is loose, but it is safe. Every
big-$M$ term can then be derived from the largest possible residual over these
explicit intervals. A tighter bound is welcome only with a proof.

For exact proof production, disjunctive branch enumeration or an SMT integer
formula may be preferable to numerically conditioned big-$M$ optimization.

## Presburger arithmetic

**Presburger arithmetic** is first-order arithmetic with integer variables,
addition, order, fixed integer constants, logical connectives, and quantifiers.
Congruences are expressible because

$$
x\equiv r\pmod m
\quad\Longleftrightarrow\quad
\exists q\in\mathbb Z:\ x=r+mq.
$$

Multiplication of variables such as $xy$ is excluded. Multiplication by a fixed
constant, such as $3x$, is repeated addition and is allowed.

Presburger arithmetic is decidable: an algorithm can determine the truth of
every sentence in the language. Decision procedures may be very expensive, so
decidable does not mean fast. More importantly, a relation describing one
Collatz step does not make its arbitrary transitive closure a fixed finite
formula.

In one dimension, Presburger-definable sets are **semilinear**: finite unions of
sets built from a base value plus nonnegative combinations of fixed periods.
Equivalently, they are eventually periodic. A union of residue classes modulo
$m$, perhaps with finitely many exceptional small values, is the simplest
example.

## Fixed-horizon trace formulas

For a fixed horizon $h$, introduce integers $x_0,\ldots,x_h$ and apply relation
(44.1) at each adjacent pair. The statement “descent at exactly time $h$” is

$$
x_0>0\ \land\ x_h<x_0
\ \land\
\bigwedge_{i=0}^{h-1}\operatorname{Step}(x_i,x_{i+1}). \tag{44.2}
$$

Descent by time $h$ replaces $x_h<x_0$ by a finite disjunction over
$x_1,\ldots,x_h$. All quantifiers and constraints remain Presburger.

There are $2^h$ formal parity words. For each one, intermediate variables can be
eliminated by substitution, producing

$$
S^h(x)=\frac{3^kx+b}{2^h}
$$

on one compatible residue modulo $2^h$. The inequality then becomes linear in
$x$. This word-by-word elimination is transparent and independently checkable,
although exponential in $h$.

## Complete case study: all three-step branches

For $h=3$, symbolic composition yields the following exact table.

| word | compatible residue $r\pmod8$ | $S^3(x)$ |
|:---:|---:|:---|
| `000` | 0 | $x/8$ |
| `001` | 4 | $(3x+4)/8$ |
| `010` | 2 | $(3x+2)/8$ |
| `011` | 6 | $(9x+10)/8$ |
| `100` | 5 | $(3x+1)/8$ |
| `101` | 1 | $(9x+7)/8$ |
| `110` | 3 | $(9x+5)/8$ |
| `111` | 7 | $(27x+19)/8$ |

Let us derive `101` completely. The equations are

$$
3x_0+1=2x_1,
\qquad
x_1=2x_2,
\qquad
3x_2+1=2x_3.
$$

Substitution gives

$$
x_2=\frac{3x_0+1}{4},
\qquad
x_3=\frac{9x_0+7}{8}.
$$

The required integrality and parities yield $x_0\equiv1\pmod8$. The descent
inequality would be

$$
\frac{9x_0+7}{8}<x_0,
$$

or $x_0<-7$, so no positive start in this class descends at step three.

For `100`, the compatible class is $5\pmod8$ and

$$
S^3(x)=\frac{3x+1}{8}<x
$$

for every positive $x$. The other rows are decided in the same way. The exact
result is

$$
S^3(x)<x
\quad\Longleftrightarrow\quad
x\equiv0,2,4,5\pmod8
\qquad(x>0). \tag{44.3}
$$

Equation (44.3) is a complete semilinear description, not an empirical pattern.
It can be checked by replaying eight affine formulas and inequalities.

## Why every fixed-horizon descent set is semilinear

The three-step calculation is not an accident. Fix $h$. Every parity word $w$
of length $h$ has one compatible residue $r_w\pmod{2^h}$ and an affine formula

$$
S^h(x)=\frac{3^{k_w}x+b_w}{2^h}.
$$

On that class, descent is equivalent to

$$
(2^h-3^{k_w})x>b_w. \tag{44.4}
$$

If $2^h-3^{k_w}\le0$, the positive right side prevents descent. If the
coefficient is positive, (44.4) says

$$
x>\frac{b_w}{2^h-3^{k_w}}.
$$

Thus the descending starts for this word are all sufficiently large positive
members of one residue class, with a finite list of smaller exceptions. A finite
union over the $2^h$ words is semilinear. The same reasoning applies to descent
by time $h$, using a finite union over times and words.

This proof gives a direct decision procedure:

1. enumerate each word exactly once;
2. compute $(k_w,b_w)$ by integer recurrence;
3. reconstruct $r_w$;
4. compare the leading coefficient with $2^h$;
5. calculate the integer threshold when it is positive; and
6. output the residue tail plus explicit small exceptions.

The procedure may be exponentially expensive, but it terminates for each fixed
$h$ and emits a checkable normal form.

### Strict inequalities over integers

For integer expressions, strict inequalities can be normalized without
floating point:

$$
a<b\quad\Longleftrightarrow\quad a\le b-1.
$$

Likewise, the least integer $x$ satisfying $Dx>b$ for positive integer $D$ is

$$
x_{\min}=\left\lfloor\frac bD\right\rfloor+1.
$$

If only one residue $r\pmod m$ is allowed, compute the least class member at or
above $x_{\min}$ by exact quotient and remainder. This avoids an off-by-one
error when $b/D$ is itself an integer.

## Theorem-scope and failure audit

- Fixed-horizon Collatz relations use only Presburger operations.
- Word elimination yields exact affine and semilinear descriptions.
- Equation (44.3) is a universal theorem for three shortcut steps.
- A feasible solver assignment needs exact replay before becoming a witness.
- Infeasibility and optimality require checkable proof objects.
- A timeout, `unknown`, or empty search log has no mathematical status.
- A bounded cycle exclusion does not rule out longer cycles or aperiodic escape.
- Decidability of each fixed horizon does not decide an unbounded transitive
  closure.


## Exercises

### Exercise 1
<a id="deep-dive-collatz-presburger-finite-horizons-ex-1"></a>

Derive the two-step shortcut branch `10`, its compatible class modulo four, and its exact positive-integer descent condition.

<details>
<summary>Hint 1</summary>

Apply the odd branch, then the even branch.

</details>

<details>
<summary>Hint 2</summary>

Check when the first output is even before simplifying the descent inequality.

</details>

<details>
<summary>Solution</summary>

The first output is $(3x+1)/2$, and the next is $(3x+1)/4$. The second branch is even precisely when $3x+1$ is divisible by four, equivalent to $x\equiv1\pmod4$. Descent is $3x+1<4x$, or $x>1$. Thus starts congruent to one modulo four and at least five descend at the second step; one does not. The residue and threshold are separate parts of the certificate, and both are needed for all integer lifts.

</details>

### Exercise 2
<a id="deep-dive-collatz-presburger-finite-horizons-ex-2"></a>

Explain why deciding the sentence for each fixed horizon does not by itself decide whether every positive start eventually descends.

<details>
<summary>Hint 1</summary>

Write the start and time quantifiers in order.

</details>

<details>
<summary>Hint 2</summary>

The horizon in a finite formula is a fixed numeral, not an arbitrary transitive closure.

</details>

<details>
<summary>Solution</summary>

For a specified horizon $h$, finitely many step variables and branch disjunctions express descent by $h$ and admit the stated arithmetic elimination. The universal eventual assertion has form: for every positive start above one there exists some time giving a smaller iterate. The required time can depend on the start and need not be bounded by one supplied horizon. Decidability of each fixed formula does not provide a decision procedure for that unbounded family or a proof that one horizon covers every start. No formal independence claim follows either.

</details>

## Continue with the full argument

Return to the [research toolkit](#/books/collatz-research-toolkit/index) for the surrounding definitions and transfer questions, and to the retained source for longer derivations and additional exercises. The distinction between a theorem in a declared model and a universal statement about positive integers remains part of every conclusion.
