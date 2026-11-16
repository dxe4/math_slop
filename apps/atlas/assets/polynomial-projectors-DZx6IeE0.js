var e=`---
id: visual-lab-polynomial-projectors
title: "Why Eigenvalue Values Are Not Enough"
level: undergraduate
estimated_minutes: 90
license: CC BY-SA 4.0
---

# Why eigenvalue values are not enough

Suppose an operator is meant to keep one invariant part of a vector and discard another. You test it on every eigenvector, and every answer is correct. Can it still fail? Yes: eigenvectors may miss directions that carry additional information. Polynomial projections let us recover those directions without first constructing a Jordan basis.

You need kernels, matrix multiplication, eigenvectors, and the defective example from [Unit 8 of the linear algebra course](#/item/course-linear-algebra-standard), together with elementary polynomial expansion. Work over $\\mathbb R$ throughout. No calculus, inner products, or general Jordan-existence theorem is required. Allow 20 minutes for predictions, 30 for the proofs, and 40 for six exercises.

We will use a polynomial's **local coefficients**. If

$$q(\\lambda+h)=q(\\lambda)+a_1h+a_2h^2+\\cdots,$$

then $a_1=q'(\\lambda)$, its formal derivative at $\\lambda$. For $q(t)=\\sum_kc_kt^k$, this means $q'(t)=\\sum_{k\\ge1}kc_kt^{k-1}$. This is an algebraic coefficient rule; no limit is involved. A repeated factor will make the first-order coefficient matter as well as the value.

## Guided investigation

Keep the real operator

$$
A=\\begin{pmatrix}2&1&1\\\\0&2&0\\\\0&0&-1\\end{pmatrix}
$$

fixed. Its ordinary eigenspaces are

$$
\\ker(A-2I)=\\operatorname{span}(e_1),\\qquad
\\ker(A+I)=\\operatorname{span}((-1,0,3)).
$$

They span only two dimensions. We want an operation that keeps the entire part associated with 2, including its generalized direction, and removes the part associated with $-1$.

The tempting interpolant is $L=(A+I)/3$. It fixes every 2-eigenvector and kills every $-1$-eigenvector. Predict whether applying $L$ twice always gives the same result as applying it once. Make the prediction before calculating on $e_2$.

Open [the live workshop](#/labs?lab=visual-lab-polynomial-projectors). Its guided family is

$$
q_j(t)=1-\\frac{(t-2)^2}{9}+\\frac{j(t-2)(t+1)}9.
$$

Every choice keeps $q_j(2)=1$ and $q_j(-1)=0$. The integer control $j=-2,\\ldots,2$ changes $q_j'(2)=j/3$; $j=1$ gives the tempting linear interpolant. Input coordinates range from $-3$ to $3$. These bounds select examples; the proofs below concern all real inputs.

### Keyboard, exact text tables, and print

Tab to native selectors, sliders, and buttons, then use arrow keys. Named diagram, formula, and table regions can be focused and scrolled horizontally on narrow screens. Exact coefficient tables repeat the plotted evidence; marker distances are not angles or distances between primary spaces. No dragging, animation, or color judgment is required. Written notes stay in this session. Print the revealed state to retain the chosen conditions, operator certificates, input records, and notes; written proofs are not automatically graded.

Direct calculation exposes the failure:

$$Le_2=e_2+\\tfrac13e_1,\\qquad L^2e_2=e_2+\\tfrac23e_1.$$

The output keeps changing. A **projection** must satisfy $K^2=K$: once it has selected a part, selecting again changes nothing. Agreement on ordinary eigenvectors could not establish this whole-operator identity.

There are two different questions to record in your prediction. Does this particular input happen to give the desired answer? Does the proposed operation give the desired answer for every input? A counterexample settles the second question negatively. Agreement on one input, or on a list that does not span the domain, leaves it open. The workshop keeps a whole-matrix defect and an independent witness beside the current input so that a successful probe cannot silently become a universal claim.

## Recover the missing direction

Here $(A-2I)e_2=e_1$ and $(A-2I)e_1=0$. Thus $e_2$ belongs to $\\ker(A-2I)^2$ but is not an eigenvector. This larger kernel is the **primary space** for 2 in this example:

$$
G_2=\\ker(A-2I)^2=\\operatorname{span}(e_1,e_2),\\qquad
G_{-1}=\\ker(A+I).
$$

A generalized eigenvector is killed by a power of the shifted operator, rather than necessarily by its first power. We include zero when naming these spaces.

Construct complementary operators

$$
Q=\\frac{(A-2I)^2}{9}
=\\begin{pmatrix}0&0&-1/3\\\\0&0&0\\\\0&0&1\\end{pmatrix},
\\qquad
P=I-Q
=\\begin{pmatrix}1&0&1/3\\\\0&1&0\\\\0&0&0\\end{pmatrix}.
$$

Their action gives an explicit decomposition:

$$
Pv=(x+z/3,y,0),\\qquad Qv=(-z/3,0,z),\\qquad v=Pv+Qv.
$$

The first part lies in $G_2$ and the second in $G_{-1}$. Their intersection is zero: a multiple of $(-1,0,3)$ with third coordinate zero must vanish. Hence the decomposition is unique.

Multiplication proves

$$P^2=P,\\quad Q^2=Q,\\quad PQ=QP=0,\\quad P+Q=I.$$

These identities certify complementary projections for every input. They also commute with $A$, because they are polynomials in $A$. Commuting with $A$ alone is insufficient: $L$ commutes too.

Complementary does not mean Euclidean perpendicular. For example, $e_1\\in G_2$ and $(-1,0,3)\\in G_{-1}$ have dot product $-1$. These are algebraic projections along an invariant complementary space, not claims about closest points.

## Why the repeated factor changes interpolation

The minimal polynomial is the monic polynomial of smallest degree annihilating the operator. Here

$$m(t)=(t-2)^2(t+1),\\qquad m(A)=0.$$

The nontrivial chain at 2 requires the squared factor, while the $-1$ eigenvector requires $t+1$. More explicitly, expanding a polynomial around 2 shows that killing the restriction to $G_2$ requires its constant and linear coefficients to vanish. Killing $G_{-1}$ requires its value at $-1$ to vanish. These necessary factors together already annihilate $A$, proving minimality.

To keep $G_2$ unchanged, impose

$$q(2)=1,\\qquad q'(2)=0,\\qquad q(-1)=0.$$

Write

$$q(t)=a+b(t-2)+c(t-2)^2.$$

The conditions give

$$a=1,b=0,c=-1/9,$$

so

$$q(t)=1-\\frac{(t-2)^2}{9},\\qquad q(A)=P.$$

The extra condition removes motion along the generalized chain. The polynomial identity

$$q(t)^2-q(t)=\\frac{m(t)(t-5)}{81}$$

provides another global certificate: substituting $A$ makes the right side zero. A tested input illustrates that proof; it does not replace it.

Why is divisibility the appropriate language? Polynomial evaluation preserves sums and products, because $A^iA^j=A^{i+j}$. Thus every multiple of $m$ evaluates to zero. Conversely, divide any annihilating polynomial $g$ by $m$, obtaining $g=sm+r$ with $\\deg r<\\deg m$. Then $r(A)=0$. A nonzero remainder, normalized to be monic, would contradict the defining minimality of $m$. Hence $g(A)=0$ exactly when $m$ divides $g$.

For the projector, this turns an operator question into the polynomial question $m\\mid(q^2-q)$. Specifying values at the two roots checks divisibility by $(t-2)(t+1)$ only. The extra factor at 2 asks for the first-order coefficient too. These local conditions control every vector in the associated primary space, not only its ordinary eigenvectors. Idempotence by itself would also permit the zero and identity operators; the stated local values select the intended primary part.

Let

$$
N=(A-2I)P=\\begin{pmatrix}0&1&0\\\\0&0&0\\\\0&0&0\\end{pmatrix}.
$$

Then $N^2=0$, $PN=NP=N$, $QN=NQ=0$, and $A=2P-Q+N$. For every real polynomial $f$,

$$f(A)=f(2)P+f'(2)N+f(-1)Q.$$

To prove it, expand $f(2+h)$ and substitute the square-zero restriction $h=N$ on $G_2$; all terms of degree at least two disappear. On $G_{-1}$ the operator is scalar multiplication by $-1$.

Consequently $L=P+N/3$, with defect $L^2-L=N/3$. More generally $q_j(A)=P+(j/3)N$, so its defect is $(j/3)N$. Zero and ordinary eigenvectors conceal it. Even the image, kernel, and commutation tests cannot distinguish these candidates from $P$; idempotence can.

Eigenvalue values also cannot certify annihilation. The polynomial $(t-2)(t+1)$ vanishes at both eigenvalues, yet its operator value is $3N\\ne0$.

## Change to polynomial inputs

Now work on $P_3(\\mathbb R)$, the four-dimensional space of polynomials of degree at most three. Define

$$
Rp(x)=p(-x),\\qquad
Cp(x)=p(x+1)-2p(x)+p(x-1),\\qquad T=R+C.
$$

Before revealing the action, calculate $T$ on $1,x,x^2,x^3$. Predict whether $(I+T)/2$ selects the entire primary space associated with 1.

Expansion gives $C1=Cx=0$, $Cx^2=2$, and $Cx^3=6x$. Thus

$$
T(a+bx+cx^2+dx^3)=(a+2c)+(-b+6d)x+cx^2-dx^3.
$$

Reflection commutes with the central difference: substituting $-x$ interchanges the two shifted terms. Also $R^2=I$ and $C^2=0$ on this domain. The even polynomials carry $T=I+C$, and the odd polynomials carry $T=-I+C$. Both restrictions have nonzero square-zero parts.

One can see the domain dependence without assuming a matrix form. In the central difference, the highest two terms cancel, so $C$ lowers the degree by at least two whenever the result is nonzero. Applying it twice to a polynomial of degree at most three therefore gives zero. Nevertheless one application can be nonzero on either parity space, as $x^2$ and $x^3$ demonstrate. Thus neither repeated factor can be removed from

$$m_T(t)=(t-1)^2(t+1)^2.$$

The ordinary eigenspaces are only $\\operatorname{span}(1)$ and $\\operatorname{span}(x)$. The primary spaces are all even and all odd polynomials in $P_3$, respectively.

Since $T^3=R+3C$, the correct cubic interpolants are

$$
q_+(t)=\\frac{2+3t-t^3}{4},\\qquad q_-(t)=1-q_+(t),
$$

$$
P_+=q_+(T)=\\frac{I+R}{2},\\qquad
P_-=q_-(T)=\\frac{I-R}{2}.
$$

They select $a+cx^2$ and $bx+dx^3$. The missing conditions are

$$q_+'(1)=q_+'(-1)=0,$$

alongside values 1 and 0. The identity

$$
q_+(t)^2-q_+(t)=\\frac{(t^2-1)^2(t^2-4)}{16}
$$

certifies idempotence after substitution.

The changed controls independently vary those first-order coefficients:

$$
q_{\\alpha,\\beta}(t)=q_+(t)
 +\\alpha\\frac{(t-1)(t+1)^2}{4}
 +\\beta\\frac{(t+1)(t-1)^2}{4}.
$$

Both eigenvalue values remain fixed, while $q_{\\alpha,\\beta}'(1)=\\alpha$ and $q_{\\alpha,\\beta}'(-1)=\\beta$. Each control ranges from $-1$ to $1$ in halves. With $N_+=CP_+$ and $N_-=CP_-$, the candidate is $P_++\\alpha N_++\\beta N_-$ and its defect is $\\alpha N_+-\\beta N_-$. Testing $x^2$ detects $\\alpha$; testing $x^3$ detects $\\beta$. Both must vanish. Repairing one root leaves an independent obstruction at the other.

At $\\alpha=\\beta=1/2$, the candidate is $(I+T)/2$. It sends $x^3$ to $3x$, then to zero. The four local conditions, rather than two eigenvalue values, determine the primary projector.

## Exercises

Try these before the separate solutions. The final domain-change task is on paper: the interactive polynomial experiment remains on $P_3$.

1. **Change the vector.** For $v=(2,-1,3)$, find $Pv,Qv,Nv,Lv,L^2v$. Which difference refutes idempotence? **Hint:** use the displayed component formulas.
2. **Change the polynomial.** Let $h(t)=t^3-4t^2+t+6$. Find $h(2),h(-1),h'(2)$ and the whole matrix $h(A)$. **Hint:** factor $h$ or expand around 2.
3. **Predict many steps.** For $v=(-1,2,-3)$, derive $A^nv$ for integers $n\\ge0$, then calculate $A^4v$. **Hint:** on the first primary space, expand $(2I+N)^n$.
4. **Classify all quadratic candidates.** Find every polynomial $r$ of degree at most two satisfying $r(2)=1,r(-1)=0$. Which give an idempotent $r(A)$? **Hint:** subtract the correct $q$; the difference has roots 2 and $-1$.
5. **Change the polynomial input.** For $p=1-2x+3x^2-x^3$, find $Tp,P_+p,P_-p,T^2p,T^3p$. Explain why the primary parts need not be eigenvectors. **Hint:** keep parity and the square-zero parts separate.
6. **Change the domain.** Keep $T=R+C$ but use $P_4$. Calculate $C^2x^4$ and the old cubic $q_+(T)x^4$. Find the new minimal polynomial and the extra local condition required at 1. Does this contradict the $P_3$ proof? **Hint:** expand $q_+(1+h)$ through $h^2$.

## Worked solutions

### Exercise 1

The components are $Pv=(3,-1,0)$, $Qv=(-1,0,3)$, and $Nv=(-1,0,0)$. Their first two terms reconstruct $v$. Since $L=P+N/3$,

$$Lv=(8/3,-1,0),\\qquad L^2v=(7/3,-1,0).$$

The difference $(-1/3,0,0)$ is nonzero. Correct eigenvalue values have not made the candidate a projection.

### Exercise 2

Factor $h=(t-3)(t-2)(t+1)$. Both eigenvalue values vanish, while its first-order coefficient at 2 is $(2-3)(2+1)=-3$. Hence

$$
h(A)=-3N=\\begin{pmatrix}0&-3&0\\\\0&0&0\\\\0&0&0\\end{pmatrix}.
$$

It sends $e_2$ to $-3e_1$, so it is not the zero operator. One copy of $t-2$ did not supply the repeated factor needed to annihilate the chain.

### Exercise 3

Here $Pv=(-2,2,0)$, $Qv=(1,0,-3)$, and $Nv=(2,0,0)$. The binomial expansion, using $N^2=0$, gives

$$A^n=2^nP+n2^{n-1}N+(-1)^nQ,$$

and therefore

$$
A^nv=((n-2)2^n+(-1)^n,\\ 2^{n+1},\\ -3(-1)^n).
$$

This includes $n=0$, when the term multiplied by $n$ vanishes. At $n=4$ the answer is $(33,32,-3)$. The contribution involving $n$ records information absent from eigenvalue values alone.

### Exercise 4

The difference $r-q$ is divisible by $(t-2)(t+1)$. Degree at most two leaves exactly

$$r(t)=q(t)+\\gamma(t-2)(t+1),\\qquad\\gamma\\in\\mathbb R.$$

Then $r(A)=P+3\\gamma N$ and $r(A)^2-r(A)=3\\gamma N$. Since $N\\ne0$, only $\\gamma=0$ works. Equivalently, $r'(2)=3\\gamma$ must vanish. The live guided family samples $\\gamma=j/9$; the proof classifies every real $\\gamma$.

### Exercise 5

The primary parts are $P_+p=1+3x^2$ and $P_-p=-2x-x^3$. Applying the explicit action gives

$$
Tp=7-4x+3x^2+x^3,
$$

$$
T^2p=13+10x+3x^2-x^3,\\qquad
T^3p=19-16x+3x^2+x^3.
$$

For an independent check, the even restriction is $I+C$, so its $n$th power adds $nC$. The odd restriction is $-I+C$, so its $n$th power is $(-1)^n(I-nC)$. Thus

$$T^np=(1+6n)+(-1)^n(-2+6n)x+3x^2-(-1)^nx^3.$$

Neither primary part is an eigenvector: its quadratic or cubic coefficient activates a nonzero nilpotent contribution. Membership in a primary space does not require being fixed up to one scalar by $T$.

### Exercise 6

Expansion gives $Cx^4=12x^2+2$, $C^2x^4=24$, and $C^3x^4=0$. On even polynomials $T=I+C$, while

$$q_+(1+h)=1-\\tfrac34h^2-\\tfrac14h^3.$$

Consequently the old cubic sends $x^4$ to $x^4-18$; a second application gives $x^4-36$. It fails idempotence on the larger domain.

The even chain now has length three, while the odd chain still has length two. The new minimal polynomial is $(t-1)^3(t+1)^2$. Besides value 1 and zero first-order coefficient at 1, the desired projector needs zero coefficient of $(t-1)^2$. In derivative notation this is $q''(1)=0$; the coefficient itself is $q''(1)/2$, which for the old cubic is $-3/4$. The $P_3$ proof remains correct because its hypothesis $C^2=0$ held on that domain.

## Continue the proof

The [polynomial-calculus chapter](#/item/book-linear-algebra-structure-proofs?chapter=polynomial-calculus-cyclic-subspaces) develops evaluation and annihilators; [primary decomposition](#/item/book-linear-algebra-structure-proofs?chapter=primary-decomposition) proves the general coprime-factor construction. The [Jordan chapter](#/item/book-linear-algebra-structure-proofs?chapter=jordan-chains-nilpotent-structure) explains longer chains and higher local coefficients.

[Axler, Theorem 5.29 and Sections 8B–8C](https://linear.axler.net/LADR4e.pdf) supports the annihilator and generalized-eigenspace theory. [Vogan's MIT notes, Sections 4–5](https://ocw.mit.edu/courses/18-700-linear-algebra-fall-2013/bfc865190eb8c68229b81246b77d93fb_MIT18_700F13_generalized.pdf) connect projections to invariant direct sums. [Wolfram's MatrixFunction documentation](https://reference.wolfram.com/language/ref/MatrixFunction.html) includes Jordan-chain examples and derivative requirements. The investigations and proofs here are independently developed; the workshop embeds no Mathematica runtime. Exact rational arithmetic certifies these declared operators, not a Jordan structure inferred from approximate measurements.
`;export{e as default};