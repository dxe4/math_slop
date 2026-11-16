# Hints for fitted predictive checks

Try [practice](./predictive_check_v1-practice.md) before opening these hints. [Worked answers](./predictive_check_v1-answers.md) give complete calculations. The numbers follow the same six-task route; task 6 is optional.

## 1 Predict the two reference events

The ordinary replicate fixes the two block lengths and averages over the fitted uncertainty in one common $p$. The sufficient-total reference additionally fixes the replicated total. An extreme contrast for two blocks of size two requires one block to contain two successes and the other none.

For a repeated-data guarantee, generate a new observed dataset and refit its posterior each time. The reference used inside a check and the sampling experiment used to evaluate the resulting checking procedure are different levels of calculation.

## 2 Derive the shared-parameter predictive tail

The conditional joint count probability contains one factor $p^{x+z}(1-p)^{m_1+m_2-x-z}$. Multiply by the Beta density and recognize a Beta integral. The binomial coefficients remain outside the integral. Averaging a product over one shared $p$ is generally different from multiplying two averages over separate draws.

For the ordinary extreme event there are only two count pairs. For the conditional calculation, count arrangements with $x$ successes among the first two positions and $2-x$ among the second two. Divide by the number of four-position arrangements with two successes. Ask whether the total itself remains part of the question.

## 3 Derive the fitted check's entire sampling law

For $T=1$, the observed total must be one or three. At total one, use Beta$(2,4)$ and subtract the predictive diagonal pairs $(0,0),(1,1),(2,2)$ from one. The middle pair's count multiplicity is four. A weak upper tail at zero is always one because the discrepancy is nonnegative.

There are two extreme strings. The $T=1$ strings have either one or three successes; count each total separately. The $T=0$ group includes the all-zero string, the all-one string, and four strings with one success in each block. At general $p$, weight a string by $p^S(1-p)^{4-S}$.

To average over the uniform truth distribution, integrate each probability from zero to one. The supplied positive-integer Beta identity keeps the result rational. For the 10% threshold, locate $1/10$ between the three possible fitted-tail values before summing any masses.

## 4 Establish the conditional guarantee and its limit

Weak-tail values are cumulative masses $c_j$. Among the classes with $c_j\le\alpha$, the total mass is the largest included $c_j$, or zero if none qualifies. Under the iid null, observed strings with the same total are exchangeable and equally likely, just like the conditional reference strings.

For $S=0$ or four the discrepancy is constant. It is also constant for $S=1$ or three. At $S=2$, compare the two extreme arrangements with the four balanced arrangements. Check the smallest attainable tail before interpreting a 10% rule.

## 5 Independently transfer to unequal blocks

The proportion contrast is $|A/3-B/7|$. The observed second-block count is one, so the total is four. Add these new success and failure totals to the fresh uniform prior.

For each $x\in\{0,1,2,3\}$ solve the inequality $|7x-3z|\ge18$ over integer $0\le z\le7$. This short row-by-row search guards against missing an extreme count pair. Each pair has multiplicity $\binom3x\binom7z$ in the predictive integral.

For the conditional law use $z=4-x$ and denominator $\binom{10}4$. The four possible first-block counts need not have equal weights. Evaluate the conditional discrepancy at each supported count rather than reusing the ordinary event set without its total restriction.

## 6 Optional advanced: randomize ties in two different references

For a fixed conditional reference, the strict upper tail at $t_j$ is $c_{j-1}$ and its tie mass is $w_j$. The randomized result therefore occupies $[c_{j-1},c_j]$. Its conditional mixture weight is also $w_j$. Boundary points have zero probability under the continuous uniform draw.

For the fitted predictive reference, $T=2$ has strict tail zero. For $T=1$, use Beta$(2,4)$: the strict tail includes only the two pairs with contrast two; its weak tail was found in task 3. For $T=0$, the strict tail is one minus the predictive diagonal mass. Totals zero/four use Beta$(1,5)$/Beta$(5,1)$, while total two uses Beta$(3,3)$.

For a uniform interval $[l,h]$, the fraction at or below $1/10$ is zero if $1/10\le l$, one if $1/10\ge h$, and $(1/10-l)/(h-l)$ otherwise. Weight this fraction by the observed class mass from the chosen ensemble. Do not confuse an interval's posterior predictive tie mass with the probability that repeated observed data land in that class.
