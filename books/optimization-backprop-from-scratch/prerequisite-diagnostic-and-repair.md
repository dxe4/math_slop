
# Prerequisite Diagnostic and Repair Routes

This diagnostic is a routing tool, not an entrance examination. Work without software first, mark uncertainty honestly, and then use the answer notes to choose a repair route. A wrong answer identifies a skill to practice; it does not predict whether you can learn the subject.

## How to use the diagnostic

Allow about sixty minutes. For each question record `secure`, `partial`, or `not yet`. Show shapes and intermediate steps. A correct unexplained guess is partial because later chapters depend on reasoning that can be audited.

Questions 1–4 test algebra and functions, 5–9 test vectors and shapes, 10–14 test calculus, 15–18 test finite probability and averages, and 19–24 test computational and evidence reasoning. Answers follow the questions so that the diagnostic is usable offline.

## A. Algebra and functions

1. Solve $3(2x-1)=5x+7$ and check the result by substitution.

2. Complete the square in $q(w)=2w^{2}-8w+11$. State its minimizer and minimum value.

3. Let $f(x)=2x-1$ and $g(x)=x^{2}$. Compute $g(f(3))$ and give a formula for $g\circ f$.

4. The function $s(t)=1/(1+\exp\left(-t\right))$ is increasing. Without evaluating decimals, order $s(-2)$, $s(0)$, and $s(3)$, and compute $s(0)$.

## B. Vectors, matrices, and shapes

5. For $x=(1,-2,3)^{\top}$ and $w=(2,0,-1)^{\top}$, compute $w^{\top} x$ and $\lVert x\rVert_{2}^{2}$.

6. A matrix $W$ has shape $4\times 3$, $x$ has shape $3\times 1$, and $b$ has shape $4\times 1$. Give the shapes of $Wx$, $Wx+b$, and $x^{\top} W$ if each expression is defined.

7. Let
   $A=\begin{bmatrix}1 & 2 \\ 0 & 1\end{bmatrix}$ and $v=(3,-1)^{\top}$. Compute $Av$. Then explain in one sentence why matrix multiplication is not entrywise multiplication.

8. A data matrix $X$ stores $n$ cases as rows and $d$ features as columns. A dense layer has $m$ outputs and weight matrix $W\in \mathbb{R}^{m\times d}$. Write the batch expression and its shape.

9. Find the scalar $c$ minimizing $(c-1)^{2}+(c-5)^{2}+(c-6)^{2}$. Explain its geometric or averaging meaning.

## C. Derivatives and local approximation

10. Differentiate $(\frac{1}{2})(wx-y)^{2}$ with respect to $w$, treating $x$ and $y$ as constants.

11. If $z=wx+b$, $a=\tanh\left(z\right)$, and $L=(\frac{1}{2})(a-y)^{2}$, express $dL/dw$ as a product of local derivatives.

12. Let $F(w_{1},w_{2})=w_{1}^{2}+3w_{1}w_{2}$. Compute its gradient and evaluate the directional derivative at $(1,2)$ in direction $(2,-1)$.

13. The approximation $f(x+h)\approx f(x)+f'(x)h$ is local. Give one reason a large step can invalidate a prediction based on it even when $f'(x)$ is computed exactly.

14. The absolute-value function is not differentiable at zero. Compute the right and left difference-quotient limits there.

## D. Finite probability, averages, and sampling

15. A uniformly selected index $I$ takes values $1,2,3,4$, and losses are $(0,2,2,4)$. Compute $\mathbb{E}[L_{I}]$ and the finite average.

16. A mini-batch contains indices $(2,4)$ from the losses above. Compute its mean loss. Does this one value equal the full mean? Is the uniformly sampled mini-batch mean unbiased for the full mean?

17. If an event occurs with probability $0.2$ independently on each of two trials, compute the probability it occurs at least once. State where independence entered.

18. Explain the distinction between a random variable, its expectation, and one observed realization using a six-sided die as the example.

## E. Programs, numerics, and evidence

19. A program computes $u=x\cdot x$, $v=u+u$, and returns $v$. If reverse mode sends adjoint $1$ into $v$, why must the two branches into $u$ be added rather than one overwritten?

20. Central differences approximate $f'(x)$ by $[f(x+h)-f(x-h)]/(2h)$. Why can making $h$ arbitrarily small worsen the result in floating-point arithmetic?

21. A model obtains lower training loss after adding an identifier unique to each row. Give one reason this does not demonstrate better prediction on new cases.

22. A preprocessing mean was computed using all rows before the train/test split. Name the data-boundary defect and say what should happen instead.

23. A gradient checker passes at ten randomly sampled parameter vectors. State one claim this supports and two claims it does not establish.

24. A classifier outputs $0.7$ for one case and predicts the positive class at threshold $0.5$. Separate the score, the action rule, and any claim that $0.7$ is a calibrated probability.

## Answer notes

1. Expanding gives $6x-3=5x+7$, hence $x=10$. Substitution gives $57=57$.

2. $q(w)=2(w-2)^{2}+3$, so the minimizer is $w=2$ and the minimum is $3$.

3. $f(3)=5$, so $g(f(3))=25$; $(g\circ f)(x)=(2x-1)^{2}$.

4. Monotonicity gives $s(-2)<s(0)<s(3)$, and $s(0)=\frac{1}{2}$.

5. $w^{\top}x=2(1)+0(-2)-1(3)=-1$, while $\lVert x\rVert_{2}^{2}=1+4+9=14$.

6. $Wx$ and $Wx+b$ are $4\times 1$. The product $x^{\top}W$ is not defined: its inner dimensions would be $3$ and $4$. The valid transpose-oriented product is $x^{\top} W^{\top}$, of shape $1\times 4$.

7. $Av=(1,-1)^{\top}$. Matrix multiplication forms weighted sums along matching inner axes; it is a composition of linear maps, not componentwise pairing.

8. With row batches, $XW^{\top}+1b^{\top}$ has shape $n\times m$. The all-ones column broadcasts the same bias to each case, and writing it explicitly identifies the reduction that the reverse pass must perform.

9. Differentiating gives $2(c-1)+2(c-5)+2(c-6)=6c-24$, so $c=4$. It is the arithmetic mean and the orthogonal projection of the target vector onto the constant vectors.

10. The derivative is $(wx-y)x$. The factor $\frac{1}{2}$ cancels the outer derivative $2(wx-y)$.

11. $dL/dw=(a-y)(1-\tanh^{2}(z))x$. The product order records the path $w\to z\to a\to L$.

12. $\nabla F=(2w_{1}+3w_{2},3w_{1})^{\top}$, hence $\nabla F(1,2)=(8,3)^{\top}$. The directional derivative in $(2,-1)$ is $(8,3)\cdot (2,-1)=13$.

13. The omitted remainder can grow with $h$; equivalently, the derivative can change substantially between $x$ and $x+h$. Exact local slope is not a global linear model.

14. The right limit is $1$ and the left limit is $-1$, so no single derivative exists.

15. Both the expectation under uniform index sampling and the finite average are $(0+2+2+4)/4=2$.

16. The batch mean is $(2+4)/2=3$, not the full mean. Under a declared uniform sampling design, with the usual conditions on replacement or symmetric subset sampling, its expectation is the full finite mean. Unbiasedness concerns repeated sampling, not equality in every realized batch.

17. The complement has probability $(1-0.2)^{2}=0.64$, so the answer is $0.36$. Independence justifies multiplying the two non-occurrence probabilities.

18. The die result $D$ is the random variable under a specified experiment, $\mathbb{E}[D]=3.5$ is a law-weighted average, and an observed $D=6$ is one realization. They are different object types.

19. $v$ depends twice on $u$. The total derivative contains both path contributions, so $u$ receives adjoint $1+1=2$. Overwriting loses one dependency path.

20. Subtraction of nearly equal floating numbers loses significant digits, while rounding error is magnified by division by $h$. Truncation error decreases at first, but rounding eventually dominates.

21. The identifier can permit memorization without a stable relationship to an unseen case. Training loss measures fit on observed rows, not generalization.

22. This is preprocessing leakage. Split first, fit the mean on training rows only, store it as frozen state, and apply that state unchanged to validation, test, and deployment cases.

23. It supports agreement between the tested implementation and the finite-difference oracle at those points within stated tolerances. It does not prove correctness on all inputs, and it does not establish optimization convergence or predictive generalization. It also cannot show that the loss represents the intended task.

24. $0.7$ is a numerical score. The threshold rule maps that score to the positive action. Calling it a probability requires a probabilistic interpretation of the training objective and calibration evidence under a named target distribution; the number alone supplies neither.

## Repair routes

If Questions 1–4 were difficult, review algebraic expressions, equations, function composition, exponentials, and logarithms before relying on compact symbolic derivations. Work small examples by hand and verify by substitution.

If Questions 5–9 were difficult, begin with Chapters 2–3. Say every matrix shape aloud, draw an arrow $\text{input dimension} \to \text{output dimension}$, and reject an expression before computing when its inner dimensions disagree. The companion linear-algebra volume gives a deeper proof route through vector spaces, rank, projections, and factorizations.

If Questions 10–14 were difficult, review one-variable derivatives and the chain rule, then read Chapters 5–6 before automatic differentiation. Practice differentiating with differentials: write the change in each intermediate variable and substitute forward. Do not memorize a table of matrix gradients without deriving at least one instance.

If Questions 15–18 were difficult, read Chapter 4 slowly. For every average, write whether the index set is fixed or sampled and name the weighting law. The probability volume supplies the fuller route through random variables, expectation, conditioning, and convergence.

If Questions 19–24 were difficult, do not interpret them as mere programming gaps. Read Chapters 1, 7–9, and 20. Trace tiny graphs on paper, compare exact and floating results, and maintain separate ledgers for code correctness, optimization behavior, and statistical evidence.

Two or more `not yet` marks in a section suggest taking its repair route before depending on it. A mix of `partial` marks usually means you can continue while doing the relevant chapter exercises. Re-run the diagnostic after the first four chapters and record which reasoning, not merely which answers, became secure.

