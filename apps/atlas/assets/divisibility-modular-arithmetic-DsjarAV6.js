var e=`---
parent_id: book-introduction-to-proof
chapter_id: divisibility-modular-arithmetic
title: Divisibility and Modular Arithmetic
level: undergraduate
license: CC BY-SA 4.0
---

# Divisibility and Modular Arithmetic

A statement about integers often begins with a calculation and ends with a reason the calculation works in every case. This chapter develops that reason. The central move is to replace a divisibility claim by an integer witness, and then to construct a new witness. We will use this method to prove the division theorem, the existence of greatest common divisors, Bézout's identity, and the basic rules of congruence. The integer restriction is essential: the equation $b=ak$ has a solution in rational numbers far more often than it has one in integers.

We assume the familiar order and arithmetic of the integers, mathematical induction, and the well-ordering principle: every nonempty set of nonnegative integers has a least element. We write $\\mathbb Z$ for the integers and $\\mathbb N=\\{0,1,2,\\ldots\\}$. A proof below that a set has a least positive member explicitly establishes that the set is nonempty first. We use positive divisors and nonnegative remainders, so signs have a clear role throughout.

## Divisibility is an existential statement

**Definition 9.1.** For integers $a$ and $b$, write $a\\mid b$ when there is an integer $k$ such that $b=ak$. The integer $k$ is a witness. If no such integer exists, write $a\\nmid b$. In particular, every integer divides $0$, because $0=a\\cdot0$. The only integer divisible by $0$ is $0$. Negative divisors are allowed: $-3\\mid 12$ because $12=(-3)(-4)$.

The notation $a\\mid b$ says that $a$ divides $b$; it does not mean the same thing as $b\\mid a$. To disprove $a\\mid b$, one must rule out every integer witness. A single failed candidate does not suffice. For instance, $5\\nmid 12$ because if $12=5k$ then $k=12/5$, which is not an integer. More generally, a remainder strictly between zero and a positive divisor proves nondivisibility by the uniqueness part of the division theorem below.

**Theorem 9.2: linear combinations.** If $d\\mid a$ and $d\\mid b$, then $d\\mid (ra+sb)$ for all integers $r,s$.

**Proof.** Choose integers $u,v$ with $a=du$ and $b=dv$. Then $ra+sb=d(ru+sv)$. Since $ru+sv$ is an integer, it is a witness for the stated divisibility. The same proof applies when $d=0$: the hypotheses then force $a=b=0$. In particular, divisibility passes from two numbers to their sum and their difference. Transitivity is another witness calculation: if $a\\mid b$ and $b\\mid c$, write $b=au$ and $c=bv$, giving $c=a(uv)$. $\\square$

A common error reverses this theorem: from $d\\mid(a+b)$ alone one cannot infer that $d$ divides either summand. For example, $5\\mid(2+3)$, but $5$ divides neither $2$ nor $3$. The theorem needs two separate hypotheses because its proof needs two witnesses.

## Division with remainder

**Theorem 9.3: division algorithm.** For every $a\\in\\mathbb Z$ and every integer $d>0$, there are unique integers $q,r$ such that $a=dq+r$ and $0\\le r<d$.

**Proof.** Consider $S=\\{a-dq:q\\in\\mathbb Z,\\ a-dq\\ge0\\}$. It is nonempty: for example, take $q=-|a|$, for which $a+d|a|\\ge0$. By well-ordering, $S$ has a least member $r=a-dq$. If $r\\ge d$, then $r-d=a-d(q+1)$ is a smaller nonnegative member of $S$, a contradiction. Thus $0\\le r<d$. For uniqueness, suppose also $a=dq'+r'$ with $0\\le r'<d$. Then $d(q-q')=r'-r$. The right side lies strictly between $-d$ and $d$; its only multiple of $d$ is zero. Hence $r=r'$ and $q=q'$. $\\square$

The word algorithm refers to finding $q$ and $r$; the theorem also proves that the result does not depend on a choice of method. The condition $d>0$ is part of the contract. When $a$ is negative, choose the remainder in the same interval $0\\le r<d$, rather than choosing a negative remainder by habit.

**Example 1: a negative dividend.** Divide $-23$ by $7$. Since $-23=7(-4)+5$ and $0\\le5<7$, the unique quotient is $-4$ and the remainder is $5$. The tempting equality $-23=7(-3)-2$ is true but does not satisfy the required remainder condition. This distinction matters when one uses remainders to represent congruence classes.

A useful consequence is that $d\\mid a$ exactly when the remainder on division by $d$ is zero. If $a=dq$, uniqueness gives remainder zero; conversely a zero remainder supplies the witness $q$. Thus the theorem turns a universal nondivisibility question into one finite calculation for each specified pair.

## Greatest common divisors and Bézout

**Definition 9.4.** For integers $a,b$ not both zero, their greatest common divisor $\\gcd(a,b)$ is the greatest positive integer dividing both. The pair $(0,0)$ is excluded here: every positive integer divides both zeros, so there is no greatest positive common divisor. In particular $\\gcd(a,0)=|a|$ for $a\\ne0$. Two integers are *coprime* if their greatest common divisor is $1$.

Why is there always a greatest common divisor for an allowed pair? We prove more: it can be expressed as an integer linear combination of the two inputs. This expression is a certificate one can check without repeating an algorithm.

**Theorem 9.5: Bézout's identity.** If $a,b$ are not both zero, there are integers $x,y$ such that $d=ax+by$ is positive, divides both $a$ and $b$, and is divisible by every common divisor of $a,b$. Consequently $d=\\gcd(a,b)$.

**Proof.** The set of positive integer combinations $S=\\{ax+by>0:x,y\\in\\mathbb Z\\}$ is nonempty. If $a\\ne0$, choose $x=1$ or $-1$ so that $ax>0$ and let $y=0$; otherwise use $b$ similarly. Let $d=ax_0+by_0$ be its least member. Divide $a$ by $d$: $a=dq+r$, with $0\\le r<d$. Then $r=a-dq=a(1-qx_0)+b(-qy_0)$ is another integer combination. If $r>0$, it belongs to $S$ and contradicts minimality. Thus $r=0$, so $d\\mid a$. The same argument proves $d\\mid b$. If $c$ divides both $a$ and $b$, the linear-combination theorem gives $c\\mid d$. Every positive common divisor is therefore at most $d$, and $d$ itself is a positive common divisor. It is the greatest one. $\\square$

The proof uses well-ordering twice in a disciplined way: first in the division theorem and then in choosing the least positive combination. It does not require guessing the coefficients $x,y$. Nor are those coefficients unique in general. When $a$ and $b$ are coprime, the identity takes the particularly useful form $ax+by=1$.

**Theorem 9.6: Euclid's lemma.** If $d\\mid ab$ and $\\gcd(d,a)=1$, then $d\\mid b$.

**Proof.** Bézout gives integers $x,y$ with $dx+ay=1$. Multiplying by $b$ gives $b=dxb+aby$. Both terms on the right are divisible by $d$: the first visibly, the second by the hypothesis $d\\mid ab$. Their sum is divisible by $d$. $\\square$

The coprimality hypothesis cannot be discarded. Although $6\\mid 2\\cdot3$, neither factor is divisible by $6$. A proof that silently divides $6$ out of the product would incorrectly prove this counterexample impossible.

## The Euclidean algorithm

Suppose $a=bq+r$. An integer divides both $a$ and $b$ exactly when it divides both $b$ and $r$: in one direction $r=a-bq$, and in the other $a=bq+r$. Thus replacing $(a,b)$ by $(b,r)$ preserves the common divisors. If $b>0$, the division theorem makes $0\\le r<b$. Repeating this replacement with the positive remainder as the next divisor produces strictly decreasing nonnegative remainders and must stop. The last nonzero remainder is the gcd, because the final pair is $(d,0)$ and all replacements preserved common divisors.

**Example 2: a gcd and its certificate.** The successive divisions are $252=198+54$, $198=3\\cdot54+36$, $54=36+18$, and $36=2\\cdot18$. Hence $\\gcd(252,198)=18$. Work backwards: $18=54-36=54-(198-3\\cdot54)=4\\cdot54-198=4\\cdot252-5\\cdot198$. This last identity certifies that every common divisor divides $18$; the displayed divisions show that $18$ divides both numbers. Notice that the coefficient $-5$ is legitimate: Bézout's coefficients are integers, not necessarily nonnegative.

The computation and its proof are different things. Running the algorithm on these two inputs establishes a particular answer. The invariant about common divisors and the decrease of remainders establish that the method works for every admissible pair. Whenever a proof uses an algorithm, identify both what stays true and why the process stops.

## Congruence as an equivalence relation

Fix an integer $m\\ge2$ throughout this section. **Definition.** Integers $a$ and $b$ are congruent modulo $m$, written $a\\equiv b\\pmod m$, if $m\\mid(a-b)$. The order of the difference is harmless because divisibility is preserved by negation. Congruence does not assert that $a=b$: it says their difference is a multiple of the chosen modulus.

**Theorem 9.7: equivalence and arithmetic.** Congruence modulo $m$ is reflexive, symmetric and transitive. If $a\\equiv b\\pmod m$ and $c\\equiv d\\pmod m$, then $a+c\\equiv b+d\\pmod m$ and $ac\\equiv bd\\pmod m$.

**Proof.** Reflexivity follows from $a-a=0$. If $a-b=mk$, then $b-a=m(-k)$, proving symmetry. If $a-b=mk$ and $b-c=m\\ell$, then $a-c=m(k+\\ell)$, proving transitivity. For addition, $(a+c)-(b+d)=(a-b)+(c-d)$ is a multiple of $m$. For multiplication, $ac-bd=a(c-d)+d(a-b)$ is a multiple of $m$. Each conclusion has an integer witness supplied by the displayed identity. $\\square$

By division with remainder, every integer is congruent to exactly one of $0,1,\\ldots,m-1$. Indeed $a=mq+r$ implies $a\\equiv r\\pmod m$. If two such remainders were congruent, their difference would be a multiple of $m$ strictly between $-m$ and $m$, hence zero. These remainders are convenient representatives of the equivalence classes; a class contains infinitely many integers, not only its chosen representative.

**Theorem 9.8: cancellation with a condition.** If $ac\\equiv bc\\pmod m$ and $\\gcd(c,m)=1$, then $a\\equiv b\\pmod m$.

**Proof.** The hypothesis says $m\\mid c(a-b)$. Euclid's lemma with $d=m$, $a=c$ and $b=a-b$ gives $m\\mid(a-b)$, exactly the conclusion. $\\square$

Without coprimality cancellation may fail: $2\\cdot1\\equiv2\\cdot4\\pmod6$, but $1\\not\\equiv4\\pmod6$. The condition is sufficient for all pairs $a,b$; the example explains why it is not cosmetic. One can sometimes cancel a noncoprime factor after changing the modulus, but retaining the original modulus requires a separate argument.

**Example 3: solving a congruence.** Solve $7x\\equiv5\\pmod{12}$. Because $7\\cdot7=49\\equiv1\\pmod{12}$, multiplying both sides by $7$ gives $x\\equiv35\\equiv11\\pmod{12}$. Conversely, if $x\\equiv11$, then $7x\\equiv77\\equiv5\\pmod{12}$, so every integer in this class is a solution. Multiplying by an inverse produces equivalent statements because the inverse's product with $7$ is congruent to $1$. The answer is a whole class $x=11+12k$, $k\\in\\mathbb Z$, not merely the representative $11$.

Bézout explains when such an inverse exists. If $\\gcd(c,m)=1$, then $cx+my=1$ gives $cx\\equiv1\\pmod m$. Conversely an inverse $cx\\equiv1$ gives $cx-my=1$ for an integer $y$, so any positive common divisor of $c$ and $m$ divides $1$ and must be $1$. Thus invertibility modulo $m$ is equivalent to coprimality with $m$.

## From a proof to a decision procedure

A linear congruence $cx\\equiv b\\pmod m$ can have no solutions, one residue class of solutions, or several. The inverse method gives one class when $\\gcd(c,m)=1$, but this is only one case. The following criterion gives a complete answer without claiming cancellation where it is invalid.

**Theorem 9.9: solvability of a linear congruence.** Let $m\\ge2$ and let $g=\\gcd(c,m)$. The congruence $cx\\equiv b\\pmod m$ has an integer solution exactly when $g\\mid b$. When it has a solution $x_0$, all solutions are $x\\equiv x_0\\pmod{m/g}$.

**Proof.** The congruence is equivalent to an equation $cx+my=b$ for integers $x,y$, after changing the sign of the multiple of $m$ if necessary. Every common divisor of $c$ and $m$ divides the left side, so $g\\mid b$ is necessary. Conversely Bézout gives $cu+mv=g$; if $b=gk$, then $x=ku$, $y=kv$ solve the equation. Suppose $x_0$ is a solution. Another integer $x$ is a solution exactly when $m\\mid c(x-x_0)$. Write $c=gc'$ and $m=gm'$. Bézout's identity divided by $g$ shows $\\gcd(c',m')=1$, including the case $m'=1$. If $m'>1$, Euclid's lemma gives $m'\\mid(x-x_0)$, and the converse follows directly by multiplication. If $m'=1$, every difference is divisible by $m'$, and the same conclusion holds. Thus the solution set is exactly $x=x_0+km'$ for $k\\in\\mathbb Z$. Here congruence modulo $1$ is shorthand for divisibility by $1$; unlike our main convention $m\\ge2$, it has only one class. $\\square$

For example $6x\\equiv8\\pmod{14}$ is solvable because $\\gcd(6,14)=2$ divides $8$. Dividing the integer equation by $2$ gives $3x\\equiv4\\pmod7$, so $x\\equiv6\\pmod7$. Modulo $14$ this is the pair of distinct classes $6$ and $13$. In contrast $6x\\equiv5\\pmod{14}$ has no solution, because a multiple of $2$ cannot equal $5$. The theorem records both existence and the complete solution set; finding a single successful value alone would not establish that no other class has been missed.

## Exercises

Work with integer witnesses and state the modulus where appropriate. Each solution is one possible proof; compare its use of hypotheses with your own.

### Exercise 1
<a id="divisibility-modular-arithmetic-ex-1"></a>
Prove that $a\\mid b$ and $b\\mid a$ imply $|a|=|b|$.

<details><summary>Hint 1</summary>Handle the case in which one number is zero first.</details>
<details><summary>Hint 2</summary>For nonzero inputs, substitute the two integer witnesses into one another.</details>
<details><summary>Solution</summary>If $a=0$, $a\\mid b$ forces $b=0$; similarly for $b=0$. Otherwise write $b=ak$ and $a=b\\ell$. Cancellation of the nonzero integer $a$ gives $k\\ell=1$. Integer factors of $1$ are both $1$ or both $-1$, so $b=\\pm a$ and the absolute values agree.</details>

### Exercise 2
<a id="divisibility-modular-arithmetic-ex-2"></a>
Find quotient and remainder when $-101$ is divided by $9$.

<details><summary>Hint 1</summary>The remainder must be nonnegative.</details>
<details><summary>Hint 2</summary>Choose the multiple of $9$ immediately below $-101$.</details>
<details><summary>Solution</summary>$-101=9(-12)+7$ and $0\\le7<9$, so the quotient is $-12$ and the remainder is $7$. The division theorem ensures uniqueness.</details>

### Exercise 3
<a id="divisibility-modular-arithmetic-ex-3"></a>
Prove that $3$ divides $n^3-n$ for every integer $n$.

<details><summary>Hint 1</summary>Factor the expression into three consecutive integers.</details>
<details><summary>Hint 2</summary>Use the possible remainders of $n$ modulo $3$.</details>
<details><summary>Solution</summary>$n^3-n=(n-1)n(n+1)$. The remainder of $n$ modulo $3$ is $0$, $1$, or $2$. In these cases respectively $n$, $n-1$, or $n+1$ is divisible by $3$. Multiplying its integer witness by the other two integer factors proves the result.</details>

### Exercise 4
<a id="divisibility-modular-arithmetic-ex-4"></a>
Find $\\gcd(84,30)$ and integers $x,y$ with $84x+30y=\\gcd(84,30)$.

<details><summary>Hint 1</summary>Divide $84$ by $30$, then continue with the remainder.</details>
<details><summary>Hint 2</summary>Rewrite the last nonzero remainder using previous equations.</details>
<details><summary>Solution</summary>$84=2\\cdot30+24$ and $30=24+6$, followed by $24=4\\cdot6$, give gcd $6$. Back substitution gives $6=30-(84-2\\cdot30)=-84+3\\cdot30$, so $x=-1,y=3$.</details>

### Exercise 5
<a id="divisibility-modular-arithmetic-ex-5"></a>
Prove that $\\gcd(a,b)=\\gcd(a,b+ka)$ for any integer $k$, provided $(a,b)\\ne(0,0)$.

<details><summary>Hint 1</summary>Compare the sets of common positive divisors.</details>
<details><summary>Hint 2</summary>Express each of $b$ and $b+ka$ using the other and $a$.</details>
<details><summary>Solution</summary>A common divisor of $a,b$ divides $b+ka$. Conversely a common divisor of $a,b+ka$ divides $(b+ka)-ka=b$. The pairs therefore have exactly the same positive common divisors, so their greatest members are equal. The second pair is also not $(0,0)$: if $a=0$ and $b+ka=0$, then $b=0$.</details>

### Exercise 6
<a id="divisibility-modular-arithmetic-ex-6"></a>
If $a\\equiv b\\pmod m$, prove $a^n\\equiv b^n\\pmod m$ for every $n\\in\\mathbb N$, using the convention $a^0=1$ also when $a=0$.

<details><summary>Hint 1</summary>Use induction on $n$.</details>
<details><summary>Hint 2</summary>Multiply the induction hypothesis by the original congruence.</details>
<details><summary>Solution</summary>For $n=0$ both powers equal $1$. If the claim holds at $n$, multiplication compatibility applied to $a^n\\equiv b^n$ and $a\\equiv b$ gives $a^{n+1}\\equiv b^{n+1}$. Induction completes the proof.</details>

### Exercise 7
<a id="divisibility-modular-arithmetic-ex-7"></a>
Find all integers $x$ satisfying $5x\\equiv3\\pmod7$.

<details><summary>Hint 1</summary>Find a multiplicative inverse of $5$ modulo $7$.</details>
<details><summary>Hint 2</summary>$5\\cdot3$ has remainder $1$ modulo $7$.</details>
<details><summary>Solution</summary>Multiplication by $3$ gives $x\\equiv9\\equiv2\\pmod7$. Conversely $x\\equiv2$ gives $5x\\equiv10\\equiv3$. Thus exactly $x=2+7k$ for $k\\in\\mathbb Z$ solve it.</details>

### Exercise 8
<a id="divisibility-modular-arithmetic-ex-8"></a>
Find all solutions of $4x\\equiv2\\pmod6$, and explain why cancelling $2$ modulo $6$ is invalid.

<details><summary>Hint 1</summary>Translate the congruence into an integer equation.</details>
<details><summary>Hint 2</summary>After dividing the integer equation by $2$, the modulus changes.</details>
<details><summary>Solution</summary>$4x-2=6k$ is equivalent to $2x-1=3k$, hence $2x\\equiv1\\pmod3$ and $x\\equiv2\\pmod3$. Modulo $6$ these are the two classes $2$ and $5$. Cancelling $2$ while keeping modulus $6$ would assert $2x\\equiv1\\pmod6$, which has no solution; $2$ is not coprime to $6$.</details>

### Exercise 9
<a id="divisibility-modular-arithmetic-ex-9"></a>
Prove that if $a\\equiv b\\pmod m$, then $\\gcd(a,m)=\\gcd(b,m)$.

<details><summary>Hint 1</summary>Write $a=b+km$.</details>
<details><summary>Hint 2</summary>Compare common divisors in both directions.</details>
<details><summary>Solution</summary>The congruence gives $a=b+km$ for an integer $k$. A common divisor of $b,m$ divides $a$; a common divisor of $a,m$ divides $b=a-km$. Their sets of positive common divisors coincide, and the gcds are their greatest members.</details>

### Exercise 10
<a id="divisibility-modular-arithmetic-ex-10"></a>
Let $p$ be a positive prime. Prove that if $p\\mid a^2$, then $p\\mid a$.

<details><summary>Hint 1</summary>If $p$ does not divide $a$, what can its gcd with $a$ be?</details>
<details><summary>Hint 2</summary>Apply Euclid's lemma to $a\\cdot a$.</details>
<details><summary>Solution</summary>If $p\\nmid a$, the only positive common divisor of $p$ and $a$ is $1$, since the positive divisors of $p$ are $1,p$. Euclid's lemma applied to $p\\mid a\\cdot a$ then gives $p\\mid a$, a contradiction. Hence $p\\mid a$.</details>

## Summary

Divisibility means the existence of an integer witness. The division theorem provides unique remainders, and the Euclidean algorithm preserves common divisors while its remainders decrease. Bézout's identity expresses the gcd of a nonzero pair as a linear combination; Euclid's lemma follows from that identity. Congruence is equality of remainders, is an equivalence relation, and respects addition and multiplication. Cancellation at the same modulus needs a coprime factor. When checking a proof, look for the integer witness, the nonzero and positivity conditions, and the exact modulus.

## Further reading

Richard Hammack, [*Book of Proof*, third edition](https://richardhammack.github.io/BookOfProof/), especially the sections on divisibility and congruence. The arguments and exercises above are written for this chapter; consult Hammack for another presentation and additional examples.
`;export{e as default};