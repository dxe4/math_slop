var e=`---
id: visual-lab-parameter-systems
title: "Parameters, Rank, and Complete Solution Sets"
level: undergraduate
estimated_minutes: 90
license: CC BY-SA 4.0
---

# Parameters, rank, and complete solution sets

Two equations in three unknowns suggest a line of solutions. They can also describe a plane, or have no common solution. The difference may depend on one exact parameter value. This investigation connects elimination to the kernel and image of a linear map, then asks whether a symbolic answer has covered every case.

You need substitution, fractions, matrix multiplication, span, and linear independence. No calculus is required. Use [Unit 1 of the linear algebra course](#/item/course-linear-algebra-standard) for elimination and Units 3–4 for maps and fibers. The [symbolic algebra workflow](#/item/deep-dive-symbolic-algebra-forms-workflow) explains why restrictions belong beside a formula.

Plan 15 minutes for predictions and the instrument, 25 for the arguments, and 50 for the six tasks. Work over $\\mathbb R$ throughout; parameters and free variables are real.

## Guided investigation: predict before computing

Consider

$$
x+y+z=1,\\qquad x+ay+z=b.
$$

Before opening the [live laboratory](#/labs?lab=visual-lab-parameter-systems), classify $(a,b)=(2,3),(1,1),(1,2)$. Predict whether each solution set is a line, a plane, a point, or empty. Write one reason for each prediction. Then calculate a complete set of solutions, rather than one triple that happens to work.

The instrument accepts exact integer, fraction, or finite-decimal text, with at most 60 characters per entry. Scientific notation is outside its input format: enter \`1/1000\` or \`0.001\`, rather than \`1e-3\`. Fractions must have nonzero denominators. Entered decimals are treated as their exact rational values. Thus \`1.0001\` differs from \`1\`, however similar they look when rounded. All essential evidence is available in text and tables; a drawing is not needed to determine consistency.

Compare the displayed original and reduced equations, rank, kernel, and solution set with your predictions. When they disagree, revise the explanation as well as the answer. The instrument calculates this family at selected rational parameters; the arguments below cover every real parameter value.

Keyboard access uses native controls: Tab to the parameter fields, prediction
select, and comparison button; arrow keys change a focused select. The logical
branch diagram and exact data table have keyboard-scrollable regions on narrow
screens. Every diagram conclusion also appears in text. The optional written
notes stay in this mounted session and are not graded or saved after leaving
the lab; copy them to your own notebook to retain them. There is no animation.

## Subtract before dividing

Subtract the first equation from the second:

$$
\\begin{aligned}
x+y+z&=1,\\\\
(a-1)y&=b-1.
\\end{aligned}
$$

This operation is reversible for every $a,b$: adding the first equation back recovers the second original equation. No case has been lost. Dividing the second equation by $a-1$ is reversible only when $a\\ne1$. That condition creates a branch.

If $a\\ne1$, put $q=(b-1)/(a-1)$. Then $y=q$, while $z=t$ is arbitrary and $x=1-q-t$. The complete solution set is

$$
(x,y,z)=(1-q,q,0)+t(-1,0,1),\\qquad t\\in\\mathbb R.
$$

For $a=2,b=3$, this becomes $(-1,2,0)+t(-1,0,1)$. Substitution verifies every member. Conversely, the reduced equations force every solution to have this form. Both directions matter: checking a proposed family establishes that its members work, but does not by itself establish completeness.

If $a=1$, the reduced second equation is $0=b-1$. For $b=1$ it imposes no new restriction, giving

$$
(x,y,z)=(1,0,0)+s(-1,1,0)+t(-1,0,1).
$$

For $b\\ne1$ it is a contradiction, so the solution set is empty. An undefined quotient at $a=1$ settles neither of these alternatives; the original equations do.

## The kernel belongs to the map

Write the system as $A_av=w_b$, where

$$
A_a=\\begin{pmatrix}1&1&1\\\\1&a&1\\end{pmatrix},
\\qquad v=\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix},
\\qquad w_b=\\begin{pmatrix}1\\\\b\\end{pmatrix}.
$$

The map is $A_a:\\mathbb R^3\\to\\mathbb R^2$. Its kernel consists of inputs giving output zero, so calculate it with a zero right-hand side. When $a\\ne1$, subtraction forces $y=0$ and $x=-z$:

$$\\ker A_a=\\operatorname{span}\\{(-1,0,1)\\}.$$

When $a=1$, only $x+y+z=0$ remains, and

$$\\ker A_1=\\operatorname{span}\\{(-1,1,0),(-1,0,1)\\}.$$

The two displayed vectors are independent: the second coordinate of a zero linear combination forces its first coefficient to vanish, and the third forces its second coefficient to vanish. Thus nullity is 1 for $a\\ne1$ and 2 for $a=1$. Rank–nullity gives ranks 2 and 1 respectively. Changing $b$ changes the requested output, not the map or its kernel.

A **fiber** is the set of all inputs giving one specified output. If $A_av_0=w_b$, then

$$
A_av=w_b\\quad\\Longleftrightarrow\\quad A_a(v-v_0)=0
\\quad\\Longleftrightarrow\\quad v\\in v_0+\\ker A_a.
$$

This proves that every nonempty fiber is a translate of the kernel. Our fibers contain no zero vector, because their first equation has right-hand side 1, so they are not vector subspaces. The empty fiber at $a=1,b=2$ does not make the kernel disappear: the homogeneous system still has its two-dimensional kernel. A dimension for a nonempty affine fiber must not be assigned to an empty solution set.

## The image decides existence

To find the whole image, replace $(1,b)$ by an arbitrary output $(u,v)$. The equations become $x+y+z=u$ and $x+ay+z=v$. For $a\\ne1$, choose $y=(v-u)/(a-1)$, $z=0$, and $x=u-y$. Every output is reached, so $\\operatorname{im}A_a=\\mathbb R^2$.

At $a=1$, every output has two equal entries. Conversely, $(u,0,0)$ maps to $(u,u)$. Hence

$$\\operatorname{im}A_1=\\operatorname{span}\\{(1,1)\\}.$$

The vector $\\ell=(-1,1)$ lies in the **left null space**, meaning $\\ell^{\\mathsf T}A_1=0$. If $A_1v=w_b$ had a solution, multiplying by $\\ell^{\\mathsf T}$ would give $0=b-1$. A nonzero $b-1$ therefore certifies impossibility with one exact equality. Here that compatibility condition is also sufficient, as the plane formula shows. [MIT's lecture on the four fundamental subspaces](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-10-the-four-fundamental-subspaces/) develops these linked input and output spaces.

For $a=1,b\\ne1$, the coefficient matrix has rank 1 but the augmented matrix $[A_a\\mid w_b]$ has rank 2. A nonzero reduced row $[0\\ 0\\ 0\\mid b-1]$ records the contradiction. For consistent systems the two ranks agree.

## Close parameters can give large changes

Fix $b=2$ and take $a=1+\\varepsilon$, $\\varepsilon\\ne0$. Then $y=1/\\varepsilon$. Choosing $\\varepsilon=1/10,1/100,1/1000$ gives $y=10,100,1000$. Every system still has rank 2 and a line of solutions. At exactly $a=1,b=2$, the system becomes inconsistent.

Now approach along $b=1+3(a-1)$. For every $a\\ne1$, $y=3$ and the fiber is the same line $(-2,3,0)+t(-1,0,1)$. At $a=1,b=1$, the fiber is an entire plane, which contains this line. The path of right-hand sides matters. Substituting $a=1$ into a quotient with denominator $a-1$ cannot recover the exceptional plane.

Exact rank describes the entered mathematical matrix. If an entry represents a measurement with uncertainty, whether it equals 1 is an additional modeling question. Exact rational arithmetic does not remove that uncertainty, and a small nonzero pivot does not equal a zero pivot.

## Compare a symbolic computation

Wolfram's documentation distinguishes [Solve](https://reference.wolfram.com/language/ref/Solve.html), which normally gives generic parameter solutions, from [Reduce](https://reference.wolfram.com/language/ref/Reduce.html), which represents the conditions defining a solution set. These commands have not been executed for this lesson; the laboratory has no Mathematica runtime. They are optional instructions for a separate Wolfram Language session:

\`\`\`wolfram
Clear[a, b, x, y, z];
eqns = x + y + z == 1 && x + a y + z == b;
Solve[eqns, {x, y, z}, Reals]
Reduce[eqns, {x, y, z}, Reals]
Reduce[eqns /. a -> 1, {x, y, z}, Reals]
Reduce[eqns /. {a -> 1, b -> 1}, {x, y, z}, Reals]
Reduce[eqns /. {a -> 1, b -> 2}, {x, y, z}, Reals]
\`\`\`

Compare logical branches rather than printed formatting. Require the same three cases derived above, with every free variable unrestricted over the reals. A generic formula can correctly describe its branch while leaving your classification unfinished. The hand proof supplies the conditions and completeness argument independently of software.

## Six exercises

Attempt all six before reading the solutions.

1. **Classify and check.** For $(a,b)=(2,3),(1,1),(1,2)$, give coefficient rank, augmented rank, kernel dimension, and the complete solution set. Check one solution in each nonempty case. **Hint:** distinguish the coefficient matrix from its augmented column.
2. **Prove completeness.** Someone reports just $(1-q,q,0)$ for $a\\ne1$. Explain what is missing and prove the full fiber formula in both directions. **Hint:** subtract a known solution.
3. **Certify impossibility.** At $a=1$, give an input producing $(7,7)$ and a left-null certificate excluding $(7,8)$. Explain why these statements concern outputs in $\\mathbb R^2$. **Hint:** use $(-1,1)$.
4. **Compare approaches.** Calculate the fibers for $a=1+1/1000$ with $b=2$ and with $b=1+3/1000$. Classify the system at the endpoint of each path. **Hint:** the endpoints have different $b$ values.
5. **Transfer to a changed family.** Independently classify all real parameters in

   $$x+y+z=1,\\qquad x+ay+z=b,\\qquad x+y+cz=d.$$

   Give every consistency condition, coefficient rank, nullity, and complete nonempty fiber. **Hint:** subtract the first equation from each of the others before dividing. Both $a=1$ and $c=1$ need branches.
6. **Audit a proposed solution.** A report gives $y=(b-1)/(a-1)$ for the original family, tests three values with $a\\ne1$, and concludes that the system always has a line of solutions. Identify the logical gap and write a corrected complete conclusion. **Hint:** successful substitutions cannot justify division by zero.

## Solutions

### Task 1

At $(2,3)$ the ranks are 2 and 2, nullity is 1, and the fiber is $(-1,2,0)+t(-1,0,1)$. The triple $(-1,2,0)$ gives $-1+2=1$ and $-1+4=3$. At $(1,1)$ the ranks are 1 and 1, nullity is 2, and the fiber is $(1,0,0)+s(-1,1,0)+t(-1,0,1)$; $(1,0,0)$ satisfies both equations. At $(1,2)$ the ranks are 1 and 2, nullity remains 2, and the fiber is empty.

### Task 2

The reported triple is one particular solution. Adding $t(-1,0,1)$ keeps both outputs unchanged because that direction lies in the kernel. Conversely, any solution has $y=q$ and $x+z=1-q$. Taking $t=z$ forces $x=1-q-t$. This proves that the line includes all and only the solutions.

### Task 3

$A_1(7,0,0)=(7,7)$. But $\\ell^{\\mathsf T}(7,8)=1$, whereas $\\ell^{\\mathsf T}A_1v=0$ for every input $v$. Thus $(7,8)$ is unattainable. The kernel is a subset of the three-dimensional input space; these requested outputs and the left-null vector belong to the two-dimensional output space.

### Task 4

The first fiber is $(-999,1000,0)+t(-1,0,1)$ and its endpoint $(a,b)=(1,2)$ is inconsistent. The second is $(-2,3,0)+t(-1,0,1)$ and its endpoint $(1,1)$ has the two-parameter plane fiber. Both nearby matrices have rank 2. Neither endpoint classification follows by declaring a small pivot zero.

### Task 5

The reversible reduction gives

$$x+y+z=1,\\qquad (a-1)y=b-1,\\qquad(c-1)z=d-1.$$

When defined below, set $q=(b-1)/(a-1)$ and $r=(d-1)/(c-1)$.

| Parameter branch | Consistency | Rank and nullity | Complete fiber when consistent |
| --- | --- | --- | --- |
| $a\\ne1,c\\ne1$ | Every $b,d$ | Rank 3, nullity 0 | The single point $(1-q-r,q,r)$ |
| $a=1,c\\ne1$ | Exactly $b=1$ | Rank 2, nullity 1 | $(1-r,0,r)+s(-1,1,0)$ |
| $a\\ne1,c=1$ | Exactly $d=1$ | Rank 2, nullity 1 | $(1-q,q,0)+t(-1,0,1)$ |
| $a=1,c=1$ | Exactly $b=d=1$ | Rank 1, nullity 2 | $(1,0,0)+s(-1,1,0)+t(-1,0,1)$ |

All free parameters range over $\\mathbb R$. In each consistent branch, the displayed directions form a kernel basis; the first branch has kernel $\\{0\\}$. For every inconsistent choice, the fiber is empty and the coefficient rank and nullity remain those of its row in the table. Augmented rank is then coefficient rank plus 1: all contradictory reduced rows occupy the same added column. In consistent branches the ranks agree. Substitution verifies the displayed sets; the three reduced equations force every solution into the corresponding set, proving completeness.

### Task 6

The tests explore only the branch permitting division by $a-1$. They establish no claim at $a=1$, and three tested values do not prove a statement for every $a\\ne1$. The corrected conclusion is: for $a\\ne1$ there is the line derived from reversible elimination; for $a=1,b=1$ there is the plane; for $a=1,b\\ne1$ there is no solution. State the scalar domain and all free parameters with this conclusion.

## What to carry into another system

Retain the method: reversible elimination, conditions before division, a kernel calculation independent of the right-hand side, and a proof that the reported set is complete. The specific exceptional values and directions belong to these families; find them again when coefficients change. The laboratory does not provide a general symbolic solver or resolve measurement uncertainty. Continue with the course's polynomial-map bridge to recognize the same kernel, image, and fiber arguments without coordinate triples.
`;export{e as default};